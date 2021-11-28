import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResultsComponent } from './results/results.component';  
import { TournamentDirectorComponent } from './tournament-director/tournament-director.component';
import { TeamDirectorComponent } from './team-director/team-director.component'; 
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ButtonComponent,
    NavigationComponent,
    ResultsComponent,
    TournamentDirectorComponent,
    TeamDirectorComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
