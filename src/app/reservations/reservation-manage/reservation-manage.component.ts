import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Reservation, ReservationService} from '../../services/reservationService';
import {Tour, TourService} from '../../services/tourService';
import {Client, ClientService} from '../../services/clientService';

@Component({
  selector: 'app-reservation-manage',
  templateUrl: './reservation-manage.component.html',
  styleUrls: ['./reservation-manage.component.css']
})
export class ReservationManageComponent implements OnInit {

  reservationForm = new FormGroup({});
  tours: Tour[] = [];
  clients: Client[] = [];

  constructor(private reservationService: ReservationService,
              private tourService: TourService,
              private clientService: ClientService,
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
      this.reservationForm = this.createReservationForm({} as Reservation);
    }

    this.tourService.getAll().subscribe(response => {
      this.tours = response;
    });

    this.clientService.getAll().subscribe(response => {
      this.clients = response;
    });
  }

  createReservationForm(reservation: Reservation): FormGroup {
    return new FormGroup({
      id: new FormControl(reservation.id),
      tour: new FormControl(reservation.tour, Validators.required),
      client: new FormControl(reservation.client, Validators.required),
      finalPrice: new FormControl(reservation.tour.price, Validators.required),
      comment: new FormControl(reservation.comment, Validators.required),
      checkInDate: new FormControl(reservation.checkInDate, Validators.required),
      checkOutDate: new FormControl(reservation.checkOutDate, Validators.required),
    })
      ;
  }

  onSubmit(): void {
    this.reservationService.save(this.reservationForm.value)
      .subscribe(response => {
        return this.router.navigate(['/reservations']);
      });
  }

}
