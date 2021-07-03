import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  basePath = 'https://perustars-api.herokuapp.com/api/auth/';


  constructor(private http: HttpClient) { }

  login(credentials: { username: any; password: any; }):Observable<any>{
    return this.http.post(this.basePath + 'sign-in', JSON.stringify({
      username: credentials.username,
      password: credentials.password
    }), httpOptions);
  }
}
