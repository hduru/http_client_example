import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    {path: 'login', loadComponent: () => import('./auth/login-form/login-form.component').then(m => m.LoginFormComponent)},
    {path: '', component: LayoutComponent, children: [
        { path: 'todos/list', loadComponent: () => import('./todos/todo-list/todo-list.component').then(m => m.TodoListComponent) } //Lazy load
    ]}
];
