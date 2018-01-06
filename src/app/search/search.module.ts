import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from '../search-page/search-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [SearchComponent, SearchPageComponent],
  exports: [SearchComponent],
})
export class SearchModule { }
