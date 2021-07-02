import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Hobbyist} from "../models/hobbyist";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HobbyistsApiService {

  basePath = 'https://perustars-api.herokuapp.com/api/hobbyists';
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log('An error ocurred: ', error.error.message);
    } else{
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  addHobbyist(item:any):Observable<Hobbyist>{
    return this.http.post<Hobbyist>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateHobbyist(id:number, item:Hobbyist):Observable<any>{
    return this.http.put<Hobbyist>(`${this.basePath}/${id}`,JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getHobbyistByUserId(userId: number) : Observable<any> {
    return this.http.get<Hobbyist>(`${this.basePath}/userid/${userId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
