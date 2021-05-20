import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UploadService} from '../../services/uploadService';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Blog, BlogService} from '../../services/blogService';

@Component({
  selector: 'app-blog-manage',
  templateUrl: './blog-manage.component.html',
  styleUrls: ['./blog-manage.component.css']
})
export class BlogManageComponent implements OnInit {
  blogForm = new FormGroup({});
  constructor(private blogService: BlogService , private router: Router, private activeRoute: ActivatedRoute,
              private uploadService: UploadService) {
  }
  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.blogService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((result) => {
          this.blogForm = this.createBlogForm(result);
        });
    } else {
      this.blogForm = this.createBlogForm({} as Blog);
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
          this.blogForm.patchValue({
            photo: file.name,
          });
        }
      },
      (err: any) => {
        console.log(err);
        alert('Error uploading file');
      });
  }
  createBlogForm(blog: Blog): FormGroup {
    return new FormGroup({
      id: new FormControl(blog.id),
      title: new FormControl(blog.title, Validators.required),
      author: new FormControl(blog.author, Validators.required),
      content: new FormControl(blog.content, Validators.required),
      photo: new FormControl(blog.photo, Validators.required),
    });
  }
  onSubmit(): void {
    this.blogService.save(this.blogForm.value)
      .subscribe(response => {
        return this.router.navigate(['/blogs']);
      });
  }
}
