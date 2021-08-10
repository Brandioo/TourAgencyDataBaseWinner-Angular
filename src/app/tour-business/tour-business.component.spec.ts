import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourBusinessComponent } from './tour-business.component';

describe('TourBusinessComponent', () => {
  let component: TourBusinessComponent;
  let fixture: ComponentFixture<TourBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
