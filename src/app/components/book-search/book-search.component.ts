import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Books} from "../../Books";

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  @Output() onSearchBook: EventEmitter<Books> = new EventEmitter();
  author!: string;
  genre!: string;
  epoch!: string;
  kind!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchSubmit(){
    const newSearchQuery = {
      author: this.author,
      genre: this.genre,
      epoch: this.epoch,
      kind: this.kind,
    }

    this.onSearchBook.emit(newSearchQuery)

    this.author = '';
    this.genre = '';
    this.epoch = '';
    this.kind = '';
  }

}
