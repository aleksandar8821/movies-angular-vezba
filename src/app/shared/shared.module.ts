import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie.service';
import { MovieRowComponent } from '../movie-row/movie-row.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovieRowComponent],
  providers: [MovieService],
  exports: [MovieRowComponent]
})
export class SharedModule { }
