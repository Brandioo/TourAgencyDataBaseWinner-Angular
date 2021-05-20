import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadService} from '../../services/uploadService';
import {Instagram, InstagramService} from '../../services/instagramService';

@Component({
  selector: 'app-instagram-manage',
  templateUrl: './instagram-manage.component.html',
  styleUrls: ['./instagram-manage.component.css']
})
export class InstagramManageComponent implements OnInit {

  instagramForm = new FormGroup({});

  constructor(private instagramService: InstagramService, private router: Router, private activeRoute: ActivatedRoute,
              private uploadService: UploadService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.instagramService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((result) => {
          this.instagramForm = this.createInstagramForm(result);
        });
    } else {
      this.instagramForm = this.createInstagramForm({} as Instagram);
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
          this.instagramForm.patchValue({
            photo: file.name,
          });
        }
      },
      (err: any) => {
        console.log(err);
        alert('Error uploading file');
      });
  }

  createInstagramForm(instagram: Instagram): FormGroup {
    return new FormGroup({
      id: new FormControl(instagram.id),
      name: new FormControl(instagram.name, Validators.required),
      photo: new FormControl(instagram.photo, Validators.required),
    });
  }

  onSubmit(): void {
    this.instagramService.save(this.instagramForm.value)
      .subscribe(response => {
        return this.router.navigate(['/instagrams']);
      });
  }

}
