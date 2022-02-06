import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Books} from "../Books";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'https://wolnelektury.pl/api/';

  constructor(private http: HttpClient) { }

  getBooks(books: Books): Observable<Books[]>{
    let url = this.apiUrl
    if (typeof books["author"]!= 'undefined' && books["author"]){
      url = `${url}authors/${books["author"]?.toLowerCase().replace(/\s/g, '-')}/`
    }
    if (typeof books["genre"]!= 'undefined' && books["genre"]){
      url = `${url}genres/${books["genre"].toLowerCase()}/`
    }
    if (typeof books["epoch"]!= 'undefined' && books["epoch"]){
      url = `${url}epochs/${books["epoch"].toLowerCase()}/`
    }
    if (typeof books["kind"]!= 'undefined' && books["kind"]){
      url = `${url}kinds/${books["kind"].toLowerCase()}/`
    }
    console.log(this.http.get<Books[]>(`${url}books/`))
    this.http.get<Books[]>(`${url}books/`).subscribe(data => console.log('success', data),
      error => alert("Brak danych"))
    return this.http.get<Books[]>(`${url}books/`)
  }
}
