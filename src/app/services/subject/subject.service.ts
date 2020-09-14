import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Subject } from "../../models/subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectUrl = "http://localhost:8080/subjects/"

  constructor(
    private http: HttpClient
  ) { }

  getSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.subjectUrl);
  }

  getSubject(id: number): Observable<Subject>{
    return this.http.get<Subject>(this.subjectUrl + id)
  }
}
