
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
    uname = localStorage.getItem("loginname");


    putInputData(inputdata) {

        console.log("inputdata", inputdata);
        return this.http.post("http://localhost:5000/saveTemplate-adminInputMaster", inputdata, options).map(res => res.text()).subscribe(data => console.log(data));


    }

    putInputDataList(inputdata) {

        console.log("inputdata", inputdata);
        return this.http.post("http://localhost:5000/savelist/adminInputMaster", inputdata, options).map(res => res.text()).subscribe(data => console.log(data));



    }
    getInputDataList(inputdata) {

        console.log("inputdata", inputdata);
        return this.http.post("http://localhost:5000/getlist/admin-input-master", options).map(res => res.text()).subscribe(data => console.log(data));


    }


    getInputData() {

        return this.http.get('http://localhost:5000/getTemplate', options)
            .map(data => data.json() as IUser[]);
    }



}

export interface IUser { user: string; html: string }
