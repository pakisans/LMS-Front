import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { TutorHomeComponent } from './components/tutor-home/tutor-home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { MyConversationsComponent } from './components/my-conversations/my-conversations.component';
import { MySubjectsComponent } from './components/my-subjects/my-subjects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsComponent } from './notifications/notifications.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from './components/_modal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { UnregisteredHomeComponent } from './unregistered-home/unregistered-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    StudentHomeComponent,
    TutorHomeComponent,
    MainMenuComponent,
    ProfileComponent,
    MyConversationsComponent,
    MySubjectsComponent,
    NotificationsComponent,
    HomeComponent,
    UnregisteredHomeComponent,
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
