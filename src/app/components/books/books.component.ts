import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/books.service";
import {Books} from "../../Books";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Books[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {}

  searchBooks(books: Books){
    if (this.books){
      localStorage.setItem('lastSearch', JSON.stringify(this.books))
    }
    let api_data = this.bookService.getBooks(books)
    api_data.subscribe((books) => this.books = books);

  }

  lastSearch(){
    this.books = JSON.parse(<string>localStorage.getItem('lastSearch'))
  }

}
