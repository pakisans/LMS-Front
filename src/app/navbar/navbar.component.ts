import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) {
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
