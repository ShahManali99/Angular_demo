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
  viewmode = 'home';
  name = {
    first:'John',
    last:'Smith',
  };
  names = [
            {id:1, name:"Manali"},
            {id:2, name:"Mana"},
            {id:3, name:"Mani"}
          ];

  buttonClick(){
    alert("You clicked Me");
  }

  onAdd(){
  this.names.push({id:4,name:"Manas"})
  }  

  onRemove(nam:any){
    let index = this.names.indexOf(nam);
    this.names.splice(index,1);
  }
  onUpdate(nam:any){
    nam.id=5;
  }

  onClick(event: any){
    console.log(event.type);
  }

  toggle(){
    this.isDisabled=!this.isDisabled;
  }
}
