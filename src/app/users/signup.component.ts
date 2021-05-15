import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public employees:any = [];
  constructor(private _demoService:DemoService, private router:Router) { }

  ngOnInit(): void {
    this.employees = this._demoService.getEmployees();
    //this.employees.employee().subscribe(employeeData => this.employees = employeeData)
  }

  onSelect(employee: any){
    this.router.navigate(['/users/signup', employee.name])
  }

}
