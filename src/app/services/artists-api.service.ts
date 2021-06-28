import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Artist} from "../models/artist";
import {catchError, retry} from "rxjs/operators";
import {Pageable} from "../models/pageable";
import {J} from "@angular/cdk/keycodes";

@Injectable({
  providedIn: 'root'
})
export class ArtistsApiService {

  basePath = 'https://perustars-api.herokuapp.com/api/artists';
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
  //pageable: Pageable = new Pageable();
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log('An error occurred: ', error.error.message);
    } else{
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }
  addArtist(item: any): Observable<Artist> {
    return this.http.post<Artist>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getArtistById(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllArtist(): Observable<Artist>{
    //this.http.request("GET", this.basePath, {body: this.pageable});
    return  this.http.get<Artist>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateArtist(id:number, item:Artist): Observable<Artist>{
    return this.http.put<Artist>(`${this.basePath}/${id}`,JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteArtist(id: number):Observable<any>{
    return  this.http.delete<Artist>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
