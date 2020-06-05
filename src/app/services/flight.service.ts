import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private fireStore: AngularFirestore) { }

  getFlights(){
    return this.fireStore.collection<Flight>(
      'flights', ref => ref.orderBy('departureTime')
      ).snapshotChanges();
  }
}
