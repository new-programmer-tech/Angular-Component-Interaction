import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _employee:EmployeeService){

  }
  title = 'full_angular_course';
  employee:any;

  public name = "parent";
  message ='';

  getemployee(){
  this.employee =this._employee.getEmployee();
}

}

