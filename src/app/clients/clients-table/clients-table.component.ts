import { Component, OnInit } from '@angular/core';
import {Client, ClientService} from '../../services/clientService';
@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {
  clients: Client[] = [];
  constructor(private clientService: ClientService) {
  }
  ngOnInit(): void {
    this.updateClients();
  }
  updateClients(): void {
    this.clientService.getAll().subscribe(response => {
      this.clients = response;
    });
  }
  onDeleteClient(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.clientService.delete(id).subscribe(response => {
        this.updateClients();
      });
    }
  }
}
