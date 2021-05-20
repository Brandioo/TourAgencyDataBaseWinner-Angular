import { Component, OnInit } from '@angular/core';
import {Blog, BlogService} from '../../services/blogService';
@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.css']
})
export class BlogTableComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(private blogService: BlogService) {
  }
  ngOnInit(): void {
    this.updateBlog();
  }
  updateBlog(): void {
    this.blogService.getAll().subscribe(response => {
      this.blogs = response;
    });
  }
  onDeleteBlog(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.blogService.delete(id).subscribe(response => {
        this.updateBlog();
      });
    }
  }
}
