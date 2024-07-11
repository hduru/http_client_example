import { HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';


//Birden fazla interceptor olabilir
//next ile bir sonraki interceptor çağırılır
//interceptor bir ara kesicidir
//next ile requesti dönmek zorunludur

//Bu bir function olduğu için bir constructor'ı yok, bu yüzden bir servisi inject ifadesi ile alacağız

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {

  let headers: HttpHeaders = new HttpHeaders(); //let tanımladığın değişkene this olarak erişemezsin, let demek yalnızda tanımladığın fonksiyon içinde kullanılacak demek
  let reqClone: HttpRequest<any>;

  const authService:AuthService = inject(AuthService);

  reqClone = req.clone({

  })

  return next(req);
};
