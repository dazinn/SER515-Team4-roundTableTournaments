import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-director',
  templateUrl: './field-director.component.html',
  styleUrls: ['./field-director.component.css']
})
export class FieldDirectorComponent implements OnInit {

  public displaySoccerFieldFailureMessage = false
  public displaySoccerFieldSuccessMessage = false
  public soccerFieldArray = []

  constructor() { }

  // Called on initialization of the component
  ngOnInit(): void {
    this.soccerFieldArray.push(new soccerField("1", "small"));
    this.soccerFieldArray.push(new soccerField("2", "small"));
    this.soccerFieldArray.push(new soccerField("3", "medium"));
    this.soccerFieldArray.push(new soccerField("4", "medium"));
    console.log("Initialized soccerFieldArray.");
  }

  // Create new SoccerField and add it to the array of soccer fields in the tournament.
  createNewSoccerField() {
    let num = (<HTMLInputElement>document.getElementById("field_num")).value;
    let size = (<HTMLInputElement>document.getElementById("field_size")).value;
    this.soccerFieldArray.push(new soccerField(num, size));
    console.log("Added soccer field with num '" + num + "' and size '" + size + "' to soccerFieldArray")
  }

  // Called when the save button under "Enter Field Information" is clicked
  saveSoccerFieldButtonClicked() {
    let num = (<HTMLInputElement>document.getElementById("field_num")).value;
    let size = (<HTMLInputElement>document.getElementById("field_size")).value;

    if(num.length == 0 ||
       size.length == 0 ) {
        this.displaySoccerFieldFailureMessage = true
        this.displaySoccerFieldSuccessMessage = false
    } else {
      this.createNewSoccerField();
      this.displaySoccerFieldFailureMessage = false
      this.displaySoccerFieldSuccessMessage = true
    }
  }

  // Clear input fields when button is clicked.
  clearInputFields() {
    (<HTMLInputElement>document.getElementById("field_num")).value = '';
    (<HTMLInputElement>document.getElementById("field_size")).value = '';
  }

}


class soccerField {
  fieldNum : string;
  fieldSize : string;

  constructor(num : string, size : string) {
    this.fieldNum = num;
    this.fieldSize = size;
  }

}