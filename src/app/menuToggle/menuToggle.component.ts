import { Component, Input, OnInit, AfterViewInit, DoCheck, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: "right-menu-toggle",
    templateUrl: "./menuToggle.component.html"
})

export class MenuToggleRightComponent implements OnInit {
    ngOnInit(): void {


    }

    constructor( @Inject(DOCUMENT) private document: any) {


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


    toggle(id) {
        var el = document.getElementById(id);
        var img = document.getElementById("tgl_icn");
        var box = el.getAttribute("class");
        if (box == "thm_select") {
            el.setAttribute("class", "show");
            this.delay(img, "/assets/images/toggle.png", 400);
        }
        else {
            el.setAttribute("class", "thm_select");
            this.delay(img, "/assets/images/toggle.png", 400);
        }
    }

    delay(elem, src, delayTime) {
        window.setTimeout(function () { elem.setAttribute("src", src); }, delayTime);
    }





}
