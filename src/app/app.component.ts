import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flight-resv-app';
  user$: Observable<firebase.User> = this.auth.user$;
  isLoggedIn:boolean = false;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ){
    this.isLoggedIn = auth.isLoggedIn();
  }
}