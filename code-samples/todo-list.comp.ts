mport { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos : any;
  some-img : string = "my-image";
  constructor(private todoService : TodoDataService) {
    this.todos = this.todoService.getTodos();
  }
  todoStatus(todo){
    return todo.done ? "complete" : "incomplete";
  }
  doneTodo(todo){
    todo.done = !todo.done;
  }
  
  ngOnInit() {
  }
}