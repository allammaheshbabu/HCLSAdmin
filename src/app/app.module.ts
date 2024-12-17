import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Correct import for BrowserModule
import { AppRoutingModule } from './app-routing.module';  // Correct import for routing
import { AppComponent } from './app.component';  // Your root component
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateAdminComponent } from './activate-admin/activate-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MAProfileComponent } from './maprofile/maprofile.component';
import { AddOAdminComponent } from './add-oadmin/add-oadmin.component';
import { ManageOAdminComponent } from './manage-oadmin/manage-oadmin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    ActivateAdminComponent,
    PageNotFoundComponent,
    MAProfileComponent,
    AddOAdminComponent,
    ManageOAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
