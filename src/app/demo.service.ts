import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1,"name": "Mana","age": 21},
      {"id": 2,"name": "Manas","age": 20},
      {"id": 3,"name": "Mani","age": 19}
    ];
  }
}
 