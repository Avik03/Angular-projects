import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, catchError } from 'rxjs/operators';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$: Observable<firebase.User> = this.auth.user$;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { 
  }

  ngOnInit(): void {
  }

  public socialSignIn() {  
    this.auth.loginViaGoogle()
    .pipe(
      take(1),
      catchError((error) => {
        console.log(error.message);
        return EMPTY;
      })
    ).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/flightlist']);
    })
  }

  signOut(): void {
    this.auth
      .logout()
      .subscribe((response) => {
        //this.router.navigate([`/${FEED}`]);
        console.log("sign out");
        console.log(response);
        console.log(this.user$);
      });
  }


}
