import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Reservation, ReservationService} from '../../services/reservationService';
import {Tour, TourService} from '../../services/tourService';
import {Client, ClientService} from '../../services/clientService';
import {Destination} from '../../services/destinationService';

@Component({
  selector: 'app-reservation-manage',
  templateUrl: './reservation-manage.component.html',
  styleUrls: ['./reservation-manage.component.css']
})
export class ReservationManageComponent implements OnInit {

  reservationForm = new FormGroup({});
  tours: Tour[] = [];
  clients: Tour[] = [];

  constructor(private reservationService: ReservationService,
              private tourService: TourService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.reservationService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((result) => {
          this.reservationForm = this.createReservationForm(result);
        });
    } else {
      this.reservationForm = this.createReservationForm({
        client: {},
        tour: {}
      } as Reservation);
    }


    this.tourService.getAll().subscribe(response => {
      this.tours = response;
    });

    this.tourService.getAll().subscribe(response => {
      this.clients = response;
    });
  }

  createReservationForm(reservation: Reservation): FormGroup {
    return new FormGroup({
      id: new FormControl(reservation.id),
      tourId: new FormControl(reservation.tour.id, Validators.required),
      name: new FormControl(reservation.client.name, Validators.required),
      email: new FormControl(reservation.client.email, Validators.required),
      phoneNumber: new FormControl(reservation.client.phoneNumber, Validators.required),
      finalPrice: new FormControl(reservation.finalPrice, Validators.required),
      comment: new FormControl(reservation.comment, Validators.required),
      checkInDate: new FormControl(reservation.checkInDate, Validators.required),
      checkOutDate: new FormControl(reservation.checkOutDate, Validators.required),
    })
      ;
  }

  updatePrice(event: any): void {
    const tourSelectedId = event.currentTarget.value;
    this.tourService.getById(tourSelectedId).subscribe(response => {
      this.reservationForm.patchValue({
        finalPrice: response.price,
      });
    });
  }

  onSubmit(): void {
    this.reservationService.save(this.reservationForm.value)
      .subscribe(response => {
        return this.router.navigate(['/reservations']);
      });
  }
}
