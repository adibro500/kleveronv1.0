import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Rx";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;

@Component({
    selector: 'tab3',
    templateUrl: './tab3.html',
})

export class TabThreeComponent implements OnInit, AfterViewInit, OnDestroy {

    observable: any;
    uname = localStorage.getItem("loginname");
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
    constructor(translate: TranslateService) {
        this.observable = Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });


    }

    ngAfterViewInit() {





    }

    ngOnDestroy() {
        //   this.observable.unsubscribe();
    }


    changeLang(lang) {
        console.log(" lang in tab3 ", lang);
        localStorage.setItem("lang", lang);
    }


}