import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLogged:boolean;
  loggedInUser:string|null|undefined;


  constructor(private loginService:LoginService,
              private router:Router,
              private changeDetectorRef:ChangeDetectorRef) {}

  ngOnInit() {
    if(this.loginService.getUser()){
      this.loginService.getUser().subscribe((user) => {this.loggedInUser = user?.email, this.isLogged = true});
    } else {
      this.isLogged = false;
    }
  }

  logout(){
    this.loginService.logout();
    this.isLogged = false;
    this.changeDetectorRef.markForCheck();
    this.router.navigate(['/login']);
  }

}
