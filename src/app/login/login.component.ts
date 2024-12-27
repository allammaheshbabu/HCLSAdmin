import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../MyService/admin.service';
import { IAdmin } from '../models/IAdmin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  password: string = '';
  Admin?:IAdmin;
  
  constructor(private adminService: AdminService, private router: Router) {}
  
   btn_login(): void {
    debugger;
    this.adminService.checkAdminLogin(this.email,this.password).subscribe( data =>{
    this.Admin = data;

    if(this.Admin==null){
        alert("Invalid User name and Password or Not Registred");
        this.router.navigate(["/home"]);
      }
    else{
        // alert("Login success");
        // console.log(this.Admin);
        this.Admin.activestatus=true;
        if (!this.Admin.activestatus) {
          this.router.navigate(["/home"]);
        }
        else{
          window.sessionStorage.setItem("AdminLogin",this.Admin.email);
          window.sessionStorage.setItem("AdminTypeId",this.Admin.adminTypeId.toString());
          if(this.Admin.adminTypeId===0){
            this.router.navigate(["/maprofile"]);
          }else if(this.Admin.adminTypeId===1){
            this.router.navigate(["/oaprofile"]);
          }
          
          else{
            alert("Invalid Admin Type");
            window.sessionStorage.clear();
            this.router.navigate(["/login"]);
          
          }
        }
      }
    },
      error => {

        alert(error);
        window.sessionStorage.clear();
        this.router.navigate(["/login"]);
      }
    );
  }

  btn_cancel():void{
      this.router.navigate(["/home"]);  
  }
  
}
