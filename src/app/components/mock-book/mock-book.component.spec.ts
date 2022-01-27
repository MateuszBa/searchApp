import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockBookComponent } from './mock-book.component';

describe('MockBookComponent', () => {
  let component: MockBookComponent;
  let fixture: ComponentFixture<MockBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
