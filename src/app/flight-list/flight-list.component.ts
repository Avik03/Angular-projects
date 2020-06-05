import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  flights: Flight[];
  flighrArr = new Array();

  constructor(private flightService:FlightService) { 
    this.flightService.getFlights().subscribe( data => {
      this.flights = data.map( e => {
        return e.payload.doc.data() as Flight
      })

      console.log(this.flights);
    })
  }
  //{{flight.departureTime | date:'shortTime'}}
  getTimeStamp(timeStamp){
    return "02:45PM"
  }

  ngOnInit(): void {
    

    
  }

}
