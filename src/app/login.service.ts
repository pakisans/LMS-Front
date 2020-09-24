import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isloggedIn: EventEmitter<boolean> = new EventEmitter();

  loggedIn(check: boolean): void {
    this.isloggedIn.emit(check);
  }
}
