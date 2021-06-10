import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Artwork} from "../models/artwork";
import {catchError, retry} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class ArtworksApiService {

  basePath = 'https://perustars-api.herokuapp.com/api/artworks';
  ArtistArtworkPath = `https://perustars-api.herokuapp.com/api/artist/`;
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

  addArtwork(artistid: number , item:any):Observable<Artwork>{
    return this.http.post<Artwork>(`${this.ArtistArtworkPath}/${artistid}/artworks`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateArtwork(artistid: number ,id:number ,item:any):Observable<Artwork>{
    return this.http.put<Artwork>(`${this.ArtistArtworkPath}/${artistid}/artworks/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteArtwork(artistid:number, id:number):Observable<any>{
    return this.http.delete<Artwork>(`${this.ArtistArtworkPath}/${artistid}/artworks/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllArtwork():Observable<Artwork>{
    return  this.http.get<Artwork>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllArtworkByArtistId(artistid:number):Observable<Artwork>{
    return this.http.get<Artwork>(`${this.ArtistArtworkPath}/${artistid}/artworks`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getArtworkByIdAndArtistId(artistid:number, id:number):Observable<Artwork>{
    return this.http.get<Artwork>(`${this.ArtistArtworkPath}/${artistid}/artworks/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getArtworksByCost(cost:number):Observable<Artwork>{
    return this.http.get<Artwork>(`${this.basePath}/cost/${cost}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }



}
