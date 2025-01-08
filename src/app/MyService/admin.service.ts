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

  activateAdmin(email: string): Observable<number> {
    const url = "http://localhost:9611/api/Admin/activateAdmin?Email="+email;
    return this.http.get<number>(url);  
  }

changePassword(email: string, password: string): Observable<number> {
  return this.http.get<number>("http://localhost:9611/api/Admin/changePassword?Email="+email+"&Password="+password);
}

bringPassword(email: string): Observable<string> {
  const url = "http://localhost:9611/api/Admin/bringPassword?Email="+email;
  return this.http.get(url, { responseType: 'text' });
}

// insertAdmin(admin: IAdmin): Observable<any> {
//   const url = "http://localhost:9611/api/Admin/InsertAdmin";
//   return this.http.post(url, admin, { responseType: 'text' });
// }

insertAdmin(admin: IAdmin): Observable<any> {
  const url = "http://localhost:9611/api/Admin/InsertAdmin";
  return this.http.post<any>(url, admin); 
}
// insertAdmin(admin: IAdmin): Observable<IAdmin> {
//   const url = "http://localhost:9611/api/Admin/InsertAdmin";
//   return this.http.post<IAdmin>(url, admin);
// }



GetAllAdmins(): Observable<IAdmin[]> {
  const url = "http://localhost:9611/api/Admin/GetAllAdmins"; 
  return this.http.get<IAdmin[]>(url); 
}

DeleteAdmin(adminId:number):Observable<any>{
  const url = "http://localhost:9611/api/Admin/DeleteAdmin?AdminId="+adminId; 
  return this.http.delete<number>(url,); 
}

UpdateAdmin(admin: IAdmin): Observable<number> {
  const url = "http://localhost:9611/api/Admin/UpdateAdmin";
  return this.http.put<number>(url, admin); 
}









  
}

