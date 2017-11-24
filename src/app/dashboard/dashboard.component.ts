<<<<<<< HEAD
import { Component, OnInit, AfterViewInit, OnDestroy, Input, Inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Rx";
import { DOCUMENT } from "@angular/platform-browser";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnDestroy, OnInit {
    title = 'app';
    observable: any;
    opts: any[];
    uname = localStorage.getItem("loginname");
    hideIt = new Array<boolean>();

    constructor(translate: TranslateService, @Inject(DOCUMENT) private document: any) {

        Observable.interval(6000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));

        });
        var color = localStorage.getItem("color");
        if (color == "pink-blue") {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/pink-blue.css");
        }
        else {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/orange-blue.css");
        }







    }


    getCssClass(): string {
        let cssClasses;
        cssClasses = {
            dropElement: true,
            displayElement: false
        }
        return cssClasses;
    }

    ngOnDestroy() {
        //this.observable.unsubscribe();
    }

    changeLang(lang) {
        console.log(" lang in tab3 ", lang);
        localStorage.setItem("lang", lang);
    }

    ngOnInit() {

        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });

        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            })
        }

        $('.aside_nav').perfectScrollbar();
        $('.drop-content').perfectScrollbar();

        $("#detail_tabs").tabs();
        $(".tab_no").click(function () {
            var active = $("#detail_tabs").tabs("option", "active");
            $("#detail_tabs").tabs("option", "active", active + 1);

        });

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



    }



}
=======
import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Rx";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnDestroy, OnInit {
    title = 'app';
    observable: any;
    opts: any[];

    hideIt = new Array<boolean>();

    constructor(translate: TranslateService) {

        Observable.interval(6000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
            // this.opts = localStorage.getItem('opts').split(',');
            //console.log("opts0000", this.opts);
            // for (var i = 0; i < this.opts.length; i++) {
            //     if (this.opts[i] != "") {
            //         this.hideIt[i] = false;
            //     }
            //     else
            //         this.hideIt[i] = true;
            // }
            // for (var i = 0; i < this.hideIt.length; i++) {
            //     console.log(this.hideIt[i]);
            // }
        });





    }


    getCssClass(): string {
        let cssClasses;
        cssClasses = {
            dropElement: true,
            displayElement: false
        }
        return cssClasses;
    }

    ngOnDestroy() {
        //this.observable.unsubscribe();
    }

    changeLang(lang) {
        console.log(" lang in tab3 ", lang);
        localStorage.setItem("lang", lang);
    }

    ngOnInit() {

        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });

        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            })
        }

        $('.aside_nav').perfectScrollbar();
        $('.drop-content').perfectScrollbar();

        $("#detail_tabs").tabs();
        $(".tab_no").click(function () {
            var active = $("#detail_tabs").tabs("option", "active");
            $("#detail_tabs").tabs("option", "active", active + 1);

        });

        $(window).load(function () {
            var H = $(window).height();
            var nH = $('.logo_bar').height();
            var nD = $('.onboarding_lbl').height();
            var F = $('footer').height();
            var C = H - nH - nD - F - 10;
            $('.detail_wrapper').css('min-height', C);
            $(window).resize(function () {
                var H = $(window).height();
                var nH = $('.logo_bar').height();
                var nD = $('.onboarding_lbl').height();
                var F = $('footer').height();
                var C = H - nH - nD - F - 10;
                $('.detail_wrapper').css('min-height', C);
            });
        });


    }



}
>>>>>>> here/master
