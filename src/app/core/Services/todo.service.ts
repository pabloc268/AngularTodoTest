import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToDoModel } from '../models';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'allow': 'GET, POST, PUT, DELETE',
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  endpoint = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getToDoList(): Observable<ToDoModel[]>{
    return this.http.get<ToDoModel[]>(`${this.endpoint}/api/todo`);
  }

  createToDo(todo: ToDoModel) {
    return this.http.post(`${this.endpoint}/api/todo`, JSON.stringify(todo), httOptions);
  }

  updateToDo(todo: ToDoModel){
    return this.http.put(`${this.endpoint}/api/todo?id=${todo.id}`, JSON.stringify(todo), httOptions);
  }

  deleteToDo(id: string) {
    return this.http.delete(`${this.endpoint}/api/todo?id=${id}`, httOptions);
  }
}
