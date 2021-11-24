import { Component, OnInit } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-team-director',
  templateUrl: './team-director.component.html',
  styleUrls: ['./team-director.component.css']
})
export class TeamDirectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.testRoundRobinScheduler();
  }

  // The round robin algorithm we are using is a package called 'roundrobin' installed via npm and saved as a dependecy 
  // to the project. Its source can be found here: https://github.com/clux/roundrobin. The following function conducts 
  // a simple test to verify the scheduler works. 
  testRoundRobinScheduler() {
    var robin = require('roundrobin');
    let scheduleOutput = robin(6); // Tell the round robin algorithm we want to schedule 6 teams
    console.log("First Match in schedule: " + scheduleOutput[0][0]); // Outputs first match (should be teams 1 and 6)
  }

  // TODO: access team array to get names of teams in tournament. Add them to array or list, then pass them to robin()?
  generateSchedule() {
    //TODO: implement
  }

}
