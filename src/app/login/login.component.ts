import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

enum roleEnum {
  admin = "ROLE_ADMIN",
  teacher = "ROLE_TEACHER",
  student = "ROLE_STUDENT",
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  role: string;

  username = '';
  password = '';

  constructor(
    private router: Router,
    private ls: AuthService) {
  }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    console.log(username)
    if (this.ls.login(username, password)) {
      console.log(username)
      this.role = localStorage.getItem("role");
      if ((this.role == roleEnum.admin)) {
        this.router.navigateByUrl('/dashboard')
      }
      else if (this.role == roleEnum.teacher) {
        this.router.navigateByUrl('/tutorHome')
      }
      else if (this.role == roleEnum.student) {
        this.router.navigateByUrl('/studentHome')
      }
    }
    else {
      console.error("Cannot Login")
    }

  }

}
