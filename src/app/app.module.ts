import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateAdminComponent } from './activate-admin/activate-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaprofileComponent } from './ManagerialAdmin/maprofile/maprofile.component';
import { AddOAdminComponent } from './ManagerialAdmin/add-oadmin/add-oadmin.component';
import { ManageOAdminComponent } from './ManagerialAdmin/manage-oadmin/manage-oadmin.component';
import { FormsModule } from '@angular/forms';
import { OAProfileComponent } from './OperationalAdmin/oaprofile/oaprofile.component';
import { AddRespComponent } from './OperationalAdmin/add-resp/add-resp.component';
import { ManageRespComponent } from './OperationalAdmin/manage-resp/manage-resp.component';
import { AddDocComponent } from './OperationalAdmin/add-doc/add-doc.component';
import { ManageDocComponent } from './OperationalAdmin/manage-doc/manage-doc.component';
import { AddhelperComponent } from './OperationalAdmin/addhelper/addhelper.component';
import { AddlabComponent } from './OperationalAdmin/addlab/addlab.component';
import { ManagelabComponent } from './OperationalAdmin/managelab/managelab.component';
import { ManagehelperComponent } from './OperationalAdmin/managehelper/managehelper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    ActivateAdminComponent,
    PageNotFoundComponent,
    MaprofileComponent,
    AddOAdminComponent,
    ManageOAdminComponent,
    OAProfileComponent,
    AddRespComponent,
    ManageRespComponent,
    AddDocComponent,
    ManageDocComponent,
    AddhelperComponent,
    AddlabComponent,
    ManagelabComponent,
    ManagehelperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
