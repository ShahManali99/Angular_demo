import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public employees:any = [];

  constructor(private _demoService:DemoService) { }

  ngOnInit() {
    this.employees = this._demoService.getEmployees();
  }

}
