import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Data } from "@angular/router/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginService {

    constructor(private http: Http) {

    }

    // getLogins(logindata) {

    //     return this.http.post("http://localhost:5000/api/login", logindata, options).map(res => res.text()).subscribe(data => console.log(data));

    // }

}