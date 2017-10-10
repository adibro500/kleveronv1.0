import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Data } from "@angular/router/router";
import { Container } from "./container";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CssClassForDivsService {

    constructor(private http: Http) {

    }

    getContainers(): Observable<Container[]> {

        return this.http.get('http://localhost:3000/getContainers')
            .map(res => res.json());

    }
    getLabels(): Observable<Container[]> {

        return this.http.get('http://localhost:3000/getLabelContainers')
            .map(res => res.json());

    }

    getInputControls(): Observable<Container[]> {

        return this.http.get('http://localhost:3000/getInputContainers')
            .map(res => res.json());

    }
    getControls(): Observable<Container[]> {

        return this.http.get('http://localhost:3000/getControlContainers')
            .map(res => res.json());

    }

}