import { Component, OnInit, Input} from '@angular/core';
import {Books} from "../../Books";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() books!: Books;

  constructor() { }

  ngOnInit(): void {
  }

}
