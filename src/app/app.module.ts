import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuestService } from './services/guest.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GuestlistComponent } from './guestlist/guestlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    GuestComponent,
    AboutComponent,
    ReservationComponent,
    GuestlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    GuestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
