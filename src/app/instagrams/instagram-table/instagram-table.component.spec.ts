import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramTableComponent } from './instagram-table.component';

describe('InstagramTableComponent', () => {
  let component: InstagramTableComponent;
  let fixture: ComponentFixture<InstagramTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
