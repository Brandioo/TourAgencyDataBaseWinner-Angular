import { Component, OnInit } from '@angular/core';
import {TeamMember, TeamMemberService} from '../../services/teamMemberService';

@Component({
  selector: 'app-team-member-table',
  templateUrl: './team-member-table.component.html',
  styleUrls: ['./team-member-table.component.css']
})
export class TeamMemberTableComponent implements OnInit {

  teamMembers: TeamMember[] = [];


  constructor(private teamMemberService: TeamMemberService) {
  }

  ngOnInit(): void {
    this.updateTeamMembers();
  }

  updateTeamMembers(): void {
    this.teamMemberService.getAll().subscribe(response => {
      this.teamMembers = response;
    });
  }

  onDeleteTeamMembers(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.teamMemberService.delete(id).subscribe(response => {
        this.updateTeamMembers();
      });
    }
  }

}
