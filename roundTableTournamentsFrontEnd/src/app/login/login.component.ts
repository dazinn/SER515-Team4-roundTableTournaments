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
    this.addUsersToArray();
  }
  addUsersToArray()
  {
    let user1 = new User("TeamDirectorAccount", "aaaa","teamDirector");
    let user2 = new User("RefereeDirectorAccount", "bbbb", "refereeDirector");
    let user3 = new User("TournamentDirectorAccount", "cccc","tournamentDirector");
    let user4 = new User("FieldDirectorAccount", "dddd","fieldDirector");
     
    this.userArray.push(user1);
    this.userArray.push(user2);
    this.userArray.push(user3);
    this.userArray.push(user4);
     

    console.log("Adding example users to array");

  }
  
}

class User {
  username: string;
  password: string;
  userType: string;

  constructor(user: string, pass: string, ut: string ){
    this.username = user;
    this.password = pass;
    this.userType = ut;
  }


}
