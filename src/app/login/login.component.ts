import {Component, OnInit} from '@angular/core';

enum roleEnum {
  admin = 'ROLE_ADMIN',
  administrator = 'ROLE_ADMINISTRATOR',
  teacher = 'ROLE_TEACHER',
  student = 'ROLE_STUDENT',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  login(username: string, password: string): void {
    console.log(username);
    // if (this.ls.login(username, password)) {
    //   console.log(username)
    //   this.role = localStorage.getItem("role");
    //   if ((this.role == roleEnum.admin)) {
    //     this.router.navigateByUrl('/admin-panel')
    //   }
    //   else if (this.role == roleEnum.administrator) {
    //     this.router.navigateByUrl('/administrator-panel')
    //   }
    //   else if (this.role == roleEnum.teacher) {
    //     this.router.navigateByUrl('/teacher-panel')
    //   }
    //   else if (this.role == roleEnum.student) {
    //     this.router.navigateByUrl('/student-panel')
    //   }
    // }
    // else {
    //   this.dialog.open(LoginErrorDialogComponenet, {
    //     data: {
    //       message: 'Incorrect Username or Password',
    //       buttonText: {
    //         cancel: 'Close'
    //       }
    //     },
    //   });
    // }

  }

}
