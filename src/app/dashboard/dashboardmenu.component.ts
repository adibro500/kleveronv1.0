<<<<<<< HEAD
import { Component, Inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Rx";
import { DOCUMENT } from "@angular/platform-browser";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;

@Component({
    selector: 'dashmenu',
    templateUrl: './dashboardmenu.html',
})

export class DashMenuComponent {
    observable: any;
    constructor(translate: TranslateService, @Inject(DOCUMENT) private document: any) {
        this.observable = Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
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

    changeMenu(side) {
        localStorage.setItem("side", side);
        if (side == "right") {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/right-menu.css");
        }
        else {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/left-menu.css");
        }

    }



    ngOnDestroy() {
        // this.observable.unsubscribe();
    }
    changeLang(lang) {
        console.log("lang", lang);
        localStorage.setItem("lang", lang);
    }

=======
import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Rx";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;

@Component({
    selector: 'dashmenu',
    templateUrl: './dashboardmenu.html',
})

export class DashMenuComponent {
    observable: any;
    constructor(translate: TranslateService) {
        this.observable = Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });

    }




    ngOnDestroy() {
        // this.observable.unsubscribe();
    }
    changeLang(lang) {
        console.log("lang", lang);
        localStorage.setItem("lang", lang);
    }

>>>>>>> here/master
}