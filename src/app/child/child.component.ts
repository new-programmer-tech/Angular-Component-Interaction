import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData: any;
  @Output() public childEvent = new EventEmitter();

  employee:any;

  constructor(private _employe:EmployeeService) { }

  ngOnInit(): void {
    this.employee =this._employe.getEmployee();
  }

  sendDataToParent(){
    this.childEvent.emit('hello from child');
  }

  // service


}
