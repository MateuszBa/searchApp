import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Animal} from "../Animal";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private apiUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/';

  constructor(private http: HttpClient) { }

  getAnimals(cnt: Animal): Observable<Animal[]>{
    console.log()
    if(typeof cnt.cnt === "number"){
      if (cnt.cnt > 10 || cnt.cnt < 1){
        alert('Maxximum value is 10 and minimum is 1')
      }
    }

    return this.http.get<Animal[]>(`${this.apiUrl}${cnt.cnt}`)
  }
}
