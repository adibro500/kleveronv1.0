import { Component, Input, OnInit } from "@angular/core";
import { Control2 } from "./Controls";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: 'time-picker',
    templateUrl: './timePicker.component.html',
    providers: [Control2],
})




export class TimePickerComponent implements OnInit {
    ngOnInit(): void {

        $('.delel').on('click', function () {
            $(this).closest('.element_box').remove()

        });

        $(".element_box1").on('hover', function () {
            $(this).closest(".parentdiv #tour-action-ui-id").addClass("action-ui");
        });

    }

    control: Control2;
    showTextBox: boolean;
    divclass1_tb: string = "col-md-6 col-sm-6 col-xs-12 selectdiv element_box";
    divclass0_tb: string = "col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row";
    pholder0_tb: string = "simple textbox";
    class0_tb: string = "cmn_input";
    str0_tb = "text1";
    strid0_tb = "text1";
    encodedExampleHtml: string;
    showTextBox_tb = false;



    Textboxes: Control2[] = this.con.JSONarrTP;


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

    jk;
    saveCntrl(ctpar, ctid, ctval, ctph, ctvbx, ctvmsg) {
        if (localStorage.getItem("inp_flag") == 'TB') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrTP[this.jk - 1]["value"] = ctval;
                this.con.JSONarrTP[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrTP[this.jk - 1]["id"] = ctid;
                // this.con.JSONarrTP[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes);

            }
            else {
                this.str0_tb = ctval;
                this.pholder0_tb = ctph;
                this.strid0_tb = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }


    }




    constructor(public con: Control2) {
    }
    cloneElement(idx, inp_flag) {

        alert(idx)
        if (inp_flag == undefined) {
            if (idx == 0) {
                if (this.con.JSONarrTP.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control2();
                    this.control.idx = 1;
                    this.control.id = this.strid0_tb;
                    this.control.value = this.str0_tb;
                    this.control.pholder = this.pholder0_tb;
                    this.con.addControlTP(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrTP);
                    for (var i = 0; i < this.con.JSONarrTP.length; i++) {
                        alert(this.con.JSONarrTP[i].idx++);
                        this.con.JSONarrTP[i].idx = this.con.JSONarrTP[i].idx++;

                    }
                    console.log("after", this.con.JSONarrTP);
                    this.control = new Control2();
                    this.control.idx = 1;
                    this.control.id = this.strid0_tb;
                    this.control.value = this.str0_tb;
                    this.control.pholder = this.pholder0_tb;
                    this.con.insertAtTP(0, this.control);
                }
                this.showTextBox = true;
                console.log(this.con.JSONarrTP);
                console.log(this.showTextBox);
            }
            else {
                if (this.con.JSONarrTP.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control2();
                    this.control.idx = idx + 1;
                    this.control.id = this.con.JSONarrTP[idx - 1].id;
                    this.control.value = this.con.JSONarrTP[idx - 1].value;
                    this.control.pholder = this.con.JSONarrTP[idx - 1].pholder;
                    this.con.addControlTP(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrTP);
                    for (var j = idx - 1; j < this.con.JSONarrTP.length; j++) {
                        alert(this.con.JSONarrTP[j].idx++);
                        this.con.JSONarrTP[j].idx = this.con.JSONarrTP[j].idx++;
                    }
                    //this.con.JSONarrTP[j].idx = this.con.JSONarrTP.length;
                    console.log("after", this.con.JSONarrTP);
                    this.control = new Control2();
                    this.control.idx = idx;
                    this.control.id = this.con.JSONarrTP[idx - 1].id;
                    this.control.value = this.con.JSONarrTP[idx - 1].value;
                    this.control.pholder = this.con.JSONarrTP[idx - 1].pholder;
                    this.con.insertAtTP(idx - 1, this.control);
                }
                this.showTextBox = true;
                console.log(this.con.JSONarrTP);
                console.log(this.showTextBox);
            }
        }
    }


    delElement(idx, inp_flag) {
        if (inp_flag == undefined) {
            delete this.Textboxes[idx - 1];
            this.Textboxes.length = this.Textboxes.length - 1;
            this.showTextBox_tb = true;
        }

    }

}