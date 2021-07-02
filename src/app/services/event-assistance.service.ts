import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {EventAssistance} from "../models/EventAssistance";
import {catchError, retry} from "rxjs/operators";
import {Artwork} from "../models/artwork";

@Injectable({
  providedIn: 'root'
})
export class EventAssistanceService {

  basepath =`https://perustars-api.herokuapp.com/api/hobbyists`;
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

  addEventAssistance(hobbyistId: number, eventId: number):Observable<EventAssistance>{
    return this.http.post<EventAssistance>(`${this.basepath}/${hobbyistId}/events/${eventId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteEventAssistance(hobbyistId: number, eventId: number):Observable<EventAssistance>{
    return this.http.delete<EventAssistance>(`${this.basepath}/${hobbyistId}/events/${eventId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getEventAssistance(hobbyistId:number):Observable<Event>{
    return this.http.get<Event>(`${this.basepath}/${hobbyistId}/events`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


}
