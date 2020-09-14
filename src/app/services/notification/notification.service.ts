import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

class userRes {
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  url = 'http://localhost:8080/notifications';

  constructor(private http: HttpClient) { }

  getAllMyNotifications(username: string){
    this.http.post<userRes>(`${this.url}`, username).subscribe(res => {
      if (res) {
        return res;
      }else {
        console.error("Cannot get notifications")
      }
    });
  }
}
