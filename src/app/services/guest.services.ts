import Guest from '../models/guest.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class GuestService {

  api_url = 'http://localhost:3000';
  guestUrl = `${this.api_url}/api/guests`;

  constructor(private http: HttpClient) {}
//Builds the raw CRUD functionality to the model
//Create guest, takes a Guest Object (similar to the autowired in STS)

createGuest(guest: Guest): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.guestUrl}`, guest);
  }
getGuests(): Observable<Guest[]>{
    return this.http.get(this.guestUrl)
    .pipe(map(res  => {
        //Maps the response object sent from the server
        //pipe the output of the first function to this success function
        return res["data"].docs as Guest[];
    }))
}
editGuest(guest:Guest){
    let editUrl = `${this.guestUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, guest);
}
deleteGuest(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.guestUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
        return res;
    }))
}
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
}

}