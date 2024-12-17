import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateAdminComponent } from './activate-admin/activate-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MAProfileComponent } from './maprofile/maprofile.component';
import { AddOAdminComponent } from './add-oadmin/add-oadmin.component';
import { ManageOAdminComponent } from './manage-oadmin/manage-oadmin.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "activateadmin", component: ActivateAdminComponent },
  { path: "maprofile", component: MAProfileComponent,
    children:[
      { path: "addoadmin", component: AddOAdminComponent },
      { path: "manageoadmin", component: ManageOAdminComponent }
    ]
   },

  { path: "**", component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
