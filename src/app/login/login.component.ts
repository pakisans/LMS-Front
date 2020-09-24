import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

enum roleEnum {
  admin = 'ROLE_ADMIN',
  teacher = 'ROLE_TEACHER',
  student = 'ROLE_STUDENT',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginTemplate = true;
  constructor(
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) {
    localStorage.removeItem('user');
  }

  ngOnInit() {}

  login(username, password): void {
    this.http.get('../assets/users.json').subscribe((users: []) => {
      users.forEach((element: any) => {
        const user = element.user;
        if (
          user.username === username &&
          user.password === password &&
          username !== null &&
          password !== null &&
          username !== undefined &&
          password !== undefined
        ) {
          localStorage.setItem('user', element.id);

          if (localStorage.getItem('user')) {
            this.loginService.loggedIn(true);
            this.router.navigate(['/home']);
          }
        }
      });
    });
  }

  register(username, password, firstName, lastName): void {
    this.http
      .post('../../assets/users.json', {
        id: this.Guid(),
        firstName: firstName,
        lastName: lastName,
        user: {
          username: username,
          password: password,
          role: 'student',
        },
      })
      .subscribe((res) => {
        console.log(res);
      });
    this.registerTemplate();
  }

  registerTemplate() {
    this.loginTemplate = !this.loginTemplate;
  }

  Guid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  // login(username: string, password: string) {
  //   console.log(username);
  //   localStorage.setItem('token', username);
  //   this.router.navigate(['/studentHome']);
  //   // if (this.ls.login(username, password)) {
  //   //   console.log(username)
  //   //   this.role = localStorage.getItem("role");
  //   //   if ((this.role == roleEnum.admin)) {
  //   //     this.router.navigateByUrl('/dashboard')
  //   //   }
  //   //   else if (this.role == roleEnum.teacher) {
  //   //     this.router.navigateByUrl('/tutorHome')
  //   //   }
  //   //   else if (this.role == roleEnum.student) {
  //   //     this.router.navigateByUrl('/studentHome')
  //   //   }
  //   // }
  //   // else {
  //   //   console.error("Cannot Login")
  //   // }

  // }
}
