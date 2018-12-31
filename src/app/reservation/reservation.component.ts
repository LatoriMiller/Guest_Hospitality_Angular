import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { GuestService } from '../services/guest.services';
import Guest from '../models/guest.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  //Private guestservice will be injected into the component by Angular Dependency Injector
  constructor(private guestService: GuestService){}

  //Declaring the new guest Object and initilizing it
  public newGuest: Guest = new Guest()

  //An Empty list for the visible guest list
  guestsList: Guest[];
  //sets it to any empty array to use .includes method
  editGuests: Guest[] = [];


  ngOnInit(): void {
    //At component initialization the 
    this.guestService.getGuests()
      .subscribe(guests => {
        //assign the guestlist property to the proper http response
        this.guestsList = guests
        console.log(guests)
      })
  }
  //This method will get called on Create button event
  //create the new guest in db then pushes it to list and clears form
  create() {
    this.guestService.createGuest(this.newGuest)
      .subscribe((res) => {
        this.guestsList.push(res.data)
        this.newGuest = new Guest()
      })
  }

  

}
