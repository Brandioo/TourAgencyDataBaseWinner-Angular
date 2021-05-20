import {Component, OnInit} from '@angular/core';
import {Destination, DestinationService} from '../../services/destinationService';
import {Instagram, InstagramService} from '../../services/instagramService';

@Component({
  selector: 'app-instagram-table',
  templateUrl: './instagram-table.component.html',
  styleUrls: ['./instagram-table.component.css']
})
export class InstagramTableComponent implements OnInit {
  instagrams: Instagram[] = [];

  constructor(private instagramService: InstagramService) {
  }

  ngOnInit(): void {
    this.updateInstagrams();
  }

  updateInstagrams(): void {
    this.instagramService.getAll().subscribe(response => {
      this.instagrams = response;
    });
  }

  onDeleteInstagram(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.instagramService.delete(id).subscribe(response => {
        this.updateInstagrams();
      });
    }
  }
}
