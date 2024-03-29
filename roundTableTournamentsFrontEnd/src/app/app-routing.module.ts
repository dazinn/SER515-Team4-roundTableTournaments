import { NgModule } from '@angular/core';

// Imports for routing
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResultsComponent } from './results/results.component';
import { RefereeDirectorComponent } from './referee-director/referee-director.component';
import { FieldDirectorComponent } from './field-director/field-director.component';
import { TeamDirectorComponent } from './team-director/team-director.component';
import { TournamentDirectorComponent } from './tournament-director/tournament-director.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Array of different routes which can be displayed, in the form:
*  { path: '<pathName>', component: <ComponentName> }
*
*  For example, if a user goes to the default path (localhost:4200/),
*  the component mapped to { path: '', component: <ComponentNameGoesHere> } will be displayed. 
*/
const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'navigation', component: NavigationComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'referee-director', component: RefereeDirectorComponent},
  { path: 'field-director', component: FieldDirectorComponent},
  { path: 'team-director', component: TeamDirectorComponent},
  { path: 'tournament-director', component: TournamentDirectorComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) // This configures the router with the array of routes declared above.

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
