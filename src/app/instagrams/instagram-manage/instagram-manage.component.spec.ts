import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramManageComponent } from './instagram-manage.component';

describe('InstagramManageComponent', () => {
  let component: InstagramManageComponent;
  let fixture: ComponentFixture<InstagramManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
