import { Component, Input, OnInit, AfterViewInit, DoCheck, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Employee, Service } from './grid-master.service';
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: "admin-list-master",
    templateUrl: "./admin-list-master.html",
    styleUrls: ["./list.css"]
})

export class AdminListMasterComponent implements OnInit {
    employees: Employee[];
    constructor( @Inject(DOCUMENT) private document: any, service: Service) {
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

        this.employees = service.getEmployees();

    }


    calculateCellValue(data) {
        return [data.Title, data.FirstName, data.LastName].join(" ");
    }

    uname = localStorage.getItem("loginname");

    ngOnInit(): void {
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


        $("#detail_tabs").tabs();
        $(".tab_no").click(function () {
            var active = $("#detail_tabs").tabs("option", "active");
            $("#detail_tabs").tabs("option", "active", active + 1);

        });
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