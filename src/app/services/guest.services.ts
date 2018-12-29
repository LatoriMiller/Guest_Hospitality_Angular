// // Access our newly created Mongoose Model
// var Guest = require('../models/guest.model.js');

// // Saving the context of this module inside the _the variable
// _this = this
// //THIS FILE EXTENDS CRUD FUNCTIONALITY TO THE DATABASE 
// // We are adding the Read functionality here
// // Let's use an Async function to get the To Do List
// // define and export  
// // getGuestss is an async function allows you to use the keyword await from E6
// // it takes the parameters(query, page, limit)
// exports.getGuests = async function(query, page, limit){

//     // We also want to set up options for the mongoose paginate
//     // Formatting options to pass later

//     var options = {
//         page,
//         limit
//     }

// //Let's create a Try and Catch function 
// //that way we have some error handling set. 
// //Waiting for the promise
    
//     try {
//         var guests = await Guest.paginate(query, options)
    
// //Once the Mongoose promise is returned 
// //we're going to go ahead and return 
// //the To Do List it has produced 

//         return guests;

//     } catch (e) {

// //If the try didn't work we're going to 
// //go ahead and let the users know what kind of 
// //Error we have
//         throw Error('Oh No! We got an error while Paginating our Guest List, so sorry!' )
//         }
// }

// //Creating the Create Function
// exports.createGuest = async function(guest){ 
//     // Creating a new Mongoose Object by using the new keyword
//      var newGuest = new Guest({
//         name: guest.name,
//         roomSize: guest.roomSize,
//         roomNum: guest.roomNum,
//         payment: guest.payment,
//         numNight: guest.numNight,
//         date: new Date(),
//         status: guest.status
//     })
//     try{
    
//         // Let's go ahead and save the Guest 
    
//         var savedGuest = await newGuest.save()
    
//         return savedGuest;

//     }catch(e){
          
//             //if we can't create a Guest we want to throw an error 
    
//             throw Error("Error while Creating Guest")
//         }
// }

// //Update Functionality 
// //You must pass all of the fields(3) it will fail and wipe out empty fields
// exports.updateGuest = async function(guest){
//     var id = guest.id

//     try{
//         //Find the old Guest Object by the Id
    
//         var oldGuest = await Guest.findById(id);
//     }catch(e){
//         throw Error("Error occured while Finding the Guest")
//     }

//     // If no old Guest Object exists return false

//     if(!oldGuest){
//         return false;
//     }

//     console.log(oldGuest)

//     //Edit the Guest Object

//     oldGuest.name = guest.name
//     oldGuest.roomSize = guest.roomSize
//     oldGuest.roomNum = guest.roomNum
//     oldGuest.payment = guest.payment
//     oldGuest.numNight = guest.numNight
//     oldGuest.status = guest.status


//     console.log(oldGuest)

//     try{
//         var savedGuest = await oldGuest.save()
//         return savedGuest;
//     }catch(e){
//         throw Error("And Error occured while updating the Guest");
//     }
// }

// //Delete Functionality
// exports.deleteGuest = async function(id){
//     // Delete the Guest
//     try{
//         var deleted = await Guest.deleteOne({_id: id})
//         if(deleted.n === 0){
//             throw Error("Guest Could not be deleted")
//         }
//         //the return object from the delete property has n and w?  
//         //checks n to determine if something was actually deleted
//         return deleted
//     }catch(e){
//         throw Error("Error Occured while Deleting the Guest")
//     }
//}

//NEW CODE 
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