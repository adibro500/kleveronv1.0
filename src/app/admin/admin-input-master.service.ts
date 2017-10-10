import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Data } from "@angular/router/router";
import { Observable } from "rxjs/Observable";
import { options } from "./headers";

@Injectable()
export class InputMasterService {

    constructor(private http: Http) {

    }


    putInputData(inputdata) {

        console.log("inputdata", inputdata);
        return this.http.post("http://localhost:3000/saveTemplate-AdminInputMaster", inputdata, options).map(res => res.text()).subscribe(data => console.log(data));


    }

}