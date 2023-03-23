import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent {

  @Input() movie: Movie | undefined;
  @Output() rent = new EventEmitter();
  selected = false;

  movies$: Observable<Movie[]> | undefined;

  constructor(
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
  }

  onClick() {
    console.log('rented')
  }

}
