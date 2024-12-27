import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAdmin } from '../models/IAdmin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  checkAdminLogin(email: string, password: string): Observable<IAdmin> {
    const url = "http://localhost:9611/api/Admin/CheckAdminLogin?Email="+email+"&Password="+password;
    return this.http.get<IAdmin>(url);
  }
  
  
}
