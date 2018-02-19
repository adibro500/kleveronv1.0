import { Component, OnInit, ViewChild, IterableDiffers, DoCheck } from "@angular/core";
import { widget } from "./widgets";
import { OwlCarousel } from "ngx-owl-carousel";
import { DragulaService } from "ng2-dragula/components/dragula.provider";
import { InputMasterService } from "./admin-input-master.service";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { widget_cl } from "./widget_cl";

declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
declare var Modernizr: any;


@Component({
    selector: 'admin-widget-master',
    templateUrl: './admin-widget-master.component.html',
    styleUrls: ['./admin-widget.css']
})

export class AdminWidgetMaster implements OnInit, OnDestroy {
    size = 25;
    color: string = "#017DB9";


    widgets: any[] = [];
    widplus: widget_cl[] = [];

    show_action: boolean = false;
    ngOnDestroy() {
        this.dragulaService.destroy("first-bag");
    }


    percent_1 = "80%";
    res_deployed = "Resources Deployed";
    rdOnly = true;

    options: any;
    formName: string = "";
    wids: widget[] = [];

    wid: widget;
    wid2: any;
    index: number;

    kdx;
    cloneElement(idx, flg) {

        if (flg == undefined) {

            this.wid2 = JSON.parse(JSON.stringify(this.widgets[idx]))

            this.widgets.splice(idx + 1, 0, this.wid2);

            console.log("arr", this.widgets);
        }

    }

    pushval($event, val, idx, prop, type) {
        console.log("idx", idx);
        this.widgets[idx][prop][0] = (<HTMLInputElement>event.target).value;

    }

    delElement(idx, flg) {
        if (flg == undefined)
            delete this.widgets[idx];

    }

    init_wids() {
        this.index = 0;
        this.wid = new widget(['80%', 'Resources'], [], 0);
        this.wids.push(this.wid);
        this.wid = new widget(['75%', '4.5 & Above Rating'], [], this.index++);
        this.wids.push(this.wid);
        this.wid = new widget(['60%', 'Highly Engaged'], [], this.index++);
        this.wids.push(this.wid);
        this.wid = new widget(['240$', 'Avg Hourly Rate'], [], this.index++);
        this.wids.push(this.wid);
    }
    // @ViewChild('owlElement') owlElement: OwlCarousel;
    iterableDiffer: any;
    constructor(private dragulaService: DragulaService, private ims: InputMasterService) {
        this.options = {
            direction: 'vertical',
            removeOnSpill: false
        }


        dragulaService.setOptions('first-bag', {
            revertOnSpill: true,
            removeOnSpill: false
        });





        dragulaService.drop.subscribe((value) => {

            console.log("hi");

        });


        dragulaService.dropModel.subscribe((value) => {
            console.log("hi2");
            console.log(value);
            this.onDropModel(value);


        });




    }

    cloneDataElement(idx, i) {

        var abc = JSON.parse(JSON.stringify(this.widgets[idx].data[i]));

        this.widgets[idx].data.splice(i + 1, 0, abc);
    }

    delDataElement(idx, i) {
        delete this.widgets[idx].data[i];
    }

    tabs = {
        "tabs1": ["Basic Info", "Professional Info", "Projects", "Assessments"],
        "tabs2": ["Jobs", "Projects", "Positions"]
    }

    text_lbl = ["Skills", "Profession Skills", "Expertize Level", "Experience"]

    cloneTagElement(idx, i) {
        var abc = JSON.parse(JSON.stringify(this.widgets[idx].tags[i]));

        this.widgets[idx].tags.splice(i + 1, 0, abc);
    }

    delTagElement(idx, i) {
        delete this.widgets[idx].tags[i];
    }

    onDropModel(args) {


        console.log(this.widgets);
    }


    cloneCarousel(i) {
        this.wid = new widget(this.wids[i].values, [], i++);
        this.wids.splice(i, 0, this.wid);
        console.log("splice", this.wids);
        this.owlElement.owlCarousel({

            autoPlay: 3000,
            responsiveClass: true,
            responsive: {
                320: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                420: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                768: {
                    items: 2,
                    nav: true,
                    loop: true
                },
                1080: {
                    items: 2,
                    nav: true,
                    loop: true
                },
                1366: {
                    items: 4,
                    nav: true,
                    loop: true
                },
                1920: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            },
            nav: true,
            navText: false

        });

    }

    setRdOnly(rd) {

        rd = !rd;
        return rd;
    }

    changeSize(flag, s) {
        if (flag == "dec") {
            s = s - 1;
        }
        else {
            s = s + 1;
        }
        return s;

    }
    owlElement: any;
    str: string = '';
    wid_get = {
        "type": "widget1",
        "data": [],
        "ids": [],
        "classes": [],
        "title": "",
        "rd": true,
        "font": this.size,
        "bgColor": this.color,
        "darr": [{
            "data_title": '80%',
            "subdata": ['Resources']
        }, {
            "data_title": '80%',
            "subdata": ['Resources']
        }, {
            "data_title": '80%',
            "subdata": ['Resources']
        }, {
            "data_title": '80%',
            "subdata": ['Resources']
        }

        ]
    };
    ngOnInit(): void {
        this.init_wids();


        this.widgets.push({
            "type": "widget2",
            "data": [{
                "title": "Ongoing Project",
                "value": 82,
            },
            {
                "title": "Completed",
                "value": 42,
            },
            {
                "title": "Proposal Sent",
                "value": 45,
            }],
            "ids": [],
            "order": 0,
            "font": 12,
            "bgColor": "",
            "classes": [],
            "title": "",
            "headings": ["Projects", "Details"],
            "heading": [],
            "sub_heading": ["82", "Ongoing Project"],
            "rd": true,
            "footer": [],
            "nextdata": [],

        });
        this.widgets.push({
            "type": "widget3",
            "ids": [],
            "font": 12,
            "order": 1,
            "bgColor": "",
            "classes": [],
            "title": "",
            "rd": true,
            "headings": ["My Revenue", "Details"],
            "data": [
                {
                    "price": "820000 $",
                    "time": "1 Jan, 2017 - Till Date"

                }, {
                    "price": "20000 $",
                    "time": "This Month"
                }
            ]

        });
        this.widgets.push({
            "type": "widget4",
            "ids": [],
            "font": 12,
            "order": 2,
            "bgColor": "",
            "classes": [],
            "title": "",
            "data": {
                "number": "200",
                "desc": "Total Resources"
            }

        });
        this.widgets.push({
            "type": "widget5",
            "ids": [],
            "font": 12,
            "bgColor": "",
            "order": 3,
            "classes": [],
            "title": "",
            "data": [
                {
                    "number": "12",
                    "desc": "IOS Developers"
                }, {
                    "number": "20",
                    "desc": "Java Developers"
                }, {
                    "number": "15",
                    "desc": "Android Developers"
                }, {
                    "number": "19",
                    "desc": "PHP Developers"
                },

            ]

        });
        this.widgets.push({
            "type": "widget6",
            "ids": [],
            "font": 12,
            "order": 4,
            "bgColor": "",
            "classes": [],
            "title": "",
            "heading": ["Tech Job Template", "10+ Years Experience"],
            "tags": ["tag1", "tag2", "tag3"],
            "footer": ["17 Jan 2018", "Use Template"]

        });
        this.widgets.push({
            "type": "widget7",
            "ids": [],
            "font": 12,
            "order": 5,
            "bgColor": "",
            "classes": [],
            "heading": "Client SPOC",
            "data": [{
                "name": "Aditya Jadhav",
                "tel": "9999999999",
                "loc": "Location",
                "addr": "Garden Estate, Aundh"
            }],
            "disp_img": true,
            "disp_img2": true
        });
        this.widgets.push({
            "type": "widget8",
            "ids": [],
            "font": 12,
            "order": 6,
            "bgColor": "",
            "classes": [],
            "heading": "FlipKart",
            "data": {
                "logo_desc": "Flipkart Pvt. ltd.",
                "price": "150,000$",
                "price_desc": "Revenue",

            },
            "footer": [
                {
                    "number": "26 Jan 2017",
                    "desc": "Since"
                },
                {
                    "number": "12",
                    "desc": "Active Projects"
                },
                {
                    "number": "200",
                    "desc": "Team Members"
                },
            ]
        });
        this.widgets.push({
            "type": "widget9",
            "ids": [],
            "font": 12,
            "order": 7,
            "bgColor": "",
            "classes": [],
            "title": "",
            "heading": ["Redesign of logo", "1254RJ"],
            "data": [{
                "number": "250,000$",
                "desc": "Project Budget"
            },
            {
                "number": "27 Jan, 2017",
                "desc": "Start Date"
            },
            {
                "number": "200",
                "desc": "Team member"
            },
            {
                "number": "31 Dec, 2017",
                "desc": "End Date"
            },

            ]
        });
        this.widgets.push({
            "type": "widget10",
            "ids": [],
            "font": 12,
            "bgColor": "",
            "order": 8,
            "classes": [],
            "title": "",
            "heading": ["Atul Manas", "Senior Java Developer", "Pune, Maharashtra, India"],
            "row1": ["3.5 rating", "Active", "Share"],
            "data": [
                {
                    "title": "Mobile",
                    "value": "+919078778909"
                },
                {
                    "title": "email",
                    "value": "atul500@gmail.com"
                },
                {
                    "title": "skype",
                    "value": "atul.manas"
                }
            ],
            "link": "www.kleveron.com/atul.m",
            "nextdata": [
                { "title": "250$/hr", "value": "Base Rate" },
                { "title": "75 days", "value": "On Bench" },
                { "title": "Pune", "value": "Mumbai" }
            ]

        });
        this.widgets.push({
            "type": "widget11",
            "ids": [],
            "font": 12,
            "order": 9,
            "bgColor": "",
            "classes": [],
            "title": "",
            "data": [
                {
                    "account": "Account",
                    "revenue": "20,000$",
                    "resources": "5",
                    "status": "90%",
                },
                {
                    "account": "Account",
                    "revenue": "20,000$",
                    "resources": "5",
                    "status": "90%",
                },
                {
                    "account": "Account",
                    "revenue": "20,000$",
                    "resources": "5",
                    "status": "90%",
                },
                {
                    "account": "Account",
                    "revenue": "20,000$",
                    "resources": "5",
                    "status": "90%",
                },
            ]

        });
        this.widgets.push({
            "type": "widget12",
            "ids": [],
            "font": 12,
            "bgColor": "",
            "order": 10,
            "classes": [],
            "title": "",
            "heading": ["Top Performers", "Details"],
            "data": [{
                "name": "Shankar K",
                "desc": "Secondary line text Lorem Ipsum",
                "number": "5",
                "show_pic": true
            }, {
                "name": "Shankar K",
                "desc": "Secondary line text Lorem Ipsum",
                "number": "5",
                "show_pic": true
            },
            {
                "name": "Shankar K",
                "desc": "Secondary line text Lorem Ipsum",
                "number": "5",
                "show_pic": true
            },
            {
                "name": "Shankar K",
                "desc": "Secondary line text Lorem Ipsum",
                "number": "5",
                "show_pic": true
            },
            {
                "name": "Shankar K",
                "desc": "Secondary line text Lorem Ipsum",
                "number": "5",
                "show_pic": true
            },


            ]
        });
        this.widgets.push({
            "type": "widget13",
            "ids": [],
            "font": 12,
            "bgColor": "",
            "classes": [],
            "order": 11,
            "title": "",
            "heading": "Escalation",
            "sub_heading": [{
                "number": "25%",
                "desc": "Quality"
            },
            {
                "number": "15%",
                "desc": "Time"
            }, {
                "number": "60%",
                "desc": "Billing"
            }
            ],
            "data": [{
                "date": "31",
                "month": "Mar",
                "name": "Client-1 Shankar K",
                "desc": "Secondary line text lorem ipsum"
            },
            {
                "date": "31",
                "month": "Mar",
                "name": "Client-1 Shankar K",
                "desc": "Secondary line text lorem ipsum"
            },
            {
                "date": "31",
                "month": "Mar",
                "name": "Client-1 Shankar K",
                "desc": "Secondary line text lorem ipsum"
            },
            {
                "date": "31",
                "month": "Mar",
                "name": "Client-1 Shankar K",
                "desc": "Secondary line text lorem ipsum"
            }, {
                "date": "31",
                "month": "Mar",
                "name": "Client-1 Shankar K",
                "desc": "Secondary line text lorem ipsum"
            }]
        });
        this.widgets.push({
            "type": "widget14",
            "ids": [],
            "font": 12,
            "bgColor": "",
            "classes": [],
            "title": "",
            "order": 12,
            "data": [{
                "info": "UX Design",
                "exp": "12 Year"
            },
            {
                "info": "UX Developer",
                "exp": "12 Year"
            },
            {
                "info": "Interaction Design",
                "exp": "05 Year"
            }, {
                "info": "Visual Design",
                "exp": "03 Year"
            }],
            "skill_heading": ["Professional skills", "Expertize Level", "Experience"],
            "nextdata": [{
                "exp_name": "Experience",
                "exp": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries."
            }],
            "prof_dets": [{
                "title": "Google-India Hyderabad Office",
                "position": "Sr Java Developer-On Site Manager",
                "role": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                "domian": "Consumer,Mobile,Android"

            }],
            "ed_dets": [{
                "coll": "M Desc,IIT Powai",
                "yoe": "5 years",
                "duration": "2013-2014"
            }]
        });
        this.widgets.push({
            "type": "widget15",
            "ids": [],
            "order": 13,
            "font": 12,
            "bgColor": "",
            "classes": [],
            "title": ""

        });
        this.widgets.push({
            "type": "widget16",
            "ids": [],
            "font": 12,
            "order": 14,
            "bgColor": "",
            "classes": [],
            "title": ""

        });
        this.widgets.push({
            "type": "widget17",
            "order": 15
        });
        this.widgets.push({
            "type": "widget18",
            "order": 16,
        });

        console.log("str", this.str);

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


        $(function () {
            $("#list_view_tabs").tabs();
        });


        $(function () {
            $("#App_list_tabs").tabs();
        });




        this.owlElement = $("#sub_wdgt_carousel").owlCarousel({

            autoPlay: 3000,
            responsiveClass: true,
            responsive: {
                320: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                420: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                768: {
                    items: 2,
                    nav: true,
                    loop: true
                },
                1080: {
                    items: 2,
                    nav: true,
                    loop: true
                },
                1366: {
                    items: 4,
                    nav: true,
                    loop: true
                },
                1920: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            },
            nav: true,
            navText: false

        });


        // progress bar

        $(document).ready(() => {
            if (!Modernizr.meter) {
                alert('Sorry your brower does not support HTML5 progress bar');
            } else {
                var progressbar = $('.progress_bar'),
                    max = progressbar.attr('max'),
                    time = (1000 / max) * 5,
                    value = progressbar.val();

                var loading = function () {
                    value += 1;
                    var addValue = progressbar.val(value);

                    $('.progress-value').html(value + '%');

                    if (value == max) {
                        clearInterval(animate);
                    }
                };

                var animate = setInterval(function () {
                    loading();
                }, time);
            };
        });

        // side sub-menu js


    }


    cloneProfdets(idx, ii) {
        var temp = JSON.parse(JSON.stringify(this.widgets[idx].prof_dets));
        this.widgets[idx].prof_dets.splice(ii + 1, 0, this.widgets[idx].prof_dets[ii]);
    }

    delProfdets(idx, ii) {
        delete this.widgets[idx].prof_dets[ii];
    }
    saveData() {


        let ans = {

            "username": "ravi",
            "formName": this.formName,
            "carousel": this.wids,
            "widgets": this.widgets,
            "wids1": this.wid_get

        };
        this.ims.putWidData(ans);
        alert("data successfully saved");
        $("#input_control_URL").hide();

    }




}