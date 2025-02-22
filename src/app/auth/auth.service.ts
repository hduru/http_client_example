import { Injectable } from '@angular/core';
import { LoginDto } from './login-form/models/loginDto.model';
import { Observable } from 'rxjs';
import { BaseService } from '../infrastructure/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor() {
    super();
  }

  getJWT(): string | undefined {
    return localStorage.getItem("jwt")??undefined;
  }

  setJWT(item: string) {
    localStorage.setItem("jwt", item);
  }

  isLogin():boolean {
    return this.getJWT() != undefined;
  }

  login(body: LoginDto): Observable<any> {
    return this.httpClient.post<string>('api/account/login', body); 
  }
}
