import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService {

    private isUserLoggedIn;
    //public userName;

    constructor() {
        this.isUserLoggedIn = false;
    }

    setUserLoggedin() {
        this.isUserLoggedIn = true;
    }

    getUserLoggedIn() {
        return this.isUserLoggedIn;
    }

}
