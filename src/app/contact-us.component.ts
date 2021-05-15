import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  @ViewChild('myForm') myForm? :NgForm;

  defaultCourse = 'React';
  username = "";

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.myForm)
}
}
