import { Component, OnInit } from '@angular/core';
import { Socialusers } from '../models/socialusers';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(
    
    ) { 
    
  }

  ngOnInit(): void {
  }

  

}
