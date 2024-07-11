import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config';
import { inject } from '@angular/core';

export abstract class BaseService {

  httpClient: HttpClient;
  appConfig: AppConfig;

  constructor() {
    this.httpClient = inject(HttpClient);
    this.appConfig = inject(AppConfig);
  }

}

//Class abstract olduğu için artık injectable değildir, kalıtım alacağız