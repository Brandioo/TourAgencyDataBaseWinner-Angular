import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UploadService} from '../../services/uploadService';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Banner, BannerService} from '../../services/bannerService';

@Component({
  selector: 'app-banner-manage',
  templateUrl: './banner-manage.component.html',
  styleUrls: ['./banner-manage.component.css']
})
export class BannerManageComponent implements OnInit {

  bannerForm = new FormGroup({});

  constructor(private bannerService: BannerService, private router: Router, private activeRoute: ActivatedRoute,
              private uploadService: UploadService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.bannerService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((result) => {
          this.bannerForm = this.createBannerForm(result);
        });
    } else {
      this.bannerForm = this.createBannerForm({} as Banner);
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
          this.bannerForm.patchValue({
            photo: file.name,
          });
        }
      },
      (err: any) => {
        console.log(err);
        alert('Error uploading file');
      });
  }

  createBannerForm(banner: Banner): FormGroup {
    return new FormGroup({
      id: new FormControl(banner.id),
      name: new FormControl(banner.name, Validators.required),
      photo: new FormControl(banner.photo, Validators.required),
    });
  }

  onSubmit(): void {
    this.bannerService.save(this.bannerForm.value)
      .subscribe(response => {
        return this.router.navigate(['/banners']);
      });
  }

}
