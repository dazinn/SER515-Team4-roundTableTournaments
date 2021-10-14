# roundTableTournaments
Repository for Round Table Tournaments - an Angular Application which will facilitate the hosting of soccer tournaments. Class project for SER515 Fall 2021, Group 4.

## Instructions on how to download and run the project executable
Note: Currently the only type of executable that is being created and uploaded is for Windows. Please contact the team if a Linux or Mac executable is needed.

1. Go to [Group 4's Google Drive](https://drive.google.com/drive/u/1/folders/0AKs-AjstRSLjUk9PVA). 
2. Navigate to the "Executables" folder and open the appropriate subfolder (EX: "Deliverable 1" for the Executable produced for Deliverable 1)
3. Download the folder that starts with "round-table-tournaments-front-end..."
4. Unzip to a directory of your choosing.
5. Open the unzipped folder and double click the executable to run (should have a name like "round-table-tournaments-front-end-0.0.0").
    1. Note: Windows may block the executable from running since it is from an "unknown" source. Go ahead and allow the app to run anyway by clicking "more details" and then clicking "run". 


## Developer Information
We are planning to use the Angular Framework, Electron (a Javascript wrapper), and SQLite3 to build our prototype. 


### Branching Strategy:
Branches will be made in the following way: main --> sprintX --> sprintX-usY --> sprintX-usY-tZ. In other words, a sprint branch named "sprintX" will be created from main, a user story branch named "sprintX-usY" will be created from the sprint branch, and a task branch named "sprintX-usY-tZ" will be created from the user story branch. X, Y, and Z will be replaced with the proper sprint, user story, and task number. For example, if work needed to be done on task 60 in user story 12 during sprint 1, the developers should make the following branches:

    sprint1 (branched off of main)
    sprint1-us12 (branched off of sprint1)
    sprint1-us12-t60 (branched off of sprint1-us12)
    
When work is done on task 60, the task branch should be merged into sprint1-us12. When all task branches for user story 12 are done and merged, the user story branch should be merged into the sprint 1 branch. When all work is done for the sprint, a pull request should be made to merge sprint1 into main. 
