import { Component, Renderer, Input, Inject } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { ElementRef } from '@angular/core/src/linker/element_ref';

import { ActivatedRoute } from '@angular/router';
import { IsMobileService } from 'ngx-datetime-picker/services/isMobile.service';
import { DateService } from 'ngx-datetime-picker/services/date.service';
import { DatePipe } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { AdminService } from '../admin2/admin-input.service';

declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;

@Component({
    selector: 'render-widget',
    templateUrl: './render-widget.html',
    styleUrls: ['./admin-widget.css']
})

export class RenderWidget implements OnInit, AfterViewInit {
    id: string;
    order: number;
    type: string;
    values: string[];
    placeholder: string;
    lnames: string[];
    lclasses: string[];
    lids: string[];
    selectRadio;

    wids: any[] = [];
    Textboxes: any[] = [];
    changeC: string;
    options: any;

    temp2: any;
    data: any;
    index;
    temp_name = localStorage.getItem("temp_name");

    filesToUpload: Array<File>;

    html_temp: string;

    constructor( @Inject(DOCUMENT) private document: any, dragulaService: DragulaService, private route: ActivatedRoute, private adminService: AdminService) {

        this.options = {
            revertOnSpill: true
        };
        this.filesToUpload = [];

        // dragulaService.out.subscribe((value: any[]) => {
        //     const [bagName, e, el] = value;
        //     console.log("ll", e);
        //     console.log("kk", el);
        //     console.log('id is:', e.dataset.id);
        //     this.temp2 = ;

        // });
        dragulaService.drop.subscribe((value: any[]) => {
            this.onDrop(value);

        });




    }


    ngAfterViewInit() {




    }



    upload() {
        this.makeFileRequest("http://localhost:5000/upload", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

    wid_get: any;


    texts: any[] = [];

    selectedOpts: any[] = [];
    selectOptions2: any[] = [];

    widgets: any[] = [];


    getTemplateByIndex(i) {


        this.wid_get = this.data[i].wids1;
        this.widgets = this.data[i].widgets;

        this.wids = this.data[i].carousel;
        console.log("widgets", this.widgets);
        // console.log("select", this.selectOptions2);
    }



    saveData() {
        this.adminService.putMasterData(this.Textboxes);
        console.log("done");
    }



    onDrop(args) {

        const [el, e, target, source, sibling] = args;
        //console.log("kk", e.dataset.id);
        console.log("kk", el);
        console.log('id is:', source.children[0]);
        console.log('id is:', target.children[2]);
        //sconsole.log('id is:', sibling.dataset.id);
        if (sibling !== null && e !== null && this.Textboxes[parseInt(e.dataset.id)] !== undefined) {
            let tmp = this.Textboxes[e.dataset.id].order;
            this.Textboxes[e.dataset.id].order = this.Textboxes[sibling.dataset.id].order;
            this.Textboxes[sibling.dataset.id].order = tmp;

            // for (var i = sibling.dataset.id + 1; i < this.Textboxes.length; i++) {
            //     if (this.Textboxes[i] !== undefined) {
            //         alert(this.Textboxes[i].order);
            //         this.Textboxes[i].order = this.Textboxes[i].order++;



            //     }

            // }
            //  console.log('id2 is:', args[4].getAttribute("data-id"));

            //console.log("other id is", value[4].getAttribute("data-id"));

            // console.log(e.type, e);
            // if (args[4] !== null && this.Textboxes[parseInt(args[4].getAttribute("data-id"))] !== undefined) {
            //     console.log("inside condition");
            //     let temp = this.Textboxes[parseInt(e.dataset.id)].order;
            //     this.Textboxes[parseInt(e.dataset.id)].order = this.Textboxes[parseInt(args[4].getAttribute("data-id"))].order;
            //     this.Textboxes[parseInt(args[4].getAttribute("data-id"))].order = temp;
            // this.Textboxes.sort((a, b) => {
            //     if (a.order < b.order) return -1;
            //     else if (a.order > b.order) return 1;
            //     else return 0;
            // });
            //  console.log(this.Textboxes);
        }
        // }
        // else

        //     console.log("outside condition");


    }

    selectedValue;
    clickRad(tb) {

        alert(tb);
        this.selectedValue = tb;

    }

    changeCols(order) {

        if (order == "cols-2") {
            this.document.getElementById("cols").removeAttribute('href');
            this.document.getElementById("cols").setAttribute("href", "./assets/styles/theme-1.css");

        }
        else if (order == "cols-1") {
            this.document.getElementById("cols").removeAttribute('href');

            this.document.getElementById("cols").setAttribute("href", "./assets/styles/theme-2.css");
        }
        else if (order == "cols-4") {
            this.document.getElementById("cols").removeAttribute('href');
            this.document.getElementById("cols").setAttribute("href", "./assets/styles/theme-3.css");
        }
        else {
            this.document.getElementById("cols").removeAttribute('href');

            this.document.getElementById("cols").setAttribute("href", "./assets/styles/theme-4.css");
        }


    }

    nextData() {
        alert(this.selectRadio);
    }


    cloneElement(idx) {

        for (var i = idx + 1; i < this.Textboxes.length; i++) {

            this.Textboxes[i].order = this.Textboxes[i].order++;

        }
        this.Textboxes.splice(idx + 1, 0, this.Textboxes[idx]);
        console.log(this.Textboxes);
    }

    defValues;
    getDef(i) {
        return this.Textboxes[i].values[0];

    }

    // onDrop(args) {
    //     let [e, el, source, target] = args;

    //     //        let id = source.id;
    //     console.log(source);
    //     console.log(target);
    // }

    equals(o1, o2) {
        return o1 === o2;
    }
    selectOptions: any[] = [];

    // updateArr(a) {
    //     this.selectedValues.push(a);
    //     console.log(this.selectedValues);
    // }

    ngOnInit() {

        this.adminService.getWidgetData().subscribe(data => {
            this.data = JSON.parse(JSON.stringify(data));
            this.route.params.subscribe(params => {
                this.index = params['id'];
                if (this.data && this.data.length > 0 && this.index)
                    this.getTemplateByIndex(this.index);
            }
            )
        });


        var num = 0;
        $(".save_btn").click(function () {
            console.log($("#contra").html());

        });

        // $(".delel").click(function () {
        //     $(this).closest(".element_box").remove();
        // });


        // $('#datetimepicker3').datetimepicker({
        //     icons: {
        //         time: 'fa fa-clock-o',
        //         date: 'fa fa-calendar',
        //         up: 'fa fa-chevron-up',
        //         down: 'fa fa-chevron-down',
        //         previous: 'fa fa-chevron-left',
        //         next: 'fa fa-chevron-right',
        //         today: 'fa fa-crosshairs',
        //         clear: 'fa fa-trash'
        //     },
        //     format: 'MM/DD/YYYY'
        // });

        // $(function () {
        //     $('#datetimepicker1').datetimepicker();
        // });



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






        $('.sv_btn').on('click', function () {
            $("#input_label_Modal").hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
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

        $(window).load(function () {
            var H = $(window).height();
            var nH = $('.frame_header').height();
            var nD = $('.dash_logo').height();
            //var F = $('footer').height();
            var S = H - nH;
            //var C = H - nH - F - 60;
            // $('.wrapper ').css('min-height', H);
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
                // $('.wrapper ').css('min-height', H);
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
    is_submit: boolean;
    jsonObj: any[] = [];
    selectedValues: any[] = [];
    dateValues: any[] = [];
    timeValues: any[] = [];
    checkValues: any[] = [];
    selectValues: any[] = [];
    selectValues2: any[] = [];
    sendData() {


        //this.is_submit = true;


        let bjson: any = {};
        let rad = {};

        for (var i = 0; i < this.Textboxes.length; i++) {
            var k = 0;
            // alert("inside " + this.Textboxes[i].type);
            // alert("more in " + i);

            if (this.Textboxes[i].type === 'textbox' && this.Textboxes[i].values[0] !== "") {



                //   bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];

            }
            else if (this.Textboxes[i].type === 'textarea' && this.selectValues[i] !== "") {

                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];

            }

            else if (this.Textboxes[i].type === 'select' && this.selectValues[i] !== "") {

                bjson[this.Textboxes[i].values[0]] = this.selectValues[i];

            } else if (this.Textboxes[i].type === 'password' && this.Textboxes[i].values[0] !== "") {

                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];


            } else if (this.Textboxes[i].type === 'checkbox' && this.Textboxes[i].boolvals[0] != undefined) {
                bjson[this.Textboxes[i].lnames[0]] = this.Textboxes[i].boolvals[0];


            } else if (this.Textboxes[i].type === 'radio' && this.selectedValue == this.Textboxes[i].lnames[0]) {


                alert(this.selectedValue);

                rad['value'] = this.Textboxes[i].lnames[0];
                // if (this.selectedValue === this.Textboxes[i].lnames[0])
                rad['selected'] = true;
                // else
                //     rad['selected'] = false;
                bjson["Other info"] = rad;



            } else if (this.Textboxes[i].type === 'switch' && this.Textboxes[i].values[0] !== "") {
                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];



            } else if (this.Textboxes[i].type === 'datepicker' && this.dateValues[i] !== undefined) {
                bjson[this.Textboxes[i].lnames[0]] = this.dateValues[i];

            } else if (this.Textboxes[i].type === 'timepicker' && this.timeValues[i] !== undefined) {
                bjson[this.Textboxes[i].lnames[0]] = this.timeValues[i];

            } else if (this.Textboxes[i].type === 'fbook' && this.Textboxes[i].values[0] !== "") {

                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];

            } else if (this.Textboxes[i].type === 'linkedin' && this.Textboxes[i].values[0] !== "") {

                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];

            } else if (this.Textboxes[i].type === 'gplus' && this.Textboxes[i].values[0] !== "") {

                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];

            } else if (this.Textboxes[i].type === 'twitter' && this.Textboxes[i].values[0] !== "") {

                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];
            }
        }
        this.jsonObj.push(bjson);

        let Obj = {
            "formValues": this.jsonObj
        }
        this.adminService.putFormData(Obj);
        alert("Data sent successfully");


        console.log(this.jsonObj);
    }
    fileNames: string[] = [];

    fileEvent(fileInput: Event, i) {
        let file = (<HTMLInputElement>fileInput.target).files[0];
        let fileName = this.fileNames.push(file.name);
        this.fileNames[i] = file.name;
    }




    log(e: any) {
        console.log(e.type, e);
    }

    selectfnValues(idx) {

    }

}
