import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAnimalsComponent } from './mock-animals.component';

describe('MockAnimalsComponent', () => {
  let component: MockAnimalsComponent;
  let fixture: ComponentFixture<MockAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
