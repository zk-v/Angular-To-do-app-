import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputTaskComponent } from './input-task/input-task.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, InputTaskComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
