import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/models/movie';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

	private movies: Array<Movie>
	private term: string
	public counter = 0;


  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	let term = this.route.snapshot.paramMap.get('term')
  	this.movieService.search(term).subscribe(data => {
  		this.movies = data
  		// ovo je term koji je definisan gore na pocetku ngOnInit
  		this.term = term
  		// console.log(data)
  	}, term => {
  		alert('There are no movies with searched term: ' + term)
  		this.router.navigate(['movies'])
  	})
  }

  public onClicked2(agreed: boolean) {
    this.counter++;
  }


}
