import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Teacher } from "../../models/teacher";
import { Admin } from "../../models/admin";
import { Student } from "../../models/student";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private BASE_URL = "http://localhost:8080";
  private USER_URL = `${this.BASE_URL}\\users`;
  private STUDENT_URL = `${this.BASE_URL}\\students`;
  private ADMINISTRATOR_URL = `${this.BASE_URL}\\administrative`;
  private TEACHER_URL = `${this.BASE_URL}\\teacher`;

  constructor(private http: HttpClient) { }

  addNewStudent(student: Student): Observable<any> {
    return this.http.post(this.STUDENT_URL, student);
  }

  addNewAdministration(admin: Admin): Observable<any> {
    return this.http.post(this.ADMINISTRATOR_URL, admin);
  }

  addNewTeacher(teacher: Teacher): Observable<any> {
    return this.http.post(this.TEACHER_URL, teacher);
  }

  deleteUser(id: String) {
    return this.http.delete(this.USER_URL + `/${id}`);
  }
}
