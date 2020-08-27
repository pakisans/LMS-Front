import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import {TutorHomeComponent} from './tutor-home/tutor-home.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'studentHome', component: StudentHomeComponent},
  {path: 'tutorHome', component: TutorHomeComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
