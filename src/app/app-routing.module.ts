import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateAdminComponent } from './activate-admin/activate-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaprofileComponent } from './ManagerialAdmin/maprofile/maprofile.component';
import { AddOAdminComponent } from './ManagerialAdmin/add-oadmin/add-oadmin.component';
import { ManageOAdminComponent } from './ManagerialAdmin/manage-oadmin/manage-oadmin.component';
import { OAProfileComponent } from './OperationalAdmin/oaprofile/oaprofile.component';
import { AddDocComponent } from './OperationalAdmin/add-doc/add-doc.component';
import { AddRespComponent } from './OperationalAdmin/add-resp/add-resp.component';
import { ManageDocComponent } from './OperationalAdmin/manage-doc/manage-doc.component';
import { ManageRespComponent } from './OperationalAdmin/manage-resp/manage-resp.component';
import { AddlabComponent } from './OperationalAdmin/addlab/addlab.component';
import { AddhelperComponent } from './OperationalAdmin/addhelper/addhelper.component';
import { ManagehelperComponent } from './OperationalAdmin/managehelper/managehelper.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "activateadmin", component: ActivateAdminComponent },
  { path: "maprofile", component: MaprofileComponent}, 
  { path: "addoadmin", component: AddOAdminComponent },
  { path: "manageoadmin", component: ManageOAdminComponent },
  { path: "oaprofile", component: OAProfileComponent},
  { path: "adddoc", component: AddDocComponent },
  { path: "addresp", component: AddRespComponent },
  { path: "managedoc", component: ManageDocComponent },
  { path: "manageresp", component: ManageRespComponent },
  { path:"addlab",component:AddlabComponent},
  { path:"managelab",component:ManageDocComponent},
  { path:"addhelper",component:AddhelperComponent},
  { path:"managehelper",component:ManagehelperComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  { path: "**", component: PageNotFoundComponent }  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
