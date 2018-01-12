import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../shared/models/movie';


@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {

	@Input() movieRow: Movie
	@Output() onClicked = new EventEmitter<boolean>()

	private clicked = false

  constructor() { }

  ngOnInit() {
  }

  public addMovie(selected: boolean){
  	this.onClicked.emit(selected)
  	this.clicked = true
  }
}
