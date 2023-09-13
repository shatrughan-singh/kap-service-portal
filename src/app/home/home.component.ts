import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KpadService } from '../services/kpad.service';
import * as Aos from 'aos';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'kpad-service';

  form = {
    "deptName": ""
  };

  deptData = [{deptId: '', deptName: '', onlineCount: 0, offlineCount: 0, maintanceCount: 0, totalDeptServiceCount: 0,  totalOnlineCount: 0,  totalMaintenanceCount: 0,  totalOfflineCount: 0}];

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

  onSelect() {
    // console.log("deptName ", deptName)
    this.router.navigate(['/department']);
  }

  onDeptSelect(deptName : string) {
    console.log("deptName ", deptName)
    this.router.navigate(['/department', deptName]);
  }

  elnt: boolean = false;

  allchart() {
    // this.router.navigate(['/department']);
  }

  /**
   * Display record if primary key is received 
   */
  ngOnInit() {
    Aos.init();
    var _self = this;
    // this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    // this.form.id = 123;
    console.log("Form Id ", this.form.deptName)
    // if (!isNaN(this.form.id)) {
      // debugger;
      this.service.get(this.form.deptName, function (res: any, error: any) {
        _self.deptData = res;
        console.log("response   ", res)
        if (error) {
        }
      });
    // }
  }

  getString(obj: any) {
    return JSON.stringify(obj);
  }

}
