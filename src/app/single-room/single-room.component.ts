// single-room.component.ts
import { Component, OnInit } from '@angular/core';
import { SingleRoomService } from '../singleroom.service';

@Component({
  selector: 'app-single-room',
  templateUrl: './single-room.component.html',
  styleUrls: ['./single-room.component.css']
})
export class SingleRoomComponent implements OnInit {
  hotels: any[] = [];

  constructor(private singleRoomService: SingleRoomService) {}

  ngOnInit(): void {
    this.singleRoomService.getHotels().subscribe(data => {
      this.hotels = data;
    });
  }
}
