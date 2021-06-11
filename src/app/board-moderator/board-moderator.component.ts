import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  // tslint:disable-next-line:variable-name
   _content: string | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this._content = data;
      },
      err => {
        this._content = JSON.parse(err.error).message;
      }
    );
  }

}
