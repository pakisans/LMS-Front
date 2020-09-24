import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  loginCheck: boolean = false;
  constructor(
    private router: Router,
    private as: AuthService,
    private loginService: LoginService
  ) {
    this.isLoggedIn();
  }

  isLoggedIn(): void {
    this.loginService.isloggedIn.subscribe((res) => {
      this.loginCheck = res;
    });
  }

  // isLoggedIn() {
  //   return this.as.isLoggedIn();
  // }

  goToNotifications(): void {
    this.router.navigate(['/notifications']);
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  logOut() {
    this.loginService.loggedIn(false);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
