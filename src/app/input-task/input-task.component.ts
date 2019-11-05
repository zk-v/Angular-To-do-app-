import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent implements OnInit {
  title = "";
  message = "";
  taskStage = "Started";
  task = {};
  dateTask;
  tasks = [];

  constructor() {
    
   }

  ngOnInit() {
    console.log("Input task component was initiated.");
  }

  onSelectedTaskStage(event) {
    this.taskStage = event.target.value;
    console.log(this.taskStage);
  }
  getTitle(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  getMessage(event) {
    this.message = event.target.value;
    console.log(this.message);
  }

  addTask() {
    if(this.title !== "" && this.message !== "") {
      this.dateTask = new Date();

      this.tasks.push({
        title: this.title,
        message: this.message,
        taskStage: this.taskStage,
        dateTask: this.dateTask
      });
    }
  }

  deleteTask(i) {
    this.tasks.splice(i, 1);
  }
  
}