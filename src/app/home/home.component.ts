import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-test',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(private http: HttpClient, private router: Router) {
    const userId = localStorage.getItem('user');
    this.http.get('.././assets/users.json').subscribe((res: any[]) => {
      const loggedUser = res.find((user) => user.id === userId);
      if (loggedUser === undefined) {
        this.user = 'unregistered';
      } else {
        this.user = loggedUser.user.role;
      }
    });
  }

  ngOnInit(): void {}
}
