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


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ButtonComponent,
    NavigationComponent,
    ResultsComponent,
    TournamentDirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
