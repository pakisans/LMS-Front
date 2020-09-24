import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'skyline-institute';

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router
  ) {
    const userId = localStorage.getItem('user');
    if (userId) {
      this.http.get('.././assets/users.json').subscribe((res: any[]) => {
        const loggedUser = res.find((user) => user.id === userId);

        if (loggedUser) {
          this.loginService.loggedIn(true);
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
