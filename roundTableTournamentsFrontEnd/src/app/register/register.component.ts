import { TEMPORARY_NAME } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public displaySuccessMessage = false
  public displayFailureMessage = false
  public teamArray = []

  constructor() { }

  ngOnInit(): void {
  }

  /* Function that is called when the Register button is clicked. */
  registerButtonClicked() {
    /*TODO: Add functionality to fully validate team info and add to database. If successful, set displaySuccessMessage = true. 
    *      If not successful, set displayFailureMessage = true. 
    */

    let name = (<HTMLInputElement>document.getElementById("teamName")).value
    let email = (<HTMLInputElement>document.getElementById("email")).value
    let genderGroup = (<HTMLInputElement>document.getElementById("genderGroup")).value
    let ageGroup = (<HTMLInputElement>document.getElementById("ageGroup")).value

    let cardNum = (<HTMLInputElement>document.getElementById("cardNum")).value
    let cardHolder = (<HTMLInputElement>document.getElementById("cardHolder")).value
    let expirationDate = (<HTMLInputElement>document.getElementById("expirationDate")).value
    let cvv = (<HTMLInputElement>document.getElementById("cvvCode")).value

    // Check to see if inputs are blank
    if(name.length == 0 ||
       email.length == 0 ||
       genderGroup.length == 0 ||
       ageGroup.length == 0 ||
       cardNum.length == 0 ||
       cardHolder.length == 0 ||
       expirationDate.length == 0 ||
       cvv.length == 0 ) {
      this.displayFailureMessage = true
      this.displaySuccessMessage = false
    } else {
      this.addExampleTeamsToArray();
      
      this.displayFailureMessage = false
      this.displaySuccessMessage = true
    }
  }

  // Clear input fields when button is clicked
  clearInputFields() {
    //TODO:Implement
  }

  // Create and add 6 example teams to the array of teams
  addExampleTeamsToArray() {
    let team1 = new Team("White Knights", "wk@example.com", "Male", "U8");
    let team2 = new Team("Black Knights", "bk@example.com", "Female", "U8");
    let team3 = new Team("Thundercats", "tc@example.com", "Male", "U8");
    let team4 = new Team("Cactus Crawlers", "cc@example.com", "Male", "U8");
    let team5 = new Team("Storm", "s@example.com", "Female", "U8");
    let team6 = new Team("Terra Time", "tt@example.com", "Female", "U8");
    this.teamArray.push(team1);
    this.teamArray.push(team2);
    this.teamArray.push(team3);
    this.teamArray.push(team4);
    this.teamArray.push(team5);
    this.teamArray.push(team6);
    console.log("Adding example teams to array");
  }


}

// An object of class Team represents a team that has been added to the tournament
class Team {
  teamName: string;
  contactEmail: string;
  genderGroup: string;
  ageGroup: string;

  constructor(name: string, email: string, gender: string, age: string) {
    this.teamName = name;
    this.contactEmail = email;
    this.genderGroup = gender;
    this.ageGroup = age;
  }

}
