import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDepartmentComponent } from './department/department.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin/admin-layout.component';
import { AppAdminComponent } from './admin_new/admin.component';

const routelist: Route[] = [
  { path: 'department/:deptName', component: AppDepartmentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin_new', component: AppAdminComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    AppDepartmentComponent,
    AppAdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routelist)
  ],
  providers: [],
  bootstrap: [AppComponent]
  // exports: [RouterModule]
})
export class AppModule { }
