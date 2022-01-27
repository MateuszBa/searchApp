import { Component, OnInit } from '@angular/core';
import {BOOKS} from "../../mock-books";
import {Books} from "../../Books";

@Component({
  selector: 'app-mock-book',
  templateUrl: './mock-book.component.html',
  styleUrls: ['./mock-book.component.css']
})
export class MockBookComponent implements OnInit {
  books: Books[] = BOOKS

  constructor() { }

  ngOnInit(): void {
  }

}
