import { Component } from '@angular/core';
import { MaterialDemo1Component } from './components/material-demo1/material-demo1.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoCrudComponent } from './components/todo-crud/todo-crud.component';
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';

@Component({
  selector: 'app-root',
  imports: [
    // MaterialDemo1Component,
    // CounterComponent
    TodoCrudComponent
    // EmployeeCrudComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_may_2025_2';
  cars = ['Tata', 'Honda'];

  add(a: number, b: number) {
    return a + b;
  }
  addNewCar(car: string) {
    this.cars.push(car);
  }
}
