
import { Component, OnDestroy, OnInit, TemplateRef, AfterViewInit, DoCheck, AfterContentInit, ElementRef, OnChanges, Input, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { CssClassForDivsService } from "./createPage.service";
import { Container } from "./container";
import { TimepickerConfig } from "ngx-bootstrap";
import { RlTagInputModule } from 'angular2-tag-input';
import { getAnnotation } from "./annotations";
import { TextboxComponent } from "./textbox.component";
import { Control2 } from "./Controls";
import { DOCUMENT } from "@angular/common";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;


@Component({
    selector: 'createPageMenu',
    templateUrl: './createPageMenu.html',
    styleUrls: ['../../assets/styles/controls.css'],
    providers: [BsModalService, BsModalRef, Control2],
})




export class CreatePageMenuComponent implements AfterViewInit, DoCheck, OnChanges {

    components = new Array<any>();
    inputs = {
        class: 'world',
        something: () => 'can be really complex'
    };

    lbls: any = [];
    posts: any = [];
    inp_ctrls: any = [];
    controls: any = [];
    label_id: string = '';
    label_name: string = '';
    label_class: string = '';
    values = new Array<string>();
    public mytime: Date = new Date();
    date3: Date;
    public showHTML: boolean = false;

    addClick: boolean;

    @Input()
    innerHTML: string;

    alert;


    ngAfterViewInit(): void {
        $(window).load(function () {
            var H = $(window).height();
            var nH = $('.frame_header').height();
            var nD = $('.dash_logo').height();
            //var F = $('footer').height();
            var S = H - nH;
            //var C = H - nH - F - 60;
            $('.wrapper ').css('min-height', H);
            $('.aside_nav ').css('height', S);
            //$('.bgwhite').css('min-height', C);
            if ($(window).width() < 767) {
                $('.aside_nav ').css('min-height', S - nD - 20);
            }
            $(window).resize(function () {
                var H = $(window).height();
                var nH = $('.frame_header').height();
                var nD = $('.dash_logo').height();
                //var F = $('footer').height();
                var S = H - nH;
                //var C = H - nH - F - 60;
                $('.wrapper ').css('min-height', H);
                $('.aside_nav ').css('height', S);
                //$('.bgwhite').css('min-height', C);
                if ($(window).width() < 767) {
                    $('.aside_nav ').css('min-height', S - nD - 20);
                }
            });
        });




        this.containerService.getContainers().subscribe(posts => {
            this.posts = posts;
        });
        console.log(this.posts);
        this.containerService.getLabels().subscribe(posts => {
            this.lbls = posts;
        });
        console.log(this.lbls);
        this.containerService.getInputControls().subscribe(posts => {
            this.inp_ctrls = posts;
        });
        console.log(this.inp_ctrls);
        this.containerService.getControls().subscribe(posts => {
            this.controls = posts;
        });
        console.log(this.controls);

    }

    myRadio: string = 'col-md-6';
    myRadio2: string = '';
    lblid: string = "";
    lblnm: string = "";
    cninp: string = "";
    mainhtml: string = '';

    setRadioCn(str: string) {
        this.myRadio2 = str;
        alert(this.myRadio2);
    }

    onAddClick() {
        this.addClick = true;
    }

    setlbls() {

        this.mainhtml += "<label id='" + this.values[0] + "' class='" + this.values[2] + "'>" + this.values[1] + "</label>";
        alert(this.mainhtml);
    }

    setRadCol(str: string) {
        this.myRadio = str;
        alert(this.myRadio)

    }


    setRad1() {
        this.mainhtml = "<div class='" + this.myRadio + "'>";
        alert(this.mainhtml);
    }

    setLbl() {

    }
    isTimePick: boolean;

    stringjs: string;
    saveFunc() {

    }
    uname = localStorage.getItem("loginname");


    containers = new Array<Container>();
    constructor(private elRef: ElementRef, private containerService: CssClassForDivsService, translate: TranslateService, private router: Router, private modalRef: BsModalRef, private modalService: BsModalService, @Inject(DOCUMENT) private document: any) {

        Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
        });
        this.components.push(TextboxComponent);
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


    ngOnChanges() {



    }



    ngDoCheck() {



    }





}