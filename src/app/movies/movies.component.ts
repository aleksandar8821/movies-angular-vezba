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
  public selectedAny = false // ovaj selectedAny moras imati, jer ako selektujes samo neke filmove i stisnes Deselect all, ti navodno podesavas selectedAll na false koji je vec podesen na false po defaultu, tako da ga NE MENJAS, a ako ga ne menjas ngOnChanges se nece okinuti!
  public selectedAll = false

  // za sortiranje
  public order = 'name';
  public reverse = false;

  // za skrolovanje
  public itemsToShow: Array<Movie>
  public isFullListDisplayed: boolean = false;
  private noOfItemsToShowInitially: number = 2;
  private itemsToLoad: number = 2


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  	this.movieService.getMovies().subscribe(data => {
  		this.movies = data
  		console.log(this.movies);
      this.itemsToShow = this.movies.slice(0, this.noOfItemsToShowInitially);
  	})


  }

  

  public onClicked2(selected: boolean){
    this.counter++
    this.selectedAny = true
  }

  public selectAll(){
    this.counter = this.movies.length
// ovo ti je sad suvisno, jer vec u okviru buttona imas click handler koji ti podesava selectedAll na true, al moze i ovako:
    this.selectedAll = true 
  }

  public deselectAll() {
    this.counter = 0;
// ovo ti je sad suvisno, jer vec u okviru buttona imas click handler koji ti podesava selectedAll i selectedAny na false, al moze i ovako:
    this.selectedAny = false
    this.selectedAll = false
  }


  // install pipe with npm install  ngx-order-pipe --save
  // documentation https://github.com/VadimDez/ngx-order-pipe

  public setOrder(value: string) {
      if (this.order === value) {
          this.reverse = !this.reverse;
      }
      this.order = value;
  }

  // skrolovanje
  // instalacija npm install ngx-infinite-scroll --save
  // dokumentacija: https://www.npmjs.com/package/ngx-infinite-scroll, kao i https://github.com/orizens/ngx-infinite-scroll
  
  // kod koji je koriscen ALI promenjen malo za moje potrebe https://stackoverflow.com/questions/47326279/how-to-implement-on-scrolldown-pagination-in-angular-4
  
  onScroll() {
    if(this.noOfItemsToShowInitially <= this.movies.length) {
      this.noOfItemsToShowInitially += this.itemsToLoad;
      this.itemsToShow = this.movies.slice(0, this.noOfItemsToShowInitially);
      console.log("scrolled");
    } else {
      this.isFullListDisplayed = true;
    }
  }

}
