import { Component, Inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Rx";
import { DOCUMENT } from "@angular/platform-browser";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;



@Component({
    selector: 'settingsmenu',
    templateUrl: './settingsmenu.html',
})

export class SettingsMenuComponent {
    observable: any;
    constructor(translate: TranslateService, @Inject(DOCUMENT) private document: any) {
        this.observable = Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });
        var side = localStorage.getItem("side");
        if (side == "right") {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/right-menu.css");
            this.document.getElementById("theme2").setAttribute("href", "./assets/styles/responsive-right.css");
        }
        else {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/style.css");
            this.document.getElementById("theme2").setAttribute("href", "./assets/styles/responsive.css");
        }


    }

    changeMenu(side) {
        localStorage.setItem("side", side);
        if (side == "right") {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/right-menu.css");
            this.document.getElementById("theme2").setAttribute("href", "./assets/styles/responsive-right.css");
        }
        else {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/style.css");
            this.document.getElementById("theme2").setAttribute("href", "./assets/styles/responsive.css");
        }

    }







    ngOnDestroy() {
        // this.observable.unsubscribe();
    }
    changeLang(lang) {
        console.log("lang", lang);
        localStorage.setItem("lang", lang);
    }

}