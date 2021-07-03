import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Follower} from "../models/follower";

@Injectable({
  providedIn: 'root'
})
export class FollowersApiService {
  basePath = 'https://perustars-api.herokuapp.com/api/hobbyists';
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error ocurred: ', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  addFollower(hobbyistId: number, artistId: number): Observable<Follower> {
    return this.http.post<Follower>(`${this.basePath}/${hobbyistId}/artists/${artistId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteFollower(hobbyistId: number, artistId: number): Observable<Follower> {
    return this.http.delete<Follower>(`${this.basePath}/${hobbyistId}/artists/${artistId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllFollwedArtistByHobbyistId(hobbyistId: number): Observable<Follower> {
    return  this.http.get<Follower>(`${this.basePath}/${hobbyistId}/artists`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
}
