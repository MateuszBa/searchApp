import { Component, OnInit } from '@angular/core';
import {Animal} from "../../Animal";
import {AnimalsService} from "../../services/animals.service";


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: Animal[] = []
  cnt!: Animal

  constructor(private animalService: AnimalsService) { }

  ngOnInit(): void {
  }

  searchAnimals(cnt: Animal){
    this.animalService.getAnimals(cnt).subscribe((animals) => this.animals = animals)
  }
}
