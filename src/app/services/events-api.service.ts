import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Event} from "../models/event";

@Injectable({
  providedIn: 'root'
})

export class EventsApiService {

  basePath = 'https://perustars-api.herokuapp.com/api/events';
  ArtistEventPath = `https://perustars-api.herokuapp.com/api/artists`;
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


  addEvent(artistid: number , item:any):Observable<Event>{
    return this.http.post<Event>(`${this.ArtistEventPath}/${artistid}/events`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateEvent(artistid: number ,id:number ,item:any):Observable<Event>{
    return this.http.put<Event>(`${this.ArtistEventPath}/${artistid}/events/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteEvent(artistid:number, id:number):Observable<any>{
    return this.http.delete<Event>(`${this.ArtistEventPath}/${artistid}/events/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllEvent():Observable<Event>{
    return this.http.get<Event>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllEventsByArtistId(artistid:number):Observable<Event>{
    return this.http.get<Event>(`${this.ArtistEventPath}/${artistid}/events`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getEventByIdAndArtistId(artistid:number, id:number):Observable<Event>{
    return this.http.get<Event>(`${this.ArtistEventPath}/${artistid}/events/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
