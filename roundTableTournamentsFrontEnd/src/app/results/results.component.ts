import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public matchArray = [] // Array of matches in the tournament

  constructor() { }

  ngOnInit(): void {
  }


}

// An object of class Match represents a single match between two teams in the tournament. 
class Match {
  matchID: string;
  division: string;
  matchTime: Date;
  fieldName: string;
  homeTeamName: string;
  visitingTeamName: string;
  homeTeamScore: string;
  visitingTeamScore: string; 

  constructor(match: string, div: string, time: Date, fieldName: string, htName: string, vtName: string, htScore: string, vtScore: string) {
    this.matchID = match;
    this.division = div;
    this.matchTime =  time;
    this.fieldName = fieldName;
    this.homeTeamName = htName;
    this.visitingTeamName = vtName;
    this.homeTeamScore = htScore;
    this.visitingTeamScore = vtScore; 
  }

}
