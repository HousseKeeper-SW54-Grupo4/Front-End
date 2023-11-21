import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {catchError, Observable, retry, tap, throwError} from "rxjs";
import { TravellerEntity} from "../model/traveller.entity";
import { KeeperEntity } from "../model/keeper.entity";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  basePath: string = 'https://house-keeper-api.vercel.app/api/v1';
  currentKeeper!: KeeperEntity;
  currentTraveller!: TravellerEntity;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      console.error(`Request URL: ${error.url}`);
      console.error(`Error type: ${error.name}`);
    }
    return throwError(() => new Error('Something happened with the request, please try again later'));
  }

  // Sign-Up-traveller



  signUpTraveller(user: TravellerEntity): Observable<any> {
    user.type = 'traveller';

    return this.http.post(`${this.basePath}/users`, user)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Sign-Up-keeper
  signUpKeeper(user: KeeperEntity): Observable<any> {
    user.type = 'keeper';
    return this.http.post(`${this.basePath}/users`, user)
      .pipe(retry(2), catchError(this.handleError));
  }

//Sign-In
  signIn(user: KeeperEntity | TravellerEntity): Observable<any> {
    return this.http.post(`${this.basePath}/sign-in`, user)
      .pipe(
        retry(2),
        catchError(this.handleError),
        tap((response: any) => {
          if (user.type === 'keeper') {
            // Acciones específicas para KeeperEntity
            this.currentKeeper = user;
          } else if (user.type === 'traveller') {
            // Acciones específicas para TravellerEntity
            this.currentTraveller = user;
          }
        })
      );
  }




  // Token
  getToken() {
    return localStorage.getItem('accessToken');
  }

  setToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  get isSignedIn(): boolean {
    let accessToken = localStorage.getItem('accessToken');
    return accessToken != null;
  }

  signOut() {
    localStorage.removeItem('accessToken');
  }
}
