import { Component, OnInit, Input } from '@angular/core';
import {Animal} from "../../Animal";

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css']
})
export class AnimalItemComponent implements OnInit {
  @Input() animals!: Animal;

  constructor() { }

  ngOnInit(): void {
  }

}
