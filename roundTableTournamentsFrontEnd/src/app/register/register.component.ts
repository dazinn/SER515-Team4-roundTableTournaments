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
      this.displayFailureMessage = false
      this.displaySuccessMessage = true
    }
  }

  // Clear input fields when button is clicked
  clearInputFields() {
    //TODO:Implement
  }


}
