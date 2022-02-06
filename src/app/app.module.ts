import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { BooksComponent } from './components/books/books.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookSearchComponent } from './components/book-search/book-search.component';

import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MockBookComponent } from './components/mock-book/mock-book.component';
import { MockBookItemComponent } from './components/mock-book-item/mock-book-item.component';
import { AnimalItemComponent } from './components/animal-item/animal-item.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalsSearchComponent } from './components/animals-search/animals-search.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'books', component: BooksComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'mock', component: MockBookComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BooksComponent,
    BookItemComponent,
    BookSearchComponent,
    MockBookComponent,
    MockBookItemComponent,
    AnimalItemComponent,
    AnimalsComponent,
    AnimalsSearchComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
