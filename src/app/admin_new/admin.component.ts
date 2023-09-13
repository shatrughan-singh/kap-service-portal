import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KpadService } from '../services/kpad.service';

@Component({
  selector: 'admin_new',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AppAdminComponent implements OnInit {
  title = 'kpad-service';
  ngOnInit() {
  }

  updatedServiceUrl: string = "";
  agentConfig: string = "";
  form = {
    "updatedServiceUrl": ""
  };
  constructor(private aroute: ActivatedRoute, private router: Router, private service: KpadService) { }
  submitData() {
    var _self = this;
    if (_self.updatedServiceUrl == '') {
      alert('Service Url should not be empty')
    } else {
      this.form.updatedServiceUrl = _self.updatedServiceUrl;
      console.log("Form Data ", this.form)
      this.service.updateAgentIndexConfig(this.form, function (res: any, error: any) {
        // debugger;
        console.log("response   ", res)
        _self.agentConfig = res[0].agentConfig;
        if (error) {
          // return;
        }
        // return _self.deptData;
      });
    }
  }
}
