import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBusinessComponent } from './restaurant-business.component';

describe('RestaurantBusinessComponent', () => {
  let component: RestaurantBusinessComponent;
  let fixture: ComponentFixture<RestaurantBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
