import { Component, OnInit, ViewChild, ChangeDetectorRef, Input } from "@angular/core";
import { widget } from "../widgets";
import { OwlCarousel } from "ngx-owl-carousel";

declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
declare var Modernizr: any;


@Component({
    selector: 'owl-car',
    templateUrl: './owl-component.html',
    styleUrls: ['../admin-widget.css']
})

export class OwlCar implements OnInit {
    size = 25;
    color: string = "#017DB9";
    // changeFont(flag) {
    //     if (flag === 'if') {
    //         console.log("if");
    //         this.fSize = this.fSize++;
    //     }
    // }

    numOfItems = 2;


    percent_1 = "80%";
    res_deployed = "Resources Deployed";
    rdOnly = true;



    wids: widget[] = [];

    wid: widget;
    wid2: widget;
    index: number;
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

    constructor(private cd: ChangeDetectorRef) {







    }


    cloneCarousel(i) {
        this.wid = new widget(this.wids[i].values, [], i++);
        this.wids.splice(i, 0, this.wid);
        console.log("splice", this.wids);
        $("#sub_wdgt_carousel").load(location.href + " #sub_wdgt_carousel");
    }

    setRdOnly() {

        this.rdOnly = !this.rdOnly;
    }

    changeSize(flag) {
        if (flag == "dec") {
            this.size = this.size - 1;
        }
        else {
            this.size = this.size + 1;
        }

    }
    owlElement: any;
    str: string = '';
    ngOnInit(): void {
        // this.owlElement = $('.owl-carousel');
        // this.owlElement.owlCarousel();
        this.init_wids();

        // $('.owl-carousel').owlCarousel('add', () => {
        //     this.str = "";
        //     for (var i = 0; i < this.wids.length; i++) {

        //         this.str = this.str + ` <div class="sub_info item" >
        //             <a class="remove_clone_action" href= "javascript:void(0);" >
        //                 <i class="fa fa-clone" > </i>
        //                     < /a>

        //                     < div class="up_dwn_arw" >
        //                         <i class="fa fa-long-arrow-up" aria- hidden="true" > </i>
        //                             < /div>
        //                             < div class="up_dwn_info" >
        //                                 <div class="info_no" > <label[ngStyle]="{'font-size':  size +'px'}" > <input class="pnl_inp" type= "text" value =`+ this.wids[i].values[0] + ` [readonly] = "rdOnly" /></label></div>
        //                                     <div class="info_lbl" > <label[ngStyle]="{'font-size': size+'px'}" > <input class="pnl_inp" type= "text" value =`+ this.wids[i].values[1] + ` [readonly] = "rdOnly" /></label></div>
        //                                         </div>
        //                                         < /div>`;

        //     }

        //     return this.str;


        // }).owlCarousel('refresh');
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


        // $(".edit_icon:eq(3)").on('click', () => {
        //     console.log("iiiii");
        //     this.fSize = this.fSize++;
        // });

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

        $(function () {
            $("#list_view_tabs").tabs();
        });


        $(function () {
            $("#App_list_tabs").tabs();
        });


        $(".action-ui").addClass("hide-action-ui");

        $(".setting_icn").click(function () {
            $(".action-ui").removeClass("hide-action-ui");
            $(".action-ui").addClass("show-action-ui");
        });

        // owl Carousel js


        this.owlElement = $("#sub_wdgt_carousel");
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