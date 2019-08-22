import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InputComponent } from './input/input.component';
import {FormsModule} from '@angular/forms';
import { CalcComponent } from './calc/calc.component';
import { MarkComponent } from './mark/mark.component'

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ViewComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    InputComponent,
    CalcComponent,
    MarkComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
