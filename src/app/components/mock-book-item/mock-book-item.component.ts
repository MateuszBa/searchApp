import {Component, Input, OnInit} from '@angular/core';
import {Books} from "../../Books";

@Component({
  selector: 'app-mock-book-item',
  templateUrl: './mock-book-item.component.html',
  styleUrls: ['./mock-book-item.component.css']
})
export class MockBookItemComponent implements OnInit {
  @Input() books!: Books;

  constructor() { }

  ngOnInit(): void {
  }

}
