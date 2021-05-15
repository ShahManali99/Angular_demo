import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  //url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  getEmployees(){
    return [
      {"id": 1,"name": "Mana","age": 21},
      {"id": 2,"name": "Manas","age": 20},
      {"id": 3,"name": "Mani","age": 19}
    ];
  }

  // employee(): Observable<any>{
  //   return this.http.get(this.url);
  // }

alertMe(){
  alert("Hi")
}



}
 