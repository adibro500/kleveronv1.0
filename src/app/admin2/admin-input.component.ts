import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { AdminService } from './admin-input.service';
import { Router } from '@angular/router';
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: 'app-root',
    templateUrl: './admin-input.html',
})

export class AdminMaster implements OnInit {
    id: string;
    order: number;
    type: string;
    values: string[];
    placeholder: string;
    lnames: string[];
    lclasses: string[];
    lids: string[];
    Textboxes: any[] = [];
    Textboxes_copy: any[] = [];

    options: any;

    temp2: any;

    constructor(dragulaService: DragulaService, private adminService: AdminService, private router: Router) {

        this.options = {
            revertOnSpill: true
        };

        // dragulaService.out.subscribe((value: any[]) => {
        //     const [bagName, e, el] = value;
        //     console.log("ll", e);
        //     console.log("kk", el);
        //     console.log('id is:', e.dataset.id);
        //     this.temp2 = ;

        // });
        // dragulaService.drop.subscribe((value) => {

        //     console.log("after", value.after);
        //     console.log("before", value.before);

        //     this.onDrop(value);

        // });

        dragulaService.setOptions('bag-one', {
            revertOnSpill: true
        })
        dragulaService.dropModel.subscribe((value) => {
            this.onDropModel(value);
        });
    }


    onDropModel(args) {

        for (var k = 0; k < this.Textboxes.length; k++) {
            this.Textboxes[k].order = k;
        }
        console.log(this.Textboxes);
    }

    formName;
    formUrl;

    nextData() {

        this.is_submit = true;
        alert(this.selectedValue);
    }

    clickRad(tb) {

        this.selectedValue = tb;

    }


    saveData() {
        //  this.is_submit = true;

        if (this.formName == "") {
            alert("Please provide a form name");
            return false;
        } else
            if (this.formUrl == "") {
                alert("Please provide a form submit URL");
                return false;
            }
            else {
                let dt = {
                    "User": "Aditya",
                    "FormName": this.formName,
                    "FormURL": this.formUrl,
                    "controls": this.Textboxes
                };
                this.adminService.putMasterData(JSON.stringify(dt));
                console.log("data sent to server");
                alert("Template saved successfully");
                this.router.navigate(['/adminPanel']);
            }

    }
    is_submit: boolean;
    kdx;
    cloneElement(i) {

        for (var k = 0; this.Textboxes.length; k++) {
            if (this.Textboxes[k].order == i) {
                this.kdx = k;
                break;
            }
        }



        let tb = {
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1,
                "val_msg": this.Textboxes[this.kdx].validation.val_msg
            },
            "id": this.Textboxes[this.kdx].id + parseInt(i) + 1,
            "order": parseInt(this.Textboxes[this.kdx].order) + 1,
            "group": this.Textboxes[this.kdx].group !== undefined ? this.Textboxes[this.kdx].group : '',
            "type": this.Textboxes[this.kdx].type,
            "boolvals": this.Textboxes[this.kdx].boolvals,
            "values": this.Textboxes[this.kdx].values,
            "placeholder": this.Textboxes[this.kdx].placeholder,
            "lnames": this.Textboxes[this.kdx].lnames,
            "lclasses": this.Textboxes[this.kdx].lclasses,
            "lids": this.Textboxes[this.kdx].lids
        }
        for (var v = this.kdx + 1; v < this.Textboxes.length; v++) {

            this.Textboxes[v].order = parseInt(this.Textboxes[v].order) + 1;
            this.Textboxes[v].id = this.Textboxes[v].id.slice(0, 4) + (parseInt(this.Textboxes[v].id.slice(4)) + 1);

        }
        this.Textboxes.splice(this.kdx + 1, 0, tb);
        this.Textboxes_copy = this.Textboxes;

        console.log(this.Textboxes);
    }

    delElement(i) {
        this.Textboxes = this.Textboxes.filter(function (item) {
            return item.order !== i;
        });
        for (var k = 0; k < this.Textboxes.length; k++) {
            this.Textboxes[k].order = this.Textboxes[k].order++;

        }

    }

    editElement(i) {
        alert(i);
        localStorage.setItem("ele", i);

    }

    saveLabel(labelid, labelnm, labelclass) {



        for (var k = 0; k < this.Textboxes.length; k++) {
            if (parseInt(localStorage.getItem("ele")) == this.Textboxes[k].order)
                this.idx = k;
        }


        //alert(ctid + ctval + ctph + ctvbx + ctvmsg)
        this.Textboxes[this.idx].lids = labelid.split(",");
        this.Textboxes[this.idx].lnames = labelnm.split(",");
        this.Textboxes[this.idx].lclasses = labelclass.split(",");



        $("#input_label_Modal").hide();



    }

    onRadioClick(dt) {
        alert(dt);
    }

    idx;
    saveCntrl(ctpar, ctid, ctval, ctph, ctvbx, ctvmsg) {


        if (ctid == "") {
            alert("please enter control id");
            return false;
        }


        for (var k = 0; k < this.Textboxes.length; k++) {
            if (parseInt(localStorage.getItem("ele")) == this.Textboxes[k].order)
                this.idx = k;
        }


        alert(ctid + ctval + ctph + ctvbx + ctvmsg)
        this.Textboxes[this.idx].id = ctid;
        this.Textboxes[this.idx].values = ctval.split(",");
        this.Textboxes[this.idx].placeholder = ctph;
        if (ctvmsg !== "") {
            this.Textboxes[this.idx].validation.is_required = true;
            this.Textboxes[this.idx].validation.val_msg = ctvmsg;
        }

        $("#input_control_Modal").hide();


    }

    dateExample;



    resetElement(i) {

        this.Textboxes[i] = this.Textboxes_copy[i];

    }

    // onDrop(args) {

    //     const [el, e, target, source, sibling] = args;
    //     // console.log("kk", e.dataset.id);
    //     console.log("kk", el);
    //     console.log('id is:', source.dataset.id);
    //     console.log('id is:', target.dataset.id);
    //     //console.log('id is:', sibling.dataset.id);
    //     if (sibling !== null && e !== null && this.Textboxes[parseInt(e.dataset.id)] !== undefined) {
    //         let tmp = this.Textboxes[e.dataset.id];
    //         this.Textboxes[e.dataset.id] = this.Textboxes[sibling.dataset.id];
    //         this.Textboxes[sibling.dataset.id] = tmp;

    //         // for (var i = sibling.dataset.id + 1; i < this.Textboxes.length; i++) {
    //         //     if (this.Textboxes[i] !== undefined) {
    //         //         alert(this.Textboxes[i].order);
    //         //         this.Textboxes[i].order = this.Textboxes[i].order++;



    //         //     }

    //         // }
    //         //  console.log('id2 is:', args[4].getAttribute("data-id"));

    //         //console.log("other id is", value[4].getAttribute("data-id"));

    //         // console.log(e.type, e);
    //         // if (args[4] !== null && this.Textboxes[parseInt(args[4].getAttribute("data-id"))] !== undefined) {
    //         //     console.log("inside condition");
    //         //     let temp = this.Textboxes[parseInt(e.dataset.id)].order;
    //         //     this.Textboxes[parseInt(e.dataset.id)].order = this.Textboxes[parseInt(args[4].getAttribute("data-id"))].order;
    //         //     this.Textboxes[parseInt(args[4].getAttribute("data-id"))].order = temp;
    //         // this.Textboxes.sort((a, b) => {
    //         //     if (a.order < b.order) return -1;
    //         //     else if (a.order > b.order) return 1;
    //         //     else return 0;
    //         // });
    //         console.log(this.Textboxes);
    //     }
    //     // }
    //     // else

    //     //     console.log("outside condition");


    // }




    timeExample;
    selectedEntry;


    onSelectionChange(entry) {
        this.selectedEntry = entry;
    }

    radioClick(i) {
        alert(i);
    }
    selectedValue;


    Textboxes_select: any[] = [];
    public groups: Array<any> = [
        {
            name: "group A",
            items: this.Textboxes
        }, {
            name: "group B",
            items: this.Textboxes_select
        }
    ]

    ngOnInit() {

        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "text0",
            "order": 0,
            "type": "textbox",
            "values": [""],
            "placeholder": "New Company",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "text1",
            "order": 1,
            "type": "textbox",
            "values": [''],
            "placeholder": "Company Head Office Address",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "text2",
            "order": 2,
            "type": "textbox",
            "values": [''],
            "placeholder": "Name Of CEO/MD",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "text3",
            "order": 3,
            "type": "textbox",
            "values": [''],
            "placeholder": "City",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });

        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "slct4",
            "order": 4,
            "type": "select",
            "values": ['Area of Business', 'XYz', 'ABC'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });

        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "slct5",
            "order": 5,
            "type": "select",
            "values": ['State', 'Andhra Pradesh', 'Gujarat', 'Maharahtra'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "slct6",
            "order": 6,
            "type": "select",
            "values": ['Number of employees', 'ABC', 'XYZ'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "slct7",
            "order": 7,
            "type": "select",
            "values": ['Country', 'China', 'Dubai', 'Russia'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });

        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "pass8",
            "order": 8,
            "type": "password",
            "values": [''],
            "placeholder": "Enter Password",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "sct_t9",
            "order": 9,
            "type": "select_text",
            "values": [''],
            "boolvals": [true],
            "placeholder": "Select Text",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "slt_o10",
            "order": 10,
            "type": "select_options",
            "values": ['Select Option', 'ABC', 'XYZ'],
            "boolvals": [true],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "texl11",
            "order": 11,
            "type": "text_label",
            "values": [''],
            "boolvals": [true],
            "placeholder": "Enter Something",
            "lnames": ['Enter Something:'],
            "lclasses": [],
            "lids": []
        });

        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "date12",
            "order": 12,
            "type": "datepicker",
            "values": [15 / 12 / 17],
            "boolvals": [true],
            "placeholder": "",
            "lnames": ['Enter Date:'],
            "lclasses": ['lbl_hdr'],
            "lids": ['datepicker_label']
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "time13",
            "order": 13,
            "type": "timepicker",
            "values": [''],
            "boolvals": [true],
            "placeholder": "",
            "lnames": ['Enter Time:'],
            "lclasses": ['lbl_hdr'],
            "lids": ['timepicker_label']
        });

        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "chkx14",
            "order": 14,
            "type": "checkbox",
            "values": [''],
            "boolvals": [true],
            "placeholder": "",
            "lnames": ['Enter Time:'],
            "lclasses": ['lbl_hdr'],
            "lids": ['']
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "radi15",
            "order": 15,
            "type": "radio",
            "values": [''],
            "boolvals": [false],
            "placeholder": "",
            "group": "radio-group",
            "lnames": ['radiooption1'],
            "lclasses": ['lbl_hdr'],
            "lids": ['']
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "swth16",
            "order": 16,
            "type": "switch",
            "values": [''],
            "boolvals": [true],
            "placeholder": "",
            "lnames": [''],
            "lclasses": [''],
            "lids": ['']
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "upld17",
            "order": 17,
            "type": "upload",
            "values": [''],
            "boolvals": [true],
            "placeholder": "",
            "lnames": [''],
            "lclasses": [''],
            "lids": ['']
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "twit18",
            "order": 18,
            "type": "twitter",
            "values": [''],
            "boolvals": [true],
            "placeholder": "Twitter Handle",
            "lnames": [''],
            "lclasses": [''],
            "lids": ['']
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "fbok19",
            "order": 19,
            "type": "fbook",
            "values": [''],
            "boolvals": [true],
            "placeholder": "Facebook address",
            "lnames": [''],
            "lclasses": [''],
            "lids": ['']
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "llin20",
            "order": 20,
            "type": "linkedin",
            "values": [''],
            "boolvals": [true],
            "placeholder": "Linkedin address",
            "lnames": [''],
            "lclasses": [''],
            "lids": ['']
        });
        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "gpls21",
            "order": 21,
            "type": "gplus",
            "values": [''],
            "boolvals": [true],
            "placeholder": "Google Plus ID",
            "lnames": [''],
            "lclasses": [''],
            "lids": ['']
        });

        this.Textboxes_copy.push(this.Textboxes);


        //display helpers

        $('.edit_btn').on('click', function () {
            // alert($('.edit_btn').index(this));
            localStorage.setItem("parent", $('.edit_btn').index(this));

        });

        // $(".clone").click(function () {
        //     $(this).parent().find('.element-box').eq(0).clone().appendTo(this);
        // });

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

    log(e: any) {

        console.log(e.type, e);

    }

}
