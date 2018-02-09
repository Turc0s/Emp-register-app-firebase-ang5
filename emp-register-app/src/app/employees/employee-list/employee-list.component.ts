import { Component, OnInit } from '@angular/core';

import{ EmployeeService } from "../shared/employee.service";
import { Employee } from "../shared/employee.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];

  constructor(private _employeeService: EmployeeService,
              private _toastrService: ToastrService) { }

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

  onDelete(key: string) {

    if(confirm("Are you sure to delete this record ?") == true) {
      this._employeeService.deleteEmployee(key);
      this._toastrService.warning("Deleted Successfully", "Employee Register");
    }
  }

}
