import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userArray = []
  
  constructor() { }
      
  ngOnInit(): void {
    this.addExampleUsersToArray();
  }
  addExampleUsersToArray()
  {
    let user1 = new User("Alice", "aaa");
    let user2 = new User("John", "bbb");
    let user3 = new User("Mark", "ccc");
    let user4 = new User("Ana", "ddd");
    let user5 = new User("John", "eee");
    let user6 = new User("Lee", "fff");
    this.userArray.push(user1);
    this.userArray.push(user2);
    this.userArray.push(user3);
    this.userArray.push(user4);
    this.userArray.push(user5);
    this.userArray.push(user6);
    console.log("Adding example users to array");

  }
  
}

class User {
  username: string;
  password: string;


  constructor(user: string, pass: string){
    this.username = user;
    this.password = pass;
  }


}
