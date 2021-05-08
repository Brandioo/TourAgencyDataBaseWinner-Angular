import {Component, OnInit} from '@angular/core';
import {Destination, DestinationService} from '../../services/destinationService';

@Component({
  selector: 'app-destination-table',
  templateUrl: './destination-table.component.html',
  styleUrls: ['./destination-table.component.css']
})
export class DestinationTableComponent implements OnInit {
  destinations: Destination[] = [];

  constructor(private destinationService: DestinationService) {
  }

  ngOnInit(): void {
    this.updateDestinations();
  }

  updateDestinations(): void {
    this.destinationService.getAll().subscribe(response => {
      this.destinations = response;
    });
  }

  onDeleteDestination(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.destinationService.delete(id).subscribe(response => {
        this.updateDestinations();
      });
    }
  }
}
