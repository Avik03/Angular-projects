import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { CustomMaterialModule } from './common/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FlightService } from './services/flight.service';
import { TimestampPipe } from './flight-list/timestamp.pipe';

/*export function provideConfig() {
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
}*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlightListComponent,
    NavbarComponent,
    TimestampPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
