import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { CustomButtonComponent } from './custom-button.component';



@NgModule({
  declarations: [
    CustomButtonComponent

  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  exports: [
    CustomButtonComponent,
  ]
})
export class CustomButtonModule { }
