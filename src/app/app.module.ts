import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { SingleRoomComponent } from './single-room/single-room.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RoomDetailsComponent } from './roomdetails/roomdetails.component';
import { BookingDetailsComponent } from './bookingdetails/bookingdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    SingleRoomComponent,
    LoginComponent,
    RegisterComponent,
    RoomDetailsComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],  
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
