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
import { DatePickerComponent } from "./Datepicker.component";
import { getAnnotation } from "./annotations";
import { TextboxComponent } from "./textbox.component";
import { DOCUMENT } from "@angular/common";
import { DocumentComponent } from './addDoc.component';
import { FieldComponent } from './addField.component';
import { CheckboxComponent } from './checkBox.component';
import { PasswordComponent } from './password.component';
import { RadioComponent } from './radio.component';
import { TimePickerComponent } from './timePicker.component';
import { TextboxWithLabelComponent } from './textboxwithlbl.component';
import { SwitchComponent } from './switch.component';
import { SelectTextComponent } from './selectTextbox.component';
import { SelectOptionComponent } from './selectOption.component';
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
    // inputs = {
    //     class: 'world',
    //     something: () => 'can be really complex'
    // };

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

    id;
    val;
    ph;
    msg;
    arr = new Array<any>();

    inputs = [];

    cols;
    icontrols;
    lid;
    lname;
    lclass;
    cid;
    cval;
    cph;
    cmsg;





    saveData() {
        // if (this.icontrols == "Input(Text)") {


        // }




        // this.inputs.push(
        //     {

        //     }
        // );

        switch (this.icontrols) {
            case "Input(Text)": this.components.push(TextboxComponent);
                break;
            case "Input(Text) With Label": this.components.push(TextboxWithLabelComponent);
                break;
            case "Input(Password)": this.components.push(PasswordComponent);
                break;
            case "TimePicker": this.components.push(TimePickerComponent);
                break;
            case "Input(Checkbox)": this.components.push(CheckboxComponent);
                break;
            case "Input(Radio)": this.components.push(RadioComponent);
                break;
            case "Toggle Switch": this.components.push(SwitchComponent);
                break;
            case "Select": this.components.push(SelectTextComponent);
                break;
            case "Select(With Checkbox)": this.components.push(SelectOptionComponent);
                break;
            //Date Picker
            case "Date Picker": this.components.push(DatePickerComponent);
                break;
        }
        let props = {
            id: this.cid,
            css: this.cols,
            value: this.cval,
            pholder: this.cph
        };

        this.inputs.push(props);




        console.log("arrrrr", this.arr);

    }




    ngAfterViewInit(): void {
        // this.components.push(TextboxComponent);

        $('.sv_btn').on('click', function () {
            $("#control_Modal").hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        })


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
        // this.components.push(CheckboxComponent, RadioComponent, PasswordComponent, TimePickerComponent, DatePickerComponent);

        if (localStorage.getItem("side") == "right") {
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
        $('#add_btn').click(function () {
            $('.add_label,.add_control').hide();
            $('.add_div').show();
        });

        $(".nx_btn").click(function () {
            var nextDiv = $(".modal_tabs:visible").next(".modal_tabs");
            if (nextDiv.length == 0) { // wrap around to beginning
                nextDiv = $(".modal_tabs:first");
            }
            $(".modal_tabs").hide();
            nextDiv.show();
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

        // right toggle menu

        function toggle(id) {
            var el = document.getElementById(id);
            var img = document.getElementById("tgl_icn");
            var box = el.getAttribute("class");
            if (box == "thm_select") {
                el.setAttribute("class", "show");
                delay(img, "/assets/images/toggle.png", 400);
            }
            else {
                el.setAttribute("class", "thm_select");
                delay(img, "/assets/images/toggle.png", 400);
            }
        }

        function delay(elem, src, delayTime) {
            window.setTimeout(function () { elem.setAttribute("src", src); }, delayTime);
        }

        // side sub-menu js

        $(document).ready(function () {
            $(".inner").css("display", "none");
            $('.sub_menu_toggle').click(function (e) {
                e.preventDefault();

                var $this = $(this);
                if ($this.next().hasClass('visible')) {
                    $this.next().removeClass('visible');
                    $this.next().slideUp(350);
                } else {
                    $this.parent().parent().find('li .inner').removeClass('show');
                    $this.parent().parent().find('li .inner').slideUp(350);
                    $this.next().toggleClass('visible');
                    $this.next().slideToggle(350);
                }
            });
        });


    }





}
