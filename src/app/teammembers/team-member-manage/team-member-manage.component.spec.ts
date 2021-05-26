import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberManageComponent } from './team-member-manage.component';

describe('TeamMemberManageComponent', () => {
  let component: TeamMemberManageComponent;
  let fixture: ComponentFixture<TeamMemberManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
