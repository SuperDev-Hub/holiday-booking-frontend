import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';      // Import HomeComponent
import { BookingComponent } from './booking/booking.component';  // Import BookingComponent
import { SingleRoomComponent } from './single-room/single-room.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RoomDetailsComponent } from './roomdetails/roomdetails.component';

// Define routes for the Home and Booking components
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },   
  { path: 'home', component: HomeComponent },              
  { path: 'booking', component: BookingComponent },
  { path: 'roomdetails/:id', component: RoomDetailsComponent },
  { path: 'single room', component: SingleRoomComponent }        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
