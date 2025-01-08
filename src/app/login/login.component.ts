import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../MyService/admin.service';
import { IAdmin } from '../models/IAdmin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string='';
  password: string = '';
  Admin?:IAdmin;
  
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
     
    if (window.sessionStorage.getItem("AdminLogin") != null) {
  
      let adminTypeId = window.sessionStorage.getItem("AdminTypeId");
        if (adminTypeId == '0') {
          this.router.navigate(['maprofile']).then(()=>{
            window.location.reload();
          });
        } else {
          this.router.navigate(['oaprofile']).then(()=>{
            window.location.reload();
          });
        }
      }
    
  }
  
   btn_login(): void {
    this.adminService.checkAdminLogin(this.email,this.password).subscribe( data =>{
    this.Admin = data;
    if(this.Admin==null){
        alert("Invalid User name and Password or Not Registred");
        this.router.navigate(["home"]).then(()=>{
          window.location.reload();
        });
      }
    else{
        debugger;
        if (!this.Admin.activeStatus) {
          window.sessionStorage.setItem("AdminLoginEmail",this.Admin.email.toString());
          this.router.navigate(["activateadmin"]).then(()=>{
            window.location.reload();
          });
        }
        else{
          window.sessionStorage.setItem("AdminLogin",this.Admin.email.toString());
          window.sessionStorage.setItem("AdminTypeId",this.Admin.adminTypeId.toString());
          
          if(this.Admin.adminTypeId===0){
            window.sessionStorage.setItem("AdminName",this.Admin.adminName.toString());
            this.router.navigate(["maprofile"]).then(()=>{
              window.location.reload();
            });
          }else if(this.Admin.adminTypeId===1){
            this.router.navigate(["oaprofile"]).then(()=>{
              window.location.reload();
            });
          }
          
          else{
            alert("Invalid Admin Type");
            window.sessionStorage.clear();
            this.router.navigate(["login"]).then(()=>{
              window.location.reload();
            });
          
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
      this.router.navigate(["home"]).then(()=>{
        window.location.reload();
      }); 
  }
  
}
