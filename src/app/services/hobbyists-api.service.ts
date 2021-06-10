import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Hobbyists} from "../models/hobbyists";
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

  addHobbyist(item:any):Observable<Hobbyists>{
    return this.http.post<Hobbyists>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateHobbyist(id:number, item:Hobbyists):Observable<any>{
    return this.http.put<Hobbyists>(`${this.basePath}/${id}`,JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
