import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login"; 
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";  
import { CustomMaterialModule } from './common/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



export function provideConfig() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('1007459382692-fv3335e6ljtt0rjlpep29slrpgv0o1bm.apps.googleusercontent.com')
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("Facebook-App-Id")
    }
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    SocialLoginModule,
    FormsModule
  ],
  providers: [
    {  
      provide: AuthServiceConfig,  
      useFactory: provideConfig  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
