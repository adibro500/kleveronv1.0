import { Component, Input, OnInit, AfterViewInit, DoCheck, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Employee, Service } from './grid-master.service';
import { InputMasterService } from './admin-input-master.service';
import { RenderInputMasterService } from './render-input-master.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: "render-grid-master",
    templateUrl: "./renderGrid.html",
})

export class RenderList implements OnInit {
    emps: Employee[];
    temp: any[] = [];
    index;
    constructor(private rims: RenderInputMasterService, private route: ActivatedRoute, @Inject(DOCUMENT) private document: any, private service: Service, private ims: InputMasterService) {

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

        this.rims.getInputDataGrid().subscribe(data => {
            this.temp = JSON.parse(JSON.stringify(data));
            this.route.params.subscribe(params => {
                this.index = params['id'];
                if (this.temp && this.temp.length > 0 && this.index)
                    this.getTemplateByIndex(this.index);
            }
            )
        });



    }
    getTemplateByIndex(id) {

        alert(id);
        console.log(this.temp[id]);
        this.emps = this.temp[id].data;

    }


    calculateCellValue(data) {
        return [data.Title, data.FirstName, data.LastName].join(" ");
    }

    uname = localStorage.getItem("loginname");
    formName;
    formUrl;

    saveClick() {
        $("#input_control_URL").hide();

        let JSONObj = {
            "user": "ravi",
            "Form_Name": this.formName,
            "Form_Url": this.formUrl,
            "data": this.emps
        }
        this.ims.putData(JSON.stringify(JSONObj));

    }

    cloneElement(i) {

        for (var j = 0; j < this.emps.length; j++) {
            // this.emps[j]["ActiveProject"].push(this.emps[j].ActiveProject);
            //obj[Object.keys(obj)[1]]
            //  this.emps[j][Object.keys(this.emps[j])[i]].push(this.emps[j][Object.keys(this.emps[j])[i]]);
            this.emps[j][Object.keys(this.emps[j])[i]].push(this.emps[j][Object.keys(this.emps[j])[i]]);
        }

    }

    editElement(i) {

    }

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