import { Injectable } from '@angular/core';
import { movieList } from './examples';
import { Movie } from './models/movie';
import { Observable, Observer } from 'rxjs/Rx';



@Injectable()
export class MovieService {

	private movieList: Array<Movie>;

  constructor() {
  	this.movieList = movieList.map((movie) => {
  		return new Movie(
  			movie.id,
  			movie.name,
  			movie.director,
  			movie.imageUrl,
  			movie.duration,
  			new Date(movie.releseDate),
  			movie.genres

  		)
  	})

  }

  public getMovies(){
  	return new Observable((o: Observer<any>) => {
  		o.next(this.movieList)
  		return o.complete()
  	})
  }

  // Ovako su uradili ovi iz vivify
  // public getMovies():Observable<Movie[]>{
  // 	return Observable.of(this.movieList)
  // }


}
