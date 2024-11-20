import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartementComponent } from './apartement/apartement.component';
import { ResidenceComponent } from './residence/residence.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { ResidenceService } from './service/residence.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    ApartementComponent,
    ResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [ResidenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
