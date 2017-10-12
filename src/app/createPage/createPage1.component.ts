import { Component, Input, OnInit, AfterViewInit, DoCheck, Inject } from '@angular/core';
import { RlTagInputModule } from 'angular2-tag-input';
import { Control2 } from "./Controls";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DrakeStoreService, DroppableDirective } from "@swimlane/ngx-dnd/release";
import { OnDestroy, TemplateRef, AfterContentInit, ElementRef, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { CssClassForDivsService } from "./createPage.service";
import { Container } from "./container";
import { TimepickerConfig } from "ngx-bootstrap";
import { NgbdDatepickerPopup } from "./Datepicker.component";
import { getAnnotation } from "./annotations";
import { TextboxComponent } from "./textbox.component";
import { DOCUMENT } from "@angular/common";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: 'createPage1',
    templateUrl: './createPage1.component.html',
    providers: [BsModalService, BsModalRef, Control2]
})


export class createPage1Component implements OnInit {
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
        if (this.myRadio.includes("Date")) {
            this.alert = NgbdDatepickerPopup;
            this.isTimePick = true;
            this.myRadio2 = "";
            return;
        }
        else {
            this.mainhtml += this.myRadio2;

        }

        this.mainhtml += "</div>";
        alert("mmmmmm " + this.mainhtml);
        setTimeout(() => {
            document.getElementById("displayControls").innerHTML += this.mainhtml;
            console.log("main html", this.mainhtml);
            console.log($("#contra").html());
            // this.showHTML = true;
        }, 3000);
    }

    containers = new Array<Container>();
    constructor(private elRef: ElementRef, private containerService: CssClassForDivsService, translate: TranslateService, private router: Router, private modalRef: BsModalRef, private modalService: BsModalService, @Inject(DOCUMENT) private document: any) {

        Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
        });
        this.components.push(TextboxComponent);



    }

    changeLang(lang) {

        console.log("lang", lang);
        localStorage.setItem("lang", lang);

    }


    ngOnChanges() {



    }

    changeMenu(side) {
        if (side == "right") {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/right-menu.css");
            this.document.getElementById("theme2").setAttribute("href", "./assets/styles/responsive-right.css");
        }
        else {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/style.css");
            this.document.getElementById("theme2").setAttribute("href", "./assets/styles/responsive.css");
        }

    }

    ngDoCheck() {



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

        $(window).load(function () {
            var H = $(window).height();
            var nH = $('.frame_header').height();
            var nD = $('.dash_logo').height();
            var F = $('footer').height();
            var S = H - nH;
            var C = H - nH - F - 60;
            $('.aside_nav ').css('height', S);
            $('.bgwhite').css('min-height', C);
            if ($(window).width() < 767) {
                $('.aside_nav ').css('height', S - nD - 20);
            }
            $(window).resize(function () {
                var H = $(window).height();
                var nH = $('.frame_header').height();
                var nD = $('.dash_logo').height();
                var F = $('footer').height();
                var S = H - nH;
                var C = H - nH - F - 60;
                $('.aside_nav ').css('height', S);
                $('.bgwhite').css('min-height', C);
                if ($(window).width() < 767) {
                    $('.aside_nav ').css('height', S - nD - 20);
                }
            });
        });

        $('.delel').on('click', function () {
            $(this).closest('.element_box').remove();
        })

        $("#add_btn").click(function () {
            $(".modal_tabs:first").show();
            $(".modal_tabs:gt(0)").hide();
        });

        $(".nx_btn").click(function () {
            var nextDiv = $(".modal_tabs:visible").next(".modal_tabs");
            if (nextDiv.length == 0) { // wrap around to beginning
                nextDiv = $(".modal_tabs:first");

            }
            $(".modal_tabs").hide();
            nextDiv.show();
            $('.modal-backdrop').removeClass("modal-backdrop");
        });

        $('#vldtn_btn').on('change', function (e) {
            if (e.target.checked) {
                $('.hide_lbl').show();
            }
            else {
                $('.hide_lbl').hide();
            }
        });

        $('#lbl_tgl').on('change', function (e) {
            if (e.target.checked) {
                $('.hide_lbl_cntrl').show();
                $('.hide_nxt').show();
                $('.hide_skip').hide();
            }
            else {
                $('.hide_lbl_cntrl').hide();
                $('.hide_skip').show();
                $('.hide_nxt').hide();
            }
        });

        $(".add-more").click(function () {
            var html = $(".copy-fields").html();
            $(".add_field").after(html);
        });
        $("body").on("click", ".remove", function () {
            $(this).parents(".remove_field").remove();
        });


        $(".sv_btn").click(function () {
            $(".modal_tabs:last").hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        });

        $('#control_Modal').on('shown.bs.modal', function (e) {
            $('.modal-backdrop').css("display", "none");
        });
        $('#control_Modal').on('show.bs.modal', function (e) {
            $('.modal-backdrop').css("display", "none");
        })

        $('#datetimepicker1').datetimepicker({
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-crosshairs',
                clear: 'fa fa-trash'
            },
            format: 'MM/DD/YYYY'
        });

        $(function () {
            $('#datetimepicker2').datetimepicker({
                format: 'LT'
            });
        });


        $(document).ready(function () {
            //here first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
            $(".add-more").click(function () {
                var html = $(".copy-fields").html();
                $(".add_field").after(html);
            });
            $("body").on("click", ".remove", function () {
                $(this).parents(".remove_field").remove();
            });
        });

        //here first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.



    }





}
