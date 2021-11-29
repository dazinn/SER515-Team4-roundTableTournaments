import { TEMPORARY_NAME } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public displaySuccessMessage = false
  public displayFailureMessage = false
  public teamArrayInitialized = false
  public teamArray = []

  

  constructor() { }

  ngOnInit(): void {
    // Only initialize team array once
    if(!this.teamArrayInitialized) {
      this.addExampleTeamsToArray(); 
      this.teamArrayInitialized = true;
    }
    
  }

  // Function for other components to get teamArray 
  getTeamArray() 
  {
    return this.teamArray;
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
      //this.addExampleTeamsToArray(); // This line can be uncommented to add hardcoded example teams to the team array

      this.addNewTeamToArray();

      this.displayFailureMessage = false
      this.displaySuccessMessage = true
    }
  }

  // Clear input fields when button is clicked
  clearInputFields() {
    (<HTMLInputElement>document.getElementById("teamName")).value = '';
    (<HTMLInputElement>document.getElementById("email")).value = '';
    (<HTMLInputElement>document.getElementById("genderGroup")).value = '';
    (<HTMLInputElement>document.getElementById("ageGroup")).value = '';
    (<HTMLInputElement>document.getElementById("cardNum")).value = '';
    (<HTMLInputElement>document.getElementById("cardHolder")).value = '';
    (<HTMLInputElement>document.getElementById("expirationDate")).value = '';
    (<HTMLInputElement>document.getElementById("cvvCode")).value = '';
  }

  // Create and add example teams to the array of teams
  addExampleTeamsToArray() {
    let u8MaleTeam1 = new Team("White Knights", "wk@example.com", "Male", "U8");
    let u8MaleTeam2 = new Team("Thundercats", "t@example.com", "Male", "U8");
    let u8MaleTeam3 = new Team("Cactus Crawlers", "cc@example.com", "Male", "U8");
    let u8MaleTeam4 = new Team("Storm", "s@example.com", "Male", "U8");

    let u8FemaleTeam1 = new Team("Terra Time", "tt@example.com", "Female", "U8");
    let u8FemaleTeam2 = new Team("Black Knights", "bk@example.com", "Female", "U8");
    let u8FemaleTeam3 = new Team("Lions", "l@example.com", "Female", "U8");
    let u8FemaleTeam4 = new Team("Wolves", "w@example.com", "Female", "U8");

    let u9MaleTeam1 = new Team("Red Gorillas", "rg@example.com", "Male", "U9");
    let u9MaleTeam2 = new Team("Heatwave", "hw@example.com", "Male", "U9");
    let u9MaleTeam3 = new Team("Rainstorm", "rs@example.com", "Male", "U9");
    let u9MaleTeam4 = new Team("Panthers", "p@example.com", "Male", "U9");

    let u9FemaleTeam1 = new Team("Leopards", "l@example.com", "Female", "U9");
    let u9FemaleTeam2 = new Team("Mountain Goats", "mg@example.com", "Female", "U9");
    let u9FemaleTeam3 = new Team("Blue Tigers", "bt@example.com", "Female", "U9");
    let u9FemaleTeam4 = new Team("Foxes", "f@example.com", "Female", "U9");
    
    this.teamArray.push(u8MaleTeam1);
    this.teamArray.push(u8MaleTeam2);
    this.teamArray.push(u8MaleTeam3);
    this.teamArray.push(u8MaleTeam4);
    this.teamArray.push(u8FemaleTeam1);
    this.teamArray.push(u8FemaleTeam2);
    this.teamArray.push(u8FemaleTeam3);
    this.teamArray.push(u8FemaleTeam4);
    this.teamArray.push(u9MaleTeam1);
    this.teamArray.push(u9MaleTeam2);
    this.teamArray.push(u9MaleTeam3);
    this.teamArray.push(u9MaleTeam4);
    this.teamArray.push(u9FemaleTeam1);
    this.teamArray.push(u9FemaleTeam2);
    this.teamArray.push(u9FemaleTeam3);
    this.teamArray.push(u9FemaleTeam4);

    console.log("Added example teams to team array");
  }

  // Create a new Team object based on input fields and add it to the array of teams
  addNewTeamToArray() {
    let name = (<HTMLInputElement>document.getElementById("teamName")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let gender = (<HTMLInputElement>document.getElementById("genderGroup")).value;
    let age = (<HTMLInputElement>document.getElementById("ageGroup")).value;
    let newTeam = new Team(name, email, gender, age);
    this.teamArray.push(newTeam);
    console.log("Added team '" + name + "' to team array");
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
