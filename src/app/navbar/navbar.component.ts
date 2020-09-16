import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private as: AuthService
  ) {
  }

  isLoggedIn() {
    return this.as.isLoggedIn()
  }

  goToNotifications(): void {
    this.router.navigate(['/notifications'])
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
