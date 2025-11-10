import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { CommonModule, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Taskservice } from './taskservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');


tasks: any[] = [];
constructor(private taskService: Taskservice) {}
ngOnInit() {
this.tasks = this.taskService.getTasks();
}

addnewTask() {
  this.tasks.push({id: '4', title: 'New Task', done: false });}
removeTask(ind:number){
  this.tasks.splice(ind,1);
}
today:Date = new Date();
price:number = 1234.56;
percentage:number = 0.259;


}



