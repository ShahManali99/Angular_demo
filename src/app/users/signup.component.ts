import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public employees:any = [];
  constructor(private _demoService:DemoService) { }

  ngOnInit(): void {
    this.employees = this._demoService.getEmployees();
  }

}
