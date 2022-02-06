import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAnimalItemComponent } from './mock-animal-item.component';

describe('MockAnimalItemComponent', () => {
  let component: MockAnimalItemComponent;
  let fixture: ComponentFixture<MockAnimalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockAnimalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockAnimalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
