import { Component, Input, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

declare var require: any

@Component({
  selector: 'app-team-director',
  templateUrl: './team-director.component.html',
  styleUrls: ['./team-director.component.css']
})
export class TeamDirectorComponent implements OnInit {
  public displaySuccessMessage = false
  public displayFailureMessage = false

  // Division Arrays
  public u8MaleTeams = [] // Stores all team names for division U8 male
  public u8FemaleTeams = []

  public u9MaleTeams = []
  public u9FemaleTeams = []

  constructor() { }


  ngOnInit(): void {
  }

  // The round robin algorithm we are using is a package called 'roundrobin' installed via npm and saved as a dependecy 
  // to the project. Its source can be found here: https://github.com/clux/roundrobin. The following function conducts 
  // a simple test to verify the scheduler works. 
  testRoundRobinScheduler() {
    var robin = require('roundrobin');
    let scheduleOutput = robin(6); // Tell the round robin algorithm we want to schedule 6 teams
    console.log("First Match in schedule: " + scheduleOutput[0][0]); // Outputs first match (should be teams 1 and 6)
  }

  // This function adds teams to the division arrays 
  addTeamsToDivisionArrays() {
    // TODO: Replace temporary solution below with functionality to get the teamArray in register component, and then for
    //       each team in that array, get team name, gender, and age group and then add those team names to the appropriate
    //       division array as shown in the temporary solution below. 

    // Temporary solution: 
    // Hardcode team names and add to the apporopriate division array
    let u8MaleTeam1 = "White Knights"
    let u8MaleTeam2 = "Thundercats"
    let u8MaleTeam3 = "Cactus Crawlers"
    let u8MaleTeam4 = "Storm"
    this.u8MaleTeams.push(u8MaleTeam1, u8MaleTeam2, u8MaleTeam3, u8MaleTeam4);

    let u8FemaleTeam1 = "Terra Time"
    let u8FemaleTeam2 = "Black Knights"
    let u8FemaleTeam3 = "Lions"
    let u8FemaleTeam4 = "Wolves"
    this.u8FemaleTeams.push(u8FemaleTeam1, u8FemaleTeam2, u8FemaleTeam3, u8FemaleTeam4);

    let u9MaleTeam1 = "Red Gorillas"
    let u9MaleTeam2 = "Heatwave"
    let u9MaleTeam3 = "Rainstorm"
    let u9MaleTeam4 = "Panthers"
    this.u9MaleTeams.push(u9MaleTeam1, u9MaleTeam2, u9MaleTeam3, u9MaleTeam4);

    let u9FemaleTeam1 = "Leopards"
    let u9FemaleTeam2 = "Mountain Goats"
    let u9FemaleTeam3 = "Blue Tigers"
    let u9FemaleTeam4 = "Foxes"
    this.u9FemaleTeams.push(u9FemaleTeam1, u9FemaleTeam2, u9FemaleTeam3, u9FemaleTeam4);
    
  }

  // Generates a schedule for each division in the tournament
  generateSchedule() {
    this.addTeamsToDivisionArrays();

    // Generate schedule for U8 Male Division
    var u8MaleScheduler = require('roundrobin'); // Round Robin Scheduling Algorithm
    let u8MaleScheduleOutput = u8MaleScheduler(this.u8MaleTeams.length, this.u8MaleTeams); // Pass a division array (and its length) to the scheduling algorithm
    console.log("U8 Male Schedule: " + u8MaleScheduleOutput); // Output full division schedule as a simple list to the console (the full schedule is a 2D array of rounds and matches)

    // Generate schedule for U8 Female Division
    var u8FemaleScheduler = require('roundrobin'); 
    let u8FemaleScheduleOutput = u8FemaleScheduler(this.u8FemaleTeams.length, this.u8FemaleTeams); 
    console.log("U8 Female Schedule: " + u8FemaleScheduleOutput); 

    // Generate schedule for U9 Male Division
    var u9MaleScheduler = require('roundrobin'); 
    let u9MaleScheduleOutput = u9MaleScheduler(this.u9MaleTeams.length, this.u9MaleTeams); 
    console.log("U9 Male Schedule: " + u9MaleScheduleOutput); 

    // Generate schedule for U9 Female Division
    var u9FemaleScheduler = require('roundrobin'); 
    let u9FemaleScheduleOutput = u9FemaleScheduler(this.u9FemaleTeams.length, this.u9FemaleTeams); 
    console.log("U9 Female Schedule: " + u9FemaleScheduleOutput); 

    // Note: Examples on how we can get match information from the schedule output (more info can be found at the reference link above testRoundRobinScheduler()):
    //       scheduleOutput[0] would return an array of the first round of matches, where all teams in the division would play against 1 other team. 
    //       scheduleOutput[0][0] would return the first match in the first round, where one team plays against another. (One is home team, the other is visiting team)



    // TODO: Add functionality to create Match objects for each match in the tournament, and then save them to a match array, which will be read by the Results component
    //       in order to generate the table of matches in the tournament.




    // Cleanup code. (Erase the teams in the division arrays. If the button is pushed multiple times and the arrays are not cleared, the same teams get added again which generates an invalid schedule)
    this.u8MaleTeams = [];
    this.u9MaleTeams = [];
    this.u8FemaleTeams = [];
    this.u9FemaleTeams = [];
    this.displaySuccessMessage = true;
  }

}
