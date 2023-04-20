import { Component } from '@angular/core';
import { EmployeeService } from '../servercies/employee.service';
import { employee } from '../validation';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css'],
  
})
export class GetdataComponent {
  constructor(private emp: EmployeeService){

  }
  arra:employee[]=this.emp.getData()


  
}
