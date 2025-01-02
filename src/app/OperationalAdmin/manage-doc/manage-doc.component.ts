import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-doc',
  templateUrl: './manage-doc.component.html',
  styleUrl: './manage-doc.component.css'
})
export class ManageDocComponent  implements OnInit{


  constructor(private router: Router) {}
      ngOnInit(): void {  
        if (window.sessionStorage.getItem("AdminLogin") == null) {
          this.router.navigate(['login']).then(()=>{
            window.location.reload();
          });
      }
    }
}
