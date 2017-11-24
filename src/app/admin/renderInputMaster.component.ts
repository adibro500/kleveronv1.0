import { Component, Input, OnInit, AfterViewInit, DoCheck, Inject } from '@angular/core';
import { RlTagInputModule } from 'angular2-tag-input';
import { Control } from "./Control";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DrakeStoreService, DroppableDirective } from "@swimlane/ngx-dnd/release";
import { InputMasterService } from "./admin-input-master.service";
import { DOCUMENT } from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RenderInputMasterService, IUser } from './render-input-master.service';
import { FormControls } from './FormControls';
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: 'render-input-master',
    templateUrl: './renderInputMaster.component.html',
    // styleUrls: ['./stylish.css'],
    providers: [Control, DrakeStoreService, DroppableDirective, InputMasterService]
})


export class RenderInputMaster implements OnInit, AfterViewInit {

    data: any[] = [];
    idx: number;
    constructor(private route: ActivatedRoute, private rims: RenderInputMasterService, public fb: FormBuilder, public con: Control, public ds: DrakeStoreService, private router: Router, private aimp: InputMasterService, private dragulaService: DragulaService, @Inject(DOCUMENT) private document: any) {


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
        else if (color == "orange-blue") {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/orange-blue.css");
        }


        //console.log("inside init", this.data);



        // this.dragulaService.setOptions('first-bag', {
        //     revertOnSpill: true
        // });
        this.rims.getInputData().subscribe(data => {
            this.data = JSON.parse(JSON.stringify(data));
            this.route.params.subscribe(params => {
                this.index = params['index'];
                if (this.data && this.data.length > 0 && this.index)
                    this.getTemplateByIndex(this.index);
            }
            )
        });


    }
    j: any;
    str: string = '';
    str0_aob = "";
    pholder: string = 'New Company';
    strid0 = "cmn_input0";
    str0: string = "";
    pholder0: string = 'New Company';
    strid0_CHA = "Textarea1";
    str0_CHA: string = '';
    pholder0_CHA = "Company Head Office Address";
    strid0_CEO = "Text";
    str0_CEO: string = '';
    pholder0_CEO = "Name Of CEO/MD";
    strid0_city = "TextCity";
    str0_city: string = '';
    pholder0_city = "City";
    strid0_aob = "Areas";
    aob0: string[] = ['XYz', 'ABC'];
    pholder0_aob = "Areas of Business";
    strid0_fb = "Text";
    str0_fb: string = '';
    pholder0_fb = "Facebook Address";
    pholder0_ll = "Linkedin Address";
    strid0_ll = "Text";
    str0_ll: string = '';
    pholder0_gp = "Google Plus Address";
    strid0_gp = "Text";
    str0_gp: string = '';
    pholder0_tw = "Twitter Handle";
    strid0_tw = "Text";
    str0_tw: string = '';
    pholder0_ctry = "Country";
    strid0_ctry = "Text";
    str0_ctry: string[] = ['China', 'Dubai', 'Russia'];
    pholder0_state = "Country";
    strid0_state = "Text";
    str0_state: string[] = ['Andhra Pradesh', 'Gujarat', 'Maharahtra'];
    pholder0_info = "input text for a single line field with a max";
    strid0_info = "Textarea1";
    str0_info: string = "";
    lid0_info = "label";
    lname0_info = "Other Information";
    lclass0_info: string = "lbl_hdr";
    strid0_noe = "Text";
    str0_noe: string[] = ['ABC', 'XYZ'];
    strid0_cbox: string[] = ["Checkbox1", "checkbox2"];
    str0_cbox: string[] = ['Compliant With PF(India)', 'Compliant With ESIC(India)'];
    isval0: boolean = false;
    valmsg0: string = "";


    @Input()
    value: string;
    @Input()
    placeholder: string;
    @Input()
    id: string;
    @Input()
    class: string;
    @Input()
    name: string;




    formUrl: string;
    formName: string;
    Textboxes: Control[] = new Array<Control>();
    Textboxes_CHA: Control[] = new Array<Control>();
    Textboxes_CEO: Control[] = new Array<Control>();
    Textboxes_city: Control[] = new Array<Control>();
    Textboxes_aob: Control[] = new Array<Control>();
    Textboxes_fb: Control[] = new Array<Control>();
    Textboxes_tw: Control[] = new Array<Control>();
    Textboxes_ll: Control[] = new Array<Control>();
    Textboxes_gplus: Control[] = new Array<Control>();
    Textboxes_ctry: Control[] = new Array<Control>();
    Textboxes_state: Control[] = new Array<Control>();
    Textboxes_info: Control[] = new Array<Control>();
    Textboxes_NOE: Control[] = new Array<Control>();
    Textboxes_cbox: Control[] = new Array<Control>();


    control: Control;
    control2: Control;



    strop: string;

    showTextBox: boolean;
    showTextBox_CHA: boolean;
    showTextBox_CEO: boolean;
    showTextBox_city: boolean;
    showTextBox_aob: boolean;
    showTextBox_fb: boolean;
    showTextBox_tw: boolean;
    showTextBox_ll: boolean;
    showTextBox_gplus: boolean;
    showTextBox_ctry: boolean;
    showTextBox_state: boolean;
    showTextBox_info: boolean;
    showTextBox_noe: boolean;
    showTextBox_cbox: boolean;
    showText: boolean = true;
    showText_CHA: boolean = true;
    showText_CEO: boolean = true;
    showText_city: boolean = true;
    showText_aob: boolean = true;
    showText_fb: boolean = true;
    showText_tw: boolean = true;
    showText_ll: boolean = true;
    showText_gplus: boolean = true;
    showText_ctry: boolean = true;
    showText_state: boolean = true;
    showText_info: boolean = true;
    showText_noe: boolean = true;
    showText_cbox: boolean = true;

    pageContent;
    sendJson: any;
    getTemplateByIndex(i) {

        //// alert(i);

        console.log("here it is", this.data);
        console.log("here here", this.data[i].html.Textboxes);
        this.formUrl = this.data[i].formURL;
        this.formName = this.data[i].formName;

        this.Textboxes = this.data[i].html.Textboxes;
        this.Textboxes_CHA = this.data[i].html.Textboxes_CHA;
        this.Textboxes_CEO = this.data[i].html.Textboxes_CEO;
        this.Textboxes_city = this.data[i].html.Textboxes_city;
        this.Textboxes_aob = this.data[i].html.Textboxes_aob;
        this.Textboxes_fb = this.data[i].html.Textboxes_fb;
        this.Textboxes_tw = this.data[i].html.Textboxes_tw;
        this.Textboxes_ll = this.data[i].html.Textboxes_ll;
        this.Textboxes_gplus = this.data[i].html.Textboxes_gplus;
        this.Textboxes_ctry = this.data[i].html.Textboxes_ctry;
        this.Textboxes_state = this.data[i].html.Textboxes_state;
        this.Textboxes_info = this.data[i].html.Textboxes_info;
        this.Textboxes_NOE = this.data[i].html.Textboxes_NOE;
        this.Textboxes_cbox = this.data[i].html.Textboxes_cbox;
        this.showTextBox = this.data[i].html.showTextBox;
        this.showTextBox_CHA = this.data[i].html.showTextBox_CHA;
        this.showTextBox_CEO = this.data[i].html.showTextBox_CEO;
        this.showTextBox_city = this.data[i].html.showTextBox_city;
        this.showTextBox_aob = this.data[i].html.showTextBox_aob;
        this.showTextBox_fb = this.data[i].html.showTextBox_fb;
        this.showTextBox_tw = this.data[i].html.showTextBox_tw;
        this.showTextBox_ll = this.data[i].html.showTextBox_ll;
        this.showTextBox_gplus = this.data[i].html.showTextBox_gplus;
        this.showTextBox_ctry = this.data[i].html.showTextBox_ctry;
        this.showTextBox_state = this.data[i].html.showTextBox_state;
        this.showTextBox_info = this.data[i].html.showTextBox_info;
        this.showTextBox_noe = this.data[i].html.showTextBox_noe;
        this.showTextBox_cbox = this.data[i].html.showTextBox_cbox;
        this.showText = this.data[i].html.showText;
        this.showText_CHA = this.data[i].html.showText_CHA;
        this.showText_CEO = this.data[i].html.showText_CEO;
        this.showText_city = this.data[i].html.showText_city;
        this.showText_aob = this.data[i].html.showText_aob;
        this.showText_fb = this.data[i].html.showText_fb;
        this.showText_tw = this.data[i].html.showText_tw;
        this.showText_ll = this.data[i].html.showText_ll;
        this.showText_gplus = this.data[i].html.showText_gplus;
        this.showText_ctry = this.data[i].html.showText_ctry;
        this.showText_state = this.data[i].html.showText_state;
        this.showText_info = this.data[i].html.showText_info;
        this.showText_noe = this.data[i].html.showText_noe;
        this.showText_cbox = this.data[i].html.showText_cbox;


        this.strid0 = this.data[i].html.strid0;
        this.str0 = this.data[i].html.str0;
        this.pholder0 = this.data[i].html.pholder0;
        this.strid0_CHA = this.data[i].html.strid0_CHA;
        this.str0_CHA = this.data[i].html.str0_CHA;
        this.pholder0_CHA = this.data[i].html.pholder0_CHA;
        this.strid0_CEO = this.data[i].html.strid0_CEO;
        this.str0_CEO = this.data[i].html.str0_CEO;
        this.pholder0_CEO = this.data[i].html.pholder0_CEO;
        this.strid0_city = this.data[i].html.strid0_city;
        this.str0_city = this.data[i].html.str0_city;
        this.pholder0_city = this.data[i].html.pholder0_city;
        this.aob0 = this.data[i].html.aob0;
        this.strid0_aob = this.data[i].html.strid0_aob;
        this.pholder0_aob = this.data[i].html.pholder0_aob;
        this.strid0_fb = this.data[i].html.strid0_fb;
        this.str0_fb = this.data[i].html.str0_fb;
        this.pholder0_fb = this.data[i].html.pholder0_fb;
        this.strid0_ll = this.data[i].html.strid0_ll;
        this.str0_ll = this.data[i].html.str0_ll;
        this.pholder0_ll = this.data[i].html.pholder0_ll;
        this.strid0_gp = this.data[i].html.strid0_gp;
        this.str0_gp = this.data[i].html.str0_gp;
        this.pholder0_gp = this.data[i].html.pholder0_gp;
        this.strid0_tw = this.data[i].html.strid0_tw;
        this.str0_tw = this.data[i].html.str0_tw;
        this.pholder0_tw = this.data[i].html.pholder0_tw;
        this.strid0_ctry = this.data[i].html.strid0_ctry;
        this.str0_ctry = this.data[i].html.str0_ctry;
        this.pholder0_ctry = this.data[i].html.pholder0_ctry;
        this.strid0_state = this.data[i].html.strid0_state;
        this.str0_state = this.data[i].html.str0_state;
        this.pholder0_state = this.data[i].html.pholder0_state;
        this.strid0_noe = this.data[i].html.strid0_noe;
        this.str0_noe = this.data[i].html.str0_noe;
        this.strid0_cbox = this.data[i].html.strid0_cbox;
        this.str0_cbox = this.data[i].html.str0_cbox;
        this.pholder0_info = this.data[i].html.pholder0_info;
        this.strid0_info = this.data[i].html.strid0_info;
        this.str0_info = this.data[i].html.str0_info;
        this.lid0_info = this.data[i].html.lid0_info;
        this.lname0_info = this.data[i].html.lname0_info;
        this.lclass0_info = this.data[i].html.lclass0_info;


    }
    fc: FormControls;
    aob_val: string = "";
    aob_vals: string[] = [];
    noe_val: string = "";
    noe_vals: string[] = [];
    ctry_val: string = "";
    ctry_vals: string[] = [];
    state_val: string = "";
    state_vals: string[] = [];
    checkbox_1: boolean = false;
    checkbox_2: boolean = false;
    checkboxes_1: boolean[] = [];
    checkboxes_2: boolean[] = [];
    company: string[] = [];
    headOffice: string[] = [];
    ceo: string[] = [];
    area: string[] = [];
    city: string[] = [];
    state: string[] = [];
    numberOfEmployees: string[] = [];
    country: string[] = [];
    Other_Info: string[] = [];
    twitter: string[] = [];
    facebook: string[] = [];
    google_plus: string[] = [];
    linkedIn: string[] = [];

    saveClick() {
        if (this.showTextBox == true) {
            for (var i = 0; i < this.Textboxes.length; i++) {
                this.company.push(this.Textboxes[i].value);
            }
        }
        if (this.showTextBox_CHA == true) {
            for (var i = 0; i < this.Textboxes_CHA.length; i++) {
                this.headOffice.push(this.Textboxes_CHA[i].value);
            }
        }
        if (this.showTextBox_CEO == true) {
            for (var i = 0; i < this.Textboxes_CEO.length; i++) {
                this.ceo.push(this.Textboxes_CEO[i].value);
            }
        }
        if (this.showTextBox_aob == true) {
            for (var i = 0; i < this.Textboxes_aob.length; i++) {
                this.area.push(this.Textboxes_aob[i].value);
            }
        }
        if (this.showTextBox_city == true) {
            for (var i = 0; i < this.Textboxes_city.length; i++) {
                this.city.push(this.Textboxes_city[i].value);
            }
        }
        if (this.showTextBox_state == true) {
            for (var i = 0; i < this.Textboxes_state.length; i++) {
                this.state.push(this.Textboxes_state[i].value);
            }
        }
        if (this.showTextBox_noe == true) {
            for (var i = 0; i < this.Textboxes_NOE.length; i++) {
                this.numberOfEmployees.push(this.Textboxes_NOE[i].value);
            }
        }
        if (this.showTextBox_ctry == true) {
            for (var i = 0; i < this.Textboxes_ctry.length; i++) {
                this.country.push(this.Textboxes_ctry[i].value);
            }
        }
        if (this.showTextBox_info == true) {
            for (var i = 0; i < this.Textboxes_info.length; i++) {
                this.Other_Info.push(this.Textboxes_info[i].value);
            }
        }
        if (this.showTextBox_tw == true) {
            for (var i = 0; i < this.Textboxes_tw.length; i++) {
                this.twitter.push(this.Textboxes_tw[i].value);
            }
        }
        if (this.showTextBox_gplus == true) {
            for (var i = 0; i < this.Textboxes_gplus.length; i++) {
                this.google_plus.push(this.Textboxes_gplus[i].value);
            }
        }
        if (this.showTextBox_fb == true) {
            for (var i = 0; i < this.Textboxes_fb.length; i++) {
                this.facebook.push(this.Textboxes_fb[i].value);
            }
        }
        if (this.showTextBox_ll == true) {
            for (var i = 0; i < this.Textboxes_ll.length; i++) {
                this.linkedIn.push(this.Textboxes_ll[i].value);
            }
        }
        this.sendJson = {
            "New_Company": [this.str0, this.company],
            "Company_Head_Office_Address": [this.str0_CHA, this.headOffice],
            "CEO_MD": [this.str0_CEO, this.ceo],
            "City": [this.str0_city, this.city],
            "Area_Of_Business": [this.aob_val, this.area],
            "State": [this.state_val, this.state],
            "Number_Of_Employees": [this.noe_val, this.numberOfEmployees],
            "Country": [this.ctry_val, this.country],
            "Checkboxes": [
                {
                    "checkbox_1": this.checkbox_1,

                    "checkbox_2": this.checkbox_2
                },
                {
                    "checkboxes_1": [this.checkboxes_1],
                    "checkboxes_2": [this.checkboxes_2]
                }
            ],
            "Other_Info": [this.str0_info, this.Other_Info],
            "Twitter": [this.str0_tw, this.twitter],
            "Facebook": [this.str0_fb, this.facebook],
            "Google_Plus": [this.str0_gp, this.google_plus],
            "LinkedIn": [this.str0_ll, this.linkedIn]
        };

        //console.log("form vals", myForm);
        this.rims.putFormInputData(this.sendJson, this.formUrl);
        alert("Data sent successfully!!");
    }







    index: number = 9;

    ngAfterViewInit() {


    }



    ngOnInit(): void {




        $('.edit_btn').on('click', function () {
            // alert($('.edit_btn').index(this));
            localStorage.setItem("parent", $('.edit_btn').index(this));
        });

        $(".clone").click(function () {
            $(this).parent().find('.element-box').eq(0).clone().appendTo(this);
        });

        var num = 0;
        $(".save_btn").click(function () {
            console.log($("#contra").html());

        });

        $(".delel").click(function () {
            $(this).closest(".element_box").remove();
        });


        $('.sv_btn').on('click', function () {
            $("#input_label_Modal").hide();
        })


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

        // $(window).load(function () {
        //     var H = $(window).height();
        //     var nH = $('.logo_bar').height();
        //     var nD = $('.onboarding_lbl').height();
        //     var F = $('footer').height();
        //     var C = H - nH - nD - F - 10;
        //     $('.detail_wrapper').css('min-height', C);
        //     $(window).resize(function () {
        //         var H = $(window).height();
        //         var nH = $('.logo_bar').height();
        //         var nD = $('.onboarding_lbl').height();
        //         var F = $('footer').height();
        //         var C = H - nH - nD - F - 10;
        //         $('.detail_wrapper').css('min-height', C);
        //     });
        // });

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

        $("#clone0").click(function () {
            $(this).parent().find('.element-box').eq(0).clone().appendTo(this);
        });

        $(".nx_btn").click(function () {
            var nextDiv = $(".modal_tabs:visible").next(".modal_tabs");
            if (nextDiv.length == 0) { // wrap around to beginning
                nextDiv = $(".modal_tabs:first");
            }
            $(".modal_tabs").hide();
            nextDiv.show();
        });

        $('#vldtn_btn1').on('change', function (e) {
            if (e.target.checked) {
                $('.hide_lbl').show();
            }
            else {
                $('.hide_lbl').hide();
            }
        });
    }



}
