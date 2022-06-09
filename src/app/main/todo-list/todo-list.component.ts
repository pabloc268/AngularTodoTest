import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDoModel } from 'src/app/core/models';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  @Input() list: ToDoModel[];
  @Output() deleteToDo: EventEmitter<string> = new EventEmitter();
  @Output() updateToDo: EventEmitter<ToDoModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(id: string){
    this.deleteToDo.emit(id);
  }

  updateToDoItem(todo: ToDoModel){
    this.updateToDo.emit(todo);
  }

}
