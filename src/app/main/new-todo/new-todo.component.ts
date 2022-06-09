import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { ToDoModel } from 'src/app/core/models';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.sass']
})
export class NewTodoComponent implements OnInit {

  @Output() createToDo: EventEmitter<ToDoModel> = new EventEmitter();
  @ViewChild('myForm') myForm: NgForm;

  newToDo: ToDoModel = new ToDoModel();
  toDoForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.toDoForm = this.formBuilder.group({
      description: ['', [Validators.required]]
    })
  }

  sendToDo() {
    if(this.toDoForm.valid){
      this.newToDo.description = this.toDoForm.controls.description.value;
      this.newToDo.date = new Date().toISOString();
      this.newToDo.completed = false;
      this.createToDo.emit(this.newToDo);
      this.toDoForm.reset();
      this.myForm.resetForm();
    }else{
      this.toDoForm.markAllAsTouched();
    }
  }

}
