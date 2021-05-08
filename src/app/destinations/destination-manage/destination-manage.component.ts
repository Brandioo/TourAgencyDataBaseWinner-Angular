import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Client, ClientService} from '../../services/clientService';
import {ActivatedRoute, Router} from '@angular/router';
import {Destination, DestinationService} from '../../services/destinationService';

@Component({
  selector: 'app-destination-manage',
  templateUrl: './destination-manage.component.html',
  styleUrls: ['./destination-manage.component.css']
})
export class DestinationManageComponent implements OnInit {

  destinationForm = new FormGroup({});

  constructor(private destinationService: DestinationService, private router: Router, private activeRoute: ActivatedRoute) {
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

  createDestinationForm(destination: Destination): FormGroup {
    return new FormGroup({
      id: new FormControl(destination.id),
      name: new FormControl(destination.name, Validators.required),
    });
  }

  onSubmit(): void {
    this.destinationService.save(this.destinationForm.value)
      .subscribe(response => {
        return this.router.navigate(['/destinations']);
      });
  }

}
