import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Data } from "@angular/router/router";
import { Observable } from "rxjs/Observable";
import { options } from "./headers";

@Injectable()
export class RenderInputMasterService {

    constructor(private http: Http) {

    }


    putInputData(inputdata) {

        console.log("inputdata", inputdata);
        return this.http.post("http://localhost:5000/saveTemplate-adminInputMaster", inputdata, options).map(res => res.text()).subscribe(data => console.log(data));


    }

    getInputDataList() {

        console.log("inputdata");
        return this.http.get("http://localhost:5000/getlist/admin-input-master", options).map(res => res.json());


    }


    getInputDataGrid() {
        console.log("inputdata");
        return this.http.get("http://localhost:5000/get/admin-grid-master", options).map(res => res.json());
    }

    putFormInputData(inputdata, url) {

        console.log("inputdata", inputdata);
        return this.http.post("http://localhost:5000" + url, inputdata, options).map(res => res.text()).subscribe(data => console.log(data));


    }


    getInputData() {

        return this.http.get('http://localhost:5000/getTemplate', options)
            .map(data => data.json() as IUser[]);
    }




}

export interface IUser { user: string; html: string }