
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
    templateUrl: './index.component.html',
})


export class IndexComponent implements OnDestroy, OnInit {
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

        $(document).ready(function () {

            var nav = $('.frame_header');
            var content = $('.content_wrap');
            var H = $('.top_section').height();

            $(window).scroll(function () {
                if ($(this).scrollTop() > H) {
                    nav.addClass("fixed_nav");
                    content.addClass("topmargin");

                } else {
                    nav.removeClass("fixed_nav");
                    content.removeClass("topmargin");
                }
            });

        });


        // owl Carousel js


        $("#customer_carousel").owlCarousel({
            autoPlay: 3000,
            responsiveClass: true,
            responsive: {
                768: {
                    items: 4,
                    nav: true,
                    loop: true
                },
                1199: {
                    items: 5,
                    nav: true,
                    loop: true
                },
                1366: {
                    items: 5,
                    nav: true,
                    loop: true
                },
                1440: {
                    items: 5,
                    nav: true,
                    loop: true
                },
                1920: {
                    items: 5,
                    nav: true,
                    loop: true
                }
            },
            nav: true,
            navText: false

        });


        // expanding search

        $(document).ready(function () {
            $('.sch_btn').click(function () {
                $('.srch_input').toggleClass("search_toggle");
            });
        });

        // expanding menu

        $(document).ready(function () {

            $(".menu_bar").click(function () {
                if ($(".nav_menu").hasClass("expanded")) {
                    $(".nav_menu").removeClass("expanded");
                    $(this).removeClass("open");
                } else {
                    $(".nav_menu").addClass("expanded");
                    $(this).addClass("open");
                }

            });
        });




    }



}

