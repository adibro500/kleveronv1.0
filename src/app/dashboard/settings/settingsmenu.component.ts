import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Rx";
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

}