import { Injectable } from '@angular/core';

import { Employee } from './../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john_doe@gmail.com',
      phone: 9876543210
    },
    {
      id: 2,
      name: 'Jan Rap',
      email: 'jan_rap@gmail.com',
      phone: 8765432109
    },
    {
      id: 3,
      name: 'Piet Pompies',
      email: 'piet_pompies@gmail.com',
      phone: 7654321098
    },
    {
      id: 4,
      name: 'Jan Alleman',
      email: 'jan_alleman@gmail.com',
      phone: 6543210987
    }
  ];
  constructor() { }

  fetchEmployee(){
    return this.employees;
  }
  getEmployee(id: Number){
    return this.employees.find( x => x.id === id);
  }

  onCreate(employee: Employee){
    let oldEmployee = this.employees.find(x => x.id === employee.id);
    if(!oldEmployee){
      this.employees.push(employee);
    }else{
      alert('User Id is already Exists');
      return;
    }
  }

  onUpdate(employee: Employee){
    let oldEmployee = this.employees.find(x => x.id === employee.id);
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone;
  }

  delete(id: Number){
    let employee = this.employees.find(x => x.id === id);
    let index = this.employees.indexOf(employee, 0);
    this.employees.splice(index, 1);
  }



}
