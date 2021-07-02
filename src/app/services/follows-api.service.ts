import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Artist} from "../models/artist";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FollowsApiService {

  basePath = 'https://perustars-api.herokuapp.com/api/hobbyists/';
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
  getAllFollowedArtistsByHobbyistId(hobbyistId: number): Observable<Artist>{
    return this.http.get<Artist>(`${this.basePath}${hobbyistId}/artists`,this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));

  }
}
