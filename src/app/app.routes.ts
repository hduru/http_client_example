import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { authGuard } from './infrastructure/guards/auth.guard';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./auth/login-form/login-form.component').then(m => m.LoginFormComponent) },
    {
        path: '', component: LayoutComponent, canActivate: [authGuard], children: [
            { path: 'todos/list', loadComponent: () => import('./todos/todo-list/todo-list.component').then(m => m.TodoListComponent) } //Lazy load
        ]
    }
];
