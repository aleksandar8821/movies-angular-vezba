import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Movie } from '../shared/models/movie';


@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {

	@Input() movieRow: Movie
	@Output() onClicked = new EventEmitter<boolean>()
	@Input() selectedAll: boolean
	@Input() selectedAny: boolean

	private clicked = false

  constructor() { }

  ngOnInit() {
  	console.log(this.clicked)
  }

  ngOnChanges(){
  	// ovi iz Vivify su ovo zakomplikovali, to moze ovako da se uradi ko sto sam ja:
  	if(this.selectedAny === false)
  		this.clicked = false
  	if(this.selectedAll === true)
  		this.clicked = true
  }

  public addMovie(selected: boolean){
  	this.onClicked.emit(selected)
  	this.clicked = true
  }
}
