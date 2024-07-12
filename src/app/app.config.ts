import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { AppConfig } from './infrastructure/app-config';
import { environment } from '../environments/environment';
import { appHttpInterceptor } from './infrastructure/app-http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([appHttpInterceptor])),
    {
      provide: AppConfig,
      useValue: environment
    }
  ]
};
