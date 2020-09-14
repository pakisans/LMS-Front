import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Student } from "../../models/student";
import { Teacher } from "../../models/teacher";
import { Admin } from "../../models/admin";

class LoginRes {
  token: string;
  role: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/login';
  private BASE_URL = "http://localhost:8080/admin/register";
  private STUDENT_URL = `${this.BASE_URL}\\student`;
  private ADMIN_URL = `${this.BASE_URL}\\admin`;
  private TEACHER_URL = `${this.BASE_URL}\\teacher`;

  authToken = null;
  httpOptions = null;
  isEmpty: boolean;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let user = { "username": username, "password": password }
    this.http.post<LoginRes>(`${this.url}`, user).subscribe(res => {
      if (res.token) {
        this.isEmpty = true;
        this.authToken = res.token;
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role);
        localStorage.setItem("username", res.username);
      }
    });
    return this.isEmpty;
  }
  registerStudent(student: Student) : Observable<any>{
    return this.http.post(this.STUDENT_URL, student);
  }

  registerTeacher(teacher: Teacher): Observable<any> {
    return this.http.post(this.TEACHER_URL, teacher);
  }

  registerAdmin(admin: Admin) {
    return this.http.post(this.ADMIN_URL, admin);
  }


}
