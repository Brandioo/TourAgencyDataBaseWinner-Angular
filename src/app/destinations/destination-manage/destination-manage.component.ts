import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Destination, DestinationService} from '../../services/destinationService';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadService} from '../../services/uploadService';

@Component({
  selector: 'app-destination-manage',
  templateUrl: './destination-manage.component.html',
  styleUrls: ['./destination-manage.component.css']
})
export class DestinationManageComponent implements OnInit {

  destinationForm = new FormGroup({});

  constructor(private destinationService: DestinationService, private router: Router, private activeRoute: ActivatedRoute,
              private uploadService: UploadService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.destinationService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((result) => {
          this.destinationForm = this.createDestinationForm(result);
        });
    } else {
      this.destinationForm = this.createDestinationForm({} as Destination);
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
          this.destinationForm.patchValue({
            photo: file.name,
          });
        }
      },
      (err: any) => {
        console.log(err);
        alert('Error uploading file');
      });
  }

  createDestinationForm(destination: Destination): FormGroup {
    return new FormGroup({
      id: new FormControl(destination.id),
      name: new FormControl(destination.name, Validators.required),
      photo: new FormControl(destination.photo, Validators.required),
    });
  }

  onSubmit(): void {
    this.destinationService.save(this.destinationForm.value)
      .subscribe(response => {
        return this.router.navigate(['/destinations']);
      });
  }

}
