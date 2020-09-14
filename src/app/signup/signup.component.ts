import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth/auth.service";
import { Student } from "../models/student";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  student: Student = new Student;

  constructor(
    private as: AuthService
  ) { }

  ngOnInit(): void {
  }

  tryRegister(){
    this.as.registerStudent(this.student).subscribe((res)=>{
      alert("You have successfully registered")
    })
  }
}
