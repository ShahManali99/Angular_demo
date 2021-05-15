import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public employeeId:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let age = this.route.snapshot.paramMap.get('name')  || '{}'
    this.employeeId = age;
  }

}
