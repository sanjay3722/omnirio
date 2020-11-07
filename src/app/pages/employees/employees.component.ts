import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employee();
  }

  employee(){
    this.employees = this.employeeService.fetchEmployee();
  }

  onDelete(id: Number){
    this.employeeService.delete(id);
  }

}
