import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/Services/todo.service';
import { ToDoModel } from 'src/app/core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  toDoList = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getToDoList();
  }

  getToDoList() {
    this.todoService.getToDoList().subscribe(res => {
      this.toDoList = res;
    })
  }

  createToDo(todo: ToDoModel){
    this.todoService.createToDo(todo).subscribe((res) => {
      this.getToDoList();
    })
  }

  deleteToDo(id: string){
    this.todoService.deleteToDo(id).subscribe(res => {
      this.getToDoList();
    })
  }

  updateToDo(todo: ToDoModel){
    this.todoService.updateToDo(todo).subscribe(res => {
      this.getToDoList();
    })
  }

}
