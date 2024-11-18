import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../roomservice.service';  // Your service to fetch room details

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomDetailsComponent implements OnInit {
  room: any; // Room details
  reviews: any[] = []; // Reviews for the room
  newReview: string = ''; // For two-way binding of new review text
  roomId: number | null = null; // Room ID from the route

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    // Get the room ID from the URL
    this.roomId = +this.route.snapshot.paramMap.get('id')!;
    if (this.roomId) {
      this.fetchRoomDetails(this.roomId);
      this.fetchRoomReviews(this.roomId);
    }
  }

  // Fetch room details from the backend
  fetchRoomDetails(id: number): void {
    this.roomService.getRoomById(id).subscribe(
      (data: any) => {
        this.room = data;
      },
      (error: any) => {
        console.error('Error fetching room details:', error);
      }
    );
  }

  // Fetch reviews for the room from the backend
  fetchRoomReviews(id: number): void {
    this.roomService.getRoomReviews(id).subscribe(
      (data: any[]) => {
        this.reviews = data;
      },
      (error: any) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }

  // Submit a new review
  submitReview(): void {
    if (this.newReview.trim() && this.roomId) {
      const review = {
        userName: 'Current User', // Replace with actual logged-in user's name
        comment: this.newReview,
        date: new Date(),
        roomId: this.roomId, // Attach the room ID for reference
      };

      this.roomService.postRoomReview(review).subscribe(
        (response: any) => {
          this.reviews.push(review); // Add the new review to the list
          this.newReview = ''; // Clear the input field
        },
        (error: any) => {
          console.error('Error posting review:', error);
        }
      );
    }
  }
}


