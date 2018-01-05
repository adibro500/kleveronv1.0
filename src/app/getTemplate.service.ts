import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Data } from "@angular/router/router";
import { Observable } from "rxjs/Observable";
import { options } from './headers';

@Injectable()
export class AdminService {

    constructor(private http: Http) {

    }



    getTemplateData() {

        console.log("inputdata");
        return this.http.get("https://localhost:5000/get/template", options).map(res => res.json());


    }







}

export interface IUser { user: string; html: string }