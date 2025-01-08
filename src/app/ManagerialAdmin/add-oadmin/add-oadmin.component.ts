import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../MyService/admin.service';
import { IAdmin } from '../../models/IAdmin';

@Component({
  selector: 'app-add-oadmin',
  templateUrl: './add-oadmin.component.html',
  styleUrl: './add-oadmin.component.css'
})
export class AddOAdminComponent implements OnInit {

  admin: IAdmin = {
    adminId: 0,
    adminName: '',
    gender: '',
    phone: 0,
    email: '',
    password: '',
    address: '',
    id_Proof: '',
    activeStatus: false,
    adminTypeId: 1
  };
  response?:number;

constructor(private adminservice:AdminService, private router: Router) {}
    ngOnInit(): void {  
      if (window.sessionStorage.getItem("AdminLogin") == null) {
        this.router.navigate(['login']).then(()=>{
          window.location.reload();
        });
    }
  }


  submit():void{
    debugger;
    this.adminservice.insertAdmin(this.admin).subscribe((data)=>{
     this.response=data;
     if(this.response==1){
      alert("Added Successfully...!");
      window.location.reload();
     }else{
      alert("Some thing went wrong.try again later...!");
     }
    },
    (error) => {
      console.error(error);
      alert('An error occurred. Please try again later.');
    });
  }
}
