import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAdmin } from './models/IAdmin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  export class AppComponent implements OnInit {
    AnonymousFlag: boolean =true;
    SecureFlag: boolean = false;
    ManagerialFlag: boolean = false;
    OperationalFlag: boolean = false;
    currentTime?: string;
    name?:string;
  
    constructor(private router: Router) {}
    
  
    ngOnInit(): void {
      this.currentTime = new Date().toLocaleString(); 
       this.name= window.sessionStorage.getItem("AdminName")!;
      if (window.sessionStorage.getItem("AdminLogin") != null) {
        this.AnonymousFlag = false;
        this.SecureFlag = true;
    
        let adminTypeId = window.sessionStorage.getItem("AdminTypeId");
        if (adminTypeId != null) {
          if (adminTypeId == '0') {
            this.ManagerialFlag = true;
            this.OperationalFlag = false;
          } else {
            this.ManagerialFlag = false;
            this.OperationalFlag = true;
          }
        }
      }
      //  else {
      //   window.sessionStorage.clear();
      //   this.router.navigate(['login']).then(()=>{
      //     window.location.reload();
      //   });
      // }
     
    }
    btn_Logout(): void{
      
         window.sessionStorage.clear();
        this.router.navigate(['login']).then(()=>{
          window.location.reload();
        });

    }
    
}
    



















  