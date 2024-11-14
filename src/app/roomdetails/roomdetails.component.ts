import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../roomservice.service';  // Your service to fetch room details

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomDetailsComponent implements OnInit {
  room: any;  // Use any for plain JavaScript object

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    const roomId = +this.route.snapshot.paramMap.get('id')!;  // Get the room ID from the URL
    this.roomService.getRoomById(roomId).subscribe(
      (data: any) => {  // Directly receive plain object data
        this.room = data;  // Store the room data
      },
      (      error: any) => {
        console.error('Error fetching room details:', error);
      }
    );
  }

  // Method to handle booking logic (you can expand this as needed)
  bookRoom() {
    console.log('Room booked:', this.room?.hotelName);
  }
}
