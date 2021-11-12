import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import { MastermanagementComponent } from './components/mastermanagement/mastermanagement.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MfaloginComponent } from './mfalogin/mfalogin.component';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './common/header/header.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MfaloginComponent,
    UsersComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
