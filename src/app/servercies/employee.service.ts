import { Injectable } from '@angular/core';
import { employee } from '../validation';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  MainArray:employee[] = [];
  constructor() { }


  pushData(name:string,dob:string){

    
    this.MainArray.push({name:name,dob:dob});
    console.log(this.getData());
  }

  getData():employee[]{
    return this.MainArray;
  }
}
