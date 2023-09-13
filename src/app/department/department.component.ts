import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KpadService } from '../services/kpad.service';

@Component({
  selector: 'department/:deptName',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class AppDepartmentComponent implements OnInit {
  title = 'kpad-service';

  form = {
    "deptName": ""
  };

  deptData = [{deptId: '', deptName: '', onlineCount: 0, offlineCount: 0, maintanceCount: 0}];

  //Server success/fail message
  message = "";

  //Server error
  success: boolean = true;
  /**
   * Injects services 
   * 
   * @param aroute 
   * @param router 
   * @param service 
   */

  constructor(private aroute: ActivatedRoute, private router: Router, private service: KpadService) { }


  ngOnInit() {
    var _self = this;
    // this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    // this.form.deptName = 123;
   console.log("dept name ==  ", _self.aroute.snapshot.paramMap.get('deptName'));
    console.log("Form deptName ", this.form.deptName)
    if (_self.aroute.snapshot.paramMap.get('deptName') != "") {
      // debugger;
      this.service.get(_self.aroute.snapshot.paramMap.get('deptName'), function (res: any, error: any) {
        _self.deptData = res;
        console.log("response in dept   ", res)
        if (error) {
        }
      });
    }
  }
}
