import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  let _authService: AuthService = inject(AuthService);
  let _router: Router = inject(Router);

  let url = state.url;

  //check login
  if(!_authService.isLogin()) {
    _router.navigate(['login']);

    return false;
  }
  
  if(!url || url === ''  || url === '/') {
    return true;
  }

  return true;
};
