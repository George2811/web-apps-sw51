import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {FavoriteArtwork} from "../models/favoriteArtwork";
import {catchError, retry} from "rxjs/operators";
import {Artwork} from "../models/artwork";

@Injectable({
  providedIn: 'root'
})
export class FavoriteArtworkApiService {

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

  addFavoriteArtwork(hobbyistId:number, artworkId:number ):Observable<FavoriteArtwork>{
    return this.http.post<FavoriteArtwork>(`${this.basepath}/${hobbyistId}/artworks/${artworkId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteFavoriteArtwork(hobbyistId:number, artworkId:number):Observable<FavoriteArtwork>{
    return this.http.delete<FavoriteArtwork>(`${this.basepath}/${hobbyistId}/artworks/${artworkId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getFavoriteArtwork(hobbyistId:number):Observable<Artwork>{
    return this.http.get<Artwork>(`${this.basepath}/${hobbyistId}/artworks`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
