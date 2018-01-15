import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';


import {Movies} from './Movies';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'api/movies';  // URL to web api

  /** GET movies from the server */
  getHeroes(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.apiUrl);
  }

  addMovie(movie: Movies): Observable<Movies> {
    return this.http.post<Movies>(this.apiUrl, movie, httpOptions);
  }

  /** DELETE: delete the  movie from the server */
  deleteMovie(movie: Movies | number): Observable<Movies> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Movies>(url, httpOptions);
  }

  /** PUT: update the movie on the server */
  updateMovie(movie: Movies): Observable<any> {
    return this.http.put(this.apiUrl, movie, httpOptions);
  }

}
