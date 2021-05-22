import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  @ViewChild('myForm') myForm? :NgForm;

  defaultCourse = 'React';
  defaultGender = 'Female';
  username = "";
  genders = [
    {id:1, value:"Male"},
    {id:2, value:"Female"}
  ];
  submitted = false;
  formData = {
    username:'',
    email:'',
    course:'',
    gender:''
  };

  myReactiveForm?: FormGroup;

  constructor() {
  
   }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl(null),
      'course' : new FormControl(null),
      'gender' : new FormControl(null)
    })
  }
onSubmit(){
  console.log(this.myForm)
  this.submitted = true
  this.formData.username = this.myForm?.value.userDetails.username;
  this.formData.email = this.myForm?.value.userDetails.email;
  this.formData.course = this.myForm?.value.course;
  this.formData.gender = this.myForm?.value.gender;

  this.myForm?.reset();
}

setUsername(){
  // this.myForm?.setValue({
  //   userDetails: {
  //     username: 'Manali',
  //     email: '',
  //   } ,
  //   course:'React',
  //   gender:'Female'
  // })
  this.myForm?.form.patchValue({
    userDetails: {
          username: 'Manali',
         }
  })
}

}
