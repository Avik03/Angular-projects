import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<
    Observable<firebase.User>
  > = new BehaviorSubject<Observable<firebase.User>>(null);

  user$ = this.user
        .asObservable()
        .pipe(switchMap(
          (user: Observable<firebase.User>) => user)
        );

  constructor(private afAuth: AngularFireAuth) { 
    this.user.next(this.afAuth.authState);
  }

  loginViaGoogle(): Observable<auth.UserCredential> {
    return from(this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()));
  }

  logout(): Observable<void> {
    this.afAuth.signOut().then((res) => {
      console.log(res);
    })
    console.log(this.afAuth.signOut());
    return from(this.afAuth.signOut());
  }

  isLoggedIn(){
    return this.user$ !== null;
  }
}
