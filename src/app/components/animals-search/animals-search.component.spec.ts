import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsSearchComponent } from './animals-search.component';

describe('AnimalsSearchComponent', () => {
  let component: AnimalsSearchComponent;
  let fixture: ComponentFixture<AnimalsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
