import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userArray = []
  
  constructor(private fb: FormBuilder,private router: Router) { }
      
  ngOnInit(): void {
    this.addUsersToArray();
  }

  loginForm = this.fb.group({
    username: [null],
    password: [null],
    usertype: [null]
  });

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
  onSubmit() 
  {
    
	  if (this.loginForm.valid) 
	  {
      
		 this.userArray.forEach( (user) => {
      
      var un=(<HTMLInputElement>document.getElementById("loginUser")).value;
      var pw=(<HTMLInputElement>document.getElementById("loginPassword")).value;
      if(un=="TeamDirectorAccount"&&pw=="aaaa"&&user.userType =="teamDirector")
			{
        this.router.navigate(['/team-director']);
      }
      if(un=="RefereeDirectorAccount"&&pw=="bbbb"&&user.userType =="refereeDirector")
			{
        this.router.navigate(['/referee-director']);
      }
      if(un=="TournamentDirectorAccount"&&pw=="cccc"&&user.userType =="tournamentDirector")
			{
        this.router.navigate(['/tournament-director']);
      }
      if(un=="FieldDirectorAccount"&&pw=="dddd"&&user.userType =="fieldDirector")
			{
        this.router.navigate(['/field-director']);
      }
      
				
		});
		
		this.loginForm.reset();
	  }
    else
    {
    console.log("Invalid Credentials");
		this.loginForm.reset();
    }
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
