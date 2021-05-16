import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Client, ClientService} from '../../services/clientService';

@Component({
  selector: 'app-client-manage',
  templateUrl: './client-manage.component.html',
  styleUrls: ['./client-manage.component.css']
})
export class ClientManageComponent implements OnInit {

  clientForm = new FormGroup({});

  constructor(private clientService: ClientService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.clientService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((result) => {
          this.clientForm = this.createClientForm(result);
        });
    } else {
      this.clientForm = this.createClientForm({} as Client);
    }
  }

  createClientForm(client: Client): FormGroup {
    return new FormGroup({
      id: new FormControl(client.id),
      name: new FormControl(client.name, Validators.required),
      email: new FormControl(client.email, Validators.required),
      phoneNumber: new FormControl(client.phoneNumber, Validators.required),
      createdAt: new FormControl(client.phoneNumber, Validators.required),
    });
  }

  onSubmit(): void {
    this.clientService.save(this.clientForm.value)
      .subscribe(response => {
        return this.router.navigate(['/clients']);
      });
  }

}
