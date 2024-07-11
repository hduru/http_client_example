import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TodoService } from '../todo.service';
import { Todos } from './models/todos.model';
import { BaseColumns } from '../../models/baseColumns.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {

  _todoService: TodoService;
  todos: Todos[] = [];
  cols: BaseColumns[] = [];

  constructor() {
    this._todoService = inject(TodoService);

    this.cols = [
      { header: 'Title', field: 'title' },
      { header: 'Completed', field: 'completed'}
    ]

  }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this._todoService.getTodos().subscribe(response => {
      console.log("response", response)
      if(response) {
         this.todos = response as unknown as Todos[];
      } 
    })
  }

}
