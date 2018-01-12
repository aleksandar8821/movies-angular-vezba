import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/models/movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	private movies: Array<Movie> //ovi iz vivify su ovde i inicijalizovali ovo na prazan niz, ne znam koliko to treba, meni radi i bez toga (https://gitlab.com/vivify-ideas/vivifyacademy-advanced-angular-movies/commit/bdb9ac5436c9f32728ef33e2549e350fa8e82002#b8d7997efd673eb17279a81145dc913f2fe4d39b)

  public counter = 0;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  	this.movieService.getMovies().subscribe(data => {
  		this.movies = data
  		console.log(this.movies);
  	})


  }

  public onClicked2(selected: boolean){
    this.counter++
  }

}
