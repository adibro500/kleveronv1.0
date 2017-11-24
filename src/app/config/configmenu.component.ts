<<<<<<< HEAD
import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
    selector: 'configmenu',
    templateUrl: './configmenu.html',
})

export class ConfigMenuComponent {

    constructor(translate: TranslateService, private router: Router, @Inject(DOCUMENT) private document: any) {

        Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
        });


        var side = localStorage.getItem("side");
        if (side == "right") {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/right-menu.css");
        }
        else {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/left-menu.css");
        }

        var color = localStorage.getItem("color");
        if (color == "pink-blue") {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/pink-blue.css");
        }
        else {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/orange-blue.css");
        }
    }



    changeLang(lang) {
        console.log("lang", lang);
        localStorage.setItem("lang", lang);
    }




=======
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";

@Component({
    selector: 'configmenu',
    templateUrl: './configmenu.html',
})

export class ConfigMenuComponent {

    constructor(translate: TranslateService, private router: Router) {

        Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
        });
    }



    changeLang(lang) {
        console.log("lang", lang);
        localStorage.setItem("lang", lang);
    }

    


>>>>>>> here/master
}