import { Component } from '@angular/core';
import { EmployeeService } from '../servercies/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateUrl } from 'src/shared/url.validator';
import { datev } from 'src/shared/date';


@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css'],
 
})
export class AdddataComponent {
empolyeeForm:any ;
  constructor(fb: FormBuilder,private emp:EmployeeService){
this.empolyeeForm = fb.group({
name:['',[Validators.required,ValidateUrl]],
dob:['',[Validators.required,datev]]
})
  }

  addData(){
    console.log('Valid?', this.empolyeeForm.valid); 
    let name = this.empolyeeForm.get('name').value;
    let dob = this.empolyeeForm.get('dob').value 
if(typeof name == 'string'
&& typeof dob == 'string'){

  this.emp.pushData(name,dob)

}
  }

  get name(){
    return this.empolyeeForm.get('name');
  }
  get dob(){
    return this.empolyeeForm.get('dob');
  }
}
