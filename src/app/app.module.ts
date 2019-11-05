import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { InputTaskComponent } from './input-task/input-task.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, InputTaskComponent, AllTasksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
