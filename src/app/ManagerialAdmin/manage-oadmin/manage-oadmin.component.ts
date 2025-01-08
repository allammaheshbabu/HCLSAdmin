import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../MyService/admin.service';
import { IAdmin } from '../../models/IAdmin';

@Component({
  selector: 'app-manage-oadmin',
  templateUrl: './manage-oadmin.component.html',
  styleUrls: ['./manage-oadmin.component.css']
})
export class ManageOAdminComponent implements OnInit {

  admins: IAdmin[] = [];
  filteredAdmins?: IAdmin[];
  editflag: boolean = false;
  changeAdmin = {
    adminId: 0,
    adminName: '',
    gender: '',
    phone: 0,
    email: '',
    password: '',
    address: '',
    id_Proof: '',
    activeStatus: false,
    adminTypeId: 0
  };

  constructor(private adminservice: AdminService, private router: Router) {}
  

  ngOnInit(): void {
    if (window.sessionStorage.getItem("AdminLogin") == null) {
      this.router.navigate(['login']).then(() => {
        window.location.reload();
      });
    } else {
      this.getAdmins();
    }
  }

  getAdmins(): void {
    this.adminservice.GetAllAdmins().subscribe(
      (data: IAdmin[]) => {
        this.admins = data;
        this.filteredAdmins = this.admins.filter(admin => admin.adminTypeId == 1);
      },
      (error) => console.error('Error fetching admin data:', error)
    );
  }

  deleteAdmin(adminId: number): void {
    this.adminservice.DeleteAdmin(adminId).subscribe(
      (data) => {
        alert("Do you want really delete this account...!");
        if(data==1){
          alert(" Account deleted Sucessfully...!");
          this.getAdmins(); 
        }
        else{
          alert(" something went wrong...!");
        }

      },
      (error) => console.error('Error deleting admin:', error)
    );
  }

  editAdmin(admin: IAdmin): void {
    this.editflag = true;
    this.changeAdmin = admin;
  }

  saveAdmin(): void {
    if (this.changeAdmin) {
      this.adminservice.UpdateAdmin(this.changeAdmin).subscribe(
        (data) => {
          if(data==1){
            alert("Updated successfully....!");
            this.editflag = false;
            this.router.navigate(["manageoadmin"]).then(()=>{
              window.location.reload();
            });
          }
          else{
            alert("Error while saving try again later....!");
            this.editflag = false;
          }
         
         

        },
        (error) => console.error('Error updating admin:', error)
      );
    }
  }

  cancelEdit(): void {
    this.editflag = false;
    // this.changeAdmin = undefined;
  }

 
}
