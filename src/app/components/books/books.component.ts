import { Component, OnInit } from '@angular/core';
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
    this.bookService.getBooks(books).subscribe((books) => this.books = books);
  }
}
