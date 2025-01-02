import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-resp',
  templateUrl: './manage-resp.component.html',
  styleUrl: './manage-resp.component.css'
})
export class ManageRespComponent implements OnInit {

  constructor(private router: Router) {}
      ngOnInit(): void {  
        if (window.sessionStorage.getItem("AdminLogin") == null) {
          this.router.navigate(['login']).then(()=>{
            window.location.reload();
          });
      }
    }
}
