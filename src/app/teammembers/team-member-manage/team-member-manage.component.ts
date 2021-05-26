import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UploadService} from '../../services/uploadService';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {TeamMember, TeamMemberService} from '../../services/teamMemberService';

@Component({
  selector: 'app-team-member-manage',
  templateUrl: './team-member-manage.component.html',
  styleUrls: ['./team-member-manage.component.css']
})
export class TeamMemberManageComponent implements OnInit {

  teamMemberForm = new FormGroup({});

  constructor(private teamMemberService: TeamMemberService, private router: Router, private activeRoute: ActivatedRoute,
              private uploadService: UploadService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.teamMemberService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((result) => {
          this.teamMemberForm = this.createTeamMemberForm(result);
        });
    } else {
      this.teamMemberForm = this.createTeamMemberForm({} as TeamMember);
    }
  }

  uploadFile(event: any): void {
    const file: File | null = event.target.files.item(0);
    if (!file) {
      return;
    }

    this.uploadService.upload(file).subscribe(
      (httpEvent: any) => {
        if (httpEvent.type === HttpEventType.UploadProgress) {
          console.log(Math.round(100 * event.loaded / event.total));
        } else if (httpEvent instanceof HttpResponse) {
          this.teamMemberForm.patchValue({
            photo: file.name,
          });
        }
      },
      (err: any) => {
        console.log(err);
        alert('Error uploading file');
      });
  }

  createTeamMemberForm(teamMember: TeamMember): FormGroup {
    return new FormGroup({
      id: new FormControl(teamMember.id),
      name: new FormControl(teamMember.name, Validators.required),
      photo: new FormControl(teamMember.photo, Validators.required),
      role: new FormControl(teamMember.role, Validators.required),
    });
  }

  onSubmit(): void {
    this.teamMemberService.save(this.teamMemberForm.value)
      .subscribe(response => {
        return this.router.navigate(['/teamMembers']);
      });
  }

}
