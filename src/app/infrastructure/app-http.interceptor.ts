import { HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';
import { AppConfig } from './app-config';


//Birden fazla interceptor olabilir
//next ile bir sonraki interceptor çağırılır
//interceptor bir ara kesicidir
//next ile requesti dönmek zorunludur

//Bu bir function olduğu için bir constructor'ı yok, bu yüzden bir servisi inject ifadesi ile alacağız

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {

  const authService: AuthService = inject(AuthService);
  let appConfig: AppConfig = inject(AppConfig);

  let token = authService.getJWT();

  let _headers: HttpHeaders = new HttpHeaders(); //let tanımladığın değişkene this olarak erişemezsin, let demek yalnızda tanımladığın fonksiyon içinde kullanılacak demek
  let _responseType: 'arraybuffer' | 'blob' | 'json' | 'text' = 'json';
  let _url: string = req.url;
  let reqClone: HttpRequest<any>;

  if (token) {
    _headers.set("Authorization", `Bearer ${token}`);
  }

  if(!req.url.includes('http')) {
    _url = appConfig.baseUrl + req.url;
  }


  //check XSRF token

  reqClone = req.clone({
    responseType: _responseType,
    headers : _headers,
    url: _url
  })

  return next(reqClone);
};
