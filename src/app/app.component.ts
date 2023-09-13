import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kpad-service';

  /**
   * Get user from local storage
   * @returns 
   */
  getUser(){
    let user ="Guest";
    // if(localStorage.getItem("user")){
    //   user = localStorage.getItem("user");
    // }
    return user;
  }
}
