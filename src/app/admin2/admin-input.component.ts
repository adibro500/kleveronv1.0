/*
author:aditya ammanabrolu
implementation: this class is to satisfy the following:
1. create default controls in the form
2. facilitate drag and drop
3. the the json created for the contarol both before and after drag and drop
4. the json created is stored in database on server
status of code: (in progress)
*/
/* import libraries and dependencies */
import { Component, Inject, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { AdminService } from './admin-input.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
/* imports end */
@Component({
    selector: 'app-root',
    templateUrl: './admin-input.html',
})

export class AdminMaster implements OnInit, OnDestroy {

    //variable declarations
    lbl_choice: boolean = false;
    Textboxes: any[] = [];
    Textboxes_copy: any[] = [];
    options: any;
    temp2: any;
    group1: any[] = [];
    group2: any[] = [];
    formName;
    formUrl = "/save/admin2";
    selectedValue;
    is_submit: boolean;
    kdx;
    dateExample;
    timeExample;
    selectedEntry;
    lbl_chk: boolean;
    temp_name = localStorage.getItem("temp_name");
    cntid;
    cntval;
    cntph;
    cntid2;
    cntval2;
    cntph2;
    lblid;
    lblnm;
    lblclass;
    cntrg;


    ngOnDestroy() {
        this.dragulaService.destroy("bag-one");
    }



    /* this method sets the label and no label when check and unchecked of the label checkbox under add controls menu */


    lblSet() {
        this.lbl_chk = !this.lbl_chk;
        console.log("chk", this.lbl_chk);
        for (var i = 0; i < this.group1.length; i++) {

            this.group1[i].label_present = this.lbl_chk;

        }
    }
    /* method ends */

    /* constructor begins */
    constructor( @Inject(DOCUMENT) private document: any, private dragulaService: DragulaService, private adminService: AdminService, private router: Router) {

        /* creating the initial default controls in the add control menu */
        this.group1.push({
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
            "class": 'col-md-6 col-sm-6 col-xs-12 element_box klvrn_col',
            "lids": [],
            "label": "Text-Box",
            "img": "txt-bx",
            "label_present": this.lbl_chk
        });

        this.group1.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "txtb0",
            "order": 0,
            "type": "textarea",
            "values": [""],
            "placeholder": "New Company",
            "lnames": [],
            "lclasses": [],
            "lids": [],
            "label": "Textarea",
            "img": "txt-bx",
            "label_present": this.lbl_chk
        });

        this.group1.push({
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
            "lids": [],
            "label": "Select",
            "img": "select-option",
            "label_present": this.lbl_chk
        });

        this.group1.push({
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
            "lids": [],
            "label": "Password",
            "img": "password",
            "label_present": this.lbl_chk
        });




        this.group1.push({
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
            "lids": [],
            "label": "Text With Label",
            "img": "lbl-txt-bx",
            "label_present": this.lbl_chk
        });

        this.group1.push({
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
            "lids": ['datepicker_label'],
            "label": "Date Picker",
            "img": "date-pkr",
            "label_present": this.lbl_chk
        });

        this.group1.push({
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
            "lids": ['timepicker_label'],
            "label": "Time Picker",
            "img": "time-pkr",
            "label_present": this.lbl_chk
        });

        this.group1.push({
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
            "lids": [''],
            "label": "Checkbox",
            "img": "chkbx",
            "label_present": this.lbl_chk
        });

        this.group1.push({
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
            "lids": [''],
            "label": "Radio Button",
            "img": "radio",
            "label_present": this.lbl_chk
        });

        this.group1.push({
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
            "lids": [''],
            "label": "Switch",
            "img": "switch",
            "label_present": this.lbl_chk
        });

        // this.group1.push({
        //     "validation": {
        //         "is_required": false,
        //         "is_read_only": false,
        //         "min_length": 1,
        //         "val_msg": "this field is required"
        //     },
        //     "id": "tara0",
        //     "order": 17,
        //     "type": "textarea",
        //     "values": [''],
        //     "boolvals": [true],
        //     "placeholder": "",
        //     "lnames": [''],
        //     "lclasses": [''],
        //     "lids": [''],
        //     "label": "Text Area",
        //     "img": ""
        // });
        /* end of default add controls */

        dragulaService.drop.subscribe((value) => {

            this.group1.push(this.group2);
        });


        dragulaService.dropModel.subscribe((value) => {
            this.group1.push(this.group2);
            this.onDropModel(value);
        });

    }
    /* constructor ends */

    /* this method is called when any for control is dropped */
    onDropModel(args) {

        for (var k = 0; k < this.Textboxes.length; k++) {
            this.Textboxes[k].order = k;
        }

        console.log(this.Textboxes);
    }


    clickRad(tb) {

        this.selectedValue = tb;

    }

    /* send and save data on server */
    saveData() {

        localStorage.setItem("temp_name", this.formName);
        if (this.formName == "") {
            // alert("Please provide a form name");

            return false;
        } else
            if (this.formUrl == "") {
                // alert("Please provide a form submit URL");
                return false;
            }
            else {
                let dt = {
                    "User": "Aditya",
                    "FormName": this.formName,
                    "FormURL": this.formUrl,
                    "controls": this.Textboxes,
                    "column_config": this.changeC,

                };
                this.adminService.putMasterData(JSON.stringify(dt));
                console.log("data sent to server");
                alert("Template saved successfully");
                this.router.navigate(['/parent/adminMaster']);

                $("#input_control_URL").hide();
                //  window.location.reload();

            }

    }


    // add control list bar



    SelectControlNav() {
        document.getElementById("own_contrl_list").style.width = "270px";
        document.getElementById("own_contrl_list").style.opacity = "1";
    }

    closeNav() {
        document.getElementById("own_contrl_list").style.width = "0";
        document.getElementById("own_contrl_list").style.opacity = "0";
    }
    changeC: string = "";


    addStyleSheet(order) {

        if (order == "cols-1") {
            this.changeC = './assets/styles/theme-2.css';
        }
        else if (order == "cols-2") {
            this.changeC = './assets/styles/theme-1.css';

        } else if (order == "cols-3") {

            this.changeC = './assets/styles/theme-4.css';

        } else if (order == "cols-4") {
            this.changeC = './assets/styles/theme-3.css';
        }

    }




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

            if (isNaN(this.Textboxes[v].id.slice(0, 4)))
                this.Textboxes[v].id = this.Textboxes[v].id.slice(0, 4) + (parseInt(this.Textboxes[v].id.slice(4)) + 1);
            this.Textboxes[v].id = this.Textboxes[v].id.replace(/[^0-9]/g, '') + this.retnum(this.Textboxes[v].id) + 1;

        }
        this.Textboxes.splice(this.kdx + 1, 0, tb);
        this.Textboxes_copy = this.Textboxes;

        console.log(this.Textboxes);
    }

    retnum(str) {
        var num = str.replace(/[^0-9]/g, '');
        return num;
    }


    delElement(i) {
        if (window.confirm('Are you sure you want to delete this item ?')) {

            this.Textboxes = this.Textboxes.filter(function (item) {

                return item.order !== i;

            });



        } else

            return;

    }


    editElement(i, inp_flag) {

        this.cntrg = '';
        //var h = 0;
        for (var j = 0; j < this.Textboxes.length; j++) {
            if (i == this.Textboxes[j].order) {
                //  h = i;
                break;
            }
        }

        this.cntid = this.Textboxes[j].id;
        this.cntval = this.Textboxes[j].values[0];
        this.cntph = this.Textboxes[j].placeholder;
        if (this.Textboxes[j].group !== undefined)
            this.cntrg = this.Textboxes[j].group;
        this.lblid = this.Textboxes[j].lids[0];
        this.lblnm = this.Textboxes[j].lnames[0];
        this.lblclass = this.Textboxes[j].lclasses[0];
        // alert(i);
        localStorage.setItem("ele", i);
        $(".modal_tabs").hide();
        if (inp_flag == "lbl")
            $(".modal_tabs.add_label").show();
        else
            $(".modal_tabs.add_control").show();

    }

    saveLabel(labelid, labelnm, labelclass) {
        for (var k = 0; k < this.Textboxes.length; k++) {
            if (parseInt(localStorage.getItem("ele")) == this.Textboxes[k].order)
                this.idx = k;
        }

        this.Textboxes[this.idx].lids = labelid.split(",");
        this.Textboxes[this.idx].lnames = labelnm.split(",");
        this.Textboxes[this.idx].lclasses = labelclass.split(",");

    }

    onRadioClick(dt) {
        // alert(dt);
    }

    idx;
    saveCntrl(ctpar, ctid, ctval, ctph, ctrg) {

        this.cntid = "";
        this.cntval = "";
        this.cntph = "";
        if (ctid == "") {
            // alert("please enter control id");
            return false;
        }


        for (var k = 0; k < this.Textboxes.length; k++) {
            if (parseInt(localStorage.getItem("ele")) == this.Textboxes[k].order)
                this.idx = k;
        }

        localStorage.removeItem("ele");
        // alert(ctid + ctval + ctph + ctvbx + ctvmsg)
        this.Textboxes[this.idx].id = ctid;
        this.Textboxes[this.idx].values = ctval.split(",");
        this.Textboxes[this.idx].placeholder = ctph;
        this.Textboxes[this.idx].group = ctrg;
        $("#input_control_Modal").hide();

    }


    openDialog() {

        $(".modal_tabs.add_control").show();
    }

    resetElement(i) {

        this.Textboxes[i] = this.Textboxes_copy[i];

    }


    onSelectionChange(entry) {

        this.selectedEntry = entry;

    }

    fileEvent(fileInput: Event) {
        let file = (<HTMLInputElement>fileInput.target).files[0];
        let fileName = file.name;
        console.log(fileName);
        console.log(file.webkitRelativePath);
    }



    radioClick(i) {
        // alert(i);
    }


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

    showHideControl(link, div) {
        var left = $(div);
        var leftShow = $('.own_cntrl_list.show');
        $(link).click(function () {
            left.addClass('show');
            leftShow.removeClass('show');
        });
    }

    ngOnInit() {
        /* default  controls */
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
            "show_lbl": true,
            "lnames": [],
            "lclasses": [],
            "lids": [],
            "label_present": false
        });

        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "tara0",
            "order": 1,
            "type": "textarea",
            "values": [''],
            "show_lbl": true,
            "boolvals": [true],
            "placeholder": "Company Head Office Address",
            "lnames": [''],
            "lclasses": [''],
            "lids": [''],
            "label_present": false

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
            "show_lbl": true,
            "placeholder": "Name Of CEO/MD",
            "lnames": [],
            "lclasses": [],
            "lids": [],
            "label_present": false
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
            "show_lbl": true,
            "values": [''],
            "placeholder": "City",
            "lnames": [],
            "lclasses": [],
            "lids": [],
            "label_present": false
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
            "show_lbl": true,
            "values": ['Area of Business', 'XYz', 'ABC'],
            "placeholder": "",
            "lnames": [],
            "selected": '',
            "lclasses": [],
            "lids": [],
            "label_present": false
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
            "show_lbl": true,
            "values": ['State', 'Andhra Pradesh', 'Gujarat', 'Maharahtra'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": [],
            "selected": '',
            "label_present": false
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
            "show_lbl": true,
            "values": ['Number of employees', 'ABC', 'XYZ'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "selected": '',
            "lids": [],
            "label_present": false
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
            "show_lbl": true,
            "values": ['Country', 'India', 'China', 'Dubai', 'Russia'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": [],
            "selected": '',
            "label_present": false
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
            "show_lbl": true,
            "values": [''],
            "placeholder": "Enter Password",
            "lnames": [],
            "lclasses": [],
            "lids": [],
            "label_present": false
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
            "show_lbl": true,
            "placeholder": "Enter Something",
            "lnames": ['Enter Something'],
            "lclasses": [],
            "lids": [],
            "label_present": true

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
            "show_lbl": true,
            "values": [15 / 12 / 17],
            "boolvals": [true],
            "placeholder": "",
            "lnames": ['Enter Date:'],
            "lclasses": ['lbl_hdr'],
            "lids": ['datepicker_label'],
            "label_present": false
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
            "show_lbl": true,
            "boolvals": [true],
            "placeholder": "",
            "lnames": ['Enter Time:'],
            "lclasses": ['lbl_hdr'],
            "lids": ['timepicker_label'],
            "label_present": true
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
            "show_lbl": true,
            "values": [''],
            "boolvals": [true],
            "placeholder": "",
            "lnames": ['Enter Time:'],
            "lclasses": ['lbl_hdr'],
            "lids": [''],
            "label_present": true
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
            "show_lbl": true,
            "boolvals": [false],
            "placeholder": "",
            "group": "radio-group",
            "lnames": ['radiooption1'],
            "lclasses": ['lbl_hdr'],
            "lids": [''],
            "label_present": false
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
            "show_lbl": true,
            "placeholder": "",
            "lnames": [''],
            "lclasses": [''],
            "lids": [''],
            "label_present": false
        });



        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "newl18",
            "order": 18,
            "type": "newLine",
            "show_lbl": true,
            "values": ['Number of employees', 'ABC', 'XYZ'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": [],
            "label_present": false
        });


        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "twit19",
            "order": 19,
            "type": "twitter",
            "values": [''],
            "boolvals": [true],
            "show_lbl": true,
            "placeholder": "Twitter Handle",
            "lnames": [''],
            "lclasses": [''],
            "lids": [''],
            "label_present": false
        });


        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "fbok20",
            "order": 20,
            "type": "fbook",
            "values": [''],
            "show_lbl": true,
            "boolvals": [true],
            "placeholder": "Facebook address",
            "lnames": [''],
            "lclasses": [''],
            "lids": [''],
            "label_present": false
        });




        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "llin21",
            "order": 21,
            "type": "linkedin",
            "values": [''],
            "show_lbl": true,
            "boolvals": [true],
            "placeholder": "Linkedin address",
            "lnames": [''],
            "lclasses": [''],
            "lids": [''],
            "label_present": false
        });


        this.Textboxes.push({
            "validation": {
                "is_required": false,
                "is_read_only": false,
                "min_length": 1,
                "val_msg": "this field is required"
            },
            "id": "gpls22",
            "order": 22,
            "type": "gplus",
            "values": [''],
            "show_lbl": true,
            "boolvals": [true],
            "placeholder": "Google Plus ID",
            "lnames": [''],
            "lclasses": [''],
            "lids": [''],
            "label_present": false
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
            "show_lbl": true,
            "boolvals": [true],
            "placeholder": "",
            "lnames": [''],
            "lclasses": [''],
            "lids": [''],
            "label_present": false
        });



        this.Textboxes_copy.push(this.Textboxes);

        this.dragulaService.setOptions('bag-one', {
            revertOnSpill: true,
            copy: function (el, source) {
                return source.id === 'left';
            }
        });

        /* helper code for UI and nothing else */


        $('.all_con_wrap').perfectScrollbar();

        $('.edit_btn').on('click', function () {
            // // alert($('.edit_btn').index(this));
            localStorage.setItem("parent", $('.edit_btn').index(this));

        });



        var num = 0;
        $(".save_btn").click(function () {
            console.log($("#contra").html());

        });


        $(function () {
            $('#datetimepicker2').datetimepicker({
                format: 'LT'
            });
        });
        // 


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

        // $("#clone0").click(function () {
        //     $(this).parent().find('.element-box').eq(0).clone().appendTo(this);
        // });



        $(".nx_btn").click(function () {
            var nextDiv = $(".modal_tabs:visible").next(".modal_tabs");
            if (nextDiv.length == 0) {
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

        $(window).load(function () {
            var C = $(window).height();
            var cH = $('.con_hdr').height();
            var cT = C - cH;
            $('.all_con_wrap').css('height', cT);
            $(window).resize(function () {
                var C = $(window).height();
                var cH = $('.con_hdr').height();
                var cT = C - cH;
                $('.all_con_wrap').css('height', cT);
            });
        });
        /* UI helper code ends */


    }



}
