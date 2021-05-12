import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Tour, TourService, TravelType} from '../../services/tourService';
import {Destination, DestinationService} from '../../services/destinationService';

@Component({
  selector: 'app-tour-manage',
  templateUrl: './tour-manage.component.html',
  styleUrls: ['./tour-manage.component.css']
})
export class TourManageComponent implements OnInit {
  tourForm = new FormGroup({});
  travelType: string[] = ['Adventure', 'Hiking', 'Surfing'];
  destinations: Destination[] = [];

  constructor(private tourService: TourService,
              private destinationService: DestinationService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
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

    this.destinationService.getAll().subscribe(response => {
      this.destinations = response;
    });
  }

  createTourForm(tour: Tour): FormGroup {
    return new FormGroup({
      id: new FormControl(tour.id),
      title: new FormControl(tour.title, Validators.required),
      days: new FormControl(tour.days, [Validators.min(1)]),
      maxPeople: new FormControl(tour.maxPeople, [Validators.min(1), Validators.max(20)]),
      minPeople: new FormControl(tour.minPeople, [Validators.min(1)]),
      description: new FormControl(tour.description),
      departure: new FormControl(tour.departure, Validators.required),
      photo: new FormControl(tour.photo, Validators.required),
      featured: new FormControl(tour.featured),
      travelType: new FormControl(tour.travelType, Validators.required),
      price: new FormControl(tour.price, [Validators.min(1)]),
      quantity: new FormControl(tour.quantity, Validators.required),
      destination: new FormControl(tour.destination, Validators.required)
    });
  }

  onSubmit(): void {
    this.tourService.save(this.tourForm.value)
      .subscribe(response => {
        return this.router.navigate(['/tours']);
      });
  }

}
