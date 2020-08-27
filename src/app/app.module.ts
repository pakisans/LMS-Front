import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MySubjectsComponent} from './my-subjects/my-subjects.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import {TutorHomeComponent} from './tutor-home/tutor-home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyExamsComponent} from './my-exams/my-exams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MySubjectsComponent,
    MainMenuComponent,
    StudentHomeComponent,
    TutorHomeComponent,
    DashboardComponent,
    MyExamsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
