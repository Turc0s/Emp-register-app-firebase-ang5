import { Component, OnInit } from '@angular/core';

import{ EmployeeService } from "../shared/employee.service";
import { Employee } from "../shared/employee.model";
import { element } from 'protractor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    var empData = this._employeeService.getData();
    empData.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var storageElement = element.payload.toJSON();
        storageElement["$key"] = element.key;
        this.employeeList.push(storageElement as Employee);
      });
    });
  }

  onEdit(emp: Employee) {

    // this._employeeService.selectedEmployee = emp;
    this._employeeService.selectedEmployee = Object.assign({}, emp);


  }

}
