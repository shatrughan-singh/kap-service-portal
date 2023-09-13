import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Provides REST CRUD operations
 * Each method of this class receives response-callback method. 
 * Response callback method is called by Observable and passed data and error.
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class KpadService {

  //Rest endpoint
  endpoint = "http://localhost:8081";

  /**
   * Constructor injects HTTP service
   * 
   * @param http 
   */
  constructor(private http: HttpClient) { }


  /**
 * Gets Data
 * 
 * @param id 
 * @param response 
 */
  get(deptName: any, compCB: any) {
    let url = this.endpoint + "/getDepartmentCountDetails?deptName=" + deptName;
    // debugger;
    // var observable = this.http.get(url, { responseType: 'text' });
    var observable = this.http.get(url);
    console.log("observable " + observable)
    observable.subscribe(
      function success(data) {
        compCB(data);
        console.log("success data " + data)
      }, function fail(data) {
        compCB(data, true);
        console.log("Error data " + data);
      });
  }

  /**
   * Delete Data
   * 
   * @param id 
   * @param response 
   */
  delete(id: number, compCB: any) {
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }


  /**
   * Searches Result
   * 
   * @param response 
   */
  search(form: any, compCB: any) {
    let url = this.endpoint + "search";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }


  /**
   * Add/Update
   * @param form Adds or updates a record 
   * @param response 
   */
  save(from: any, compCB: any) {
    let url = this.endpoint + "save";
    this.http.post(url, from).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }

  updateAgentIndexConfig(from: any, compCB: any) {
    let url = this.endpoint + "/updateTelegrafAgentConfig";
    this.http.post(url, from).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }

}
