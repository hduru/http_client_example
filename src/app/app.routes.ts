import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'todos/list', loadComponent: () => import('./todos/todo-list/todo-list.component').then(m => m.TodoListComponent) } //Lazy load
];
