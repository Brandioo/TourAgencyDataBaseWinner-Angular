import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Tour, TourService, TravelType} from '../../services/tourService';

@Component({
  selector: 'app-tour-manage',
  templateUrl: './tour-manage.component.html',
  styleUrls: ['./tour-manage.component.css']
})
export class TourManageComponent implements OnInit {

  tourForm = new FormGroup({});

  travelType: TravelTypeViewModel[] = [
    {id: TravelType.Adventure, type: 'Adventure'},
    {id: TravelType.Hiking, type: 'Hiking'},
    {id: TravelType.Surfing, type: 'Surfing'}
  ];

  constructor(private tourService: TourService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.tourService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((result) => {
          this.tourForm = this.createTourForm(result);
        });
    } else {
      this.tourForm = this.createTourForm({} as Tour);
    }
  }

  createTourForm(tour: Tour): FormGroup {
    return new FormGroup({
      id: new FormControl(tour.id),
      title: new FormControl(tour.title, Validators.required),
      days: new FormControl(tour.days),
      maxPeople: new FormControl(tour.maxPeople),
      minPeople: new FormControl(tour.minPeople),
      description: new FormControl(tour.description),
      departure: new FormControl(tour.departure),
      photo: new FormControl(tour.photo),
      featured: new FormControl(tour.featured),
      travelType: new FormControl(tour.travelType),
      price: new FormControl(tour.price),
      quantity: new FormControl(tour.quantity),
    });
  }

  onSubmit(): void {
    this.tourService.save(this.tourForm.value)
      .subscribe(response => {
        return this.router.navigate(['/tours']);
      });
  }
}

interface TravelTypeViewModel {
  id: number;
  type: string;
}
