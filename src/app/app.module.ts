import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartementComponent } from './apartement/apartement.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { ResidenceService } from './service/residence.service';


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
    FormsModule
  ],
  providers: [ResidenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
