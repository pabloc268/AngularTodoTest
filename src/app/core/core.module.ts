import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './Services/todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [
    TodoService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
