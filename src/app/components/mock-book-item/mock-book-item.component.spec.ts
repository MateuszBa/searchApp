import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockBookItemComponent } from './mock-book-item.component';

describe('MockBookItemComponent', () => {
  let component: MockBookItemComponent;
  let fixture: ComponentFixture<MockBookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockBookItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
