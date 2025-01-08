import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../MyService/admin.service';
import { IAdmin } from '../models/IAdmin';

@Component({
  selector: 'app-activate-admin',
  templateUrl: './activate-admin.component.html',
  styleUrl: './activate-admin.component.css'
})
export class ActivateAdminComponent implements OnInit {
 email?:string;

  constructor(private adminservice:AdminService, private router: Router) {}
    ngOnInit(): void { 
      this.email= window.sessionStorage.getItem("AdminLoginEmail")!;
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

btn_active(): void {
  debugger;
  // if (this.email==null) {
  //   alert('No email found. Please login again.');
  //   this.router.navigate(["login"]).then(()=>{
  //     window.location.reload();
  //   });
  // }
  this.adminservice.activateAdmin(this.email!).subscribe(
    (data) => {
      if (data == 1) {
        alert('Account activated successfully! Please login.');
        this.router.navigate(["login"]).then(()=>{
          window.location.reload();
        });
      } else {
        alert('Failed to activate the account.');
      }
    },
    (error) => {
      console.error(error);
      alert('An error occurred. Please try again later.');
      this.router.navigate(["login"]).then(()=>{
        window.location.reload();
      });
    }
  );
}






  
}
