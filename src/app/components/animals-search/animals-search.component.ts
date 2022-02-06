import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-animals-search',
  templateUrl: './animals-search.component.html',
  styleUrls: ['./animals-search.component.css']
})
export class AnimalsSearchComponent implements OnInit {
  @Output() onAnimalSearch: EventEmitter<any> = new EventEmitter();
  cnt!: number;

  constructor() { }

  ngOnInit(): void {
  }


  onSearchSubmit(){
    const newSearchQuery = {
      cnt: this.cnt
    }
    this.onAnimalSearch.emit(newSearchQuery)
  }
}
