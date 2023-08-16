import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  isLogged: boolean;
  loggedInUser: string | null | undefined;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loginService.getUser().subscribe((user) => {
      if (user) {
        (this.loggedInUser = user.email), (this.isLogged = user.email != null);
      } else {
        this.isLogged = false;
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.isLogged = false;
    this.router.navigate(['/login']);
  }
}
