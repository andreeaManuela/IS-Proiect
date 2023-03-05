
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule,routingsComponents } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { CategoriesComponent } from './categories/categories.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ProduseComponent } from './produse/produse.component';
import { CartComponent } from './cart/cart.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";




@NgModule({
  declarations: [
    AppComponent,
    routingsComponents,
    NavbarComponent,
    ProduseComponent,
    ForgotComponent,
    CartComponent,


  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
