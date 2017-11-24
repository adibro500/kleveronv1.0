import { Component, Inject, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Rx";
import { DOCUMENT } from "@angular/platform-browser";
import { DroppableDirective } from "@swimlane/ngx-dnd";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;

@Component({
    selector: 'dashrec',
    templateUrl: './dashrec.component.html',
    styleUrls: ["./dashrec.scss"],
    providers: [DroppableDirective]
})

export class DashRecComponent implements OnInit {

    ngOnInit(): void {

        $('.dash_bars').click(function () {
            $('.dash_wrapper').toggleClass('hidemenu');
        });

        if ($(window).width() < 1024) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.dash_bars, .dash_menu_nav').length) {
                    $('.dash_wrapper').removeClass('hidemenu');
                }
            })
        }

        //$('.dash_menu_nav').perfectScrollbar();
        $('.drop-content').perfectScrollbar();

        $(window).load(function () {
            var H = $(window).height();
            var nH = $('.dash_header').height();
            var nD = $('.dash_logo').height();
            var F = $('footer').height();
            var CS = $('.dash_content_wrap').height();
            var S = H - nH;
            var C = H - nH - F - 60;
            $('.dash_side_menu').css('min-height', CS);
            $('.bgwhite').css('min-height', C);
            if ($(window).width() < 767) {
                $('.dash_side_menu').css('min-height', CS - nD - 20);
            }
            $(window).resize(function () {
                var H = $(window).height();
                var nH = $('.dash_header').height();
                var nD = $('.dash_logo').height();
                var F = $('footer').height();
                var CS = $('.dash_content_wrap').height();
                var S = H - nH;
                var C = H - nH - F - 60;
                $('.dash_side_menu').css('min-height', CS);
                $('.bgwhite').css('min-height', C);
                if ($(window).width() < 767) {
                    $('.dash_side_menu').css('min-height', CS - nD - 20);
                }
            });
        });


        $(function () {
            $("#dash_tabs").tabs();
        });



        //$("#dash_tabs").tabs();
        //$(".tab_no").click(function () {
        //    var active = $("#dash_tabs").tabs("option", "active");
        //    $("#dash_tabs").tabs("option", "active", active + 1);

        //});



        $(".action-ui").addClass("hide-action-ui");


        $(".setting_icn").click(function () {
            $(".action-ui").removeClass("hide-action-ui");
            $(".action-ui").addClass("show-action-ui");
        });


    }

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


}