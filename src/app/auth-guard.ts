import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authGuardService: AuthGuardService) { }
    canActivate(
        next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("inside service auth");
        const status = this.authGuardService.getUserLoggedInStatus();
        if (!status) {
            alert("Please login first");
            this.router.navigate(['/']);
        }
        return status;
    }

}
