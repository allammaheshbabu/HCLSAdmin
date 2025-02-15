import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhelper',
  templateUrl: './addhelper.component.html',
  styleUrl: './addhelper.component.css'
})
export class AddhelperComponent  implements OnInit{

  constructor(private router: Router) {}
      ngOnInit(): void {  
        if (window.sessionStorage.getItem("AdminLogin") == null) {
          this.router.navigate(['login']).then(()=>{
            window.location.reload();
          });
      }
    }
}
