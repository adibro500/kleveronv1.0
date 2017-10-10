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

    


}