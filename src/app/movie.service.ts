import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Actor } from './model/Actor';
import { Movie } from './model/Movie';
import { WatchList } from './model/WatchList';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>('https://flop-buster-fp-default-rtdb.firebaseio.com/movies.json');
  }

  getActors() {
    return this.http.get<Actor[]>('https://flop-buster-fp-default-rtdb.firebaseio.com/actors.json');
  }

  getWatchList() {
    return this.http.get<WatchList[]>('https://flop-buster-fp-default-rtdb.firebaseio.com/watchList.json');
  }

  getMovie(id: any) {
    return this.http.get<Movie>(`https://flop-buster-fp-default-rtdb.firebaseio.com/movies/${id}.json`);
  }
}
