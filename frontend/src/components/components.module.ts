import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [BrowserModule],
  exports: [
    ButtonComponent
  ]
})

export class ComponentsModule { }
