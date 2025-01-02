import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managelab',
  templateUrl: './managelab.component.html',
  styleUrl: './managelab.component.css'
})
export class ManagelabComponent implements OnInit {

  constructor(private router: Router) {}
      ngOnInit(): void {  
        if (window.sessionStorage.getItem("AdminLogin") == null) {
          this.router.navigate(['login']).then(()=>{
            window.location.reload();
          });
      }
    }
}
