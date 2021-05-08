import { Component, OnInit } from '@angular/core';
import {Tour, TourService} from '../../services/tourService';

@Component({
  selector: 'app-tour-table',
  templateUrl: './tour-table.component.html',
  styleUrls: ['./tour-table.component.css']
})
export class TourTableComponent implements OnInit {

  tours: Tour[] = [];

  constructor(private tourService: TourService) {
  }

  ngOnInit(): void {
    this.updateTours();
  }

  updateTours(): void {
    this.tourService.getAll().subscribe(response => {
      this.tours = response;
    });
  }

  onDeleteTours(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.tourService.delete(id).subscribe(response => {
        this.updateTours();
      });
    }
  }

}
