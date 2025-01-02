import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrl: './add-doc.component.css'
})
export class AddDocComponent implements OnInit {

  constructor(private router: Router) {}
      ngOnInit(): void {  
        if (window.sessionStorage.getItem("AdminLogin") == null) {
          this.router.navigate(['login']).then(()=>{
            window.location.reload();
          });
      }
    }
}
