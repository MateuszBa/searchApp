import { Component, OnInit } from '@angular/core';
import {Animal} from "../../Animal";
import {ANIMALS} from "../../mock-animals";

@Component({
  selector: 'app-mock-animals',
  templateUrl: './mock-animals.component.html',
  styleUrls: ['./mock-animals.component.css']
})
export class MockAnimalsComponent implements OnInit {
  animals: Animal[] = ANIMALS

  constructor() { }

  ngOnInit(): void {
  }

}
