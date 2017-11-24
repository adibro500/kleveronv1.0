import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authGuardService: AuthGuardService, private router: Router) { }
    // canActivate(
    // next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // //     // this.router.navigate(['/']);
    // //     if (this.authGuardService.getUserLoggedIn() == false) {
    // //         alert("Login First");
    // //         this.router.navigate(['/login']);
    // //     }
    // //     console.log("you are user");
    //      return this.authGuardService.getUserLoggedIn();
    //  }
}
