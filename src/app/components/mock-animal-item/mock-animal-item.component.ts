import {Component, Input, OnInit} from '@angular/core';
import {Animal} from "../../Animal";

@Component({
  selector: 'app-mock-animal-item',
  templateUrl: './mock-animal-item.component.html',
  styleUrls: ['./mock-animal-item.component.css']
})
export class MockAnimalItemComponent implements OnInit {
  @Input() animals!: Animal;
  constructor() { }

  ngOnInit(): void {
  }

}
