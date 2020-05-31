import { Component, OnInit } from '@angular/core';
import { Socialusers } from '../models/socialusers';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  response;
  socialUser = new Socialusers(); 
  private router: Router;
  /*user: SocialUser;*/

  constructor(private authService: AuthService) { 
    
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.Savesresponse(user)
    });
  }

  public socialSignIn(socialProvider: string):void {  
    let socialPlatformProvider;  
    if (socialProvider === 'facebook') {  
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);  
    } else if (socialProvider === 'google') {  
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }  

    
    /*this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log(socialProvider, socialusers);  
      console.log(socialusers);  
      this.Savesresponse(socialusers);  
    }); */ 
  } 

  Savesresponse(socialusers: Socialusers) {  
    /*this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {  
      debugger;  
      console.log(res);  
      this.socialusers=res;  
      this.response = res.userDetail;  
      localStorage.setItem('socialusers', JSON.stringify( this.socialusers));  
      console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));  
      this.router.navigate([`/Dashboard`]);  
    }) */ 
    this.socialUser = socialusers;
    localStorage.setItem('socialusers', JSON.stringify( this.socialUser)); 
  }  
  
  signOut(): void {
    this.authService.signOut(true);
    this.socialUser = null;
    localStorage.removeItem('socialusers');
  }


}
