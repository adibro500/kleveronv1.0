import { Component, Input, OnInit, AfterViewInit, DoCheck, Inject } from '@angular/core';
import { RlTagInputModule } from 'angular2-tag-input';
import { Control } from "./Control";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DrakeStoreService, DroppableDirective } from "@swimlane/ngx-dnd/release";
import { InputMasterService } from "./admin-input-master.service";
import { DOCUMENT } from "@angular/common";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: 'adminOnBoard',
    templateUrl: './admin-on-board.html',
    //  styleUrls: ['../../assets/styles/own-cmpny-logo.css'],
    providers: [Control, DrakeStoreService, DroppableDirective, InputMasterService]
})


export class AdminInputMaster implements OnInit {

    ListMap: Map<number, string> = new Map<number, string>();
    htmllist: string[];



    mainhtml: string = '';



    fgroup: FormGroup;
    newForm: FormGroup;
    // arrayControl = <FormArray>this.newForm.controls['formArray'];

    constructor(public fb: FormBuilder, public con: Control, public ds: DrakeStoreService, private aimp: InputMasterService, @Inject(DOCUMENT) private document: any) {


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


    }



    j: any;
    str: string = '';
    pholder: string = 'New Company';
    strid0 = "cmn_input0";
    str0: string = '';
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
    aob0: string[] = ['Area of Business', 'XYz', 'ABC'];
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
    str0_ctry: string[] = ['Country', 'China', 'Dubai', 'Russia'];
    pholder0_state = "Country";
    strid0_state = "Text";
    str0_state: string[] = ['State', 'Andhra Pradesh', 'Gujarat', 'Maharahtra'];
    pholder0_info = "input text for a single line field with a max";
    strid0_info = "Textarea1";
    str0_info: string = "";
    lid0_info = "label";
    lname0_info = "Other Information";
    lclass0_info: string = "lbl_hdr";
    strid0_noe = "Text";
    str0_noe: string[] = ['Number of employees', 'ABC', 'XYZ'];
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

    json1: any = {};
    Textboxes: Control[] = this.con.JSONarr;
    Textboxes_CHA: Control[] = this.con.JSONarrCHA;
    Textboxes_CEO: Control[] = this.con.JSONarrCEO;
    Textboxes_city: Control[] = this.con.JSONarrCity;
    Textboxes_aob: Control[] = this.con.JSONarrAOB;
    Textboxes_fb: Control[] = this.con.JSONarrFB;
    Textboxes_tw: Control[] = this.con.JSONarrTW;
    Textboxes_ll: Control[] = this.con.JSONarrLL;
    Textboxes_gplus: Control[] = this.con.JSONarrGP;
    Textboxes_ctry: Control[] = this.con.JSONarrCt;
    Textboxes_state: Control[] = this.con.JSONarrSt;
    Textboxes_info: Control[] = this.con.JSONarrIN;
    Textboxes_NOE: Control[] = this.con.JSONarrNOE;
    Textboxes_cbox: Control[] = this.con.JSONarrCB;


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

    isEdited: boolean;
    cloneElement(idx, inp_flag) {

        alert(idx)
        if (inp_flag == undefined) {
            if (idx == 0) {
                if (this.con.JSONarr.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formCon = "formCon" + idx;
                    this.control.id = this.strid0;
                    this.control.value = this.str0;
                    this.control.pholder = this.pholder0;
                    this.con.addControl(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarr);
                    for (var i = 0; i < this.con.JSONarr.length; i++) {
                        alert(this.con.JSONarr[i].idx++);
                        this.con.JSONarr[i].idx = this.con.JSONarr[i].idx++;

                    }
                    console.log("after", this.con.JSONarr);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formCon = "formCon" + idx;
                    this.control.id = this.strid0;
                    this.control.value = this.str0;
                    this.control.pholder = this.pholder0;
                    this.con.insertAt(0, this.control);
                }
                this.showTextBox = true;
                console.log(this.con.JSONarr);
                console.log(this.showTextBox);
            }
            else {
                if (this.con.JSONarr.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.formCon = "formCon" + idx;
                    this.control.id = this.con.JSONarr[idx - 1].id;
                    this.control.value = this.con.JSONarr[idx - 1].value;
                    this.control.pholder = this.con.JSONarr[idx - 1].pholder;
                    this.con.addControl(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarr);
                    for (var j = idx - 1; j < this.con.JSONarr.length; j++) {
                        alert(this.con.JSONarr[j].idx++);
                        this.con.JSONarr[j].idx = this.con.JSONarr[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarr);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.formCon = "formCon" + idx;
                    this.control.id = this.con.JSONarr[idx - 1].id;
                    this.control.value = this.con.JSONarr[idx - 1].value;
                    this.control.pholder = this.con.JSONarr[idx - 1].pholder;
                    this.con.insertAt(idx - 1, this.control);
                }
                this.showTextBox = true;
                console.log(this.con.JSONarr);
                console.log(this.showTextBox);
            }

        } else if (inp_flag == "CHA") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrCHA.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formConCHA = "formConCHA" + idx;
                    this.control.id = this.strid0_CHA;
                    this.control.value = this.str0_CHA;
                    this.control.pholder = this.pholder0_CHA;
                    this.con.addControlCHA(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCHA);
                    for (var i = 0; i < this.con.JSONarrCHA.length; i++) {
                        alert(this.con.JSONarrCHA[i].idx++);
                        this.con.JSONarrCHA[i].idx = this.con.JSONarrCHA[i].idx++;

                    }
                    console.log("after", this.con.JSONarrCHA);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formConCHA = "formConCHA" + idx;
                    this.control.id = this.strid0_CHA;
                    this.control.value = this.str0_CHA;
                    this.control.pholder = this.pholder0_CHA;
                    this.con.insertAtCHA(0, this.control);
                }
                this.showTextBox_CHA = true;
                console.log(this.con.JSONarrCHA);
                console.log(this.showTextBox_CHA);
            }
            else {
                if (this.con.JSONarrCHA.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.formConCHA = "formConCHA" + idx;
                    this.control.id = this.con.JSONarrCHA[idx - 1].id;
                    this.control.value = this.con.JSONarrCHA[idx - 1].value;
                    this.control.pholder = this.con.JSONarrCHA[idx - 1].pholder;
                    this.con.addControlCHA(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCHA);
                    for (var j = idx - 1; j < this.con.JSONarrCHA.length; j++) {
                        alert(this.con.JSONarrCHA[j].idx++);
                        this.con.JSONarrCHA[j].idx = this.con.JSONarrCHA[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarr);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.formConCHA = "formConCHA" + idx;
                    this.control.id = this.con.JSONarrCHA[idx - 1].id;
                    this.control.value = this.con.JSONarrCHA[idx - 1].value;
                    this.control.pholder = this.con.JSONarrCHA[idx - 1].pholder;
                    this.con.insertAtCHA(idx - 1, this.control);
                }
                this.showTextBox_CHA = true;
                console.log(this.con.JSONarrCHA);
                console.log(this.showTextBox_CHA);



            }
        } else if (inp_flag == "CEO") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrCEO.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formConCEO = "formConCEO" + idx;
                    this.control.id = this.strid0_CEO;
                    this.control.value = this.str0_CEO;
                    this.control.pholder = this.pholder0_CEO;
                    this.con.addControlCEO(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCEO);
                    for (var i = 0; i < this.con.JSONarrCEO.length; i++) {
                        alert(this.con.JSONarrCEO[i].idx++);
                        this.con.JSONarrCEO[i].idx = this.con.JSONarrCEO[i].idx++;

                    }
                    console.log("after", this.con.JSONarrCEO);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formConCEO = "formConCEO" + idx;
                    this.control.id = this.strid0_CEO;
                    this.control.value = this.str0_CEO;
                    this.control.pholder = this.pholder0_CEO;
                    this.con.insertAtCEO(0, this.control);
                }
                this.showTextBox_CEO = true;
                console.log(this.con.JSONarrCEO);
                console.log(this.showTextBox_CEO);
            }
            else {
                if (this.con.JSONarrCEO.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.formConCEO = "formConCEO" + idx;
                    this.control.id = this.con.JSONarrCEO[idx - 1].id;
                    this.control.value = this.con.JSONarrCEO[idx - 1].value;
                    this.control.pholder = this.con.JSONarrCEO[idx - 1].pholder;
                    this.con.addControlCEO(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCEO);
                    for (var j = idx - 1; j < this.con.JSONarrCEO.length; j++) {
                        alert(this.con.JSONarrCEO[j].idx++);
                        this.con.JSONarrCEO[j].idx = this.con.JSONarrCEO[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrCEO);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.formConCEO = "formConCEO" + idx;
                    this.control.id = this.con.JSONarrCEO[idx - 1].id;
                    this.control.value = this.con.JSONarrCEO[idx - 1].value;
                    this.control.pholder = this.con.JSONarrCEO[idx - 1].pholder;
                    this.con.insertAtCEO(idx - 1, this.control);
                }
                this.showTextBox_CEO = true;
                console.log(this.con.JSONarrCEO);
                console.log(this.showTextBox_CEO);



            }
        }
        else if (inp_flag == "city") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrCity.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formConCt = "formConCity" + idx;
                    this.control.id = this.strid0_city;
                    this.control.value = this.str0_city;
                    this.control.pholder = this.pholder0_city;
                    this.con.addControlCity(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCity);
                    for (var i = 0; i < this.con.JSONarrCity.length; i++) {
                        alert(this.con.JSONarrCity[i].idx++);
                        this.con.JSONarrCity[i].idx = this.con.JSONarrCity[i].idx++;

                    }
                    console.log("after", this.con.JSONarrCity);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formCon = "formConCity" + idx;
                    this.control.id = this.strid0_city;
                    this.control.value = this.str0_city;
                    this.control.pholder = this.pholder0_city;
                    this.con.insertAtCity(0, this.control);
                }
                this.showTextBox_city = true;
                console.log(this.con.JSONarrCity);
                console.log(this.showTextBox_city);
            }
            else {
                if (this.con.JSONarrCity.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.formCon = "formConCity" + idx;
                    this.control.id = this.con.JSONarrCity[idx - 1].id;
                    this.control.value = this.con.JSONarrCity[idx - 1].value;
                    this.control.pholder = this.con.JSONarrCity[idx - 1].pholder;
                    this.con.addControlCity(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCity);
                    for (var j = idx - 1; j < this.con.JSONarrCity.length; j++) {
                        alert(this.con.JSONarrCity[j].idx++);
                        this.con.JSONarrCity[j].idx = this.con.JSONarrCity[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrCity);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.formCon = "formConCity" + idx;
                    this.control.id = this.con.JSONarrCity[idx - 1].id;
                    this.control.value = this.con.JSONarrCity[idx - 1].value;
                    this.control.pholder = this.con.JSONarrCity[idx - 1].pholder;
                    this.con.insertAtCity(idx - 1, this.control);
                }
                this.showTextBox_city = true;
                console.log(this.con.JSONarrCity);
                console.log(this.showTextBox_city);
            }

        }
        else if (inp_flag == "aob") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrAOB.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formCon = "formConAOB" + idx;
                    this.control.id = this.strid0_aob;
                    this.control.values = this.aob0;
                    this.control.pholder = this.pholder0_aob;
                    this.con.addControlAOB(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrAOB);
                    for (var i = 0; i < this.con.JSONarrAOB.length; i++) {
                        alert(this.con.JSONarrAOB[i].idx++);
                        this.con.JSONarrAOB[i].idx = this.con.JSONarrAOB[i].idx++;

                    }
                    console.log("after", this.con.JSONarrAOB);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formCon = "formConAOB" + idx;
                    this.control.id = this.strid0_aob;
                    this.control.values = this.aob0;
                    this.control.pholder = this.pholder0_aob;
                    this.con.insertAtAOB(0, this.control);
                }
                this.showTextBox_aob = true;
                console.log(this.con.JSONarrAOB);
                console.log(this.showTextBox_aob);
            }
            else {
                if (this.con.JSONarrAOB.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.formCon = "formConAOB" + idx;
                    this.control.id = this.con.JSONarrAOB[idx - 1].id;
                    this.control.values = this.con.JSONarrAOB[idx - 1].values;
                    this.control.pholder = this.con.JSONarrAOB[idx - 1].pholder;
                    this.con.addControlAOB(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrAOB);
                    for (var j = idx - 1; j < this.con.JSONarrAOB.length; j++) {
                        alert(this.con.JSONarrAOB[j].idx++);
                        this.con.JSONarrAOB[j].idx = this.con.JSONarrAOB[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrAOB);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.formCon = "formConAOB" + idx;
                    this.control.id = this.con.JSONarrAOB[idx - 1].id;
                    this.control.values = this.con.JSONarrAOB[idx - 1].values;
                    this.control.pholder = this.con.JSONarrAOB[idx - 1].pholder;
                    this.con.insertAtAOB(idx - 1, this.control);
                }
                this.showTextBox_aob = true;
                console.log(this.con.JSONarrAOB);
                console.log(this.showTextBox_aob);
            }

        }
        else if (inp_flag == "fbook") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrFB.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_fb;
                    this.control.value = this.str0_fb;
                    this.control.pholder = this.pholder0_fb;
                    this.control.formCon = "formCon" + idx;
                    this.con.addControlFB(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrFB);
                    for (var i = 0; i < this.con.JSONarrFB.length; i++) {
                        alert(this.con.JSONarrFB[i].idx++);
                        this.con.JSONarrFB[i].idx = this.con.JSONarrFB[i].idx++;

                    }
                    console.log("after", this.con.JSONarrFB);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.formCon = "formCon" + idx;
                    this.control.id = this.strid0_fb;
                    this.control.value = this.str0_fb;
                    this.control.pholder = this.pholder0_fb;
                    this.con.insertAtFB(0, this.control);
                }
                this.showTextBox_fb = true;
                console.log(this.con.JSONarrFB);
                console.log(this.showTextBox_fb);
            }
            else {
                if (this.con.JSONarrFB.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.formCon = "formCon" + idx;
                    this.control.id = this.con.JSONarrFB[idx - 1].id;
                    this.control.value = this.con.JSONarrFB[idx - 1].value;
                    this.control.pholder = this.con.JSONarrFB[idx - 1].pholder;
                    this.con.addControlFB(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrFB);
                    for (var j = idx - 1; j < this.con.JSONarrFB.length; j++) {
                        alert(this.con.JSONarrFB[j].idx++);
                        this.con.JSONarrFB[j].idx = this.con.JSONarrFB[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrFB);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.formCon = "formCon" + idx;

                    this.control.id = this.con.JSONarrFB[idx - 1].id;
                    this.control.values = this.con.JSONarrFB[idx - 1].values;
                    this.control.pholder = this.con.JSONarrFB[idx - 1].pholder;
                    this.con.insertAtFB(idx - 1, this.control);
                }
                this.showTextBox_fb = true;
                console.log(this.con.JSONarrFB);
                console.log(this.showTextBox_fb);
            }

        }
        else if (inp_flag == "twitter") {

            //alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrTW.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_tw;
                    this.control.value = this.str0_tw;
                    this.control.pholder = this.pholder0_tw;
                    this.con.addControlTW(this.control);

                }
                else {
                    console.log("bfore", this.con.JSONarrTW);
                    for (var i = 0; i < this.con.JSONarrTW.length; i++) {
                        alert(this.con.JSONarrTW[i].idx++);
                        this.con.JSONarrTW[i].idx = this.con.JSONarrTW[i].idx++;

                    }
                    console.log("after", this.con.JSONarrTW);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_tw;
                    this.control.value = this.str0_tw;
                    this.control.pholder = this.pholder0_tw;
                    this.con.insertAtTW(0, this.control);
                }
                this.showTextBox_tw = true;
                console.log(this.con.JSONarrTW);
                console.log(this.showTextBox_tw);
            }
            else {
                if (this.con.JSONarrTW.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.id = this.con.JSONarrTW[idx - 1].id;
                    this.control.value = this.con.JSONarrTW[idx - 1].value;
                    this.control.pholder = this.con.JSONarrTW[idx - 1].pholder;
                    this.con.addControlTW(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrTW);
                    for (var j = idx - 1; j < this.con.JSONarrTW.length; j++) {
                        alert(this.con.JSONarrTW[j].idx++);
                        this.con.JSONarrTW[j].idx = this.con.JSONarrTW[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrTW);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.id = this.con.JSONarrTW[idx - 1].id;
                    this.control.values = this.con.JSONarrTW[idx - 1].values;
                    this.control.pholder = this.con.JSONarrTW[idx - 1].pholder;
                    this.con.insertAtTW(idx - 1, this.control);
                }
                this.showTextBox_tw = true;
                console.log(this.con.JSONarrTW);
                console.log(this.showTextBox_tw);
            }

        }
        else if (inp_flag == "linkedin") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrLL.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_ll;
                    this.control.value = this.str0_ll;
                    this.control.pholder = this.pholder0_ll;
                    this.con.addControlLL(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrLL);
                    for (var i = 0; i < this.con.JSONarrLL.length; i++) {
                        alert(this.con.JSONarrLL[i].idx++);
                        this.con.JSONarrLL[i].idx = this.con.JSONarrLL[i].idx++;

                    }
                    console.log("after", this.con.JSONarrLL);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_ll;
                    this.control.value = this.str0_ll;
                    this.control.pholder = this.pholder0_ll;
                    this.con.insertAtLL(0, this.control);
                }
                this.showTextBox_ll = true;
                console.log(this.con.JSONarrLL);
                console.log(this.showTextBox_ll);
            }
            else {
                if (this.con.JSONarrLL.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.id = this.con.JSONarrLL[idx - 1].id;
                    this.control.value = this.con.JSONarrLL[idx - 1].value;
                    this.control.pholder = this.con.JSONarrLL[idx - 1].pholder;
                    this.con.addControlLL(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrLL);
                    for (var j = idx - 1; j < this.con.JSONarrLL.length; j++) {
                        alert(this.con.JSONarrLL[j].idx++);
                        this.con.JSONarrLL[j].idx = this.con.JSONarrLL[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrLL);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.id = this.con.JSONarrLL[idx - 1].id;
                    this.control.values = this.con.JSONarrLL[idx - 1].values;
                    this.control.pholder = this.con.JSONarrLL[idx - 1].pholder;
                    this.con.insertAtLL(idx - 1, this.control);
                }
                this.showTextBox_ll = true;
                console.log(this.con.JSONarrLL);
                console.log(this.showTextBox_ll);
            }

        }
        else if (inp_flag == "gplus") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrGP.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_gp;
                    this.control.value = this.str0_gp;
                    this.control.pholder = this.pholder0_gp;
                    this.con.addControlGP(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrGP);
                    for (var i = 0; i < this.con.JSONarrGP.length; i++) {
                        alert(this.con.JSONarrGP[i].idx++);
                        this.con.JSONarrGP[i].idx = this.con.JSONarrGP[i].idx++;

                    }
                    console.log("after", this.con.JSONarrGP);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_gp;
                    this.control.value = this.str0_gp;
                    this.control.pholder = this.pholder0_gp;
                    this.con.insertAtGP(0, this.control);
                }
                this.showTextBox_gplus = true;
                console.log(this.con.JSONarrGP);
                console.log(this.showTextBox_gplus);
            }
            else {
                if (this.con.JSONarrGP.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.id = this.con.JSONarrGP[idx - 1].id;
                    this.control.value = this.con.JSONarrGP[idx - 1].value;
                    this.control.pholder = this.con.JSONarrGP[idx - 1].pholder;
                    this.con.addControlGP(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrFB);
                    for (var j = idx - 1; j < this.con.JSONarrGP.length; j++) {
                        alert(this.con.JSONarrGP[j].idx++);
                        this.con.JSONarrGP[j].idx = this.con.JSONarrGP[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrGP);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.id = this.con.JSONarrGP[idx - 1].id;
                    this.control.values = this.con.JSONarrGP[idx - 1].values;
                    this.control.pholder = this.con.JSONarrGP[idx - 1].pholder;
                    this.con.insertAtGP(idx - 1, this.control);
                }
                this.showTextBox_gplus = true;
                console.log(this.con.JSONarrGP);
                console.log(this.showTextBox_gplus);
            }

        }
        else if (inp_flag == "ctry") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrGP.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_ctry;
                    this.control.values = this.str0_ctry;
                    this.control.pholder = this.pholder0_ctry;
                    this.con.addControlCt(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCt);
                    for (var i = 0; i < this.con.JSONarrCt.length; i++) {
                        alert(this.con.JSONarrCt[i].idx++);
                        this.con.JSONarrCt[i].idx = this.con.JSONarrCt[i].idx++;

                    }
                    console.log("after", this.con.JSONarrCt);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_ctry;
                    this.control.values = this.str0_ctry;
                    this.control.pholder = this.pholder0_ctry;
                    this.con.insertAtCt(0, this.control);
                }
                this.showTextBox_ctry = true;
                console.log(this.con.JSONarrCt);
                console.log(this.showTextBox_ctry);
            }
            else {
                if (this.con.JSONarrCt.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.id = this.con.JSONarrCt[idx - 1].id;
                    this.control.values = this.con.JSONarrCt[idx - 1].values;
                    this.control.pholder = this.con.JSONarrCt[idx - 1].pholder;
                    this.con.addControlCt(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCt);
                    for (var j = idx - 1; j < this.con.JSONarrCt.length; j++) {
                        alert(this.con.JSONarrCt[j].idx++);
                        this.con.JSONarrCt[j].idx = this.con.JSONarrCt[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrCt);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.id = this.con.JSONarrCt[idx - 1].id;
                    this.control.values = this.con.JSONarrCt[idx - 1].values;
                    this.control.pholder = this.con.JSONarrCt[idx - 1].pholder;
                    this.con.insertAtCt(idx - 1, this.control);
                }
                this.showTextBox_ctry = true;
                console.log(this.con.JSONarrCt);
                console.log(this.showTextBox_ctry);
            }

        }
        else if (inp_flag == "state") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrSt.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control2 = new Control();
                    this.control2.idx = 1;
                    this.control2.id = this.strid0_state;
                    this.control2.values = this.str0_state;
                    this.control2.pholder = this.pholder0_state;
                    this.con.addControlSt(this.control2);
                }
                else {
                    console.log("bfore", this.con.JSONarrSt);
                    for (var i = 0; i < this.con.JSONarrSt.length; i++) {
                        alert(this.con.JSONarrSt[i].idx++);
                        this.con.JSONarrSt[i].idx = this.con.JSONarrSt[i].idx++;

                    }
                    console.log("after", this.con.JSONarrSt);
                    this.control2 = new Control();
                    this.control2.idx = 1;
                    this.control2.id = this.strid0_state;
                    this.control2.values = this.str0_state;
                    this.control2.pholder = this.pholder0_state;
                    this.con.insertAtSt(0, this.control2);
                }
                this.showTextBox_state = true;
                console.log(this.con.JSONarrSt);
                console.log(this.showTextBox_state);
            }
            else {
                if (this.con.JSONarrSt.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control2 = new Control();
                    this.control2.idx = idx + 1;
                    this.control2.id = this.con.JSONarrSt[idx - 1].id;
                    this.control2.value = this.con.JSONarrSt[idx - 1].value;
                    this.control2.pholder = this.con.JSONarrSt[idx - 1].pholder;
                    this.con.addControlSt(this.control2);
                }
                else {
                    console.log("bfore", this.con.JSONarrSt);
                    for (var j = idx - 1; j < this.con.JSONarrSt.length; j++) {
                        alert(this.con.JSONarrSt[j].idx++);
                        this.con.JSONarrSt[j].idx = this.con.JSONarrSt[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrSt);
                    this.control2 = new Control();
                    this.control2.idx = idx;
                    this.control2.id = this.con.JSONarrSt[idx - 1].id;
                    this.control2.value = this.con.JSONarrSt[idx - 1].value;
                    this.control2.pholder = this.con.JSONarrSt[idx - 1].pholder;
                    this.con.insertAtSt(idx - 1, this.control2);
                }
                this.showTextBox_state = true;
                console.log(this.con.JSONarrSt);
                console.log(this.showTextBox_state);



            }
        }
        else if (inp_flag == "info") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrIN.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_info;
                    this.control.value = this.str0_info;
                    this.control.pholder = this.pholder0_info;
                    this.control.lid = this.lid0_info;
                    this.control.lname = this.lname0_info;
                    this.control.lclass = this.lclass0_info;
                    this.con.addControlIN(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrIN);
                    for (var i = 0; i < this.con.JSONarrIN.length; i++) {
                        alert(this.con.JSONarrIN[i].idx++);
                        this.con.JSONarrIN[i].idx = this.con.JSONarrIN[i].idx++;

                    }
                    console.log("after", this.con.JSONarrIN);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_info;
                    this.control.value = this.str0_info;
                    this.control.pholder = this.pholder0_info;
                    this.control.lid = this.lid0_info;
                    this.control.lname = this.lname0_info;
                    this.control.lclass = this.lclass0_info;
                    this.con.insertAtIN(0, this.control);
                }
                this.showTextBox_info = true;
                console.log(this.con.JSONarrIN);
                console.log(this.showTextBox_info);
            }
            else {
                if (this.con.JSONarrIN.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.id = this.con.JSONarrIN[idx - 1].id;
                    this.control.value = this.con.JSONarrIN[idx - 1].value;
                    this.control.pholder = this.con.JSONarrIN[idx - 1].pholder;
                    this.control.lclass = this.con.JSONarrIN[idx - 1].lclass;
                    this.control.lid = this.con.JSONarrIN[idx - 1].lid;
                    this.control.lname = this.con.JSONarrIN[idx - 1].lname;
                    this.con.addControlIN(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrIN);
                    for (var j = idx - 1; j < this.con.JSONarrIN.length; j++) {
                        alert(this.con.JSONarrIN[j].idx++);
                        this.con.JSONarrIN[j].idx = this.con.JSONarrIN[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrIN);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.id = this.con.JSONarrIN[idx - 1].id;
                    this.control.values = this.con.JSONarrIN[idx - 1].values;
                    this.control.pholder = this.con.JSONarrIN[idx - 1].pholder;
                    this.control.lclass = this.con.JSONarrIN[idx - 1].lclass;
                    this.control.lid = this.con.JSONarrIN[idx - 1].lid;
                    this.control.lname = this.con.JSONarrIN[idx - 1].lname;
                    this.con.insertAtIN(idx - 1, this.control);
                }
                this.showTextBox_info = true;
                console.log(this.con.JSONarrIN);
                console.log(this.showTextBox_info);
            }

        }
        else if (inp_flag == "noe") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrNOE.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_noe;
                    this.control.values = this.str0_noe;
                    this.con.addControlNOE(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrNOE);
                    for (var i = 0; i < this.con.JSONarrNOE.length; i++) {
                        alert(this.con.JSONarrNOE[i].idx++);
                        this.con.JSONarrNOE[i].idx = this.con.JSONarrNOE[i].idx++;

                    }
                    console.log("after", this.con.JSONarrNOE);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.id = this.strid0_noe;
                    this.control.values = this.str0_noe;
                    this.con.insertAtNOE(0, this.control);
                }
                this.showTextBox_noe = true;
                console.log(this.con.JSONarrNOE);
                console.log(this.showTextBox_noe);
            }
            else {
                if (this.con.JSONarrNOE.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.id = this.con.JSONarrNOE[idx - 1].id;
                    this.control.value = this.con.JSONarrNOE[idx - 1].value;
                    this.con.addControlNOE(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrNOE);
                    for (var j = idx - 1; j < this.con.JSONarrNOE.length; j++) {
                        alert(this.con.JSONarrNOE[j].idx++);
                        this.con.JSONarrNOE[j].idx = this.con.JSONarrNOE[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrNOE);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.id = this.con.JSONarrNOE[idx - 1].id;
                    this.control.values = this.con.JSONarrNOE[idx - 1].values;
                    this.con.insertAtNOE(idx - 1, this.control);
                }
                this.showTextBox_noe = true;
                console.log(this.con.JSONarrNOE);
                console.log(this.showTextBox_noe);
            }

        }
        else if (inp_flag == "cbox") {

            alert(idx)
            if (idx == 0) {
                if (this.con.JSONarrCB.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.ids = this.strid0_cbox;
                    this.control.values = this.str0_cbox;
                    this.con.addControlCB(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCB);
                    for (var i = 0; i < this.con.JSONarrCB.length; i++) {
                        alert(this.con.JSONarrCB[i].idx++);
                        this.con.JSONarrCB[i].idx = this.con.JSONarrCB[i].idx++;

                    }
                    console.log("after", this.con.JSONarrCB);
                    this.control = new Control();
                    this.control.idx = 1;
                    this.control.ids = this.strid0_cbox;
                    this.control.values = this.str0_cbox;
                    this.con.insertAtCB(0, this.control);
                }
                this.showTextBox_cbox = true;
                console.log(this.con.JSONarrCB);
                console.log(this.showTextBox_cbox);
            }
            else {
                if (this.con.JSONarrCB.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control();
                    this.control.idx = idx + 1;
                    this.control.ids = this.con.JSONarrCB[idx - 1].ids;
                    this.control.values = this.con.JSONarrCB[idx - 1].values;
                    this.con.addControlCB(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrCB);
                    for (var j = idx - 1; j < this.con.JSONarrCB.length; j++) {
                        alert(this.con.JSONarrCB[j].idx++);
                        this.con.JSONarrCB[j].idx = this.con.JSONarrCB[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrCB);
                    this.control = new Control();
                    this.control.idx = idx;
                    this.control.ids = this.con.JSONarrCB[idx - 1].ids;
                    this.control.values = this.con.JSONarrCB[idx - 1].values;
                    this.con.insertAtCB(idx - 1, this.control);
                }
                this.showTextBox_cbox = true;
                console.log(this.con.JSONarrCB);
                console.log(this.showTextBox_cbox);
            }

        }
    }

    editElement(idx, inp_flag) {
        if (inp_flag == undefined) {
            localStorage.setItem("indexEle", idx);
            localStorage.setItem("inp_flag", 'TB');
        }
        else {
            localStorage.setItem("indexEle", idx);
            localStorage.setItem("inp_flag", inp_flag);
        }


    }




    saveLabel(labelid, labelnm, labelclass) {
        if (localStorage.getItem("inp_flag") == 'info') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                this.con.JSONarrIN[this.jk - 1]["lid"] = labelid;
                this.con.JSONarrIN[this.jk - 1]["lname"] = labelnm;
                this.con.JSONarrIN[this.jk - 1]["lclass"] = labelclass;
                console.log(this.Textboxes_info);

            }
            else {
                this.lid0_info = labelid;
                this.lname0_info = labelnm;
                this.lclass0_info = labelclass;
            }
        }


    }

    control_class: string = "cmn_input"
    control_placeholder: string = "Company Name";

    editControl() {

    }
    filter: boolean;

    filterData() {
        if (this.filter === false || this.filter === undefined) {
            this.filter = true;
        }
        else {
            this.filter = false;// this will change value of it true and false
        }

    }



    num = 0;
    jk: number;
    saveCntrl(ctpar, ctid, ctval, ctph, ctvbx, ctvmsg) {
        alert(localStorage.getItem("indexEle"));

        alert(ctvmsg);
        if (localStorage.getItem("inp_flag") == 'cbox') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrCB[this.jk - 1]["values"] = ctval.split(",");
                this.con.JSONarrCB[this.jk - 1]["ids"] = ctid.split(",");
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_cbox);

            }
            else {
                this.str0_cbox = ctval;
                this.strid0_cbox = ctid;
            }
            this.showTextBox_cbox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        if (localStorage.getItem("inp_flag") == 'noe') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrNOE[this.jk - 1]["values"] = ctval.split(",");
                this.con.JSONarrNOE[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_NOE);

            }
            else {
                this.str0_noe = ctval.split(",");
                this.strid0_noe = ctid;
            }
            this.showTextBox_noe = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }

        if (localStorage.getItem("inp_flag") == 'info') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrIN[this.jk - 1]["value"] = ctval;
                this.con.JSONarrIN[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrIN[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_info);

            }
            else {
                this.str0_info = ctval;
                this.pholder0_info = ctph;
                this.strid0_info = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        if (localStorage.getItem("inp_flag") == 'state') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrSt[this.jk - 1]["values"] = ctval.split(",");
                this.con.JSONarrSt[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrSt[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_ctry);

            }
            else {
                this.str0_state = ctval.split(",");
                this.pholder0_state = ctph;
                this.strid0_state = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        if (localStorage.getItem("inp_flag") == 'ctry') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrCt[this.jk - 1]["values"] = ctval.split(",");
                this.con.JSONarrCt[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrCt[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_ctry);

            }
            else {
                this.str0_ctry = ctval.split(",");
                this.pholder0_ctry = ctph;
                this.strid0_ctry = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        if (localStorage.getItem("inp_flag") == 'gplus') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrGP[this.jk - 1]["value"] = ctval;
                this.con.JSONarrGP[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrGP[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_gplus);

            }
            else {
                this.str0_gp = ctval;
                this.pholder0_gp = ctph;
                this.strid0_gp = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        if (localStorage.getItem("inp_flag") == 'linkedin') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrLL[this.jk - 1]["value"] = ctval;
                this.con.JSONarrLL[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrLL[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_ll);

            }
            else {
                this.str0_ll = ctval;
                this.pholder0_ll = ctph;
                this.strid0_ll = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        if (localStorage.getItem("inp_flag") == 'twitter') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrTW[this.jk - 1]["value"] = ctval;
                this.con.JSONarrTW[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrTW[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_tw);

            }
            else {
                this.str0_tw = ctval;
                this.pholder0_tw = ctph;
                this.strid0_tw = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        if (localStorage.getItem("inp_flag") == 'fbook') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrFB[this.jk - 1]["value"] = ctval;
                this.con.JSONarrFB[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrFB[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_fb);

            }
            else {
                this.str0_fb = ctval;
                this.pholder0_fb = ctph;
                this.strid0_fb = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        if (localStorage.getItem("inp_flag") == 'city') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrCity[this.jk - 1]["value"] = ctval;
                this.con.JSONarrCity[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrCity[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes_city);

            }
            else {
                this.str0_city = ctval;
                this.pholder0_city = ctph;
                this.strid0_city = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        if (localStorage.getItem("inp_flag") == 'TB') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarr[this.jk - 1]["value"] = ctval;
                this.con.JSONarr[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarr[this.jk - 1]["id"] = ctid;
                if (this.filter) {
                    this.con.JSONarr[this.jk - 1]["isval"] = this.filter;
                    this.con.JSONarr[this.jk - 1]["valmsg"] = ctvmsg;
                } else {
                    this.con.JSONarr[this.jk - 1]["isval"] = this.filter;
                    this.con.JSONarr[this.jk - 1]["valmsg"] = "";
                }
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes);

            }
            else {
                this.str0 = ctval;
                this.pholder0 = ctph;
                this.strid0 = ctid;
                if (this.filter) {
                    this.isval0 = this.filter;
                    this.valmsg0 = ctvmsg;
                }
                else {
                    this.isval0 = this.filter;
                    this.valmsg0 = "";
                }
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
        else if (localStorage.getItem("inp_flag") == 'CHA') {
            if (localStorage.getItem("indexEle") !== 'fg') {

                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrCHA[this.jk - 1]["value"] = ctval;
                this.con.JSONarrCHA[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrCHA[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.con.JSONarrCHA);

            }

            else {
                this.str0_CHA = ctval;
                this.pholder0_CHA = ctph;
                this.strid0_CHA = ctid;
            }
            this.showTextBox_CHA = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();

        }

        else if (localStorage.getItem("inp_flag") == 'CEO') {
            if (localStorage.getItem("indexEle") !== 'fg') {

                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrCEO[this.jk - 1]["value"] = ctval;
                this.con.JSONarrCEO[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrCEO[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.con.JSONarrCEO);

            }

            else {
                this.str0_CEO = ctval;
                this.pholder0_CEO = ctph;
                this.strid0_CEO = ctid;
            }
            this.showTextBox_CEO = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();

        }
        else if (localStorage.getItem("inp_flag") == 'aob') {
            if (localStorage.getItem("indexEle") !== 'fg') {

                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrAOB[this.jk - 1]["values"] = ctval.split(",");
                this.con.JSONarrAOB[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrAOB[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.con.JSONarrAOB);

            }

            else {
                this.aob0 = ctval.split(",");
                this.pholder0_aob = ctph;
                this.strid0_aob = ctid;
            }
            this.showTextBox_aob = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();

        }




    }



    delElement(idx, inp_flag) {
        if (inp_flag == undefined) {
            delete this.Textboxes[idx - 1];
            this.showTextBox = true;
        }
        else if (inp_flag == "CHA") {
            delete this.Textboxes_CHA[idx - 1];
            this.showTextBox_CHA = true;

        }
        else if (inp_flag == "CEO") {
            delete this.Textboxes_CEO[idx - 1];
            this.showTextBox_CEO = true;

        }
        else if (inp_flag == "aob") {
            delete this.Textboxes_aob[idx - 1];
            this.showTextBox_aob = true;

        }
        else if (inp_flag == "city") {
            delete this.Textboxes_city[idx - 1];
            this.showTextBox_city = true;

        }
        else if (inp_flag == "ctry") {
            delete this.Textboxes_ctry[idx - 1];
            this.showTextBox_ctry = true;

        }
        else if (inp_flag == "noe") {
            delete this.Textboxes_NOE[idx - 1];
            this.showTextBox_noe = true;

        }
        else if (inp_flag == "twitter") {
            delete this.Textboxes_tw[idx - 1];
            this.showTextBox_tw = true;

        }
        else if (inp_flag == "info") {
            delete this.Textboxes_info[idx - 1];
            this.showTextBox_info = true;

        }
        else if (inp_flag == "fbook") {
            delete this.Textboxes_fb[idx - 1];
            this.showTextBox_fb = true;

        }
        else if (inp_flag == "linkedin") {
            delete this.Textboxes_ll[idx - 1];
            this.showTextBox_ll = true;

        }
        else if (inp_flag == "gplus") {
            delete this.Textboxes_gplus[idx - 1];
            this.showTextBox_gplus = true;

        }
        else if (inp_flag == "cbox") {
            delete this.Textboxes_cbox[idx - 1];
            this.showTextBox_cbox = true;

        }
        else if (inp_flag == "state") {
            delete this.Textboxes_state[idx - 1];
            this.showTextBox_state = true;

        }

    }

    resetElement(idx, inp_flag) {

        if (inp_flag == undefined) {
            if (idx == 0) {
                this.str0 = "";
                this.strid0 = "Text1";
                this.pholder0 = "New Company";
            }
            else {
                this.Textboxes[idx - 1]["id"] = "Text1";
                this.Textboxes[idx - 1]["value"] = "";
                this.Textboxes[idx - 1]["pholder"] = "New Company";
            }
            this.showTextBox = true;
        }
        else if (inp_flag == "CHA") {
            if (idx == 0) {
                this.strid0_CHA = "Text2";
                this.str0_CHA = "";
                this.pholder0_CHA = "Company Head Office Address";

            }
            else {
                this.Textboxes_CHA[idx - 1]["id"] = "Text2";
                this.Textboxes_CHA[idx - 1]["value"] = "";
                this.Textboxes_CHA[idx - 1]["pholder"] = "Company Head Office Address";
            }
            this.showTextBox_CHA = true;

        }
        else if (inp_flag == "CEO") {
            if (idx == 0) {
                this.strid0_CEO = "Text3";
                this.str0_CEO = "";
                this.pholder0_CEO = "Name of CEO/MD";
            }
            else {
                this.Textboxes_CEO[idx - 1]["id"] = "Text3";
                this.Textboxes_CEO[idx - 1]["value"] = "";
                this.Textboxes_CEO[idx - 1]["pholder"] = "Name of CEO/MD";
            }

            this.showTextBox_CEO = true;

        }
        else if (inp_flag == "aob") {
            if (idx == 0) {
                this.strid0_aob = "aob";
                this.aob0 = ["Area of Business", "ABC", "XYZ"];
            }
            else {
                this.Textboxes_aob[idx - 1]["id"] = "aob";
                this.Textboxes_aob[idx - 1]["values"] = ["Area of Business", "ABC", "XYZ"];
            }
            this.showTextBox_aob = true;

        }
        else if (inp_flag == "city") {
            if (idx == 0) {
                this.str0_city = "";
                this.strid0_city = "city";
                this.pholder0_city = "City"

            }
            else {
                this.Textboxes_city[idx - 1]["id"] = "city";
                this.Textboxes_city[idx - 1]["value"] = "";
                this.Textboxes_city[idx - 1]["pholder"] = "City";
            }
            this.showTextBox_city = true;

        }
        else if (inp_flag == "ctry") {
            if (idx == 0) {
                this.str0_ctry = ["Country", "China", "Dubai", "Russia"];
                this.strid0_ctry = "ctry";

            }
            else {
                this.Textboxes_ctry[idx - 1]["id"] = "ctry";
                this.Textboxes_ctry[idx - 1]["values"] = ["Country", "China", "Dubai", "Russia"];
            }
            this.showTextBox_ctry = true;

        }
        else if (inp_flag == "noe") {
            if (idx == 0) {
                this.str0_noe = ["Number of Employees", "ABC", "XYZ"];
                this.strid0_noe = "noe";

            }
            else {
                this.Textboxes_NOE[idx - 1]["id"] = "noe";
                this.Textboxes_NOE[idx - 1]["values"] = ["Number of Employees", "ABC", "XYZ"];
            }
            this.showTextBox_noe = true;

        }
        else if (inp_flag == "twitter") {
            if (idx == 0) {
                this.str0_tw = "";
                this.strid0_tw = "twitter";
                this.pholder0_tw = "Twitter Handle";

            }
            else {
                this.Textboxes_tw[idx - 1]["id"] = "twitter";
                this.Textboxes_tw[idx - 1]["value"] = "";
                this.Textboxes_tw[idx - 1]["pholder"] = "Twitter Handle";
            }
            this.showTextBox_tw = true;

        }
        else if (inp_flag == "info") {
            if (idx == 0) {
                this.pholder0_info = "input text for a single line field with a max";
                this.strid0_info = "Textarea1";
                this.str0_info = "";
                this.lid0_info = "label";
                this.lname0_info = "Other Information";
                this.lclass0_info = "lbl_hdr";
            }
            else {
                this.Textboxes_info[idx - 1]["id"] = "textarea";
                this.Textboxes_info[idx - 1]["value"] = "";
                this.Textboxes_info[idx - 1]["pholder"] = "input text for a single line field with a max";
                this.Textboxes_info[idx - 1]["lid"] = "label";
                this.Textboxes_info[idx - 1]["lname"] = "Other Information";
                this.Textboxes_info[idx - 1]["lclass"] = "lbl_hdr";
            }


            this.showTextBox_info = true;

        }
        else if (inp_flag == "fbook") {
            if (idx == 0) {
                this.str0_fb = "";
                this.strid0_fb = "fbook";
                this.pholder0_fb = "Facebook Address";
            }
            else {
                this.Textboxes_fb[idx - 1]["id"] = "fbook";
                this.Textboxes_fb[idx - 1]["value"] = "";
                this.Textboxes_fb[idx - 1]["pholder"] = "Facebook Address";
            }
            this.showTextBox_fb = true;

        }
        else if (inp_flag == "linkedin") {
            if (idx == 0) {
                this.str0_ll = "";
                this.strid0_ll = "linkedin";
                this.pholder0_ll = "Linkedin Address";
            }
            else {
                this.Textboxes_ll[idx - 1]["id"] = "linkedin";
                this.Textboxes_ll[idx - 1]["value"] = "";
                this.Textboxes_ll[idx - 1]["pholder"] = "Linkedin Address";
            }
            this.showTextBox_ll = true;

        }
        else if (inp_flag == "gplus") {
            if (idx == 0) {
                this.str0_gp = "";
                this.strid0_gp = "gplus";
                this.pholder0_gp = "Google Plus Page";
            }
            else {
                this.Textboxes_gplus[idx - 1]["id"] = "gplus";
                this.Textboxes_gplus[idx - 1]["value"] = "";
                this.Textboxes_gplus[idx - 1]["pholder"] = "Google Plus Page";
            }
            this.showTextBox_gplus = true;

        }
        else if (inp_flag == "cbox") {
            if (idx == 0) {
                this.str0_cbox = ["Compliant With PF(India)", "Compliant With ESIC(India)"];
                this.strid0_cbox = ["cbox1", "cbox2"];

            }
            else {
                this.Textboxes_cbox[idx - 1]["values"] = ["Compliant With PF(India)", "Compliant With ESIC(India)"];
                this.Textboxes_cbox[idx - 1]["ids"] = ["cbox1", "cbox2"];
            }
            this.showTextBox_cbox = true;

        }
        else if (inp_flag == "state") {
            if (idx == 0) {
                this.str0_state = ["State", "Gujarat", "Maharashtra"];
                this.strid0_state = "state";
            }
            else {
                this.Textboxes_state[idx - 1]["id"] = "state";
                this.Textboxes_state[idx - 1]["values"] = ["State", "Gujarat", "Maharashtra"];
            }
            this.showTextBox_state = true;

        }

    }

    pagehtml: any;
    saveClick() {
        //console.log($("#contra").html());
        this.pagehtml = document.getElementById("contra").outerHTML.replace(/"/g, '\\"');

        console.log(this.pagehtml);


        this.aimp.putInputData({ "html": this.pagehtml });
        console.log("doneeee");
    }
    ngOnInit(): void {
        // alert(this.document.getElementById("theme").getAttribute("href"));
        // alert(this.document.getElementById("theme2").getAttribute("href"));


        $('.edit_btn').on('click', function () {
            alert($('.edit_btn').index(this));
            localStorage.setItem("parent", $('.edit_btn').index(this));

        });
        var num = 0;




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

        $(window).load(function () {
            var H = $(window).height();
            var nH = $('.logo_bar').height();
            var nD = $('.onboarding_lbl').height();
            var F = $('footer').height();
            var C = H - nH - nD - F - 10;
            $('.detail_wrapper').css('min-height', C);
            $(window).resize(function () {
                var H = $(window).height();
                var nH = $('.logo_bar').height();
                var nD = $('.onboarding_lbl').height();
                var F = $('footer').height();
                var C = H - nH - nD - F - 10;
                $('.detail_wrapper').css('min-height', C);
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

        // right toggle menu




    }



}
