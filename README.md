# roundTableTournaments
Repository for Round Table Tournaments - a website to facilitate the hosting of soccer tournaments. Class project for SER515 Fall 2021, Group 4.


We are planning to use the Angular Framework, Electron (a Javascript wrapper), and SQLite3 to build our prototype. 



Branching Strategy:
Branches will be made in the following way: main --> sprintX --> sprintX-usY --> sprintX-usY-tZ. In other words, a sprint branch named "sprintX" will be created from main, a user story branch named "sprintX-usY" will be created from the sprint branch, and a task branch named "sprintX-usY-tZ" will be created from the user story branch. X, Y, and Z will be replaced with the proper sprint, user story, and task number. For example, if work needed to be done on task 60 in user story 12 during sprint 1, the developers should make the following branches:

    sprint1 (branched off of main)
    sprint1-us12 (branched off of sprint1)
    sprint1-us12-t60 (branched off of sprint1-us12)
    
When work is done on task 60, the task branch should be merged into sprint1-us12. When all task branches for user story 12 are done and merged, the user story branch should be merged into the sprint 1 branch. When all work is done for the sprint, a pull request should be made to merge sprint1 into main. 
