import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegUser } from 'src/app/models/reg-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private address = "http://localhost:8080/api/regUser"
  token: string = "";
  payload: JSON;
  private loginEv = new BehaviorSubject<string>("");
  loginEvent = this.loginEv.asObservable();

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("TOKEN");
    if (this.token != null) {
      try {
        this.payload = JSON.parse(atob(this.token.split('.')[1]));
      } catch (error) {
        localStorage.removeItem("TOKEN");
        this.token = null;
        this.payload = null;
      }
    }
  }

  login(user:RegUser):Observable<string>{
    return this.http.post<string>(`${this.address}/login`,user);
  }

  logout(){
    localStorage.removeItem("TOKEN");
    this.token = null;
    this.payload = null;
  }

  setToken(token){
    try{
      this.token = token["token"];
      if(this.token != null){
        this.payload = JSON.parse(atob(this.token.split('.')[1]));
        localStorage.setItem("TOKEN", this.token);
        this.loginEv.next(this.payload["sub"]);
      }
    }catch{
      localStorage.removeItem("TOKEN");
      this.token = null;
      this.payload = null;
    }
  }

  getPayLoad(){
    if(this.payload){
      return {"sub":this.payload["sub"],"created":this.payload["created"], "exp": this.payload["exp"], "role": this.payload["role"], "id": this.payload["id"]}
    }else{
      return null;
    }
  }

  getRole(){
    if(this.payload != null){
      return this.payload["role"];
    }else{
      return "";
    }
  }
  getToken(): string{
    return this.token;
  }

  
}
