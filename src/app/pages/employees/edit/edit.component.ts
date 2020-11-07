import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './../../../models/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  header: string;

  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0
  }

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Employee' : 'Edit Employee';

    if(this.id != 0){
      this.employee = this.employeeService.getEmployee(this.id);
    }
  }

  onSubmit(form: NgForm){

    let employee: Employee = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone
    }

    if(this.id === 0){
      this.employeeService.onCreate(employee);
    }else{
      this.employeeService.onUpdate(employee);
    }
    this.router.navigateByUrl('');
  }

}
