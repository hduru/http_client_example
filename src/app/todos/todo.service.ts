import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/baseResponse.model';
import { Todos } from './todo-list/models/todos.model';
import { Observable } from 'rxjs';
import { BaseService } from '../infrastructure/base.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  //Observable bir yayın açıyor.
  getTodos(): Observable<BaseResponse<Todos[]>> {
    return this.httpClient.get<BaseResponse<Todos[]>>('https://jsonplaceholder.typicode.com/todos');
  }
}
