import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  isDisabled = false;
  myId = 'testId';
  myString = 'I like web development';
  courses = [1,2];

  buttonClick(){
    alert("You clicked Me");
  }
}
