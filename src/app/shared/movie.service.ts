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

  public search(term: string){
    return new Observable((o: Observer<any>) => {
      const foundMovies = this.movieList.filter((movie) => {
        return movie.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      })

      if(foundMovies.length === 0){
        o.error(term)
      }else{
        o.next(foundMovies);
        
      }
      

    })   
  }


  // Ovako su uradili ovi iz vivify
  // public getMovies():Observable<Movie[]>{
  // 	return Observable.of(this.movieList)
  // }

  // public search(term){
  //   const foundMovies = this.movieList.filter((movie: Movie) => {
  //     return movie.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
  //     // Ovo je pitanje kad treba da se koristi toLocaleLowerCase a kad toLowerCase
  //   })

  //   if(foundMovies.length === 0){
  //     return Observable.throw(term)
  //   }

  //   return Observable.of(foundMovies)
  // }
}
