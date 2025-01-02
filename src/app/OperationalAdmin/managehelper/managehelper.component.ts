import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managehelper',
  templateUrl: './managehelper.component.html',
  styleUrl: './managehelper.component.css'
})
export class ManagehelperComponent implements OnInit {

  constructor(private router: Router) {}
      ngOnInit(): void {  
        if (window.sessionStorage.getItem("AdminLogin") == null) {
          this.router.navigate(['login']).then(()=>{
            window.location.reload();
          });
      }
    }
}
