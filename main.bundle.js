webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/admin/Control.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Control; });
var Control = (function () {
    function Control() {
        this.JSONarr = new Array();
        this.JSONarrCHA = new Array();
        this.JSONarrCEO = new Array();
        this.JSONarrCity = new Array();
        this.JSONarrAOB = new Array();
        this.JSONarrFB = new Array();
        this.JSONarrLL = new Array();
        this.JSONarrGP = new Array();
        this.JSONarrTW = new Array();
        this.JSONarrCt = new Array();
        this.JSONarrSt = new Array();
        this.JSONarrIN = new Array();
        this.JSONarrNOE = new Array();
        this.JSONarrCB = new Array();
    }
    Control.prototype.contructor = function (idx, id, value, pholder, values, lid, lname, lclass, ids, valmsg, isval, formCon, formConCHA, formConCEO, formConCity, formConAOB, formConFB, formConLL, formConGP, formConTW, formConCt, formConSt, formConIN, formConNOE, formConCB) {
        this.idx = idx;
        this.id = id;
        this.value = value;
        this.pholder = pholder;
        this.values = values;
        this.lid = lid;
        this.lname = lname;
        this.lclass = lclass;
        this.ids = ids;
        this.valmsg = valmsg;
        this.isval = isval;
        this.formCon = formCon;
        this.formConCHA = formConCHA;
        this.formConCEO = formConCEO;
        this.formConCity = formConCity;
        this.formConAOB = formConAOB;
        this.formConFB = formConFB;
        this.formConLL = formConLL;
        this.formConGP = formConGP;
        this.formConTW = formConTW;
        this.formConCt = formConCt;
        this.formConSt = formConSt;
        this.formConIN = formConIN;
        this.formConNOE = formConNOE;
        this.formConCB = formConCB;
    };
    Control.prototype.addControlNOE = function (control) {
        this.JSONarrNOE.push(control);
    };
    Control.prototype.insertAtNOE = function (index, control) {
        this.JSONarrNOE.splice(index, 0, control);
    };
    Control.prototype.addControlCB = function (control) {
        this.JSONarrCB.push(control);
    };
    Control.prototype.insertAtCB = function (index, control) {
        this.JSONarrCB.splice(index, 0, control);
    };
    Control.prototype.addControlIN = function (control) {
        this.JSONarrIN.push(control);
    };
    Control.prototype.insertAtIN = function (index, control) {
        this.JSONarrIN.splice(index, 0, control);
    };
    Control.prototype.addControlSt = function (control) {
        this.JSONarrSt.push(control);
    };
    Control.prototype.insertAtSt = function (index, control) {
        this.JSONarrSt.splice(index, 0, control);
    };
    Control.prototype.addControlCt = function (control) {
        this.JSONarrCt.push(control);
    };
    Control.prototype.insertAtCt = function (index, control) {
        this.JSONarrCt.splice(index, 0, control);
    };
    Control.prototype.addControlTW = function (control) {
        this.JSONarrTW.push(control);
    };
    Control.prototype.insertAtTW = function (index, control) {
        this.JSONarrTW.splice(index, 0, control);
    };
    Control.prototype.addControlLL = function (control) {
        this.JSONarrLL.push(control);
    };
    Control.prototype.insertAtLL = function (index, control) {
        this.JSONarrLL.splice(index, 0, control);
    };
    Control.prototype.addControlGP = function (control) {
        this.JSONarrGP.push(control);
    };
    Control.prototype.insertAtGP = function (index, control) {
        this.JSONarrGP.splice(index, 0, control);
    };
    Control.prototype.addControl = function (control) {
        this.JSONarr.push(control);
    };
    Control.prototype.addControlFB = function (control) {
        this.JSONarrFB.push(control);
    };
    Control.prototype.insertAtFB = function (index, control) {
        this.JSONarrFB.splice(index, 0, control);
    };
    Control.prototype.addControlAOB = function (control) {
        this.JSONarrAOB.push(control);
    };
    Control.prototype.insertAtAOB = function (index, control) {
        this.JSONarrAOB.splice(index, 0, control);
    };
    Control.prototype.addControlCity = function (control) {
        this.JSONarrCity.push(control);
    };
    Control.prototype.insertAtCity = function (index, control) {
        this.JSONarrCity.splice(index, 0, control);
    };
    Control.prototype.addControlCHA = function (control) {
        this.JSONarrCHA.push(control);
    };
    Control.prototype.insertAt = function (index, control) {
        this.JSONarr.splice(index, 0, control);
    };
    Control.prototype.addControlCEO = function (control) {
        this.JSONarrCEO.push(control);
    };
    Control.prototype.insertAtCEO = function (index, control) {
        this.JSONarrCEO.splice(index, 0, control);
    };
    Control.prototype.insertAtCHA = function (index, control) {
        this.JSONarr.splice(index, 0, control);
    };
    return Control;
}());

//# sourceMappingURL=Control.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-input-master.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headers__ = __webpack_require__("../../../../../src/app/admin/headers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMasterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputMasterService = (function () {
    function InputMasterService(http) {
        this.http = http;
    }
    InputMasterService.prototype.putInputData = function (inputdata) {
        console.log("inputdata", inputdata);
        return this.http.post("http://localhost:3000/saveTemplate-AdminInputMaster", inputdata, __WEBPACK_IMPORTED_MODULE_3__headers__["a" /* options */]).map(function (res) { return res.text(); }).subscribe(function (data) { return console.log(data); });
    };
    return InputMasterService;
}());
InputMasterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], InputMasterService);

var _a;
//# sourceMappingURL=admin-input-master.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-on-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Control__ = __webpack_require__("../../../../../src/app/admin/Control.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_dnd_release__ = __webpack_require__("../../../../@swimlane/ngx-dnd/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_dnd_release___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_dnd_release__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_input_master_service__ = __webpack_require__("../../../../../src/app/admin/admin-input-master.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminInputMaster; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminInputMaster = (function () {
    // arrayControl = <FormArray>this.newForm.controls['formArray'];
    function AdminInputMaster(fb, con, ds, aimp) {
        // this.dragdrop.setOptions('sixth-bag', {
        //     moves: function (el, container, handle) {
        //         return handle.className === 'element_box';
        //     }
        // });
        // this.isEdited = false;
        // if (this.con.JSONarr.length == 0)
        //     this.showTextBox = false;
        // else
        //     this.showTextBox = true;
        // this.newForm = this.fb.group({
        //     formArray: this.fb.array([])
        // });
        this.fb = fb;
        this.con = con;
        this.ds = ds;
        this.aimp = aimp;
        this.ListMap = new Map();
        this.mainhtml = '';
        this.str = '';
        this.pholder = 'New Company';
        this.strid0 = "cmn_input0";
        this.str0 = '';
        this.pholder0 = 'New Company';
        this.strid0_CHA = "Textarea1";
        this.str0_CHA = '';
        this.pholder0_CHA = "Company Head Office Address";
        this.strid0_CEO = "Text";
        this.str0_CEO = '';
        this.pholder0_CEO = "Name Of CEO/MD";
        this.strid0_city = "TextCity";
        this.str0_city = '';
        this.pholder0_city = "City";
        this.strid0_aob = "Areas";
        this.aob0 = ['Area of Business', 'XYz', 'ABC'];
        this.pholder0_aob = "Areas of Business";
        this.strid0_fb = "Text";
        this.str0_fb = '';
        this.pholder0_fb = "Facebook Address";
        this.pholder0_ll = "Linkedin Address";
        this.strid0_ll = "Text";
        this.str0_ll = '';
        this.pholder0_gp = "Google Plus Address";
        this.strid0_gp = "Text";
        this.str0_gp = '';
        this.pholder0_tw = "Twitter Handle";
        this.strid0_tw = "Text";
        this.str0_tw = '';
        this.pholder0_ctry = "Country";
        this.strid0_ctry = "Text";
        this.str0_ctry = ['Country', 'China', 'Dubai', 'Russia'];
        this.pholder0_state = "Country";
        this.strid0_state = "Text";
        this.str0_state = ['State', 'Andhra Pradesh', 'Gujarat', 'Maharahtra'];
        this.pholder0_info = "input text for a single line field with a max";
        this.strid0_info = "Textarea1";
        this.str0_info = "";
        this.lid0_info = "label";
        this.lname0_info = "Other Information";
        this.lclass0_info = "lbl_hdr";
        this.strid0_noe = "Text";
        this.str0_noe = ['Number of employees', 'ABC', 'XYZ'];
        this.strid0_cbox = ["Checkbox1", "checkbox2"];
        this.str0_cbox = ['Compliant With PF(India)', 'Compliant With ESIC(India)'];
        this.isval0 = false;
        this.valmsg0 = "";
        this.json1 = {};
        this.Textboxes = this.con.JSONarr;
        this.Textboxes_CHA = this.con.JSONarrCHA;
        this.Textboxes_CEO = this.con.JSONarrCEO;
        this.Textboxes_city = this.con.JSONarrCity;
        this.Textboxes_aob = this.con.JSONarrAOB;
        this.Textboxes_fb = this.con.JSONarrFB;
        this.Textboxes_tw = this.con.JSONarrTW;
        this.Textboxes_ll = this.con.JSONarrLL;
        this.Textboxes_gplus = this.con.JSONarrGP;
        this.Textboxes_ctry = this.con.JSONarrCt;
        this.Textboxes_state = this.con.JSONarrSt;
        this.Textboxes_info = this.con.JSONarrIN;
        this.Textboxes_NOE = this.con.JSONarrNOE;
        this.Textboxes_cbox = this.con.JSONarrCB;
        this.control_class = "cmn_input";
        this.control_placeholder = "Company Name";
        this.num = 0;
    }
    AdminInputMaster.prototype.cloneElement = function (idx, inp_flag) {
        alert(idx);
        if (inp_flag == undefined) {
            if (idx == 0) {
                if (this.con.JSONarr.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
        }
        else if (inp_flag == "CHA") {
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrCHA.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
        }
        else if (inp_flag == "CEO") {
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrCEO.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrCity.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrAOB.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrFB.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrLL.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrGP.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrGP.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrSt.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control2 = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control2 = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control2 = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control2 = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrIN.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrNOE.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
            alert(idx);
            if (idx == 0) {
                if (this.con.JSONarrCB.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]();
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
    };
    AdminInputMaster.prototype.editElement = function (idx, inp_flag) {
        if (inp_flag == undefined) {
            localStorage.setItem("indexEle", idx);
            localStorage.setItem("inp_flag", 'TB');
        }
        else {
            localStorage.setItem("indexEle", idx);
            localStorage.setItem("inp_flag", inp_flag);
        }
    };
    AdminInputMaster.prototype.saveLabel = function (labelid, labelnm, labelclass) {
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
    };
    AdminInputMaster.prototype.editControl = function () {
    };
    AdminInputMaster.prototype.filterData = function () {
        if (this.filter === false || this.filter === undefined) {
            this.filter = true;
        }
        else {
            this.filter = false; // this will change value of it true and false
        }
    };
    AdminInputMaster.prototype.saveCntrl = function (ctpar, ctid, ctval, ctph, ctvbx, ctvmsg) {
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
                this.str0_noe = ctval;
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
                this.str0_state = ctval;
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
                this.str0_ctry = ctval;
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
                }
                else {
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
                this.con.JSONarrAOB[this.jk - 1]["value"] = ctval;
                this.con.JSONarrAOB[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrAOB[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.con.JSONarrAOB);
            }
            else {
                this.aob0 = ctval;
                this.pholder0_aob = ctph;
                this.strid0_aob = ctid;
            }
            this.showTextBox_aob = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }
    };
    AdminInputMaster.prototype.delElement = function (idx, inp_flag) {
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
    };
    AdminInputMaster.prototype.resetElement = function (idx, inp_flag) {
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
                this.pholder0_city = "City";
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
    };
    AdminInputMaster.prototype.saveClick = function () {
        //console.log($("#contra").html());
        // this.pagehtml = document.getElementById("contra").outerHTML.replace(/"/g, '\\"');
        console.log(this.pagehtml);
        var myJson = {
            "html": "<div class='happy'></div>"
        };
        this.aimp.putInputData(myJson);
        console.log("doneeee");
    };
    AdminInputMaster.prototype.ngOnInit = function () {
        $('.edit_btn').on('click', function () {
            alert($('.edit_btn').index(this));
            localStorage.setItem("parent", $('.edit_btn').index(this));
        });
        var num = 0;
        $('.sv_btn').on('click', function () {
            $("#input_label_Modal").hide();
        });
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });
        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            });
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
    };
    return AdminInputMaster;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AdminInputMaster.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AdminInputMaster.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AdminInputMaster.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AdminInputMaster.prototype, "class", void 0);
AdminInputMaster = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'adminOnBoard',
        template: __webpack_require__("../../../../../src/app/admin/admin-on-board.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */], __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_dnd_release__["DrakeStoreService"], __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_dnd_release__["DroppableDirective"], __WEBPACK_IMPORTED_MODULE_4__admin_input_master_service__["a" /* InputMasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Control__["a" /* Control */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_dnd_release__["DrakeStoreService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_dnd_release__["DrakeStoreService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__admin_input_master_service__["a" /* InputMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__admin_input_master_service__["a" /* InputMasterService */]) === "function" && _d || Object])
], AdminInputMaster);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-on-board.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-on-board.html":
/***/ (function(module, exports) {

module.exports = "<script src='https://cdnjs.cloudflare.com/ajax/libs/dragula/$VERSION/dragula.min.js'></script>\r\n<div id=\"contra\">\r\n    <div class=\"wrapper\">\r\n        <div class=\"aside left\">\r\n            <div class=\"dash_logo\">\r\n                <a href=\"#\">\r\n                    <img src=\"/assets/images/settings/logo_dashboard.png\" alt=\"kleveron\" />\r\n                </a>\r\n            </div>\r\n            <div class=\"aside_nav\">\r\n                <div class=\"sidebar-menu\">\r\n                    <ul class=\"menu\">\r\n                        <li>\r\n                            <h3>\r\n                                <label>\r\n                                    Main\r\n                                </label>\r\n                            </h3>\r\n                        </li>\r\n                        <li>\r\n                            <!--#control_Modal-->\r\n                            <a href=\"admin-panel.html\">\r\n                                <img src=\"/assets/images/settings/Job-postings.png\" class=\"icon-img\" />\r\n                                <span>\r\n                                    <label>\r\n                                        Admin Panel\r\n                                    </label>\r\n                                </span>\r\n                            </a>\r\n\r\n                        </li>\r\n                        <li class=\"active\">\r\n                            <!--#control_Modal-->\r\n                            <a href=\"admin-input-master.html\">\r\n                                <img src=\"/assets/images/settings/Job-postings.png\" class=\"icon-img\" />\r\n                                <span>\r\n                                    <label>\r\n                                        Input Master\r\n                                    </label>\r\n                                </span>\r\n                            </a>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" data-toggle=\"modal\" data-target=\"#list_Modal\">\r\n                                <img src=\"/assets/images/settings/Job-postings.png\" class=\"icon-img\" />\r\n                                <span>\r\n                                    <label>\r\n                                        List Master\r\n                                    </label>\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" data-toggle=\"modal\" data-target=\"#grid_Modal\">\r\n                                <img src=\"/assets/images/settings/Job-postings.png\" class=\"icon-img\" />\r\n                                <span>\r\n                                    <label>\r\n                                        Grid Master\r\n                                    </label>\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content_wrap right\">\r\n            <header class=\"frame_header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"navbar-header\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text_center mob_head\">\r\n                        <h1>\r\n                            <label>\r\n                                Framework\r\n                            </label>\r\n                        </h1>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                        <span>\r\n                                            <label>\r\n                                                John Smith\r\n                                            </label>\r\n                                        </span> <b class=\"caret\"></b>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu animated fadeInUpShort\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\">\r\n                                                <label>\r\n                                                    View Profile\r\n                                                </label>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\">\r\n                                                <label>\r\n                                                    Logout\r\n                                                </label>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                       role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-language\"\r\n                                           aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right animated fadeInUpShort\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\">\r\n                                                <label>\r\n                                                    English\r\n                                                </label>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\">\r\n                                                <label>\r\n                                                    Gujarati\r\n                                                </label>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                       role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\">\r\n                                        </i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu notify-drop animated fadeInUpShort\">\r\n                                        <div class=\"notify-drop-title\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                                                    <label>\r\n                                                        Hiren (<b>2</b>)\r\n                                                    </label>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\">\r\n                                                    <a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a>\r\n                                                </div>\r\n                                                <div class=\"clearfix\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"drop-content\">\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n                                                    <div class=\"notify-img\">\r\n                                                        <img src=\"/assets/images/on-boarding/notification-img.png\" alt=\"\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\">\r\n                                                        <label>\r\n                                                            Ahmet\r\n                                                        </label>\r\n                                                    </a><p>\r\n                                                        <label>\r\n                                                            Lorem ipsum sit dolor amet consilium. Saat önce\r\n                                                        </label>\r\n                                                    </p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\">\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n                                                    <div class=\"notify-img\">\r\n                                                        <img src=\"/assets/images/on-boarding/notification-img.png\" alt=\"\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\">\r\n                                                        <label>\r\n                                                            Ahmet\r\n                                                        </label>\r\n                                                    </a><p>\r\n                                                        <label>\r\n                                                            Lorem ipsum sit dolor amet consilium. Saat önce\r\n                                                        </label>\r\n                                                    </p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\">\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n                                                    <div class=\"notify-img\">\r\n                                                        <img src=\"/assets/images/on-boarding/notification-img.png\" alt=\"\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\">\r\n                                                        <label>\r\n                                                            Ahmet\r\n                                                        </label>\r\n                                                    </a><p>\r\n                                                        <label>\r\n                                                            Lorem ipsum sit dolor amet consilium. Saat önce\r\n                                                        </label>\r\n                                                    </p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\">\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n                                                    <div class=\"notify-img\">\r\n                                                        <img src=\"/assets/images/on-boarding/notification-img.png\" alt=\"\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\">\r\n                                                        <label>\r\n                                                            Ahmet\r\n                                                        </label>\r\n                                                    </a><p>\r\n                                                        <label>\r\n                                                            Lorem ipsum sit dolor amet consilium. Saat önce\r\n                                                        </label>\r\n                                                    </p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\">\r\n                                                </div>\r\n                                            </li>\r\n                                        </div>\r\n                                        <div class=\"notify-drop-footer text-center\">\r\n                                            <a href=\"\">\r\n                                                <i class=\"fa fa-eye\"></i>\r\n                                                <label>\r\n                                                    View All\r\n                                                </label>\r\n                                            </a>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </header>\r\n            <div class=\"container-fluid bgwhite\">\r\n                <!-- Modal -->\r\n                <div class=\"modal fade control_mdl\" id=\"control_Modal\" role=\"dialog\">\r\n                    <div class=\"modal-dialog\">\r\n                        <!-- Modal content-->\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal_tabs add_div\">\r\n                                <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">\r\n                                        &times;\r\n                                    </button>\r\n                                    <h4>\r\n                                        <label class=\"no_style\">\r\n                                            1\r\n                                        </label><label class=\"modal-title\">\r\n                                            Add Div Container\r\n                                        </label>\r\n                                    </h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"div_hdr row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <h4>\r\n                                                <label>\r\n                                                    Select div colum structure\r\n                                                </label>\r\n                                            </h4>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row col_outer\">\r\n                                        <div class=\"col-md-3 col-sm-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/col-1.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        col-md-12\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col1\" name=\"radio-group\" checked>\r\n                                                <label for=\"col1\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-sm-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/col-2.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        col-md-6\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col2\" name=\"radio-group\" checked>\r\n                                                <label for=\"col2\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-sm-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/col-3.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        col-md-4\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col3\" name=\"radio-group\" checked>\r\n                                                <label for=\"col3\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-sm-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/col-4.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        col-md-3\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col4\" name=\"radio-group\" checked>\r\n                                                <label for=\"col4\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer modal_btn\">\r\n                                    <button type=\"button\" class=\"btn nx_btn\">\r\n                                        <label>\r\n                                            Next\r\n                                        </label>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn sv_btn\">\r\n                                        <label>\r\n                                            Save\r\n                                        </label>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal_tabs add_label\">\r\n                                <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">\r\n                                        &times;\r\n                                    </button>\r\n                                    <h4>\r\n                                        <label class=\"no_style\">\r\n                                            2\r\n                                        </label><label class=\"modal-title\">Add Label</label>\r\n                                    </h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"div_hdr row\">\r\n                                        <div class=\"col-md-6 col-xs-12\">\r\n                                            <h4>\r\n                                                <label>\r\n                                                    Would You Like to Add label?\r\n                                                </label>\r\n                                            </h4>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-xs-12 tgl_switch\">\r\n                                            <input type=\"checkbox\" class=\"tgl\" id=\"lbl_tgl\" />\r\n                                            <label for=\"lbl_tgl\">\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row col_outer hide_lbl_cntrl\">\r\n                                        <div class=\"col-md-4 lbl_cntrl\">\r\n                                            <label class=\"lbl_hdr\">\r\n                                                Label ID\r\n                                            </label>\r\n                                            <input class=\"cmn_input\" type=\"text\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4 lbl_cntrl\">\r\n                                            <label class=\"lbl_hdr\">\r\n                                                Label Name\r\n                                            </label>\r\n                                            <input class=\"cmn_input\" type=\"text\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4 lbl_cntrl\">\r\n                                            <label class=\"lbl_hdr\">\r\n                                                Label Class\r\n                                            </label>\r\n                                            <input class=\"cmn_input\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer modal_btn\">\r\n                                    <button type=\"button\" class=\"btn nx_btn hide_nxt\">\r\n                                        <label>\r\n                                            Next\r\n                                        </label>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn nx_btn hide_skip\">\r\n                                        <label>\r\n                                            Skip\r\n                                        </label>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn sv_btn\">\r\n                                        <label>\r\n                                            Save\r\n                                        </label>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal_tabs add_control\">\r\n                                <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">\r\n                                        &times;\r\n                                    </button>\r\n                                    <h4>\r\n                                        <label class=\"no_style\">\r\n                                            3\r\n                                        </label><label class=\"modal-title\">Add Controls</label>\r\n                                    </h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"div_hdr row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <h4>\r\n                                                <label>\r\n                                                    Select Control\r\n                                                </label>\r\n                                            </h4>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row col_outer\">\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/txt-bx.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Input(Text)\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col5\" name=\"radio-group\" checked>\r\n                                                <label for=\"col5\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/lbl-txt-bx.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Input(Text) With Label\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col6\" name=\"radio-group\" checked>\r\n                                                <label for=\"col6\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/password.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Input(Password)\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col7\" name=\"radio-group\" checked>\r\n                                                <label for=\"col7\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/time-pkr.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        TimePicker\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col8\" name=\"radio-group\" checked>\r\n                                                <label for=\"col8\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row col_outer\">\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/chkbx.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Input(Checkbox)\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col9\" name=\"radio-group\" checked>\r\n                                                <label for=\"col9\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/radio.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Input(Radio)\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col10\" name=\"radio-group\" checked>\r\n                                                <label for=\"col10\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/button.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Input(Button)\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col11\" name=\"radio-group\" checked>\r\n                                                <label for=\"col11\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/switch.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Toggle Switch\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col12\" name=\"radio-group\" checked>\r\n                                                <label for=\"col12\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row col_outer\">\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/select-option.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Select\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col13\" name=\"radio-group\" checked>\r\n                                                <label for=\"col13\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/select-chkbx.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Select(With Checkbox)\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col14\" name=\"radio-group\" checked>\r\n                                                <label for=\"col14\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 col-xs-12 select_col last_brd\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"/assets/images/crt-controls/date-pkr.png\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\">\r\n                                                    <label>\r\n                                                        Date Picker\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"col15\" name=\"radio-group\" checked>\r\n                                                <label for=\"col15\">\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row col_outer cntrl_info\">\r\n                                        <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                            <label class=\"lbl_hdr\">\r\n                                                Control Id\r\n                                            </label>\r\n                                            <input class=\"cmn_input\" type=\"text\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                            <label class=\"lbl_hdr\">\r\n                                                Control Value\r\n                                            </label>\r\n                                            <input class=\"cmn_input\" type=\"text\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                            <label class=\"lbl_hdr\">\r\n                                                Control Placeholder\r\n                                            </label>\r\n                                            <input class=\"cmn_input\" type=\"text\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4 col-xs-12 custom_chk_bx\">\r\n                                            <div class=\"chk_bx chk_top\">\r\n                                                <input type=\"checkbox\" id=\"vldtn_btn\">\r\n                                                <label for=\"vldtn_btn\">\r\n                                                    Validation Required\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4 col-xs-12 hide_lbl\">\r\n                                            <label class=\"lbl_hdr\">\r\n                                                Validation Message\r\n                                            </label>\r\n                                            <input class=\"cmn_input\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer modal_btn\">\r\n                                    <button type=\"button\" class=\"btn sv_btn\">\r\n                                        <label>\r\n                                            Save\r\n                                        </label>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Modal -->\r\n\r\n\r\n\r\n                <div class=\"modal fade\" id=\"list_Modal\" role=\"dialog\">\r\n                    <div class=\"modal-dialog\">\r\n                        <!-- Modal content-->\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">\r\n                                    &times;\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <h4>\r\n                                            <label>\r\n                                                Comming Soon\r\n                                            </label>\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Modal -->\r\n                \r\n                <div class=\"modal fade\" id=\"grid_Modal\" role=\"dialog\">\r\n                    <div class=\"modal-dialog\">\r\n                        <!-- Modal content-->\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">\r\n                                    &times;\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <h4>\r\n                                            <label>\r\n                                                Comming Soon\r\n                                            </label>\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row page_header\">\r\n                    <div class=\"col-xs-6\">\r\n                        <h2 class=\"head\">\r\n                            <label>\r\n                                On Boarding\r\n                            </label>\r\n                        </h2>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <img src=\"/assets/images/on-boarding/onbrd-icon.png\" class=\"icon-img pull-right\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row page_content\">\r\n                    <div class=\"framework1 container-fluid\">\r\n                        <div class=\"detail_wrapper\">\r\n                            <div class=\"detail_nav_menu\">\r\n                                <div class=\"company_details\">\r\n                                        \r\n                                   \r\n                                    <div class=\"row ngx-dnd-container\" ngxDroppable>\r\n                                            <form>\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable> \r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"clone\" (click)=\"cloneElement(0)\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"edit_btn\" (click)=\"editElement('fg')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0)\"\r\n                                                       ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            \r\n                                            <input class=\"cmn_input\" [placeholder]=\"pholder0\" [value]=\"str0\" [id]=\"strid0\" required=\"true\">\r\n                                    \r\n                                        </div>\r\n                                                                           \r\n                                            <div *ngFor=\"let tb of Textboxes\">\r\n                                                    <div *ngIf=\"showTextBox && tb!==undefined\">\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDroppable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"clone\" (click)=\"cloneElement(tb.idx)\">\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"edit_btn\" (click)=\"editElement(tb.idx)\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx)\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx)\"\r\n                                                           ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                \r\n                                                <input class=\"cmn_input\" [placeholder]=\"tb.pholder\" [value]=\"tb.value\" [id]=\"tb.id\">\r\n                                        \r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n<div>\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"clone\" (click)=\"cloneElement(0,'CHA')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\"> \r\n                                                    <a class=\"edit_btn\" \r\n                                                    (click)=\"editElement('fg','CHA')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'CHA')\"\r\n                                                    ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp1\">\r\n                                            <textarea [id]=\"strid0_CHA\" class=\"cmn_input\" [placeholder]=\"pholder0_CHA\" [value]=\"str0_CHA\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n</div>\r\n                                            <div *ngFor = \"let tb of Textboxes_CHA\">\r\n                                                <div *ngIf=\"showTextBox_CHA && tb!==undefined\" >\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a (click)=\"cloneElement(tb.idx,'CHA')\" class=\"clone\">\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"edit_btn\"\r\n                                                           (click)=\"editElement(tb.idx,'CHA')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx,'CHA')\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx,'CHA')\"\r\n                                                           ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div id=\"comp1\">\r\n                                                <textarea [id]=\"tb.id\" class=\"cmn_input\" [placeholder]=\"tb.pholder\" [value]=\"tb.value\"></textarea>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"clone\" (click)=\"cloneElement(0,'CEO')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"editElement('fg','CEO')\"\r\n                                                    data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'CEO')\"\r\n                                                       ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp2\">\r\n                                            <input class=\"cmn_input\" [placeholder]=\"pholder0_CEO\" [id]=\"strid0_CEO\" [value]=\"str0_CEO\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"showTextBox_CEO\" >\r\n                                                <div *ngFor = \"let tb of Textboxes_CEO\">\r\n                                                    <div *ngIf=\"tb!==undefined\"> \r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                                    <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                        <span class=\"actions\">\r\n                                                            <a (click)=\"cloneElement(tb.idx,'CEO')\" class=\"clone\">\r\n                                                                <i class=\"fa fa-clone\">\r\n                                                                </i><span class=\"tooltip\">Clone</span>\r\n                                                            </a>\r\n                                                        </span> <span class=\"actions\">\r\n                                                            <a class=\"edit_btn\"\r\n                                                               (click)=\"editElement(tb.idx,'CEO')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                        </span>\r\n                                                        <span class=\"actions\">\r\n                                                            <a class=\"delel\" (click)=\"delElement(tb.idx,'CEO')\">\r\n                                                                <i class=\"fa fa-trash-o\">\r\n                                                                </i><span class=\"tooltip\">Delete</span>\r\n                                                            </a>\r\n                                                        </span> <span class=\"actions\">\r\n                                                            <a class=\"\" (click)=\"resetElement(tb.idx,'CEO')\"\r\n                                                               ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                    <div id=\"comp1\">\r\n                                                    <textarea [id]=\"tb.id\" class=\"cmn_input\" [placeholder]=\"tb.pholder\" [value]=\"tb.value\"></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"clone\" (click)=\"cloneElement(0,'city')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"editElement('fg','city')\"  data-target=\"#input_control_Modal\" data-toggle=\"modal\"\r\n                                                       ><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\" >\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'city')\"\r\n                                                       ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp3\">\r\n                                            <input class=\"cmn_input\" [placeholder]=\"pholder0_city\" [id]=\"strid0_city\" [value]=\"str0_city\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"showTextBox_city\" >\r\n                                                <div *ngFor = \"let tb of Textboxes_city\">\r\n                                                    <div *ngIf=\"tb!==undefined\"> \r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                                    <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                        <span class=\"actions\">\r\n                                                            <a (click)=\"cloneElement(tb.idx,'city')\" class=\"clone\">\r\n                                                                <i class=\"fa fa-clone\">\r\n                                                                </i><span class=\"tooltip\">Clone</span>\r\n                                                            </a>\r\n                                                        </span> <span class=\"actions\">\r\n                                                            <a class=\"edit_btn\"\r\n                                                               (click)=\"editElement(tb.idx,'city')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                        </span>\r\n                                                        <span class=\"actions\">\r\n                                                            <a class=\"delel\" (click)=\"delElement(tb.idx,'city')\">\r\n                                                                <i class=\"fa fa-trash-o\">\r\n                                                                </i><span class=\"tooltip\">Delete</span>\r\n                                                            </a>\r\n                                                        </span> <span class=\"actions\">\r\n                                                            <a class=\"\" (click)=\"resetElement(tb.idx,'city')\"\r\n                                                               ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                    <div id=\"comp1\">\r\n                                                            <input class=\"cmn_input\" [placeholder]=\"tb.pholder\" [id]=\"tb.id\" [value]=\"tb.value\">\r\n                                                        </div>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n\r\n\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 selectdiv element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"clone\" (click)=\"cloneElement(0,'aob')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"editElement('fg','aob')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"\r\n                                                       ><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\" >\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'aob')\"\r\n                                                    ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp4\">\r\n                                            <label>\r\n                                                <select class=\"cmn_input\" [id]=\"strid0_aob\">\r\n                                                    <option *ngFor=\"let aob of aob0\"  [ngValue]=\"aob\">{{aob}}</option>\r\n                                                </select>\r\n                                            </label>\r\n                                            </div>\r\n                                        </div>\r\n                                                    <div *ngIf=\"showTextBox_aob\" >\r\n                                                <div *ngFor = \"let tb of Textboxes_aob\">\r\n                                                    <div *ngIf=\"tb!==undefined\"> \r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                                    <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                        <span class=\"actions\">\r\n                                                            <a (click)=\"cloneElement(tb.idx,'aob')\" class=\"clone\">\r\n                                                                <i class=\"fa fa-clone\">\r\n                                                                </i><span class=\"tooltip\">Clone</span>\r\n                                                            </a>\r\n                                                        </span> <span class=\"actions\">\r\n                                                            <a class=\"edit_btn\"\r\n                                                               (click)=\"editElement(tb.idx,'aob')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                        </span>\r\n                                                        <span class=\"actions\">\r\n                                                            <a class=\"delel\" (click)=\"delElement(tb.idx,'aob')\">\r\n                                                                <i class=\"fa fa-trash-o\">\r\n                                                                </i><span class=\"tooltip\">Delete</span>\r\n                                                            </a>\r\n                                                        </span> <span class=\"actions\">\r\n                                                            <a class=\"\" (click)=\"resetElement(tb.idx,'aob')\"\r\n                                                        ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                    <div id=\"comp1\">\r\n                                                            <label>\r\n                                                                    <select class=\"cmn_input\" [id]=\"tb.id\">\r\n                                                                        <option *ngFor=\"let aob of tb.values\"  [ngValue]=\"aob\">{{aob}}</option>\r\n                                                                    </select>\r\n                                                                </label>                                                        </div>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n                                                    </div>\r\n\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 selectdiv element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"clone\" (click)=\"cloneElement(0,'state')\">\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"editElement('fg','state')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"\r\n                                                           ><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(0,'state')\"\r\n                                                        ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div id=\"comp4\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\" [id]=\"strid0_state\">\r\n                                                        <option *ngFor=\"let aob of str0_state\"  [ngValue]=\"aob\">{{aob}}</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                       \r\n                                        <div *ngIf=\"showTextBox_state\">\r\n                                            <div *ngFor=\"let tb of Textboxes_state\">\r\n                                                <div *ngIf=\"tb!==undefined\">  \r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 selectdiv element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"clone\" (click)=\"cloneElement(tb.idx,'state')\">\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a (click)=\"editElement(tb.idx,'state')\"\r\n                                                        data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx,'state')\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx,'state')\"\r\n                                                           ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div id=\"comp5\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\" [id]=\"tb.id\">\r\n                                                        <option *ngFor=\"let state of tb.values\" [ngValue]=\"state\">{{state}}</option>\r\n                                \r\n                                                    </select>\r\n                                                </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 selectdiv element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"cloneElement(0,'noe')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a (click)=\"editElement('fg',noe)\"\r\n                                                    data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'noe')\"\r\n                                                       ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp6\">\r\n                                            <label>\r\n                                                <select class=\"cmn_input\" [id]=\"strid0_noe\">\r\n                                                    <option *ngFor=\"let data of str0_noe\" [ngValue]=\"data\">{{data}}</option>\r\n                                                </select>\r\n                                            </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"showTextBox_noe\">                                                \r\n                                        <div *ngFor=\"let tb of Textboxes_NOE\">\r\n                                            <div *ngIf=\"tb!==undefined\"> \r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 selectdiv element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"cloneElement(tb.idx,'noe')\">\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a (click)=\"editElement(tb.idx,'noe')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"\r\n                                                        ><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx,'noe')\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx,'noe')\"\r\n                                                           ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div id=\"comp6\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\" [id]=\"tb.id\">\r\n                                                        <option *ngFor=\"let data of tb.values\" [ngValue]=\"data\">{{data}}</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 selectdiv element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"cloneElement(0,'ctry')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\"\r\n                                                       (click)=\"editElement('fg','ctry')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'ctry')\"\r\n                                                ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp7\">\r\n                                            <label>\r\n                                                <select class=\"cmn_input\" [id]=\"strid0_ctry\">\r\n                                                    <option *ngFor=\"let country of str0_ctry\" [ngValue]=\"country\">{{country}}</option>\r\n                                                </select>\r\n                                            </label>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"showTextBox_ctry\" >\r\n                                            <div *ngFor=\"let tb of Textboxes_ctry\">\r\n                                                <div *ngIf=\"tb!==undefined\"> \r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 selectdiv element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"cloneElement(tb.idx,'ctry')\">\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"editElement(tb.idx,'ctry')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"\r\n                                                           ><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx,'ctry')\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx,'ctry')\"\r\n                                                           ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div id=\"comp7\">\r\n                                                        <label>\r\n                                                                <select class=\"cmn_input\" [id]=\"tb.id\">\r\n                                                                    <option *ngFor=\"let country of tb.values\" [ngValue]=\"country\">{{country}}</option>\r\n                                                                </select>\r\n                                                            </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    \r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 custom_chk_bx element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a (click)=\"cloneElement(0,'cbox')\" >\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"editElement('fg','cbox')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"\r\n                                                       ><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'cbox')\"\r\n                                                       ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp8\">\r\n                                            <span class=\"chk_bx\">\r\n                                                <input type=\"checkbox\" [id]=\"strid0_cbox[0]\" name=\"\" value=\"\">\r\n                                                <label [for]=\"strid\">\r\n                                                    {{str0_cbox[0]}}\r\n                                                </label>\r\n                                            </span><span class=\"chk_bx\">\r\n                                                <input type=\"checkbox\" [id]=\"strid0_cbox[1]\" name=\"\" value=\"\" checked=\"checked\">\r\n                                                <label [for]=\"Checkbox2\">\r\n                                                    {{str0_cbox[1]}}\r\n                                                </label>\r\n                                            </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"showTextBox_cbox\">\r\n                                        <div *ngFor=\"let tb of Textboxes_cbox\">\r\n                                            <div *ngIf=\"tb!==undefined\"> \r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 custom_chk_bx element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a (click)=\"cloneElement(tb.idx,'cbox')\" >\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"editElement(tb.idx,'cbox')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"\r\n                                                           ><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx,'cbox')\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx,'cbox')\"\r\n                                                           ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div id=\"comp8\">\r\n                                                <span class=\"chk_bx\">\r\n                                                    <input type=\"checkbox\" [id]=\"tb.ids[0]\" name=\"\" value=\"\">\r\n                                                    <label for=\"Checkbox1\">\r\n                                                        {{tb.values[0]}}\r\n                                                    </label>\r\n                                                </span><span class=\"chk_bx\">\r\n                                                    <input type=\"checkbox\" [id]=\"tb.ids[1]\" name=\"\" value=\"\" checked=\"checked\">\r\n                                                    <label for=\"Checkbox2\">\r\n                                                       {{tb.values[1]}}\r\n                                                    </label>\r\n                                                </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"clone\" (click)=\"cloneElement(0,'info')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a (click)=\"editElement('fg','info')\"\r\n                                                       data-target=\"#input_label_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'info')\"\r\n                                                    ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp9\">\r\n                                            <label [class]=\"lclass0_info\" [id]=\"lid0_info\">\r\n                                            {{lname0_info}}\r\n                                            </label>\r\n                                            <textarea [id]=\"strid0_info\" class=\"cmn_input\" [placeholder]=\"pholder0_info\" [value]=\"str0_info\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"showTextBox_info\">\r\n                                            <div *ngFor=\"let tb of Textboxes_info\">\r\n                                                <div *ngIf=\"tb!==undefined\"> \r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"clone\" (click)=\"cloneElement(tb.idx,'info')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a (click)=\"editElement(tb.idx,'info')\"\r\n                                                       data-target=\"#input_label_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\" (click)=\"delElement(tb.idx,'info')\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(tb.idx,'info')\"\r\n                                                    ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp9\">\r\n                                            <label [class]=\"tb.lclass\" [id]=\"tb.lid\">\r\n                                        {{tb.lname}}\r\n                                            </label>\r\n                                            <textarea [id]=\"tb.id\" class=\"cmn_input\" [placeholder]=\"tb.pholder\" [value]=\"tb.value\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"clearfix\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row social_sec\">\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"cloneElement(0,'twitter')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\"\r\n                                                       (click)=\"editElement('fg','twitter')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\" >\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a> \r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'twitter')\"\r\n                                                    ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            \r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                    <div class=\"social_icon twitter\">\r\n                                                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                    <input class=\"cmn_input\" [placeholder]=\"pholder0_tw\" [id]=\"strid0_tw\" [value]=\"str0_tw\">\r\n                                                </div>\r\n                                    \r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                        <div *ngIf=\"showTextBox_tw\">\r\n                                            <div *ngFor=\"let tb of Textboxes_tw\">\r\n                                                <div *ngIf=\"tb!==undefined\">\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a (click)=\"cloneElement(tb.idx,'twitter')\">\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a\r\n                                                          (click)= \"editElement(tb.idx,'twitter')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx,'twitter')\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx,'twitter')\"\r\n                                                           ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                        \r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                        <div class=\"social_icon twitter\">\r\n                                                            <i class=\"fa fa-twitter\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                        <input class=\"cmn_input\" [placeholder]=\"tb.pholder\" [id]=\"tb.id\" [value]=\"tb.value\">\r\n                                                    </div>\r\n                                                </div>\r\n                                        \r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"clone\" (click)=\"cloneElement(0,'fbook')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\" >Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\"\r\n                                                       (click)=\"editElement('fg','fbook')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'fbook')\"\r\n                                                       ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp11\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                    <div class=\"social_icon fb\">\r\n                                                        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                    <input class=\"cmn_input\" [placeholder]=\"pholder0_fb\" [value]=\"str0_fb\" [id]=\"strid0_fb\">\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"showTextBox_fb\" >\r\n                                            <div *ngFor=\"let tb of Textboxes_fb\">\r\n                                                <div *ngIf=\"tb!==undefined\"> \r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"clone\"  (click)=\"cloneElement(tb.idx,'fbook')\">\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\"\r\n                                                           (click)=\"editElement(tb.idx,'fbook')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx,'fbook')\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx,'fbook')\"\r\n                                                           ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                        <div class=\"social_icon fb\">\r\n                                                            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                        <input class=\"cmn_input\" [placeholder]=\"tb.pholder\" [id]='tb.id' [value]=\"tb.value\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"cloneElement(0,'linkedin')\">\r\n                                                        <i class=\"fa fa-clone\">\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\"\r\n                                                       (click)=\"editElement('fg','linkedin')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\" >\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'linkedin')\"\r\n                                                       ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp12\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                    <div class=\"social_icon linked_in\">\r\n                                                        <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                    <input class=\"cmn_input\" [placeholder]=\"pholder0_ll\" [id]='strid0_ll' [value]='str0_ll'>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"showTextBox_ll\">\r\n                                                <div *ngFor=\"let tb of Textboxes_ll\">\r\n                                                    <div *ngIf=\"tb!==undefined\">\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"cloneElement(tb.idx,'linkedin')\">\r\n                                                            <i class=\"fa fa-clone\">\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\"\r\n                                                           (click)=\"editElement(tb.idx,'linkedin')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx,'linkedin')\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx,'linkedin')\"\r\n                                                ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div id=\"comp12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                        <div class=\"social_icon linked_in\">\r\n                                                            <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                        <input class=\"cmn_input\" [placeholder]=\"tb.pholder\" [id]=\"tb.id\" [value]='tb.value'>\r\n                                                    </div>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"cloneElement(0,'gplus')\">\r\n                                                        <i class=\"fa fa-clone\" >\r\n                                                        </i><span class=\"tooltip\">Clone</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\"\r\n                                                       (click)=\"editElement('fg','gplus')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                </span>\r\n                                                <span class=\"actions\">\r\n                                                    <a class=\"delel\">\r\n                                                        <i class=\"fa fa-trash-o\">\r\n                                                        </i><span class=\"tooltip\">Delete</span>\r\n                                                    </a>\r\n                                                </span> <span class=\"actions\">\r\n                                                    <a class=\"\" (click)=\"resetElement(0,'gplus')\"\r\n                                                       ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div id=\"comp13\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                    <div class=\"social_icon g__plus\">\r\n                                                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                    <input class=\"cmn_input\" [placeholder]=\"pholder0_gp\" [id]=\"strid0_gp\" [value]=\"str0_gp\">\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"showTextBox_gplus\">\r\n                                            <div *ngFor=\"let tb of Textboxes_gplus\">\r\n                                                <div *ngIf=\"tn!==undefined\"> \r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 element_box ngx-dnd-item\" ngxDraggable>\r\n                                                <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"cloneElement(tb.idx,'gplus')\">\r\n                                                            <i class=\"fa fa-clone\" >\r\n                                                            </i><span class=\"tooltip\">Clone</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\"\r\n                                                           (click)=\"editElement(tb.idx,'gplus')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                                    </span>\r\n                                                    <span class=\"actions\">\r\n                                                        <a class=\"delel\" (click)=\"delElement(tb.idx,'gplus')\">\r\n                                                            <i class=\"fa fa-trash-o\">\r\n                                                            </i><span class=\"tooltip\">Delete</span>\r\n                                                        </a>\r\n                                                    </span> <span class=\"actions\">\r\n                                                        <a class=\"\" (click)=\"resetElement(tb.idx,'gplus')\"\r\n                                                        ><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div id=\"comp13\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                        <div class=\"social_icon g__plus\">\r\n                                                            <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                        <input class=\"cmn_input\" [placeholder]=\"tb.pholder\" [id]=\"tb.id\" [value]=\"tb.value\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        <div class=\"clearfix\">\r\n                                        </div>\r\n                                    </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    <div class=\"detail_btn frmwrk_btn\">\r\n                                        <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n                                            <span class=\"actions\">\r\n                                                <a class=\"\" href=\"javascript:void(0);\">\r\n                                                    <i class=\"fa fa-clone\">\r\n                                                    </i><span class=\"tooltip\">Clone</span>\r\n                                                </a>\r\n                                            </span> <span class=\"actions\">\r\n                                                <a class=\"\"\r\n                                                   href=\"javascript:void(0);\"><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n                                            </span>\r\n                                            <span class=\"actions\">\r\n                                                <a class=\"delel\">\r\n                                                    <i class=\"fa fa-trash-o\">\r\n                                                    </i><span class=\"tooltip\">Delete</span>\r\n                                                </a>\r\n                                            </span> <span class=\"actions\">\r\n                                                <a class=\"\"\r\n                                                   href=\"javascript:void(0);\"><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n                                            </span>\r\n                                        </div>\r\n                                        \r\n                                        <button type=\"button\" class=\"btn save_btn\" (click)=\"saveClick()\">\r\n                                            <label>\r\n                                                Save\r\n                                            </label>\r\n                                        </button>\r\n                                        <button type=\"submit\" class=\"btn tab_no next_btn\">\r\n                                            <label>\r\n                                                Next\r\n                                            </label>\r\n                                        </button>\r\n                                    \r\n                                    </div>\r\n                                \r\n                                </div>\r\n                                            </form>    \r\n                                </div>\r\n                        </div>\r\n\r\n                        <!-- control Modal -->\r\n                <div class=\"modal fade control_mdl\" id=\"input_control_Modal\" role=\"dialog\">\r\n                        <div class=\"modal-dialog\">\r\n                            <!-- Modal content-->\r\n                            <div class=\"modal-content\">\r\n                                \r\n                                <div class=\"modal_tabs add_control\">\r\n                                    <div class=\"modal-header\"> \r\n                                        <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">\r\n                                            &times;\r\n                                        </button>\r\n                                        <h4>\r\n                                            <label class=\"modal-title\">Edit Control</label>\r\n                                        </h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        \r\n                                        <div class=\"row col_outer cntrl_info\">\r\n                                                <div class=\"col-md-4 col-xs-12 lbl_cntrl\" style=\"display:none\">\r\n                                                        <label class=\"lbl_hdr\">\r\n                                                            Control Parent ID\r\n                                                        </label>\r\n                                                        <input class=\"cmn_input\" type=\"text\" #ctpar>\r\n                                                    </div>\r\n                                            <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                                <label class=\"lbl_hdr\">\r\n                                                    Control Id\r\n                                                </label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #ctid>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                                <label class=\"lbl_hdr\">\r\n                                                    Control Value\r\n                                                </label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #ctval>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                                <label class=\"lbl_hdr\">\r\n                                                    Control Placeholder\r\n                                                </label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #ctph>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-xs-12 custom_chk_bx\">\r\n                                                <div class=\"chk_bx chk_top\">\r\n                                                    <input type=\"checkbox\" id=\"vldtn_btn1\" #ctvbx (click)=\"filterData()\">\r\n                                                    <label for=\"vldtn_btn1\">\r\n                                                        Validation Required\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-xs-12 hide_lbl\">\r\n                                                <label class=\"lbl_hdr\">\r\n                                                    Validation Message\r\n                                                </label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #ctvmsg>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"modal-footer modal_btn\">\r\n                                        <button type=\"button\" class=\"btn sv_btn\" (click)=\"saveCntrl(ctpar.value,ctid.value,ctval.value,ctph.value,ctvbx.value,ctvmsg.value)\">\r\n                                            <label>\r\n                                                Save\r\n                                            </label>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                 <!-- label Modal -->\r\n                 \r\n                 <div class=\"modal fade control_mdl\" id=\"input_label_Modal\" role=\"dialog\">\r\n                        <div class=\"modal-dialog\">\r\n                            <!-- Modal content-->\r\n                            <div class=\"modal-content\">\r\n                                \r\n                                <div class=\"modal_tabs add_label\">\r\n                                    <div class=\"modal-header\">\r\n                                        <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">&times;</button>\r\n                                        <h4><label class=\"modal-title\">Edit Label</label></h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        \r\n                                        <div class=\"row col_outer\">\r\n                                            <div class=\"col-md-4 lbl_cntrl\">\r\n                                                <label class=\"lbl_hdr\" >Label ID</label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #labelid>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 lbl_cntrl\">\r\n                                                <label class=\"lbl_hdr\" >Label Name</label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #labelnm>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 lbl_cntrl\">\r\n                                                <label class=\"lbl_hdr\" >Label Class</label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #labelclass>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"modal-footer modal_btn\">\r\n                                        <button type=\"button\" class=\"btn nx_btn\" (click)=\"saveLabel(labelid.value,labelnm.value,labelclass.value)\"><label>Next</label></button>\r\n                                       \r\n                                        <!-- <button type=\"button\" class=\"btn sv_btn\"><label>Save</label></button> -->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal_tabs add_control\">\r\n                                    <div class=\"modal-header\">\r\n                                        <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">&times;</button>\r\n                                        <h4><label class=\"modal-title\">Edit Controls</label></h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <div class=\"div_hdr row\">\r\n                                            <div class=\"col-md-12\"> <h4><label>Select Control</label></h4></div>\r\n                                        </div>\r\n                                        \r\n                                        <div class=\"row col_outer cntrl_info\">\r\n                                                <div class=\"col-md-4 col-xs-12 lbl_cntrl\" style=\"display:none\">\r\n                                                        <label class=\"lbl_hdr\" >Parent Control Id</label>\r\n                                                        <input id=\"cntrl_parent\" type=\"text\" #cntrlpar>\r\n                                                    </div>\r\n                                            <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                                <label class=\"lbl_hdr\" >Control Id</label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #cntrlid >\r\n                                            </div>\r\n\r\n                                            <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                                <label class=\"lbl_hdr\" >Control Value</label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #cntrlval>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                                <label class=\"lbl_hdr\" >Control Placeholder</label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #cntrlph>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-md-4 col-xs-12 custom_chk_bx\">\r\n                                                <div class=\"chk_bx chk_top\">\r\n                                                    <input type=\"checkbox\" id=\"vldtn_btn1\" (click)=\"filterData()\" #valreq>\r\n                                                    <label for=\"vldtn_btn1\">Validation Required</label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-xs-12 hide_lbl\">\r\n                                                <label class=\"lbl_hdr\">Validation Message</label>\r\n                                                <input class=\"cmn_input\" type=\"text\" #valmsg>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"modal-footer modal_btn\">\r\n\r\n                                        <button type=\"button\" class=\"btn sv_btn\" (click)=\"saveCntrl(cntrlpar.value,cntrlid.value,cntrlval.value,cntrlph.value,valreq.value,valmsg.value)\"><label>Save</label></button>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                <footer class=\"text_center\">\r\n                    <h4>\r\n                        <label>\r\n                            © 2017 Kleveron. A venture of <a href=\"#\">SRKay </a>Consulting Group LLP. All Rights\r\n                            Reserved.\r\n                        </label>\r\n                    </h4>\r\n                </footer>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n            </div>\r\n        </div>\r\n        <div class=\"clearfix\">\r\n        </div>\r\n    </div>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/headers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return options; });

var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]();
// let url = 'http://localhost:8081/auth/v1/ldap-login';
var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');
options.headers = headers;
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>',
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_settings_settings_component__ = __webpack_require__("../../../../../src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_dynamic_component__ = __webpack_require__("../../../../ng-dynamic-component/dist/bundles/ng-dynamic-component.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_settings_tabs_tab2_component__ = __webpack_require__("../../../../../src/app/dashboard/settings/tabs/tab2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_settings_tabs_tab3_component__ = __webpack_require__("../../../../../src/app/dashboard/settings/tabs/tab3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_tabs_dashtab_component__ = __webpack_require__("../../../../../src/app/dashboard/tabs/dashtab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngui_datetime_picker__ = __webpack_require__("../../../../@ngui/datetime-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngui_datetime_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__ngui_datetime_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_settings_settingsmenu_component__ = __webpack_require__("../../../../../src/app/dashboard/settings/settingsmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_dashboardmenu_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboardmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__config_configmenu_component__ = __webpack_require__("../../../../../src/app/config/configmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__config_tabs_configtab2_component__ = __webpack_require__("../../../../../src/app/config/tabs/configtab2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__config_tabs_configtab1_component__ = __webpack_require__("../../../../../src/app/config/tabs/configtab1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__createPage_createPage_component__ = __webpack_require__("../../../../../src/app/createPage/createPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__createPage_createPage_service__ = __webpack_require__("../../../../../src/app/createPage/createPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_tag_input__ = __webpack_require__("../../../../angular2-tag-input/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__createPage_Datepicker_component__ = __webpack_require__("../../../../../src/app/createPage/Datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__createPage_keep_html_pipe__ = __webpack_require__("../../../../../src/app/createPage/keep-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__admin_admin_on_board_component__ = __webpack_require__("../../../../../src/app/admin/admin-on-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__createPage_templatecheck_component__ = __webpack_require__("../../../../../src/app/createPage/templatecheck.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__createPage_keep_js_pipe__ = __webpack_require__("../../../../../src/app/createPage/keep-js.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__createPage_textbox_component__ = __webpack_require__("../../../../../src/app/createPage/textbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__swimlane_ngx_dnd__ = __webpack_require__("../../../../@swimlane/ngx-dnd/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__swimlane_ngx_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36__swimlane_ngx_dnd__);
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    {
        path: 'createPageMenu', component: __WEBPACK_IMPORTED_MODULE_22__createPage_createPage_component__["a" /* CreatePageMenuComponent */],
    },
    {
        path: 'configs', component: __WEBPACK_IMPORTED_MODULE_19__config_configmenu_component__["a" /* ConfigMenuComponent */],
        children: [
            { path: 'config1', component: __WEBPACK_IMPORTED_MODULE_21__config_tabs_configtab1_component__["a" /* ConfigTab1Component */] },
            { path: 'config2', component: __WEBPACK_IMPORTED_MODULE_20__config_tabs_configtab2_component__["a" /* ConfigTab2Component */] },
        ]
    },
    {
        path: 'dash', component: __WEBPACK_IMPORTED_MODULE_18__dashboard_dashboardmenu_component__["a" /* DashMenuComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'dashtab', component: __WEBPACK_IMPORTED_MODULE_11__dashboard_tabs_dashtab_component__["a" /* DashTabComponent */] },
        ]
    },
    {
        path: 'settingsmenu', component: __WEBPACK_IMPORTED_MODULE_17__dashboard_settings_settingsmenu_component__["a" /* SettingsMenuComponent */],
        children: [
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_settings_settings_component__["a" /* SettingsComponent */] },
            { path: 'settingstab2', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_settings_tabs_tab2_component__["a" /* TabTwoComponent */] },
            { path: 'settingstab3', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_settings_tabs_tab3_component__["a" /* TabThreeComponent */] },
        ]
    },
    { path: 'adminInputMaster', component: __WEBPACK_IMPORTED_MODULE_30__admin_admin_on_board_component__["a" /* AdminInputMaster */] },
    { path: 'appcheck', component: __WEBPACK_IMPORTED_MODULE_31__createPage_templatecheck_component__["a" /* AppCheck */] },
];
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'http://localhost:3000/lang/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_settings_tabs_tab2_component__["a" /* TabTwoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_settings_tabs_tab3_component__["a" /* TabThreeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_tabs_dashtab_component__["a" /* DashTabComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_settings_settingsmenu_component__["a" /* SettingsMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__dashboard_dashboardmenu_component__["a" /* DashMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_19__config_configmenu_component__["a" /* ConfigMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_21__config_tabs_configtab1_component__["a" /* ConfigTab1Component */],
            __WEBPACK_IMPORTED_MODULE_22__createPage_createPage_component__["a" /* CreatePageMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_20__config_tabs_configtab2_component__["a" /* ConfigTab2Component */],
            __WEBPACK_IMPORTED_MODULE_28__createPage_Datepicker_component__["a" /* NgbdDatepickerPopup */],
            __WEBPACK_IMPORTED_MODULE_29__createPage_keep_html_pipe__["a" /* EscapeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_30__admin_admin_on_board_component__["a" /* AdminInputMaster */],
            __WEBPACK_IMPORTED_MODULE_31__createPage_templatecheck_component__["a" /* AppCheck */],
            __WEBPACK_IMPORTED_MODULE_34__createPage_keep_js_pipe__["a" /* EscapeJSPipe */],
            __WEBPACK_IMPORTED_MODULE_35__createPage_textbox_component__["a" /* TextboxComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_36__swimlane_ngx_dnd__["NgxDnDModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng_dynamic_component__["a" /* DynamicModule */].withComponents([__WEBPACK_IMPORTED_MODULE_35__createPage_textbox_component__["a" /* TextboxComponent */]]),
            __WEBPACK_IMPORTED_MODULE_15__ngui_datetime_picker__["NguiDatetimePickerModule"],
            __WEBPACK_IMPORTED_MODULE_26__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_25_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_27_angular2_tag_input__["RlTagInputModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap__["b" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClient */]]
                }
            })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_36__swimlane_ngx_dnd__["NgxDnDModule"]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_24__createPage_createPage_service__["a" /* CssClassForDivsService */], __WEBPACK_IMPORTED_MODULE_32__auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_33__login_login_service__["a" /* LoginService */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_28__createPage_Datepicker_component__["a" /* NgbdDatepickerPopup */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthGuardService = (function () {
    //public userName;
    function AuthGuardService() {
        this.isUserLoggedIn = false;
    }
    AuthGuardService.prototype.setUserLoggedin = function () {
        this.isUserLoggedIn = true;
    };
    AuthGuardService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthGuardService);

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/config/configmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigMenuComponent = (function () {
    function ConfigMenuComponent(translate, router) {
        this.router = router;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
        });
    }
    ConfigMenuComponent.prototype.changeLang = function (lang) {
        console.log("lang", lang);
        localStorage.setItem("lang", lang);
    };
    return ConfigMenuComponent;
}());
ConfigMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'configmenu',
        template: __webpack_require__("../../../../../src/app/config/configmenu.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
], ConfigMenuComponent);

var _a, _b;
//# sourceMappingURL=configmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/config/configmenu.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n        <div class=\"aside left\">\r\n            <div class=\"dash_logo\">\r\n                <a href=\"#\"><img src=\"/assets/images/settings/logo_dashboard.png\" alt=\"kleveron\" /></a>\r\n            </div>\r\n            <div class=\"aside_nav\">\r\n                <div class=\"sidebar-menu\">\r\n                    <ul class=\"menu\">\r\n                        <li>\r\n                            <h3><label translate>Main</label></h3>\r\n                        </li>\r\n                        <li class=\"active\">\r\n                            <a routerLink=\"/settings\">\r\n                                <img src=\"/assets/images/settings/personal.png\" class=\"icon-img\" />\r\n                                <span><label translate>Personal</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/organisation.png\" class=\"icon-img\" />\r\n                                <span><label translate>Organisation</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/appearance.png\" class=\"icon-img\" />\r\n                                <span><label translate>Appearance</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/apps-nd-plugin.png\" class=\"icon-img\" />\r\n                                <span><label translate>Apps and Plugins</label></span>\r\n                                <!--<span class=\"fa fa-angle-right\" style=\"float: right; position: relative;\"></span>-->\r\n                            </a>\r\n                            <!--<ul id=\"menu-academico-sub\">\r\n                                <li id=\"menu-academico-avaliacoes\"><a href=\"404.html\">404</a></li>\r\n                                <li id=\"menu-academico-boletim\"><a href=\"blank.html\">Blank</a></li>\r\n                            </ul>-->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content_wrap right\">\r\n\r\n            <header class=\"frame_header\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"navbar-header\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text_center mob_head\">\r\n                        <h1><label translate>On Boarding</label></h1>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                        <span><label translate>John Smith</label></span>\r\n                                        <b class=\"caret\"></b>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm active\"><label translate>View Profile</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm active\"><label translate>Logout</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-language\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('en')\" class=\"view btn-sm\"><label translate>English</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('hindi')\" class=\"view btn-sm\"><label translate>Hindi</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu notify-drop\">\r\n                                        <div class=\"notify-drop-title\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6\"><label>{{'Hiren' | translate}} (<b>2</b>)</label></div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\"><a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a></div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"drop-content\">\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                        </div>\r\n                                        <div class=\"notify-drop-footer text-center\">\r\n                                            <a href=\"\"><i class=\"fa fa-eye\"></i> <label translate>View All</label></a>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </header>\r\n            <div class=\"container-fluid bgwhite\">\r\n                <div class=\"row page_header\">\r\n                    <div class=\"col-xs-6\">\r\n                        <h2 class=\"head\"><label translate>On Boarding</label></h2>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <img src=\"/assets/images/settings/personal.png\" class=\"icon-img pull-right\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row page_content admin_onboard\">\r\n                    <div class=\"onboarding_section container-fluid\">\r\n                        <div class=\"detail_wrapper\">\r\n                            <!-- -------------------------tabs --------------------------- -->\r\n                            <div id=\"detail_tabs\" class=\"detail_nav_menu\">\r\n                                <ul>\r\n                                    <li><a routerLink=\"/configs/config1\"><label translate><div class=\"tab_no\">1</div>Company Details</label></a></li>\r\n                                    <li><a routerLink=\"/configs/config2\"><label translate><div class=\"tab_no\">2</div>Admin Details</label></a></li>\r\n                                </ul>\r\n                               \r\n                                <router-outlet></router-outlet>\r\n                            </div>\r\n                            <!-- -------------------------end tabs --------------------------- -->\r\n                           \r\n    </div>\r\n\r\n    "

/***/ }),

/***/ "../../../../../src/app/config/tabs/configtab1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigTab1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigTab1Component = (function () {
    function ConfigTab1Component(translate, router, zone) {
        this.router = router;
        this.zone = zone;
        this.isNextClicked = false;
        this.checkedArr = new Array();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
        });
    }
    ConfigTab1Component.prototype.nextClicked = function (isClicked) {
        var _this = this;
        console.log(" nextClicked ", isClicked);
        localStorage.setItem("nextClick", isClicked);
        //   this.router.navigate(['/dash/dashtab']);
        console.log("kkkkk");
        for (var i = 0; i < 14; i++) {
            if (document.getElementById('chk' + (i + 1)).checked == true) {
                this.checkedArr[i] = i;
            }
        }
        setTimeout(function () {
            console.log("arr", _this.checkedArr.toString());
            localStorage.setItem("opts", _this.checkedArr.toString());
            _this.router.navigate(['/dash/dashboard']);
        }, 5000);
    };
    ConfigTab1Component.prototype.ngDoCheck = function () {
    };
    ConfigTab1Component.prototype.checkBoxes = function (arrChecked) {
    };
    ConfigTab1Component.prototype.ngOnInit = function () {
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });
        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            });
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
        $("#detail_tabs").tabs();
        $(".tab_no").click(function () {
            var active = $("#detail_tabs").tabs("option", "active");
            $("#detail_tabs").tabs("option", "active", active + 1);
        });
    };
    return ConfigTab1Component;
}());
ConfigTab1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'config1',
        template: __webpack_require__("../../../../../src/app/config/tabs/configtab1.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
], ConfigTab1Component);

var _a, _b, _c;
//# sourceMappingURL=configtab1.component.js.map

/***/ }),

/***/ "../../../../../src/app/config/tabs/configtab1.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"tabs-1\">\r\n        <div class=\"company_details\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk\">\r\n                    <input type=\"checkbox\" id=\"chk1\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk1\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"{{'Company Name' | translate}}\">\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk\">\r\n                    <input type=\"checkbox\" id=\"chk2\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk2\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <textarea id=\"\" class=\"cmn_input\" placeholder=\"{{'Company Head Office Address' | translate}}\"></textarea>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk3\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk3\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"Chandreshpolra@gmail.com\">\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk4\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk4\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"{{'Surat' | translate}}\">\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk5\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk5\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row selectdiv\">\r\n                    <label>\r\n                        <select class=\"cmn_input\">\r\n                            <option value=\"Area of Business\" translate>Area of Business</option>\r\n                            <option value=\"abc\" translate>ABC</option>\r\n                            <option value=\"xyz\" translate>XYZ</option>\r\n                        </select>\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk6\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk6\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row selectdiv\">\r\n                    <label>\r\n                        <select class=\"cmn_input\">\r\n                            <option value=\"Gujarat\" translate>Gujarat</option>\r\n                            <option value=\"Maharashtra\" translate>Maharashtra</option>\r\n                            <option value=\"Bengal\" translate>Bengal</option>\r\n                        </select>\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk7\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk7\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row selectdiv\">\r\n                    <label>\r\n                        <select class=\"cmn_input\">\r\n                            <option value=\"Area of Employess\" translate>Area of Employess</option>\r\n                            <option value=\"abc\" translate>ABC</option>\r\n                            <option value=\"xyz\" translate>XYZ</option>\r\n                        </select>\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk8\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk8\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row selectdiv\">\r\n                    <label>\r\n                        <select class=\"cmn_input\">\r\n                            <option value=\"India\" translate>India</option>\r\n                            <option value=\"SriLanka\" translate>SriLanka</option>\r\n                            <option value=\"China\" translate>China</option>\r\n                        </select>\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk9\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk9\"></label>\r\n                </div>\r\n                <div class=\"custom_chk_bx col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <span class=\"chk_bx chk_top\">\r\n                        <input type=\"checkbox\" id=\"test1\" name=\"\" value=\"\">\r\n                        <label for=\"test1\" translate>Compliant With PF(India)</label>\r\n                    </span>\r\n                    <span class=\"chk_bx\">\r\n                        <input type=\"checkbox\" id=\"test2\" name=\"\" value=\"\" checked=\"checked\">\r\n                        <label for=\"test2\" translate> With ESIC(India)</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk10\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk10\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"{{'Other Information' | translate}}\">\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk11\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk11\"></label>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row\">\r\n                    <div class=\"social_icon twitter\">\r\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-4 col-xs-8 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"{{'Twitter Handle' | translate}}\">\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk12\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk12\"></label>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row\">\r\n                    <div class=\"social_icon fb\">\r\n                        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-4 col-xs-8 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"{{'Facebook Address' | translate}}\">\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk13\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk13\"></label>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row  \">\r\n                    <div class=\"social_icon linked_in\">\r\n                        <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-4 col-xs-8 dtl_row\">\r\n                    <input class=\"cmn_input\" placeholder=\"{{'Linked Address' | translate}}\">\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk14\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk14\"></label>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row\">\r\n                    <div class=\"social_icon g__plus\">\r\n                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-4 col-xs-8 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"{{'Google Plus Page' | translate}}\">\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"detail_btn\">\r\n                <button type=\"button\" class=\"btn save_btn\"><label translate>Save</label></button>\r\n                <button type=\"button\" class=\"btn tab_no next_btn\" (click)=\"nextClicked('true')\"><label translate>Next</label></button>\r\n            </div>\r\n       \r\n<footer class=\"text_center\">\r\n<h4> <label translate>© 2017 Kleveron. A venture of <a href=\"#\"> SRKay </a> Consulting Group LLP. All Rights Reserved.</label></h4>\r\n</footer>\r\n\r\n\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/config/tabs/configtab2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigTab2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigTab2Component = (function () {
    function ConfigTab2Component(translate, router) {
        this.router = router;
        this.onChecked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isNextClicked = false;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
        });
    }
    ConfigTab2Component.prototype.nextClicked = function (isClicked) {
        var _this = this;
        console.log(" nextClicked ", isClicked);
        localStorage.setItem("nextClick", isClicked);
        //   this.router.navigate(['/dash/dashtab']);
        console.log("kkkkk");
        for (var i = 0; i < 14; i++) {
            if (document.getElementById('chk' + (i + 1)).checked == true) {
                this.checkedArr[i] = i;
            }
        }
        setTimeout(function () {
            console.log("arr", _this.checkedArr.toString());
            localStorage.setItem("opts2", _this.checkedArr.toString());
            _this.router.navigate(['/dash/dashtab']);
        }, 5000);
    };
    ConfigTab2Component.prototype.ngOnInit = function () {
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });
        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            });
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
        $("#detail_tabs").tabs();
        $(".tab_no").click(function () {
            var active = $("#detail_tabs").tabs("option", "active");
            $("#detail_tabs").tabs("option", "active", active + 1);
        });
    };
    return ConfigTab2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ConfigTab2Component.prototype, "onChecked", void 0);
ConfigTab2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'config2',
        template: __webpack_require__("../../../../../src/app/config/tabs/configtab2.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
], ConfigTab2Component);

var _a, _b;
//# sourceMappingURL=configtab2.component.js.map

/***/ }),

/***/ "../../../../../src/app/config/tabs/configtab2.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"tabs-2\">\r\n        <div class=\"company_details\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk\">\r\n                    <input type=\"checkbox\" id=\"chk15\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk15\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"{{'Company Name' | translate}}\">\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk\">\r\n                    <input type=\"checkbox\" id=\"chk16\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk16\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <textarea id=\"\" class=\"cmn_input\" placeholder=\"{{'Company Head Office Address' | translate}}\"></textarea>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk17\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk17\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"Chandreshpolra@gmail.com\">\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1 col-xs-2 dtl_row custom_chk_bx admi_chk \">\r\n                    <input type=\"checkbox\" id=\"chk18\" name=\"\" value=\"\" class=\"chk_bx\">\r\n                    <label for=\"chk18\"></label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 col-xs-10 dtl_row \">\r\n                    <input class=\"cmn_input\" placeholder=\"{{'Surat' | translate}}\">\r\n                </div>\r\n\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"detail_btn\">\r\n                <button type=\"button\" class=\"btn save_btn\"><label translate>Save</label></button>\r\n                <button type=\"button\" class=\"btn tab_no next_btn\" (click)=\"nextClicked('true')\"><label translate>Next</label></button>\r\n            </div>\r\n       \r\n<footer class=\"text_center\">\r\n<h4> <label translate>© 2017 Kleveron. A venture of <a href=\"#\"> SRKay </a> Consulting Group LLP. All Rights Reserved.</label></h4>\r\n</footer>\r\n\r\n<div class=\"clearfix\"></div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/createPage/Controls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Control2; });
var Control2 = (function () {
    function Control2() {
        this.JSONarr = new Array();
        this.JSONarrCHA = new Array();
        this.JSONarrCEO = new Array();
        this.JSONarrCity = new Array();
        this.JSONarrAOB = new Array();
        this.JSONarrFB = new Array();
        this.JSONarrLL = new Array();
        this.JSONarrGP = new Array();
        this.JSONarrTW = new Array();
        this.JSONarrCt = new Array();
        this.JSONarrSt = new Array();
        this.JSONarrIN = new Array();
    }
    Control2.prototype.contructor = function (idx, id, value, pholder, values, lid, lname, lclass) {
        this.idx = idx;
        this.id = id;
        this.value = value;
        this.pholder = pholder;
        this.values = values;
        this.lid = lid;
        this.lname = lname;
        this.lclass = lclass;
    };
    Control2.prototype.addControlIN = function (control) {
        this.JSONarrIN.push(control);
    };
    Control2.prototype.insertAtIN = function (index, control) {
        this.JSONarrIN.splice(index, 0, control);
    };
    Control2.prototype.addControlSt = function (control) {
        this.JSONarrSt.push(control);
    };
    Control2.prototype.insertAtSt = function (index, control) {
        this.JSONarrSt.splice(index, 0, control);
    };
    Control2.prototype.addControlCt = function (control) {
        this.JSONarrCt.push(control);
    };
    Control2.prototype.insertAtCt = function (index, control) {
        this.JSONarrCt.splice(index, 0, control);
    };
    Control2.prototype.addControlTW = function (control) {
        this.JSONarrTW.push(control);
    };
    Control2.prototype.insertAtTW = function (index, control) {
        this.JSONarrTW.splice(index, 0, control);
    };
    Control2.prototype.addControlLL = function (control) {
        this.JSONarrLL.push(control);
    };
    Control2.prototype.insertAtLL = function (index, control) {
        this.JSONarrLL.splice(index, 0, control);
    };
    Control2.prototype.addControlGP = function (control) {
        this.JSONarrGP.push(control);
    };
    Control2.prototype.insertAtGP = function (index, control) {
        this.JSONarrGP.splice(index, 0, control);
    };
    Control2.prototype.addControl = function (control) {
        this.JSONarr.push(control);
    };
    Control2.prototype.addControlFB = function (control) {
        this.JSONarrFB.push(control);
    };
    Control2.prototype.insertAtFB = function (index, control) {
        this.JSONarrFB.splice(index, 0, control);
    };
    Control2.prototype.addControlAOB = function (control) {
        this.JSONarrAOB.push(control);
    };
    Control2.prototype.insertAtAOB = function (index, control) {
        this.JSONarrAOB.splice(index, 0, control);
    };
    Control2.prototype.insertAt = function (index, control) {
        this.JSONarr.splice(index, 0, control);
    };
    Control2.prototype.addControlCEO = function (control) {
        this.JSONarrCEO.push(control);
    };
    Control2.prototype.insertAtCEO = function (index, control) {
        this.JSONarrCEO.splice(index, 0, control);
    };
    Control2.prototype.insertAtCHA = function (index, control) {
        this.JSONarr.splice(index, 0, control);
    };
    return Control2;
}());

//# sourceMappingURL=Controls.js.map

/***/ }),

/***/ "../../../../../src/app/createPage/Datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdDatepickerPopup; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgbdDatepickerPopup = (function () {
    function NgbdDatepickerPopup() {
        this.valueHtml = '';
    }
    NgbdDatepickerPopup.prototype.ngOnInit = function () {
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
    };
    return NgbdDatepickerPopup;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NgbdDatepickerPopup.prototype, "valueHtml", void 0);
NgbdDatepickerPopup = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'datepicker',
        template: " <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row klvrn_dt_picker\">\n                    <label class=\"lbl_hdr\">Select Date: </label>\n                    <div id=\"datetimepicker1\" class=\"input-group date\">\n                        <input type=\"text\" class=\"cmn_input\" value=\"05/01/2017\">\n                        <span class=\"input-group-addon\">\n                            <span class=\"fa fa-calendar\"></span>\n                        </span>\n                    </div>\n\n                </div>"
    })
], NgbdDatepickerPopup);

//# sourceMappingURL=Datepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/createPage/annotations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAnnotation;
function getAnnotation(typeOrFunc) {
    // Prefer the direct API.
    if (typeOrFunc.annotations) {
        var annotations = typeOrFunc.annotations;
        if (typeof annotations === 'function' && annotations.annotations) {
            annotations = annotations.annotations;
        }
        return annotations[0];
    }
    // API of tsickle for lowering decorators to properties on the class.
    if (typeOrFunc.decorators) {
        return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators)[0];
    }
    // API for metadata created by invoking the decorators.
    if (Reflect && Reflect.getOwnMetadata) {
        return Reflect.getOwnMetadata('annotations', typeOrFunc)[0];
    }
    return null;
}
function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
    if (!decoratorInvocations) {
        return [];
    }
    return decoratorInvocations.map(function (decoratorInvocation) {
        var decoratorType = decoratorInvocation.type;
        var annotationCls = decoratorType.annotationCls;
        var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
        return new (annotationCls.bind.apply(annotationCls, [void 0].concat(annotationArgs)))();
    });
}
//# sourceMappingURL=annotations.js.map

/***/ }),

/***/ "../../../../../src/app/createPage/createPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal_modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createPage_service__ = __webpack_require__("../../../../../src/app/createPage/createPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Datepicker_component__ = __webpack_require__("../../../../../src/app/createPage/Datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__textbox_component__ = __webpack_require__("../../../../../src/app/createPage/textbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Controls__ = __webpack_require__("../../../../../src/app/createPage/Controls.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePageMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreatePageMenuComponent = (function () {
    function CreatePageMenuComponent(elRef, containerService, translate, router, modalRef, modalService) {
        this.elRef = elRef;
        this.containerService = containerService;
        this.router = router;
        this.modalRef = modalRef;
        this.modalService = modalService;
        this.components = new Array();
        this.inputs = {
            class: 'world',
            something: function () { return 'can be really complex'; }
        };
        this.lbls = [];
        this.posts = [];
        this.inp_ctrls = [];
        this.controls = [];
        this.label_id = '';
        this.label_name = '';
        this.label_class = '';
        this.values = new Array();
        this.mytime = new Date();
        this.showHTML = false;
        this.myRadio = 'col-md-6';
        this.myRadio2 = '';
        this.lblid = "";
        this.lblnm = "";
        this.cninp = "";
        this.mainhtml = '';
        this.containers = new Array();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
        });
        this.components.push(__WEBPACK_IMPORTED_MODULE_8__textbox_component__["a" /* TextboxComponent */]);
    }
    CreatePageMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.containerService.getContainers().subscribe(function (posts) {
            _this.posts = posts;
        });
        console.log(this.posts);
        this.containerService.getLabels().subscribe(function (posts) {
            _this.lbls = posts;
        });
        console.log(this.lbls);
        this.containerService.getInputControls().subscribe(function (posts) {
            _this.inp_ctrls = posts;
        });
        console.log(this.inp_ctrls);
        this.containerService.getControls().subscribe(function (posts) {
            _this.controls = posts;
        });
        console.log(this.controls);
    };
    CreatePageMenuComponent.prototype.setRadioCn = function (str) {
        this.myRadio2 = str;
        alert(this.myRadio2);
    };
    CreatePageMenuComponent.prototype.onAddClick = function () {
        this.addClick = true;
    };
    CreatePageMenuComponent.prototype.setlbls = function () {
        this.mainhtml += "<label id='" + this.values[0] + "' class='" + this.values[2] + "'>" + this.values[1] + "</label>";
        alert(this.mainhtml);
    };
    CreatePageMenuComponent.prototype.setRadCol = function (str) {
        this.myRadio = str;
        alert(this.myRadio);
    };
    CreatePageMenuComponent.prototype.setRad1 = function () {
        this.mainhtml = "<div class='" + this.myRadio + "'>";
        alert(this.mainhtml);
    };
    CreatePageMenuComponent.prototype.setLbl = function () {
    };
    CreatePageMenuComponent.prototype.saveFunc = function () {
        var _this = this;
        if (this.myRadio.includes("Date")) {
            this.alert = __WEBPACK_IMPORTED_MODULE_7__Datepicker_component__["a" /* NgbdDatepickerPopup */];
            this.isTimePick = true;
            this.myRadio2 = "";
            return;
        }
        else {
            this.mainhtml += this.myRadio2;
        }
        this.mainhtml += "</div>";
        alert("mmmmmm " + this.mainhtml);
        setTimeout(function () {
            document.getElementById("displayControls").innerHTML += _this.mainhtml;
            console.log("main html", _this.mainhtml);
            console.log($("#contra").html());
            // this.showHTML = true;
        }, 3000);
    };
    CreatePageMenuComponent.prototype.changeLang = function (lang) {
        console.log("lang", lang);
        localStorage.setItem("lang", lang);
    };
    CreatePageMenuComponent.prototype.ngOnChanges = function () {
    };
    CreatePageMenuComponent.prototype.ngDoCheck = function () {
    };
    CreatePageMenuComponent.prototype.ngOnInit = function () {
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });
        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            });
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
        });
        $("#add_btn").click(function () {
            $(".modal_tabs:first").show();
            $(".modal_tabs:gt(0)").hide();
        });
        $(".nx_btn").click(function () {
            var nextDiv = $(".modal_tabs:visible").next(".modal_tabs");
            if (nextDiv.length == 0) {
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
        });
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
    };
    return CreatePageMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CreatePageMenuComponent.prototype, "innerHTML", void 0);
CreatePageMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'createPageMenu',
        template: __webpack_require__("../../../../../src/app/createPage/createPageMenu.html"),
        styles: [__webpack_require__("../../../../../src/assets/styles/controls.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal_modal_options_class__["f" /* BsModalRef */], __WEBPACK_IMPORTED_MODULE_9__Controls__["a" /* Control2 */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__createPage_service__["a" /* CssClassForDivsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__createPage_service__["a" /* CssClassForDivsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal_modal_options_class__["f" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal_modal_options_class__["f" /* BsModalRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _f || Object])
], CreatePageMenuComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=createPage.component.js.map

/***/ }),

/***/ "../../../../../src/app/createPage/createPage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CssClassForDivsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CssClassForDivsService = (function () {
    function CssClassForDivsService(http) {
        this.http = http;
    }
    CssClassForDivsService.prototype.getContainers = function () {
        return this.http.get('http://localhost:3000/getContainers')
            .map(function (res) { return res.json(); });
    };
    CssClassForDivsService.prototype.getLabels = function () {
        return this.http.get('http://localhost:3000/getLabelContainers')
            .map(function (res) { return res.json(); });
    };
    CssClassForDivsService.prototype.getInputControls = function () {
        return this.http.get('http://localhost:3000/getInputContainers')
            .map(function (res) { return res.json(); });
    };
    CssClassForDivsService.prototype.getControls = function () {
        return this.http.get('http://localhost:3000/getControlContainers')
            .map(function (res) { return res.json(); });
    };
    return CssClassForDivsService;
}());
CssClassForDivsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CssClassForDivsService);

var _a;
//# sourceMappingURL=createPage.service.js.map

/***/ }),

/***/ "../../../../../src/app/createPage/createPageMenu.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contra\">\r\n<div class=\"wrapper\">\r\n        <div class=\"aside left\">\r\n            <div class=\"dash_logo\">\r\n                <a href=\"#\">\r\n                    <img src=\"/assets/images/settings/logo_dashboard.png\" alt=\"kleveron\" />\r\n                </a>\r\n            </div>\r\n            <div class=\"aside_nav\">\r\n                <div class=\"sidebar-menu\">\r\n                    <ul class=\"menu\">\r\n                        <li>\r\n                            <h3>\r\n                                <label>\r\n                                    Main\r\n                                </label>\r\n                            </h3>\r\n                        </li>\r\n                        <li class=\"active\">\r\n                            <!--#control_Modal-->\r\n                            <a href=\"admin-panel.html\">\r\n                                <img src=\"/assets/images/settings/Job-postings.png\" class=\"icon-img\" />\r\n                                <span>\r\n                                    <label>\r\n                                        Admin Panel\r\n                                    </label>\r\n                                </span>\r\n                            </a>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <!--#control_Modal-->\r\n                            <a href=\"admin-input-master.html\">\r\n                                <img src=\"/assets/images/settings/Job-postings.png\" class=\"icon-img\" />\r\n                                <span>\r\n                                    <label>\r\n                                        Input Master\r\n                                    </label>\r\n                                </span>\r\n                            </a>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" data-toggle=\"modal\" data-target=\"#list_Modal\">\r\n                                <img src=\"/assets/images/settings/Job-postings.png\" class=\"icon-img\" />\r\n                                <span>\r\n                                    <label>\r\n                                        List Master\r\n                                    </label>\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" data-toggle=\"modal\" data-target=\"#grid_Modal\">\r\n                                <img src=\"/assets/images/settings/Job-postings.png\" class=\"icon-img\" />\r\n                                <span>\r\n                                    <label>\r\n                                        Grid Master\r\n                                    </label>\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content_wrap right\">\r\n            <header class=\"frame_header\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"navbar-header\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text_center mob_head\">\r\n                        <h1><label>Admin Panel</label></h1>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                        <span><label>John Smith</label></span>\r\n                                        <b class=\"caret\"></b>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu animated fadeInUpShort\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label>View Profile</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label>Logout</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-language\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right animated fadeInUpShort\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label>English</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label>Gujarati</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu notify-drop animated fadeInUpShort\">\r\n                                        <div class=\"notify-drop-title\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6\"><label>Hiren (<b>2</b>)</label></div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\"><a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a></div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"drop-content\">\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"/assets/images/on-boarding/notification-img.png\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label>Ahmet</label></a><p><label> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"/assets/images/on-boarding/notification-img.png\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label>Ahmet</label></a><p><label> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"/assets/images/on-boarding/notification-img.png\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label>Ahmet</label></a><p><label> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"/assets/images/on-boarding/notification-img.png\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label>Ahmet</label></a><p><label> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                        </div>\r\n                                        <div class=\"notify-drop-footer text-center\">\r\n                                            <a href=\"\"><i class=\"fa fa-eye\"></i> <label>View All</label></a>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </header>\r\n        <div class=\"container-fluid bgwhite\">\r\n            <div class=\"row page_header\">\r\n                <div class=\"col-lg-12 add_control_btn\">\r\n                    <button type=\"button\" (click)=\"onAddClick()\" class=\"btn\"  id=\"add_btn\" data-toggle=\"modal\" data-target=\"#control_Modal\"><span class=\"fa fa-plus\"></span><label> Add</label></button>\r\n                </div>\r\n                <!-- Modal -->\r\n                <div class=\"modal fade control_mdl\" id=\"control_Modal\" role=\"dialog\">\r\n                    <div class=\"modal-dialog\">\r\n.\r\n                        <!-- Modal content-->\r\n                        <div class=\"modal-content\">\r\n\r\n                            <div class=\"modal_tabs add_div\">\r\n                                <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">&times;</button>\r\n                                    <h4><label class=\"no_style\">1</label><label class=\"modal-title\"> Add Div Container</label></h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"div_hdr row\">\r\n                                        <div class=\"col-md-12\"> <h4><label>Select div colum structure</label></h4></div>\r\n                                    </div>\r\n                                    <div class=\"row col_outer\">\r\n                                        <div *ngFor=\"let post of posts\" >\r\n                                        <div class=\"col-md-3 col-sm-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"{{post.img_url}}\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"col_lbl\"><label>{{post.css_class}}</label></div>\r\n                                            </div>\r\n                                            <div class=\"mdl_radio custom_radio\">\r\n                                                <input type=\"radio\" id=\"{{post.col_id}}\" name=\"radio-group\" (click)=\"setRadCol(post.css_class)\">\r\n                                                <label for=\"{{post.col_id}}\"></label>\r\n                                            </div>\r\n                                        </div>\r\n                                       \r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer modal_btn\">\r\n                                    <button type=\"button\" class=\"btn nx_btn\" (click)=\"setRad1()\"><label>Next</label></button>\r\n                                    <button type=\"button\" class=\"btn sv_btn\"><label>Save</label></button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal_tabs add_label\">\r\n                                <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">&times;</button>\r\n                                    <h4><label class=\"no_style\">2</label><label class=\"modal-title\">Add Label</label></h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"div_hdr row\">\r\n                                        <div class=\"col-md-6 col-xs-12\">\r\n                                            <h4><label>Would You Like to Add label?</label></h4>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-xs-12 tgl_switch\">\r\n                                            <input type=\"checkbox\" class=\"tgl\" id=\"lbl_tgl\" />\r\n                                            <label for=\"lbl_tgl\"></label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row col_outer hide_lbl_cntrl\">\r\n                                    <div *ngFor=\"let lbl of lbls, let idx = index\" >\r\n                                        <div class=\"{{lbl.div_class}}\">\r\n                                            <label class=\"{{lbl.lbl_class}}\">{{lbl.label_title}}</label>\r\n                                            <input class=\"{{lbl.input_class}}\" type=\"{{lbl.input_type}}\" [(ngModel)]=\"values[idx]\">\r\n                                        </div>\r\n                                </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer modal_btn\">\r\n                                    <button type=\"button\" class=\"btn nx_btn hide_nxt\" (click)=\"setlbls()\"><label>Next</label></button>\r\n                                    <button type=\"button\" class=\"btn nx_btn hide_skip\"><label>Skip</label></button>\r\n                                    <button type=\"button\" class=\"btn sv_btn\"><label>Save</label></button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal_tabs add_control\">\r\n                                <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">&times;</button>\r\n                                    <h4><label class=\"no_style\">3</label><label class=\"modal-title\">Add Controls</label></h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"div_hdr row\">\r\n                                        <div class=\"col-md-12\"> <h4><label>Select Control</label></h4></div>\r\n                                    </div>\r\n                                    <div class=\"row col_outer\">\r\n                                        <div *ngFor=\"let item of inp_ctrls\" >\r\n                                        <div class=\"col-md-3 col-xs-12 select_col\">\r\n                                            <div class=\"col_div\">\r\n                                                <div class=\"col_img\">\r\n                                                    <img src=\"{{item.img_url}}\" alt=\"\" />\r\n                                                </div>\r\n                                                <div class=\"{{item.div_class}}\"><label>{{item.lbl_title}}</label></div>\r\n                                            </div>\r\n                                            <div class=\"{{item.inp_div_class}}\">\r\n                                                <input type=\"{{item.inp_type}}\" id=\"{{item.inp_id}}\" name=\"{{item.inp_name}}\" (click)=\"setRadioCn(item.inp_html)\">\r\n                                                <label for=\"{{item.inp_id}}\"></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n\r\n\r\n                                    </div>\r\n                                    <div class=\"row col_outer cntrl_info\">\r\n                                        <div *ngFor=\"let item of controls\" >\r\n                                        <div class=\"{{item.div_class}}}\">\r\n                                            <label class=\"{{item.lbl_class}}\">{{item.label_title}}</label>\r\n                                            <input class=\"{{item.input_class}}\" type=\"{{item.input_type}}\">\r\n                                        </div>\r\n                                        </div>\r\n                                        \r\n                                        \r\n                                        <div class=\"col-md-4 col-xs-12 custom_chk_bx\">\r\n                                            <div class=\"chk_bx chk_top\">\r\n                                                <input type=\"checkbox\" id=\"vldtn_btn\">\r\n                                                <label for=\"vldtn_btn\">Validation Required</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4 col-xs-12 hide_lbl\">\r\n                                            <label class=\"lbl_hdr\">Validation Message</label>\r\n                                            <input class=\"cmn_input\" type=\"text\">\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer modal_btn\">\r\n\r\n                                    <button type=\"button\" class=\"btn sv_btn\" (click)=\"saveFunc()\"><label>Save</label></button>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"displayControls\" class=\"row page_content admin_onboard\">\r\n                    <!-- <input ngui-datetime-picker date-format='DD-MM-YYYY HH:MM' year='2014' month='12' day='31' hour='23' minute='59' class='form-control' id='starttime'    placeholder='Start Date'  [min-date]='minDate'   [close-on-select]='false'/> -->\r\n                    <!-- <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row klvrn_dt_picker\">\r\n                            <label class=\"lbl_hdr\">Select Date: </label>\r\n                            <div id=\"datetimepicker1\" class=\"input-group date\">\r\n                                <input type=\"text\" class=\"cmn_input\" value=\"05/01/2017\">\r\n                                <span class=\"input-group-addon\">\r\n                                    <span class=\"fa fa-calendar\"></span>\r\n                                </span>\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div *ngIf=\"isTimePick\">\r\n                         <ng-container *ngComponentOutlet=\"alert\"></ng-container>\r\n                        </div> -->\r\n                        <div *ngIf=\"components.length!==0\">\r\n                        <div *ngFor=\"let component of components\">  \r\n                    <ndc-dynamic [ndcDynamicComponent]=\"component\"\r\n                        [ndcDynamicInputs]=\"inputs\"\r\n                        ></ndc-dynamic>\r\n                        </div>\r\n                        </div>\r\n                </div>\r\n\r\n\r\n                \r\n        </div>\r\n\r\n        <footer class=\"text_center\">\r\n            <h4> <label>© 2017 Kleveron. A venture of <a href=\"#\"> SRKay </a> Consulting Group LLP. All Rights Reserved.</label></h4>\r\n        </footer>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/createPage/keep-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscapeHtmlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EscapeHtmlPipe = (function () {
    function EscapeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    return EscapeHtmlPipe;
}());
EscapeHtmlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keepHtml', pure: false }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object])
], EscapeHtmlPipe);

var _a;
//# sourceMappingURL=keep-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/createPage/keep-js.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscapeJSPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EscapeJSPipe = (function () {
    function EscapeJSPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeJSPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustScript(content);
    };
    return EscapeJSPipe;
}());
EscapeJSPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keepJS', pure: false }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object])
], EscapeJSPipe);

var _a;
//# sourceMappingURL=keep-js.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/createPage/templatecheck.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__annotations__ = __webpack_require__("../../../../../src/app/createPage/annotations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createPage_component__ = __webpack_require__("../../../../../src/app/createPage/createPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCheck; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppCheck = (function () {
    function AppCheck() {
        this.encodedExampleHtml = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__annotations__["a" /* getAnnotation */])(__WEBPACK_IMPORTED_MODULE_1__createPage_component__["a" /* CreatePageMenuComponent */]).template;
    }
    return AppCheck;
}());
AppCheck = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'appcheck',
        template: "\n    <pre class=\"example-code\">\n      <code>\n        {{encodedExampleHtml}}\n      </code>\n    </pre>\n  ",
    }),
    __metadata("design:paramtypes", [])
], AppCheck);

//# sourceMappingURL=templatecheck.component.js.map

/***/ }),

/***/ "../../../../../src/app/createPage/textbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-sm-6 element_box\">\r\n        <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n            <span class=\"actions\">\r\n                <a class=\"\" (click)=\"cloneElement(0)\">\r\n                    <i class=\"fa fa-clone\">\r\n                    </i><span class=\"tooltip\">Clone</span>\r\n                </a>\r\n            </span> <span class=\"actions\">\r\n                <a class=\"\" (click)=\"editElement('fg')\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"\r\n                   ><i class=\"fa fa-edit\" ></i><span class=\"tooltip\">Edit</span></a>\r\n            </span>\r\n            <span class=\"actions\">\r\n                <a class=\"delel\">\r\n                    <i class=\"fa fa-trash-o\">\r\n                    </i><span class=\"tooltip\">Delete</span>\r\n                </a>\r\n            </span> <span class=\"actions\">\r\n                <a class=\"\"\r\n                   href=\"javascript:void(0);\"><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n            </span>\r\n        </div>\r\n<div class=\"col-md-6 col-sm-6 element_box1\">\r\n<input class=\"cmn_input\" [placeholder]=\"pholder0_tb\" [value]=\"str0_tb\" [id]=\"strid0_tb\">\r\n</div>\r\n</div>\r\n\r\n\r\n<div *ngFor=\"let tb of Textboxes\">\r\n        <div *ngIf=\"showTextBox && tb!==undefined\">\r\n        <div class=\"col-md-6 col-sm-6 element_box\">\r\n            <div class=\"action-ui\" id=\"tour-action-ui-id\">\r\n            <span class=\"actions\">\r\n                <a class=\"\" (click)=\"cloneElement(tb.idx)\">\r\n                    <i class=\"fa fa-clone\">\r\n                    </i><span class=\"tooltip\">Clone</span>\r\n                </a>\r\n            </span> <span class=\"actions\">\r\n                <a  (click)=\"editElement(tb.idx)\" data-target=\"#input_control_Modal\" data-toggle=\"modal\"\r\n                   ><i class=\"fa fa-edit\"></i><span class=\"tooltip\">Edit</span></a>\r\n            </span>\r\n            <span class=\"actions\">\r\n                <a class=\"delel\" (click)=\"delElement(tb.idx)\">\r\n                    <i class=\"fa fa-trash-o\">\r\n                    </i><span class=\"tooltip\">Delete</span>\r\n                </a>\r\n            </span> <span class=\"actions\">\r\n                <a class=\"\"\r\n                   href=\"javascript:void(0);\"><i class=\"fa fa-refresh\"></i><span class=\"tooltip\">Reset</span></a>\r\n            </span>\r\n        </div>\r\n<div class=\"col-md-6 col-sm-6 element_box1\">\r\n<input class=\"cmn_input\" [placeholder]=\"tb.pholder\" [value]=\"tb.value\" [id]=\"tb.id\" #tbox_{{tb.idx}}>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"modal fade control_mdl\" id=\"input_control_Modal\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal_tabs add_control\">\r\n                    <div class=\"modal-header\"> \r\n                        <button type=\"button\" class=\"mdl_close\" data-dismiss=\"modal\">\r\n                            &times;\r\n                        </button>\r\n                        <h4>\r\n                            <label class=\"modal-title\">Edit Control</label>\r\n                        </h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        \r\n                        <div class=\"row col_outer cntrl_info\">\r\n                                <div class=\"col-md-4 col-xs-12 lbl_cntrl\" style=\"display:none\">\r\n                                        <label class=\"lbl_hdr\">\r\n                                            Control Parent ID\r\n                                        </label>\r\n                                        <input class=\"cmn_input\" type=\"text\" #ctpar>\r\n                                    </div>\r\n                            <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                <label class=\"lbl_hdr\">\r\n                                    Control Id\r\n                                </label>\r\n                                <input class=\"cmn_input\" type=\"text\" #ctid>\r\n                            </div>\r\n                            <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                <label class=\"lbl_hdr\">\r\n                                    Control Value\r\n                                </label>\r\n                                <input class=\"cmn_input\" type=\"text\" #ctval>\r\n                            </div>\r\n                            <div class=\"col-md-4 col-xs-12 lbl_cntrl\">\r\n                                <label class=\"lbl_hdr\">\r\n                                    Control Placeholder\r\n                                </label>\r\n                                <input class=\"cmn_input\" type=\"text\" #ctph>\r\n                            </div>\r\n                            <div class=\"col-md-4 col-xs-12 custom_chk_bx\">\r\n                                <div class=\"chk_bx chk_top\">\r\n                                    <input type=\"checkbox\" id=\"vldtn_btn1\" #ctvbx>\r\n                                    <label for=\"vldtn_btn1\">\r\n                                        Validation Required\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4 col-xs-12 hide_lbl\">\r\n                                <label class=\"lbl_hdr\">\r\n                                    Validation Message\r\n                                </label>\r\n                                <input class=\"cmn_input\" type=\"text\" #ctvmsg>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer modal_btn\">\r\n                        <button type=\"button\" class=\"btn sv_btn\" (click)=\"saveCntrl(ctpar.value,ctid.value,ctval.value,ctph.value,ctvbx.value,ctvmsg.value)\">\r\n                            <label>\r\n                                Save\r\n                            </label>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/createPage/textbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controls__ = __webpack_require__("../../../../../src/app/createPage/Controls.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextboxComponent = (function () {
    function TextboxComponent(con) {
        this.con = con;
        this.divclass1_tb = "col-md-6 col-sm-6 col-xs-12 selectdiv element_box";
        this.divclass0_tb = "col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row";
        this.pholder0_tb = "simple textbox";
        this.class0_tb = "cmn_input";
        this.str0_tb = "text1";
        this.strid0_tb = "text1";
        this.showTextBox_tb = false;
        this.Textboxes = this.con.JSONarr;
    }
    TextboxComponent.prototype.ngOnInit = function () {
        $('.delel').on('click', function () {
            $(this).closest('.element_box').remove();
        });
        $(".element_box1").on('hover', function () {
            $(this).closest(".parentdiv #tour-action-ui-id").addClass("action-ui");
        });
    };
    TextboxComponent.prototype.editElement = function (idx, inp_flag) {
        if (inp_flag == undefined) {
            localStorage.setItem("indexEle", idx);
            localStorage.setItem("inp_flag", 'TB');
        }
        else {
            localStorage.setItem("indexEle", idx);
            localStorage.setItem("inp_flag", inp_flag);
        }
    };
    TextboxComponent.prototype.saveCntrl = function (ctpar, ctid, ctval, ctph, ctvbx, ctvmsg) {
        if (localStorage.getItem("inp_flag") == 'TB') {
            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarr[this.jk - 1]["value"] = ctval;
                this.con.JSONarr[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarr[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
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
    };
    TextboxComponent.prototype.cloneElement = function (idx, inp_flag) {
        alert(idx);
        if (inp_flag == undefined) {
            if (idx == 0) {
                if (this.con.JSONarr.length == 0) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Controls__["a" /* Control2 */]();
                    this.control.idx = 1;
                    this.control.id = this.strid0_tb;
                    this.control.value = this.str0_tb;
                    this.control.pholder = this.pholder0_tb;
                    this.con.addControl(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarr);
                    for (var i = 0; i < this.con.JSONarr.length; i++) {
                        alert(this.con.JSONarr[i].idx++);
                        this.con.JSONarr[i].idx = this.con.JSONarr[i].idx++;
                    }
                    console.log("after", this.con.JSONarr);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Controls__["a" /* Control2 */]();
                    this.control.idx = 1;
                    this.control.id = this.strid0_tb;
                    this.control.value = this.str0_tb;
                    this.control.pholder = this.pholder0_tb;
                    this.con.insertAt(0, this.control);
                }
                this.showTextBox = true;
                console.log(this.con.JSONarr);
                console.log(this.showTextBox);
            }
            else {
                if (this.con.JSONarr.length == idx) {
                    //this.Textboxes.push(this.json1);
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Controls__["a" /* Control2 */]();
                    this.control.idx = idx + 1;
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
                    this.control = new __WEBPACK_IMPORTED_MODULE_1__Controls__["a" /* Control2 */]();
                    this.control.idx = idx;
                    this.control.id = this.con.JSONarr[idx - 1].id;
                    this.control.value = this.con.JSONarr[idx - 1].value;
                    this.control.pholder = this.con.JSONarr[idx - 1].pholder;
                    this.con.insertAt(idx - 1, this.control);
                }
                this.showTextBox = true;
                console.log(this.con.JSONarr);
                console.log(this.showTextBox);
            }
        }
    };
    TextboxComponent.prototype.delElement = function (idx, inp_flag) {
        if (inp_flag == undefined) {
            delete this.Textboxes[idx - 1];
            this.Textboxes.length = this.Textboxes.length - 1;
            this.showTextBox_tb = true;
        }
    };
    return TextboxComponent;
}());
TextboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'textbox',
        template: __webpack_require__("../../../../../src/app/createPage/textbox.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Controls__["a" /* Control2 */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Controls__["a" /* Control2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Controls__["a" /* Control2 */]) === "function" && _a || Object])
], TextboxComponent);

var _a;
//# sourceMappingURL=textbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".displayElement{\r\n    display:none;\r\n}\r\n\r\n.dropElement{\r\n    display:inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(translate) {
        this.title = 'app';
        this.hideIt = new Array();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(6000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
            // this.opts = localStorage.getItem('opts').split(',');
            //console.log("opts0000", this.opts);
            // for (var i = 0; i < this.opts.length; i++) {
            //     if (this.opts[i] != "") {
            //         this.hideIt[i] = false;
            //     }
            //     else
            //         this.hideIt[i] = true;
            // }
            // for (var i = 0; i < this.hideIt.length; i++) {
            //     console.log(this.hideIt[i]);
            // }
        });
    }
    DashboardComponent.prototype.getCssClass = function () {
        var cssClasses;
        cssClasses = {
            dropElement: true,
            displayElement: false
        };
        return cssClasses;
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        //this.observable.unsubscribe();
    };
    DashboardComponent.prototype.changeLang = function (lang) {
        console.log(" lang in tab3 ", lang);
        localStorage.setItem("lang", lang);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });
        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            });
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
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"wrapper\">\r\n        <div class=\"aside left\">\r\n            <div class=\"dash_logo\">\r\n                <a href=\"#\">\r\n                    <img src=\"/assets/images/settings/logo_dashboard.png\" alt=\"kleveron\" /></a>\r\n            </div>\r\n            <div class=\"aside_nav\">\r\n                <div class=\"sidebar-menu\">\r\n                    <ul class=\"menu\">\r\n                        <li>\r\n                            <h3>\r\n                                <label>\r\n                                    {{ 'Main' | translate:param }} </label></h3>\r\n                        </li>\r\n                        <li class=\"active\"><a routerLink=\"/settingsmenu/settings\">\r\n                            <img src=\"/assets/images/settings/personal.png\" class=\"icon-img\" />\r\n                            <span>\r\n                                <label>\r\n                                    {{ 'Personal' | translate:param }}  </label></span> </a></li>\r\n                        <li><a href=\"javascript::\">\r\n                            <img src=\"/assets/images/settings/organisation.png\" class=\"icon-img\" />\r\n                            <span>\r\n                                <label>\r\n                                    {{ 'Organisation' | translate:param }}  </label></span> </a></li>\r\n                        <li><a href=\"javascript::\">\r\n                            <img src=\"/assets/images/settings/appearance.png\" class=\"icon-img\" />\r\n                            <span>\r\n                                <label>\r\n                                    {{ 'Appearance' | translate:param }}   </label></span> </a></li>\r\n                        <li><a href=\"javascript::\">\r\n                            <img src=\"/assets/images/settings/apps-nd-plugin.png\" class=\"icon-img\" />\r\n                            <span>\r\n                                <label>\r\n                                    {{ 'Apps and Plugins' | translate:param }} </label></span>\r\n                            <!--<span class=\"fa fa-angle-right\" style=\"float: right; position: relative;\"></span>-->\r\n                        </a>\r\n                            <!--<ul id=\"menu-academico-sub\">\r\n                                <li id=\"menu-academico-avaliacoes\"><a href=\"404.html\">404</a></li>\r\n                                <li id=\"menu-academico-boletim\"><a href=\"blank.html\">Blank</a></li>\r\n                            </ul>-->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content_wrap right\">\r\n            <header class=\"frame_header\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"navbar-header\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text_center mob_head\">\r\n                        <h1><label translate>OnBoarding</label></h1>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                        <span><label translate>John Smith</label></span>\r\n                                        <b class=\"caret\"></b>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>View Profile</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>Logout</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-language\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('en')\" class=\"view btn-sm\"><label translate>English</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('hindi')\" class=\"view btn-sm\"><label translate>Hindi</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu notify-drop\">\r\n                                        <div class=\"notify-drop-title\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6\"><label translate>Hiren (<b>2</b>)</label></div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\"><a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a></div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"drop-content\">\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                        </div>\r\n                                        <div class=\"notify-drop-footer text-center\">\r\n                                            <a href=\"\"><i class=\"fa fa-eye\"></i> <label translate>View All</label></a>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </header>\r\n            <div class=\"container-fluid bgwhite\">\r\n                <div class=\"row page_header\">\r\n                    <div class=\"col-xs-6\">\r\n                        <h2 class=\"head\">\r\n                            <label translate>\r\n                                OnBoarding</label></h2>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <img src=\"/assets/images/on-boarding/onbrd-icon.png\" class=\"icon-img pull-right\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row page_content\">\r\n                    <div class=\"onboarding_section\">\r\n                            <div class=\"detail_wrapper\">\r\n                                <!---------------------------tabs ---------------------------- -->\r\n                                <div id=\"detail_tabs\" class=\"detail_nav_menu\">\r\n                                    <ul>\r\n                                        <li><a routerLink=\"/dash/dashboard\">\r\n                                            <label>\r\n                                                <div class=\"tab_no\">\r\n                                                    1</div>\r\n                                                <span translate>Company Details</span></label></a></li>\r\n                                        <li><a routerLink=\"/dash/dashtab\">\r\n                                            <label>\r\n                                                <div class=\"tab_no\">\r\n                                                    2</div>\r\n                                                <span translate>Admin Details</span></label></a></li>\r\n                                    </ul>\r\n                                     <div id=\"tabs-1\">\r\n                                        <div class=\"company_details\">\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"{{'Company Name' | translate}}\">\r\n                                            </div>\r\n                                            <div  class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <textarea id=\"Textarea1\" class=\"cmn_input\" placeholder=\"{{'Company Head Office Address' | translate}}\"></textarea>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"{{'Chandreshpolra@gmail.com' | translate}}\">\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"{{'Surat' | translate}}\">\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col selectdiv dtl_row\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\">\r\n                                                        <option value=\"Area of Business\" translate>Area of Business</option>\r\n                                                        <option value=\"abc\" translate>ABC</option>\r\n                                                        <option value=\"xyz\" translate>XYZ</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col selectdiv dtl_row\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\">\r\n                                                        <option value=\"Gujarat\" translate>Gujarat</option>\r\n                                                        <option value=\"Maharashtra\" translate>Maharashtra</option>\r\n                                                        <option value=\"Bengal\" translate>Bengal</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col selectdiv dtl_row\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\">\r\n                                                        <option value=\"Area of Employess\" translate>Area of Employess</option>\r\n                                                        <option value=\"abc\" translate>ABC</option>\r\n                                                        <option value=\"xyz\" translate>XYZ</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col selectdiv dtl_row\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\">\r\n                                                        <option value=\"India\" translate>India</option>\r\n                                                        <option value=\"SriLanka\" translate>SriLanka</option>\r\n                                                        <option value=\"China\" translate>China</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col custom_chk_bx dtl_row\">\r\n                                                <span class=\"chk_bx\">\r\n                                                    <input type=\"checkbox\" id=\"Checkbox1\" name=\"\" value=\"\">\r\n                                                    <label for=\"test1\" translate>\r\n                                                        Compliant With PF(India)</label>\r\n                                                </span><span class=\"chk_bx\">\r\n                                                    <input type=\"checkbox\" id=\"Checkbox2\" name=\"\" value=\"\" checked=\"checked\">\r\n                                                    <label for=\"test2\" translate>\r\n                                                        With ESIC(India)</label>\r\n                                                </span>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"{{'Other Information' | translate}}\">\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                        <div class=\"social_icon twitter\">\r\n                                                            <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                        <input class=\"cmn_input\" placeholder=\"{{'Twitter Handle' | translate}}\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                        <div class=\"social_icon fb\">\r\n                                                            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                        <input class=\"cmn_input\" placeholder=\"{{'Facebook Address' | translate}}\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                        <div class=\"social_icon linked_in\">\r\n                                                            <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                        <input class=\"cmn_input\" placeholder=\"{{'Linked Address' | translate}}\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 col-xs-2 social_col\">\r\n                                                        <div class=\"social_icon g__plus\">\r\n                                                            <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-10 col-sm-10 col-xs-10 social_input\">\r\n                                                        <input class=\"cmn_input\" placeholder=\"{{'Google Plus Page' | translate}}\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"clearfix\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div> \r\n                                    <div id=\"tabs-2\">\r\n                                        <div class=\"company_details\">\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"{{'Company Name' | translate}}\">\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <textarea id=\"Textarea2\" class=\"cmn_input\" placeholder=\"{{'Company Head Office Address' | translate}}\"></textarea>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"Chandreshpolra@gmail.com\">\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"{{'Surat' | translate}}\">\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col selectdiv dtl_row\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\">\r\n                                                        <option value=\"Area of Business\" translate>Area of Business</option>\r\n                                                        <option value=\"abc\" translate>ABC</option>\r\n                                                        <option value=\"xyz\" translate>XYZ</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col selectdiv dtl_row\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\">\r\n                                                        <option value=\"Gujarat\" translate>Gujarat</option>\r\n                                                        <option value=\"Maharashtra\" translate>Maharashtra</option>\r\n                                                        <option value=\"Bengal\" translate>Bengal</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"clearfix\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- -------------------------end tabs ---------------------------- -->\r\n                                <div class=\"detail_btn\">\r\n                                    <button type=\"button\" class=\"btn save_btn\">\r\n                                        <label translate>\r\n                                            Save</label></button>\r\n                                    <button type=\"button\" class=\"btn tab_no next_btn\">\r\n                                        <label translate>\r\n                                            Next</label></button>\r\n                                </div>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <footer class=\"text_center\">\r\n                <h4> <label translate>© 2017 Kleveron. A venture of <a href=\"#\"> SRKay </a> Consulting Group LLP. All Rights Reserved.</label></h4>\r\n            </footer>\r\n        </div>\r\n        <div class=\"clearfix\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboardmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashMenuComponent = (function () {
    function DashMenuComponent(translate) {
        this.observable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });
    }
    DashMenuComponent.prototype.ngOnDestroy = function () {
        // this.observable.unsubscribe();
    };
    DashMenuComponent.prototype.changeLang = function (lang) {
        console.log("lang", lang);
        localStorage.setItem("lang", lang);
    };
    return DashMenuComponent;
}());
DashMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashmenu',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboardmenu.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], DashMenuComponent);

var _a;
//# sourceMappingURL=dashboardmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboardmenu.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"wrapper\">\r\n        <div class=\"aside left\">\r\n            <div class=\"dash_logo\">\r\n                <a href=\"#\"><img src=\"/assets/images/settings/logo_dashboard.png\" alt=\"kleveron\" /></a>\r\n            </div>\r\n            <div class=\"aside_nav\">\r\n                <div class=\"sidebar-menu\">\r\n                    <ul class=\"menu\">\r\n                        <li>\r\n                            <h3><label translate>Main</label></h3>\r\n                        </li>\r\n                        <li class=\"active\">\r\n                            <a routerLink=\"/settingsmenu/settings\">\r\n                                <img src=\"/assets/images/settings/personal.png\" class=\"icon-img\" />\r\n                                <span><label translate>Personal</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/organisation.png\" class=\"icon-img\" />\r\n                                <span><label translate>Organisation</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/appearance.png\" class=\"icon-img\" />\r\n                                <span><label translate>Appearance</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/apps-nd-plugin.png\" class=\"icon-img\" />\r\n                                <span><label translate>Apps and Plugins</label></span>\r\n                                <!--<span class=\"fa fa-angle-right\" style=\"float: right; position: relative;\"></span>-->\r\n                            </a>\r\n                            <!--<ul id=\"menu-academico-sub\">\r\n                                <li id=\"menu-academico-avaliacoes\"><a href=\"404.html\">404</a></li>\r\n                                <li id=\"menu-academico-boletim\"><a href=\"blank.html\">Blank</a></li>\r\n                            </ul>-->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content_wrap right\">\r\n    \r\n            <header class=\"frame_header\">\r\n    \r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"navbar-header\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text_center mob_head\">\r\n                        <h1><label translate>Setting</label></h1>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                        <span><label translate>John Smith</label></span>\r\n                                        <b class=\"caret\"></b>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>View Profile</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>Logout</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-language\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('en')\" class=\"view btn-sm\"><label translate>English</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('hindi')\" class=\"view btn-sm\"><label translate>Hindi</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu notify-drop\">\r\n                                        <div class=\"notify-drop-title\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6\"><label translate>Hiren (<b>2</b>)</label></div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\"><a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a></div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"drop-content\">\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label traslate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                        </div>\r\n                                        <div class=\"notify-drop-footer text-center\">\r\n                                            <a href=\"\"><i class=\"fa fa-eye\"></i> <label translate>View All</label></a>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </header>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(translate, router, route) {
        this.router = router;
        this.route = route;
        this.observable = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        //this.observable.unsubscribe();
    };
    SettingsComponent.prototype.ngAfterViewInit = function () {
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });
        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            });
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
        $("#detail_tabs").tabs();
        $(".tab_no").click(function () {
            var active = $("#detail_tabs").tabs("option", "active");
            $("#detail_tabs").tabs("option", "active", active + 1);
        });
    };
    SettingsComponent.prototype.changeLang = function (lang) {
        console.log(" lang in tab3 ", lang);
        localStorage.setItem("lang", lang);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'settings',
        template: __webpack_require__("../../../../../src/app/dashboard/settings/settings.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settings.html":
/***/ (function(module, exports) {

module.exports = "\r\n        <div class=\"content_wrap right\">\r\n\r\n            <header class=\"frame_header\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"navbar-header\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text_center mob_head\">\r\n                        <h1><label translate>Setting</label></h1>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                        <span><label translate>John Smith</label></span>\r\n                                        <b class=\"caret\"></b>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>View Profile</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>Logout</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-language\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('en')\" class=\"view btn-sm\"><label translate>English</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('hindi')\" class=\"view btn-sm\"><label translate>Hindi</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu notify-drop\">\r\n                                        <div class=\"notify-drop-title\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6\"><label translate>Hiren (<b>2</b>)</label></div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\"><a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a></div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"drop-content\">\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label traslate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                        </div>\r\n                                        <div class=\"notify-drop-footer text-center\">\r\n                                            <a href=\"\"><i class=\"fa fa-eye\"></i> <label translate>View All</label></a>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </header>\r\n            <div class=\"container-fluid bgwhite\">\r\n                <div class=\"row page_header\">\r\n                    <div class=\"col-xs-6\">\r\n                        <h2 class=\"head\"><label translate>Personal</label></h2>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <img src=\"/assets/images/settings/personal.png\" class=\"icon-img pull-right\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row page_content\">\r\n                    <div class=\"onboarding_section container-fluid\">\r\n                        <div class=\"detail_wrapper\">\r\n                            <!-- -------------------------tabs --------------------------- -->\r\n                            <div id=\"detail_tabs\" class=\"detail_nav_menu\">\r\n                                <ul>\r\n                                    <li><a routerLink=\"/settingsmenu/settings\"><label translate>Account</label></a></li>\r\n                                    <li><a routerLink=\"/settingsmenu/settingstab2\"><label translate>Notifications</label></a></li>\r\n                                    <li><a routerLink=\"/settingsmenu/settingstab3\"><label translate>Email Preference</label></a></li>\r\n                                </ul>\r\n                            <div id=\"tabs-1\">\r\n                                    <div class=\"company_details\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit User Profile</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input\" placeholder=\"{{'Chandreshpolra' | translate}}\" type=\"text\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-address-card\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                \r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit Name</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input\" placeholder=\"{{'Chandresh polra' | translate}}\" type=\"text\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-user\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                \r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit Email ID</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input\" placeholder=\"Chandreshpolra@gmail.com\" type=\"email\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-envelope\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit Password</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input password\" placeholder=\"{{'Password' | translate}}\" type=\"password\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-lock\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                \r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit Phone Number</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input\" placeholder=\"(330) 123-4567\" type=\"text\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-phone\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 slct_lbl selectdiv dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Display Name Pattern</label>\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\">\r\n                                                        <option value=\"Chandreshpolra\" translate>Chandresh_polra</option>\r\n                                                        <option value=\"Chandreshpolra\" translate>Chandresh polra</option>\r\n                                                        <option value=\"Chandreshpolra\" translate>Chandreshpolra</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                            </div>\r\n                                \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- ------------------------- end tabs --------------------------- -->\r\n                            <div class=\"detail_btn\">\r\n                                <button type=\"button\" class=\"btn save_btn add_acnt\"><label translate>Add New Account</label></button>\r\n                                <button type=\"button\" class=\"btn tab_no next_btn mng_acnt\"><label translate>Manage Accounts</label></button>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <footer class=\"text_center\">\r\n                <h4> <label translate>© 2017 Kleveron. A venture of <a href=\"#\"> SRKay </a> Consulting Group LLP. All Rights Reserved.</label></h4>\r\n            </footer>\r\n\r\n        </div>\r\n        <div class=\"clearfix\">\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settingsmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsMenuComponent = (function () {
    function SettingsMenuComponent(translate) {
        this.observable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });
    }
    SettingsMenuComponent.prototype.ngOnDestroy = function () {
        // this.observable.unsubscribe();
    };
    SettingsMenuComponent.prototype.changeLang = function (lang) {
        console.log("lang", lang);
        localStorage.setItem("lang", lang);
    };
    return SettingsMenuComponent;
}());
SettingsMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'settingsmenu',
        template: __webpack_require__("../../../../../src/app/dashboard/settings/settingsmenu.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], SettingsMenuComponent);

var _a;
//# sourceMappingURL=settingsmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settingsmenu.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div class=\"wrapper\">\r\n    <div class=\"aside left\">\r\n        <div class=\"dash_logo\">\r\n            <a href=\"#\"><img src=\"/assets/images/settings/logo_dashboard.png\" alt=\"kleveron\" /></a>\r\n        </div>\r\n        <div class=\"aside_nav\">\r\n            <div class=\"sidebar-menu\">\r\n                <ul class=\"menu\">\r\n                    <li>\r\n                        <h3><label translate>Main</label></h3>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <a routerLink=\"/settings\">\r\n                            <img src=\"/assets/images/settings/personal.png\" class=\"icon-img\" />\r\n                            <span><label translate>Personal</label></span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript::\">\r\n                            <img src=\"/assets/images/settings/organisation.png\" class=\"icon-img\" />\r\n                            <span><label translate>Organisation</label></span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript::\">\r\n                            <img src=\"/assets/images/settings/appearance.png\" class=\"icon-img\" />\r\n                            <span><label translate>Appearance</label></span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript::\">\r\n                            <img src=\"/assets/images/settings/apps-nd-plugin.png\" class=\"icon-img\" />\r\n                            <span><label translate>Apps and Plugins</label></span>\r\n                            <!--<span class=\"fa fa-angle-right\" style=\"float: right; position: relative;\"></span>-->\r\n                        </a>\r\n                        <!--<ul id=\"menu-academico-sub\">\r\n                            <li id=\"menu-academico-avaliacoes\"><a href=\"404.html\">404</a></li>\r\n                            <li id=\"menu-academico-boletim\"><a href=\"blank.html\">Blank</a></li>\r\n                        </ul>-->\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content_wrap right\">\r\n\r\n        <header class=\"frame_header\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">\r\n                    <div class=\"navbar-header\">\r\n                        <i class=\"fa fa-bars\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-4 text_center mob_head\">\r\n                    <h1><label translate>Setting</label></h1>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"header-rightside\">\r\n                        <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                            <li class=\"dropdown\">\r\n                                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                    <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                    <span><label translate>John Smith</label></span>\r\n                                    <b class=\"caret\"></b>\r\n                                </a>\r\n                                <ul class=\"dropdown-menu\">\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"view btn-sm\"><label translate>View Profile</label></a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"view btn-sm\"><label translate>Logout</label></a>\r\n                                    </li>\r\n                                </ul>\r\n                            </li>\r\n                            <li class=\"dropdown\">\r\n                                <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                    <i class=\"fa fa-language\" aria-hidden=\"true\"></i>\r\n                                </a>\r\n                                <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                                    <li>\r\n                                        <a (click)=\"changeLang('en')\" class=\"view btn-sm\"><label translate>English</label></a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a (click)=\"changeLang('hindi')\" class=\"view btn-sm\"><label translate>Hindi</label></a>\r\n                                    </li>\r\n                                </ul>\r\n                            </li>\r\n                            <li class=\"dropdown\">\r\n                                <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                    <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                </a>\r\n                                <ul class=\"dropdown-menu notify-drop\">\r\n                                    <div class=\"notify-drop-title\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-6\"><label translate>Hiren (<b>2</b>)</label></div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\"><a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a></div>\r\n                                            <div class=\"clearfix\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"drop-content\">\r\n                                        <li>\r\n                                            <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                            <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                            </div>\r\n                                            <div class=\"clearfix\"></div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                            <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                <a href=\"\"><label traslate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                            </div>\r\n                                            <div class=\"clearfix\"></div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                            <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                            </div>\r\n                                            <div class=\"clearfix\"></div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                            <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                            </div>\r\n                                            <div class=\"clearfix\"></div>\r\n                                        </li>\r\n                                    </div>\r\n                                    <div class=\"notify-drop-footer text-center\">\r\n                                        <a href=\"\"><i class=\"fa fa-eye\"></i> <label translate>View All</label></a>\r\n                                    </div>\r\n                                </ul>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/tabs/tab2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabTwoComponent = (function () {
    function TabTwoComponent(translate) {
        this.observable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
        });
    }
    TabTwoComponent.prototype.ngOnDestroy = function () {
        this.observable.unsubscribe();
    };
    TabTwoComponent.prototype.ngOnInit = function () {
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });
        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            });
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
    };
    TabTwoComponent.prototype.ngAfterViewInit = function () {
    };
    return TabTwoComponent;
}());
TabTwoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tab2',
        template: __webpack_require__("../../../../../src/app/dashboard/settings/tabs/tab2.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], TabTwoComponent);

var _a;
//# sourceMappingURL=tab2.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/tabs/tab2.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <div class=\"aside left\">\r\n            <div class=\"dash_logo\">\r\n                <a href=\"#\"><img src=\"/assets/images/settings/logo_dashboard.png\" alt=\"kleveron\" /></a>\r\n            </div>\r\n            <div class=\"aside_nav\">\r\n                <div class=\"sidebar-menu\">\r\n                    <ul class=\"menu\">\r\n                        <li>\r\n                            <h3><label translate>Main</label></h3>\r\n                        </li>\r\n                        <li class=\"active\">\r\n                            <a routerLink=\"/settings\">\r\n                                <img src=\"/assets/images/settings/personal.png\" class=\"icon-img\" />\r\n                                <span><label translate>Personal</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/organisation.png\" class=\"icon-img\" />\r\n                                <span><label translate>Organisation</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/appearance.png\" class=\"icon-img\" />\r\n                                <span><label translate>Appearance</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/apps-nd-plugin.png\" class=\"icon-img\" />\r\n                                <span><label translate>Apps and Plugins</label></span>\r\n                                <!--<span class=\"fa fa-angle-right\" style=\"float: right; position: relative;\"></span>-->\r\n                            </a>\r\n                            <!--<ul id=\"menu-academico-sub\">\r\n                                <li id=\"menu-academico-avaliacoes\"><a href=\"404.html\">404</a></li>\r\n                                <li id=\"menu-academico-boletim\"><a href=\"blank.html\">Blank</a></li>\r\n                            </ul>-->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content_wrap right\">\r\n\r\n            <header class=\"frame_header\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"navbar-header\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text_center mob_head\">\r\n                        <h1><label translate>Setting</label></h1>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                        <span><label translate>John Smith</label></span>\r\n                                        <b class=\"caret\"></b>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>View Profile</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>Logout</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-language\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>English</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>Hindi</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu notify-drop\">\r\n                                        <div class=\"notify-drop-title\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6\"><label translate>Hiren (<b>2</b>)</label></div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\"><a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a></div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"drop-content\">\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                        </div>\r\n                                        <div class=\"notify-drop-footer text-center\">\r\n                                            <a href=\"\"><i class=\"fa fa-eye\"></i> <label translate>View All</label></a>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </header>\r\n            <div class=\"container-fluid bgwhite\">\r\n                <div class=\"row page_header\">\r\n                    <div class=\"col-xs-6\">\r\n                        <h2 class=\"head\"><label translate>Personal</label></h2>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <img src=\"/assets/images/settings/personal.png\" class=\"icon-img pull-right\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row page_content\">\r\n                    <div class=\"onboarding_section container-fluid\">\r\n                        <div class=\"detail_wrapper\">\r\n                            <!-- -------------------------tabs --------------------------- -->\r\n                            <div id=\"detail_tabs\" class=\"detail_nav_menu\">\r\n                                <ul>\r\n                                    <li><a routerLink=\"/settingsmenu/settings\"><label translate>Account</label></a></li>\r\n                                    <li><a routerLink=\"/settingsmenu/settingstab2\"><label translate>Notifications</label></a></li>\r\n                                    <li><a routerLink=\"/settingsmenu/settingstab3\"><label translate>Email Preference</label></a></li>\r\n                                </ul>\r\n                                <div id=\"tabs-2\">\r\n                                    <div class=\"company_details\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit User Profile</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input\" placeholder=\"{{'Chandreshpolra' | translate}}\" type=\"text\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-address-card\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                \r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit Name</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input\" placeholder=\"{{'Chandresh polra' | translate}}\" type=\"text\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-user\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                \r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit Email ID</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input\" placeholder=\"Chandreshpolra@gmail.com\" type=\"email\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-envelope\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit Password</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input password\" placeholder=\"{{'Password' | translate}}\" type=\"password\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-lock\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- -------------------------end tabs --------------------------- -->\r\n                            <div class=\"detail_btn\">\r\n                                <button type=\"button\" class=\"btn save_btn add_acnt\"><label translate>Add New Account</label></button>\r\n                                <button type=\"button\" class=\"btn tab_no next_btn mng_acnt\"><label translate>Manage Accounts</label></button>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <footer class=\"text_center\">\r\n                <h4> <label translate>© 2017 Kleveron. A venture of <a href=\"#\"> SRKay </a> Consulting Group LLP. All Rights Reserved.</label></h4>\r\n            </footer>\r\n\r\n        </div>\r\n        <div class=\"clearfix\">\r\n</div>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/tabs/tab3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabThreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabThreeComponent = (function () {
    function TabThreeComponent(translate) {
        this.observable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });
    }
    TabThreeComponent.prototype.ngOnInit = function () {
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });
        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            });
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
    };
    TabThreeComponent.prototype.ngAfterViewInit = function () {
    };
    TabThreeComponent.prototype.ngOnDestroy = function () {
        //   this.observable.unsubscribe();
    };
    TabThreeComponent.prototype.changeLang = function (lang) {
        console.log(" lang in tab3 ", lang);
        localStorage.setItem("lang", lang);
    };
    return TabThreeComponent;
}());
TabThreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tab3',
        template: __webpack_require__("../../../../../src/app/dashboard/settings/tabs/tab3.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], TabThreeComponent);

var _a;
//# sourceMappingURL=tab3.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/tabs/tab3.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <div class=\"aside left\">\r\n            <div class=\"dash_logo\">\r\n                <a href=\"#\"><img src=\"/assets/images/settings/logo_dashboard.png\" alt=\"kleveron\" /></a>\r\n            </div>\r\n            <div class=\"aside_nav\">\r\n                <div class=\"sidebar-menu\">\r\n                    <ul class=\"menu\">\r\n                        <li>\r\n                            <h3><label translate>Main</label></h3>\r\n                        </li>\r\n                        <li class=\"active\">\r\n                            <a routerLink=\"/settings\">\r\n                                <img src=\"/assets/images/settings/personal.png\" class=\"icon-img\" />\r\n                                <span><label translate>Personal</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/organisation.png\" class=\"icon-img\" />\r\n                                <span><label translate>Organisation</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/appearance.png\" class=\"icon-img\" />\r\n                                <span><label translate>Appearance</label></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript::\">\r\n                                <img src=\"/assets/images/settings/apps-nd-plugin.png\" class=\"icon-img\" />\r\n                                <span><label translate>Apps and Plugins</label></span>\r\n                                <!--<span class=\"fa fa-angle-right\" style=\"float: right; position: relative;\"></span>-->\r\n                            </a>\r\n                            <!--<ul id=\"menu-academico-sub\">\r\n                                <li id=\"menu-academico-avaliacoes\"><a href=\"404.html\">404</a></li>\r\n                                <li id=\"menu-academico-boletim\"><a href=\"blank.html\">Blank</a></li>\r\n                            </ul>-->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content_wrap right\">\r\n\r\n            <header class=\"frame_header\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"navbar-header\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text_center mob_head\">\r\n                        <h1><label translate>Setting</label></h1>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                        <span><label translate>John Smith</label></span>\r\n                                        <b class=\"caret\"></b>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>View Profile</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>Logout</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-language\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('en')\" class=\"view btn-sm\"><label translate>English</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a (click)=\"changeLang('hindi')\" class=\"view btn-sm\"><label translate>Hindi</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu notify-drop\">\r\n                                        <div class=\"notify-drop-title\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6\"><label translate>Hiren (<b>2</b>)</label></div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\"><a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a></div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"drop-content\">\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                        </div>\r\n                                        <div class=\"notify-drop-footer text-center\">\r\n                                            <a href=\"\"><i class=\"fa fa-eye\"></i> <label translate>View All</label></a>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </header>\r\n            <div class=\"container-fluid bgwhite\">\r\n                <div class=\"row page_header\">\r\n                    <div class=\"col-xs-6\">\r\n                        <h2 class=\"head\"><label translate>Personal</label></h2>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <img src=\"/assets/images/settings/personal.png\" class=\"icon-img pull-right\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row page_content\">\r\n                    <div class=\"onboarding_section container-fluid\">\r\n                        <div class=\"detail_wrapper\">\r\n                            <!-- -------------------------tabs --------------------------- -->\r\n                            <div id=\"detail_tabs\" class=\"detail_nav_menu\">\r\n                                <ul>\r\n                                    <li><a routerLink=\"/settingsmenu/settings\"><label translate>Account</label></a></li>\r\n                                    <li><a routerLink=\"/settingsmenu/settingstab2\"><label translate>Notifications</label></a></li>\r\n                                    <li><a routerLink=\"/settingsmenu/settingstab3\"><label translate>Email Preference</label></a></li>\r\n                                </ul>\r\n                                <div id=\"tabs-3\">\r\n                                    <div class=\"company_details\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit User Profile</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input\" placeholder=\"{{'Chandreshpolra' | translate}}\" type=\"text\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-address-card\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                \r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 dtl_row\">\r\n                                                <label class=\"lbl_hdr\" translate>Edit Name</label>\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"cmn_input\" placeholder=\"{{'Chandresh polra' | translate}}\" type=\"text\">\r\n                                                    <span class=\"input-group-addon custom_icn\">\r\n                                                        <span class=\"fa fa-user\"></span>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                            <!-- -------------------------end tabs --------------------------- -->\r\n                            <div class=\"detail_btn\">\r\n                                <button type=\"button\" class=\"btn save_btn add_acnt\"><label translate>Add New Account</label></button>\r\n                                <button type=\"button\" class=\"btn tab_no next_btn mng_acnt\"><label translate>Manage Accounts</label></button>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <footer class=\"text_center\">\r\n                <h4> <label translate>© 2017 Kleveron. A venture of <a href=\"#\"> SRKay </a> Consulting Group LLP. All Rights Reserved.</label></h4>\r\n            </footer>\r\n\r\n        </div>\r\n        <div class=\"clearfix\">\r\n</div>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/tabs/dashtab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashTabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashTabComponent = (function () {
    function DashTabComponent(translate) {
        var _this = this;
        this.observable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(6000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
            _this.opts = localStorage.getItem('opts').split(',');
            console.log("opts", _this.opts);
        });
    }
    DashTabComponent.prototype.ngOnDestroy = function () {
        //this.observable.unscubscribe();
    };
    DashTabComponent.prototype.ngAfterViewInit = function () {
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });
        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            });
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
    };
    return DashTabComponent;
}());
DashTabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashtab',
        template: __webpack_require__("../../../../../src/app/dashboard/tabs/dashtab.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], DashTabComponent);

var _a;
//# sourceMappingURL=dashtab.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/tabs/dashtab.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <div class=\"aside left\">\r\n            <div class=\"dash_logo\">\r\n                <a href=\"#\">\r\n                    <img src=\"/assets/images/settings/logo_dashboard.png\" alt=\"kleveron\" /></a>\r\n            </div>\r\n            <div class=\"aside_nav\">\r\n                <div class=\"sidebar-menu\">\r\n                    <ul class=\"menu\">\r\n                        <li>\r\n                            <h3>\r\n                                <label translate>\r\n                                Main</label></h3>\r\n                        </li>\r\n                        <li class=\"active\"><a routerLink=\"/settingsmenu/settings\">\r\n                            <img src=\"/assets/images/settings/personal.png\" class=\"icon-img\" />\r\n                            <span>\r\n                                <label translate>\r\n                                    Personal</label></span> </a></li>\r\n                        <li><a href=\"javascript::\">\r\n                            <img src=\"/assets/images/settings/organisation.png\" class=\"icon-img\" />\r\n                            <span>\r\n                                <label translate>\r\n                                    Organisation</label></span> </a></li>\r\n                        <li><a href=\"javascript::\">\r\n                            <img src=\"/assets/images/settings/appearance.png\" class=\"icon-img\" />\r\n                            <span>\r\n                                <label translate>\r\n                                    Appearance</label></span> </a></li>\r\n                        <li><a href=\"javascript::\">\r\n                            <img src=\"/assets/images/settings/apps-nd-plugin.png\" class=\"icon-img\" />\r\n                            <span>\r\n                                <label translate>\r\n                                    Apps and Plugins</label></span>\r\n                            <!--<span class=\"fa fa-angle-right\" style=\"float: right; position: relative;\"></span>-->\r\n                        </a>\r\n                            <!--<ul id=\"menu-academico-sub\">\r\n                                <li id=\"menu-academico-avaliacoes\"><a href=\"404.html\">404</a></li>\r\n                                <li id=\"menu-academico-boletim\"><a href=\"blank.html\">Blank</a></li>\r\n                            </ul>-->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content_wrap right\">\r\n            <header class=\"frame_header\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"navbar-header\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text_center mob_head\">\r\n                        <h1><label translate>OnBoarding</label></h1>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right navbar-right\">\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <img src=\"/assets/images/settings/user.png\" alt=\"\" class=\"user-icon\">\r\n                                        <span><label translate>John Smith</label></span>\r\n                                        <b class=\"caret\"></b>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>View Profile</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>Logout</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-language\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>English</label></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\" class=\"view btn-sm\"><label translate>Hindi</label></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu notify-drop\">\r\n                                        <div class=\"notify-drop-title\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6\"><label translate>Hiren (<b>2</b>)</label></div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\"><a href=\"\"><i class=\"fa fa-dot-circle-o\"></i></a></div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"drop-content\">\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"col-md-3 col-sm-3 col-xs-3\"><div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div></div>\r\n                                                <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\r\n                                                    <a href=\"\"><label translate>Ahmet</label></a><p><label translate> Lorem ipsum sit dolor amet consilium. Saat önce</label></p>\r\n                                                </div>\r\n                                                <div class=\"clearfix\"></div>\r\n                                            </li>\r\n                                        </div>\r\n                                        <div class=\"notify-drop-footer text-center\">\r\n                                            <a href=\"\"><i class=\"fa fa-eye\"></i> <label translate>View All</label></a>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </header>\r\n            <div class=\"container-fluid bgwhite\">\r\n                <div class=\"row page_header\">\r\n                    <div class=\"col-xs-6\">\r\n                        <h2 class=\"head\">\r\n                            <label translate>\r\n                                OnBoarding</label></h2>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <img src=\"/assets/images/on-boarding/onbrd-icon.png\" class=\"icon-img pull-right\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row page_content\">\r\n                    <div class=\"onboarding_section\">\r\n                            <div class=\"detail_wrapper\">\r\n                                <!---------------------------tabs ---------------------------- -->\r\n                                <div id=\"detail_tabs\" class=\"detail_nav_menu\">\r\n                                    <ul>\r\n                                        <li><a routerLink=\"/dash/dashboard\">\r\n                                            <label>\r\n                                                <div class=\"tab_no\">\r\n                                                    1</div>\r\n                                                <span translate>Company Details</span></label></a></li>\r\n                                        <li><a routerLink=\"/dash/dashtab\">\r\n                                            <label>\r\n                                                <div class=\"tab_no\">\r\n                                                    2</div>\r\n                                                <span translate>Admin Details</span></label></a></li>\r\n                                    </ul>                  \r\n                                    <div id=\"tabs-2\">\r\n                                        <div class=\"company_details\">\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"{{'Company Name' | translate}}\">\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <textarea id=\"Textarea2\" class=\"cmn_input\" placeholder=\"{{'Company Head Office Address' | translate}}\"></textarea>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"Chandreshpolra@gmail.com\">\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row\">\r\n                                                <input class=\"cmn_input\" placeholder=\"{{'Surat' | translate}}\">\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col selectdiv dtl_row\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\">\r\n                                                        <option value=\"Area of Business\" translate>Area of Business</option>\r\n                                                        <option value=\"abc\" translate>ABC</option>\r\n                                                        <option value=\"xyz\" translate>XYZ</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 klvrn_col selectdiv dtl_row\">\r\n                                                <label>\r\n                                                    <select class=\"cmn_input\">\r\n                                                        <option value=\"Gujarat\" translate>Gujarat</option>\r\n                                                        <option value=\"Maharashtra\" translate>Maharashtra</option>\r\n                                                        <option value=\"Bengal\" translate>Bengal</option>\r\n                                                    </select>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"clearfix\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>          \r\n            </div>\r\n            <footer class=\"text_center\">\r\n                <h4> <label translate>© 2017 Kleveron. A venture of <a href=\"#\"> SRKay </a> Consulting Group LLP. All Rights Reserved.</label></h4>\r\n            </footer>\r\n        </div>\r\n        <div class=\"clearfix\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/headers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return options; });

var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]();
// let url = 'http://localhost:8081/auth/v1/ldap-login';
options.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
options.headers.append('Access-Control-Allow-Origin', '*');
options.headers.append('Content-Type', 'application/json');
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(fb, translate, authguardservice, loginservice) {
        this.fb = fb;
        this.authguardservice = authguardservice;
        this.loginservice = loginservice;
        this.uname = '';
        this.pass = '';
        this.res = [];
        this.observable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });
        this.form = fb.group({
            'username': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(4)])],
        });
        this.username = this.form.controls['username'];
        this.password = this.form.controls['password'];
        // this language will be used as a fallback when a translation isn't found in the current languag
    }
    LoginComponent.prototype.ngOnDestroy = function () {
        //this.observable.unsubscribe();
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var json1 = {
            "username": this.uname,
            "password": this.pass
        };
        console.log(JSON.stringify(json1));
        this.loginservice.getLogins(JSON.stringify(json1));
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login/login.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\r\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\r\n */\r\n \r\n \r\n\r\n \r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 300;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #fff;\r\n    overflow-x: hidden;\r\n}\r\n\r\nimg {\r\n    width: auto;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    margin: 0px auto;\r\n    height: auto;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\np {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n.left {\r\n    float: left;\r\n}\r\n\r\n.right {\r\n    float: right;\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'FontAwesome';\r\n    src: url('https://adibro500.github.io/kleveron1.0/assets/fonts/FontAwesome.otf') format('opentype');\r\n}\r\n\r\nlabel {\r\n    display: inherit;\r\n    font-weight: inherit;\r\n    margin-bottom: 0;\r\n    max-width: inherit;\r\n}\r\n/*       login          */\r\n.login_bg {\r\n    background-color: #f3f4f8;\r\n}\r\n\r\n.login_section {\r\n    background-color: #f3f4f8;\r\n}\r\n\r\n.left_sec {\r\n    width: 45%;\r\n    background-image: url('https://adibro500.github.io/kleveron1.0/assets/images/login/login-bg.png');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    position: fixed;\r\n}\r\n\r\n.left_txt {\r\n    position: absolute;\r\n    color: #fff;\r\n    padding: 108px;\r\n}\r\n\r\n    .left_txt h2 {\r\n        font-size: 40px;\r\n        font-weight: 700;\r\n        line-height: 55px;\r\n        padding-bottom: 30px;\r\n        position: relative;\r\n    }\r\n\r\n        .left_txt h2::after {\r\n            background-color: #fff;\r\n            bottom: 0;\r\n            content: \"\";\r\n            height: 2px;\r\n            left: 0;\r\n            position: absolute;\r\n            width: 48px;\r\n        }\r\n\r\n    .left_txt p {\r\n        font-size: 20px;\r\n        padding-top: 40px;\r\n    }\r\n\r\n.right_sec {\r\n    height: 100%;\r\n    padding-top: 108px;\r\n    position: fixed;\r\n    right: 0;\r\n    text-align: center;\r\n    width: 55%;\r\n}\r\n\r\n    .right_sec .logo {\r\n        padding-bottom: 70px;\r\n    }\r\n\r\n.welcome_txt h2 {\r\n    font-size: 26px;\r\n    color: #333333;\r\n    font-weight: 500;\r\n    line-height: 36px;\r\n    padding-bottom: 54px;\r\n}\r\n\r\n    .welcome_txt h2 highlight {\r\n        color: #f29634;\r\n        display: block;\r\n    }\r\n\r\n.login_input {\r\n    margin: 0 auto;\r\n    width: 478px;\r\n}\r\n\r\n    .login_input input {\r\n        border: 1px solid #dadada;\r\n        border-radius: 4px;\r\n        width: 100%;\r\n        height: 75px;\r\n        font-size: 20px;\r\n        padding-left: 28px;\r\n        padding-right: 75px;\r\n        line-height: 75px;\r\n    }\r\n\r\n        .login_input input.fname {\r\n            background-image: url('https://adibro500.github.io/kleveron1.0/assets/images/login/user-img.png');\r\n            background-repeat: no-repeat;\r\n            background-position: 94% center;\r\n        }\r\n\r\n        .login_input input.pwd {\r\n            background-image: url('https://adibro500.github.io/kleveron1.0/assets/images/login/pwd-img.png');\r\n            background-repeat: no-repeat;\r\n            background-position: 94% center;\r\n        }\r\n\r\n.sign_in {\r\n    padding: 54px 0;\r\n    border-bottom: 1px solid #909090;\r\n}\r\n\r\n    .sign_in span.frgt_pwd {\r\n        vertical-align: middle;\r\n    }\r\n\r\n    .sign_in span.sign_in_btn {\r\n        vertical-align: middle;\r\n    }\r\n\r\n.frgt_pwd.left > a {\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    color: #333;\r\n}\r\n\r\n.frgt_pwd.left {\r\n    padding-top: 20px;\r\n}\r\n\r\n.sign_in .btn {\r\n    background-color: #0b8fcf;\r\n    color: #fff;\r\n    box-shadow: 2.5px 4.33px 10px 0px rgba( 44, 158, 214, 0.30);\r\n    border-radius: 50px;\r\n    padding: 16px 48px;\r\n    font-size: 20px;\r\n    border: none;\r\n}\r\n\r\n.sign_in_img {\r\n    padding-left: 17px;\r\n}\r\n\r\n.need_acnt {\r\n    padding-top: 43px;\r\n}\r\n\r\n    .need_acnt > a {\r\n        color: #333;\r\n        font-size: 20px;\r\n        text-decoration: none;\r\n    }\r\n\r\n.login_section .login_footer {\r\n    border-top: 1px solid #d9daec;\r\n    bottom: 0;\r\n    margin-top: 40px;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n    .login_section .login_footer h4 {\r\n        font-size: 16px;\r\n        color: #333;\r\n        padding: 30px 0;\r\n    }\r\n\r\n        .login_section .login_footer h4 a {\r\n            text-decoration: none;\r\n            color: #333;\r\n        }\r\n\r\n            .login_section .login_footer h4 a:hover {\r\n                color: #0b8fcf;\r\n            }\r\n/*      end login          */\r\n\r\n/*       on boarding          */\r\n.logo_bar {\r\n    height: 75px;\r\n}\r\n\r\n    .logo_bar .logo {\r\n        padding: 16px 0;\r\n    }\r\n\r\n.later_btn {\r\n    padding: 18px 0;\r\n}\r\n\r\n.do_later.btn {\r\n    background-color: transparent;\r\n    border: 1px solid #0b8fcf;\r\n    border-radius: 50px;\r\n    color: #0b8fcf;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    padding: 7px 28px;\r\n}\r\n\r\n    .do_later.btn:hover, .do_later.btn:focus, .do_later.btn.active {\r\n        color: #0b8fcf;\r\n    }\r\n\r\n.do_later span.later_on_img {\r\n    padding-left: 3px;\r\n}\r\n\r\n.onboarding_lbl {\r\n    background-color: #f9fafc;\r\n    height: 80px;\r\n    border-bottom: 1px solid #e0e1f3;\r\n    border-top: 1px solid #e0e1f3;\r\n}\r\n\r\n.onboarding_header h4 {\r\n    font-size: 26px;\r\n    font-weight: 500;\r\n    color: #333;\r\n    padding: 25px 0;\r\n}\r\n\r\n.onboarding_icon {\r\n    padding: 9px 0;\r\n}\r\n\r\n.detail_nav_menu ul {\r\n    border-bottom: 2px solid #e0e1f3;\r\n}\r\n\r\n    .detail_nav_menu ul li {\r\n        display: inline-block;\r\n        list-style: none;\r\n        padding: 38px 25px 23px 25px;\r\n        border-bottom: 2px solid transparent;\r\n        margin-bottom: -2px;\r\n        text-align: center;\r\n    }\r\n\r\n        .detail_nav_menu ul li.ui-tabs-active {\r\n            border-bottom: 2px solid #f29634;\r\n        }\r\n\r\n        .detail_nav_menu ul li a {\r\n            text-decoration: none;\r\n            line-height: normal;\r\n            font-size: 20px;\r\n            color: #333;\r\n            font-weight: 500;\r\n        }\r\n\r\n            .detail_nav_menu ul li a div.tab_no {\r\n                color: #fff;\r\n                font-size: 22px;\r\n                background-color: #0b8fcf;\r\n                height: 35px;\r\n                width: 35px;\r\n                border-radius: 100%;\r\n                text-align: center;\r\n                display: inline-block;\r\n                margin-right: 16px;\r\n            }\r\n\r\n.company_details {\r\n    padding-top: 40px;\r\n}\r\n\r\n.dtl_row {\r\n    padding-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.cmn_input {\r\n    border-color: rgb(220, 229, 233);\r\n    border-radius: 4px;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    color: #333;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    padding: 0 20px;\r\n    line-height: 18px;\r\n    width: 100%;\r\n    height: 50px;\r\n}\r\n\r\n.input-group .cmn_input {\r\n    border-radius: 4px 0 0 4px;\r\n}\r\n\r\n::-webkit-input-placeholder { /* WebKit, Blink, Edge */\r\n    color: #333;\r\n}\r\n\r\n:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\r\n    color: #333;\r\n    opacity: 1;\r\n}\r\n\r\n::-moz-placeholder { /* Mozilla Firefox 19+ */\r\n    color: #333;\r\n    opacity: 1;\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color: #333;\r\n}\r\n\r\ntextarea.cmn_input {\r\n    height: 50px;\r\n    line-height: 18px;\r\n    padding: 12px 20px;\r\n}\r\n\r\nselect.cmn_input {\r\n    height: 50px;\r\n}\r\n\r\n\r\n\r\n.selectdiv {\r\n    position: relative;\r\n}\r\n\r\n    .selectdiv::after {\r\n        color: #bccfd8;\r\n        content: \"\\F0D7\";\r\n        font: 17px/1 FontAwesome;\r\n        height: 34px;\r\n        padding: 15px 0 0 8px;\r\n        pointer-events: none;\r\n        position: absolute;\r\n        right: 30px;\r\n        top: 4px;\r\n    }\r\n\r\n    .selectdiv label {\r\n        display: inline-block;\r\n        width: 100%;\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    /* IE11 hide native button (thanks Matt!) */\r\n    .selectdiv select::-ms-expand {\r\n        display: none;\r\n    }\r\n\r\n    .selectdiv select {\r\n        appearance: none;\r\n        -ms-appearance: none;\r\n        -moz-appearance: none;\r\n        -webkit-appearance: none;\r\n        background-image: none;\r\n    }\r\n\r\n\r\n\r\n.chk_bx label {\r\n    color: #333;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n}\r\n\r\n.custom_chk_bx {\r\n    padding-top: 15px;\r\n}\r\n\r\n.chk_bx {\r\n    padding-right: 20px;\r\n}\r\n/* Base for label styling */\r\n.custom_chk_bx [type=\"checkbox\"]:not(:checked),\r\n.custom_chk_bx [type=\"checkbox\"]:checked {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n    .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label,\r\n    .custom_chk_bx [type=\"checkbox\"]:checked + label {\r\n        position: relative;\r\n        padding-left: 50px;\r\n        cursor: pointer;\r\n        margin-bottom: 0;\r\n    }\r\n\r\n        /* checkbox aspect */\r\n        .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label:before,\r\n        .custom_chk_bx [type=\"checkbox\"]:checked + label:before {\r\n            content: '';\r\n            position: absolute;\r\n            left: 0;\r\n            top: 0;\r\n            width: 23px;\r\n            height: 24px;\r\n            border-style: solid;\r\n            border-width: 2px;\r\n            border-color: rgb(220, 229, 233);\r\n            border-radius: 4px;\r\n            box-shadow: none;\r\n        }\r\n\r\n\r\n\r\n\r\n        /* checked mark aspect */\r\n        .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label::after,\r\n        .custom_chk_bx [type=\"checkbox\"]:checked + label::after {\r\n            color: #0b8fcf;\r\n            font-family: 'FontAwesome';\r\n            content: \"\\F00C\";\r\n            font-size: 16px;\r\n            left: 4px;\r\n            line-height: 100%;\r\n            position: absolute;\r\n            top: 4px;\r\n            transition: all 0.2s ease 0s;\r\n        }\r\n        /* checked mark aspect changes */\r\n        .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label:after {\r\n            opacity: 0;\r\n            -webkit-transform: scale(0);\r\n                    transform: scale(0);\r\n        }\r\n\r\n        .custom_chk_bx [type=\"checkbox\"]:checked + label:after {\r\n            opacity: 1;\r\n            -webkit-transform: scale(1);\r\n                    transform: scale(1);\r\n        }\r\n\r\n\r\n\r\n\r\n.social_icon {\r\n    border-radius: 4px;\r\n    height: 50px;\r\n    padding-top: 13px;\r\n    text-align: center;\r\n    width: 50px;\r\n}\r\n\r\n    .social_icon i {\r\n        color: #fff;\r\n        font-size: 26px;\r\n    }\r\n\r\n.twitter {\r\n    background-color: #1da1f2;\r\n}\r\n\r\n.fb {\r\n    background-color: #4867aa;\r\n}\r\n\r\n.linked_in {\r\n    background-color: #0077b5;\r\n}\r\n\r\n.g__plus {\r\n    background-color: #dd4e42;\r\n}\r\n\r\n.detail_btn {\r\n    text-align: center;\r\n    padding: 30px 0;\r\n}\r\n\r\n.btn {\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    padding: 17px 42px;\r\n}\r\n\r\n    .btn:hover, .btn.active, .btn:focus {\r\n        color: #fff;\r\n    }\r\n\r\n.save_btn {\r\n    background-color: #f09537;\r\n    box-shadow: 0 5px 10px -4px rgb( 240, 149, 55 );\r\n    margin: 0 10px;\r\n}\r\n\r\n.next_btn {\r\n    background-color: #0b8fcf;\r\n    box-shadow: 0 5px 10px -4px rgb( 44, 158, 214 );\r\n    margin: 0 10px;\r\n}\r\n\r\n.login_footer {\r\n    border-top: 1px solid #d9daec;\r\n    text-align: center;\r\n}\r\n\r\n    .login_footer h4 {\r\n        font-size: 16px;\r\n        color: #333;\r\n        padding: 30px 0;\r\n        font-weight: 400;\r\n    }\r\n\r\n        .login_footer h4 a {\r\n            text-decoration: none;\r\n            color: #333;\r\n        }\r\n\r\n            .login_footer h4 a:hover {\r\n                color: #0b8fcf;\r\n            }\r\n\r\n.btn:active:focus, .btn:active:hover, .btn:focus {\r\n    box-shadow: none;\r\n    outline: 0;\r\n}\r\n.social_sec\r\n{\r\n    padding-top:40px;\r\n}\r\n.onboarding_section .chk_bx {\r\n    display: block;\r\n    padding-bottom: 10px;\r\n    padding-right: 0;\r\n}\r\n\r\n/*       settings          */\r\na:hover, a:focus, li:focus {\r\n    text-decoration: none;\r\n    outline: 0;\r\n}\r\n\r\n.text_center {\r\n    text-align: center;\r\n}\r\n\r\n.wrapper {\r\n    position: relative;\r\n}\r\n\r\n.aside {\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 270px;\r\n    background: #edf2f8;\r\n    transition: all 0.4s ease 0s;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n.hidemenu .aside {\r\n    width: 0px;\r\n    z-index: 9;\r\n}\r\n\r\n.aside_nav {\r\n    overflow: auto;\r\n}\r\n\r\n.hidemenu .aside_nav {\r\n    display: none;\r\n    transition: all 0.4s ease 0s;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n.dash_logo {\r\n    background: #ffffff;\r\n    text-align: center;\r\n    margin: 0px auto;\r\n    padding: 20px 0;\r\n    height: 75px;\r\n}\r\n\r\n.content_wrap {\r\n    padding-left: 270px;\r\n    width: 100%;\r\n    transition: all 0.4s ease 0s;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n.hidemenu .content_wrap {\r\n    padding-left: 0px;\r\n}\r\n\r\n.bgwhite {\r\n    background-color: #ffffff;\r\n    margin-top: 75px;\r\n    transition: all 0.4s ease 0s;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n.frame_header {\r\n    background-color: #017db9;\r\n    height: 75px;\r\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\n    padding: 15px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 270px;\r\n    right: 0;\r\n    z-index: 9;\r\n    transition: all 0.4s ease 0s;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n.hidemenu .frame_header {\r\n    left: 0;\r\n}\r\n\r\n.frame_header a {\r\n    color: #ffffff;\r\n}\r\n\r\n.frame_header .header-rightside {\r\n    padding-right: 15px;\r\n}\r\n\r\n.navbar-header {\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n    .navbar-header i {\r\n        color: #ffffff;\r\n        font-size: 24px;\r\n    }\r\n\r\n.list-inline > li {\r\n    border-left: 1px solid #333333;\r\n    padding: 0px 20px;\r\n    margin: 5px auto;\r\n    font-weight: 400;\r\n    line-height: 150%;\r\n    position:relative;\r\n}\r\n\r\n    .list-inline > li:first-child {\r\n        border-left: 0px solid #ffffff;\r\n    }\r\n\r\n    .list-inline > li > a > img {\r\n        border-radius: 20px;\r\n        -moz-border-radius: 20px;\r\n        -webkit-border-radius: 20px;\r\n        max-width: none;\r\n    }\r\n\r\n    .list-inline > li > a > .user-icon {\r\n        padding-right: 5px;\r\n    }\r\n\r\n    .list-inline > li a {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .list-inline > li > .dropdown-menu > li a {\r\n        color: #017db9;\r\n    }\r\n\r\n.list-inline .drop-content > li {\r\n    border-bottom: 1px solid #e2e2e2;\r\n    margin: 10px auto;\r\n}\r\n\r\n.frame_header .notify-drop {\r\n    min-width: 330px;\r\n    background-color: #fff;\r\n    min-height: 360px;\r\n    max-height: 360px;\r\n    margin-top: 0;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.frame_header .notify-drop-title {\r\n    border-bottom: 1px solid #e2e2e2;\r\n    padding: 5px 15px 10px 15px;\r\n}\r\n\r\n.frame_header .drop-content {\r\n    min-height: 280px;\r\n    max-height: 280px;\r\n    overflow-y: auto;\r\n    padding: 0px;\r\n}\r\n\r\n.frame_header .notify-drop .fa, .frame_header .notify-drop a {\r\n    color: #333333;\r\n}\r\n\r\n.frame_header h1 {\r\n    font-size: 26px;\r\n    line-height: 37px;\r\n    color: #ffffff;\r\n    padding: 5px 0;\r\n}\r\n\r\n.page_header {\r\n    background-color: #f9fafc;\r\n    padding: 0px 25px;\r\n}\r\n\r\n.page_content {\r\n    padding: 0px 25px;\r\n}\r\n\r\nh2.head {\r\n    font-size: 26px;\r\n    margin: 25px 0px;\r\n}\r\n\r\n.page_header .icon-img {\r\n    margin: 15px 0px;\r\n    width: 44px;\r\n}\r\n\r\n.sidebar-menu {\r\n    color: #333333;\r\n    z-index: 999;\r\n}\r\n\r\n.menu {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n    .menu li {\r\n        margin: 0;\r\n        font-size: 12px;\r\n        padding: 0;\r\n        transition: all 0.5s ease 0s;\r\n        transition: all 0.5s ease;\r\n        border-left: 3px solid transparent;\r\n    }\r\n\r\n        .menu li h3 {\r\n            text-align: center;\r\n            font-size: 26px;\r\n            line-height: 150%;\r\n            padding: 15px 0px;\r\n            margin: 0 35px;\r\n            color: #333333;\r\n            border-bottom: 1px solid #ced0da;\r\n        }\r\n\r\n        .menu li ul {\r\n            opacity: 0;\r\n            height: 0px;\r\n        }\r\n\r\n        .menu li a {\r\n            position: relative;\r\n            display: block;\r\n            padding: 25px 10px;\r\n            margin: 0 35px;\r\n            color: #333333;\r\n            white-space: nowrap;\r\n            z-index: 2;\r\n            font-size: 16px;\r\n            font-weight: 500;\r\n            text-align: center;\r\n            border-bottom: 1px solid #ced0da;\r\n            text-transform: uppercase;\r\n            text-decoration: none;\r\n        }\r\n\r\n        .menu li:hover {\r\n            border-left: 3px solid #ffffff;\r\n            transition: border-left 250ms ease-in-out;\r\n            -webkit-transition: border-left 250ms ease-in-out;\r\n        }\r\n\r\n        .menu li a:hover {\r\n            color: #f09537;\r\n            transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\r\n            -webkit-transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\r\n        }\r\n\r\n        .menu li.active {\r\n            border-left: 3px solid #f09537;\r\n            transition: border-left 250ms ease-in-out;\r\n        }\r\n\r\n            .menu li.active a {\r\n                color: #f09537;\r\n            }\r\n\r\n    .menu ul li {\r\n        background-color: #edf2f8;\r\n    }\r\n\r\n    .menu ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .menu li ul {\r\n        position: absolute;\r\n        visibility: hidden;\r\n        left: 100%;\r\n        top: 20px;\r\n        background-color: #2b303a;\r\n        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\r\n        opacity: 0;\r\n        transition: opacity 0.1s linear;\r\n        border-top: 1px solid rgba(69, 74, 84, 0.7);\r\n    }\r\n\r\n    .menu li:hover > ul {\r\n        visibility: visible;\r\n        opacity: 1;\r\n    }\r\n\r\n    .menu li li ul {\r\n        right: 100%;\r\n        visibility: hidden;\r\n        top: -1px;\r\n        opacity: 0;\r\n        transition: opacity 0.1s linear;\r\n    }\r\n\r\n    .menu li li:hover ul {\r\n        visibility: visible;\r\n        opacity: 1;\r\n    }\r\n\r\n    /*.menu .fa {\r\n        margin-bottom: 10px;\r\n        font-size: 1.8em;\r\n        display: block;\r\n    }*/\r\n    .menu .icon-img {\r\n        margin-bottom: 10px;\r\n        width: 44px;\r\n        display: block;\r\n    }\r\n\r\n.menu {\r\n    padding: 10px 0px 10px 0px;\r\n}\r\n\r\nfooter {\r\n    border-top: 2px solid #d9daec;\r\n    padding: 0px 5px;\r\n}\r\n\r\n    footer h4 {\r\n        margin: 25px auto;\r\n        color: #333333;\r\n        font-size: 16px;\r\n        line-height: 140%;\r\n    }\r\n\r\n.detail_nav_menu .company_details label.lbl_hdr {\r\n    color: #78909c;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    margin-bottom: 16px;\r\n    display: block;\r\n}\r\n\r\n\r\n.slct_lbl.selectdiv::after {\r\n    top: 41px;\r\n}\r\n\r\n.input-group .cmn_input {\r\n    border-right: 0 none !important;\r\n}\r\n\r\n.input-group-addon.custom_icn {\r\n    background: transparent none repeat scroll 0 0;\r\n    border-color: rgb(220, 229, 233);\r\n    border-width: 2px;\r\n    margin-left: -2px;\r\n}\r\n\r\n.page_content .input-group .input-group-addon .fa {\r\n    color: #bccfd8;\r\n    font-size: 16px;\r\n}\r\n\r\ninput:focus, textarea:focus, select:focus {\r\n    outline: 0px;\r\n}\r\n/*      admin onboard          */\r\n.custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::before, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::before {\r\n    height: 50px;\r\n    width: 50px;\r\n    margin-left: 40px;\r\n}\r\n\r\n.custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::after, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::after {\r\n    font-size: 22px;\r\n    left: 53px;\r\n    top: 14px;\r\n}\r\n\r\n.admin_onboard .social_icon {\r\n    width: auto;\r\n    margin: 0 auto;\r\n}\r\n\r\n.custom_chk_bx.admi_chk {\r\n    padding-top: 0;\r\n}  \r\n\r\n\r\n@media screen and (max-width: 1600px) {\r\n    /*     login      */\r\n    .left_txt h2 {\r\n        font-size: 26px;\r\n        line-height: 34px;\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .left_txt p {\r\n        font-size: 16px;\r\n        padding-top: 30px;\r\n    }\r\n\r\n    .login_section .logo img {\r\n        width: 24%;\r\n    }\r\n\r\n    .login_input {\r\n        width: 398px;\r\n    }\r\n\r\n    .login_section .logo {\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .welcome_txt h2 {\r\n        font-size: 21px;\r\n        line-height: 27px;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .login_input input {\r\n        font-size: 16px;\r\n        height: 53px;\r\n        padding-left: 18px;\r\n        padding-right: 65px;\r\n        line-height: 53px;\r\n    }\r\n\r\n        .login_input input.fname {\r\n            background-size: 5% auto;\r\n        }\r\n\r\n        .login_input input.pwd {\r\n            background-size: 4.5% auto;\r\n        }\r\n\r\n    .sign_in {\r\n        padding: 40px 0;\r\n    }\r\n\r\n        .sign_in .frgt_pwd.left > a {\r\n            font-size: 14px;\r\n        }\r\n\r\n        .sign_in .btn {\r\n            font-size: 16px;\r\n            padding: 12px 40px;\r\n        }\r\n\r\n    .need_acnt {\r\n        padding-top: 30px;\r\n    }\r\n\r\n        .need_acnt > a {\r\n            font-size: 16px;\r\n        }\r\n\r\n    .login_section .login_footer h4 {\r\n        font-size: 13px;\r\n        padding: 26px 0;\r\n    }\r\n    /*      admin onboard          */\r\n\r\n    .admin_onboard .chk_bx {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .admin_onboard .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label, .admin_onboard .custom_chk_bx [type=\"checkbox\"]:checked + label {\r\n        padding-left: 28px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1440px) {\r\n    /*       on boarding          */\r\n    .later_btn .btn {\r\n        font-size: 12px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    .later_btn {\r\n        padding: 21px 0px;\r\n    }\r\n\r\n    .onboarding_header h4 {\r\n        font-size: 23px;\r\n        padding: 26px 0;\r\n    }\r\n\r\n    .detail_nav_menu ul li a {\r\n        font-size: 18px;\r\n    }\r\n\r\n        .detail_nav_menu ul li a div.tab_no {\r\n            font-size: 20px;\r\n            height: 33px;\r\n            width: 33px;\r\n        }\r\n\r\n    .cmn_input {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .chk_bx label {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .deatils_btn.btn {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .login_footer h4 {\r\n        font-size: 14px;\r\n    }\r\n\r\n    /*     settings      */\r\n    .frame_header h1 {\r\n        font-size: 24px;\r\n        line-height: 32px;\r\n    }\r\n\r\n    h2.head {\r\n        margin: 20px 0px;\r\n        font-size: 24px;\r\n    }\r\n\r\n    .page_header .icon-img {\r\n        margin: 10px 0px;\r\n        width: 40px;\r\n    }\r\n\r\n    .menu {\r\n        padding: 10px 0px 10px 0px;\r\n    }\r\n\r\n        .menu li h3 {\r\n            font-size: 24px;\r\n            padding: 10px 0px;\r\n        }\r\n\r\n        .menu li a {\r\n            padding: 20px 10px;\r\n            font-size: 14px;\r\n        }\r\n\r\n        .menu .icon-img {\r\n            width: 38px;\r\n        }\r\n    /*      admin onboard          */\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::before, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::before {\r\n        margin-left: 0px;\r\n    }\r\n\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::after, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::after {\r\n        left: 14px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1366px) {\r\n    /*     login      */\r\n    .left_txt {\r\n        padding-top: 70px;\r\n    }\r\n\r\n        .left_txt h2 {\r\n            font-size: 22px;\r\n            line-height: 28px;\r\n        }\r\n\r\n        .left_txt p {\r\n            font-size: 15px;\r\n            padding-top: 24px;\r\n        }\r\n\r\n    .right_sec {\r\n        padding-top: 90px;\r\n    }\r\n\r\n    .login_section .logo, .welcome_txt h2 {\r\n        padding-bottom: 30px;\r\n    }\r\n\r\n    .welcome_txt h2 {\r\n        font-size: 18px;\r\n        line-height: 23px;\r\n    }\r\n\r\n    .sign_in {\r\n        padding: 30px 0;\r\n    }\r\n\r\n    .login_input {\r\n        width: 363px;\r\n    }\r\n\r\n        .login_input input {\r\n            height: 46px;\r\n            line-height: 46px;\r\n        }\r\n\r\n            .login_input input.fname, .login_input input.pwd {\r\n                font-size: 14px;\r\n            }\r\n\r\n    .frgt_pwd.left > a {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .frgt_pwd.left {\r\n        padding-top: 14px;\r\n    }\r\n\r\n    .sign_in .btn {\r\n        font-size: 14px;\r\n        padding: 11px 37px;\r\n    }\r\n\r\n    .sign_in_img {\r\n        padding-left: 8px;\r\n    }\r\n\r\n        .sign_in_img > img {\r\n            width: 26%;\r\n        }\r\n\r\n    .need_acnt > a {\r\n        font-size: 15px;\r\n    }\r\n\r\n    .need_acnt {\r\n        padding-top: 20px;\r\n    }\r\n\r\n    .login_section .login_footer h4 {\r\n        font-size: 12px;\r\n        padding: 18px 0;\r\n    }\r\n    /*       on boarding          */\r\n    .selectdiv::after {\r\n        top: 2px;\r\n    }\r\n\r\n    /*     settings      */\r\n\r\n    .dash_logo {\r\n        padding: 15px 0;\r\n        height: 65px;\r\n    }\r\n\r\n    .frame_header {\r\n        height: 65px;\r\n        padding: 10px 15px;\r\n    }\r\n\r\n    .bgwhite {\r\n        margin-top: 65px;\r\n    }\r\n\r\n    .frame_header h1 {\r\n        font-size: 22px;\r\n    }\r\n\r\n    h2.head {\r\n        margin: 15px 0px;\r\n        font-size: 22px;\r\n    }\r\n\r\n    .page_header, .page_content {\r\n        padding: 0px 15px;\r\n    }\r\n\r\n        .page_header .icon-img {\r\n            margin: 10px 0px;\r\n            width: 30px;\r\n        }\r\n\r\n    .menu {\r\n        padding: 4px 0px 10px 0px;\r\n    }\r\n\r\n        .menu li h3 {\r\n            font-size: 24px;\r\n            padding: 8px 0px;\r\n        }\r\n\r\n        .menu li h3 {\r\n            font-size: 22px;\r\n        }\r\n\r\n        .menu li a {\r\n            font-size: 14px;\r\n        }\r\n}\r\n\r\n@media screen and (max-width: 1280px) {\r\n    /*       on boarding          */\r\n    .selectdiv::after {\r\n        top: -1px;\r\n    }\r\n\r\n    .onboarding_header h4 {\r\n        font-size: 20px;\r\n        padding: 28px 0;\r\n    }\r\n\r\n    .detail_nav_menu ul li a {\r\n        font-size: 16px;\r\n    }\r\n\r\n        .detail_nav_menu ul li a div.tab_no {\r\n            font-size: 17px;\r\n            height: 30px;\r\n            padding-top: 2px;\r\n            width: 30px;\r\n        }\r\n\r\n    .cmn_input {\r\n        font-size: 13px;\r\n    }\r\n\r\n    .chk_bx label {\r\n        font-size: 13px;\r\n    }\r\n\r\n    .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label, .custom_chk_bx [type=\"checkbox\"]:checked + label {\r\n        padding-left: 40px;\r\n    }\r\n\r\n        .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label::before, .custom_chk_bx [type=\"checkbox\"]:checked + label::before {\r\n            height: 20px;\r\n            top: -2px;\r\n            width: 20px;\r\n        }\r\n\r\n        .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label::after, .custom_chk_bx [type=\"checkbox\"]:checked + label::after {\r\n            font-size: 13px;\r\n            left: 4px;\r\n            top: 2px;\r\n        }\r\n\r\n    .social_icon i {\r\n        font-size: 23px;\r\n    }\r\n\r\n\r\n\r\n    /*.btn {\r\n        font-size: 16px;\r\n        padding: 13px 37px;\r\n    }*/\r\n\r\n    .login_footer h4 {\r\n        font-size: 13px;\r\n        padding: 24px 0;\r\n    }\r\n    .list-inline > li {\r\n        padding: 0px 10px;\r\n    }\r\n    /*     setting      */\r\n    footer h4 {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1199px) {\r\n    /*     login      */\r\n    .left_txt {\r\n        padding-left: 46px;\r\n        padding-right: 46px;\r\n    }\r\n    /*     settings      */\r\n    .list-inline > li {\r\n        padding: 0px 10px;\r\n    }\r\n\r\n        .list-inline > li a {\r\n            font-size: 12px;\r\n        }\r\n\r\n    /*      admin onboard          */\r\n    .admin_onboard .chk_bx {\r\n        display: block;\r\n    }\r\n    .admin_onboard .custom_chk_bx.admi_chk {\r\n        padding-top: 2px;\r\n    }\r\n    \r\n   .chk_bx.chk_top {\r\n        padding-bottom: 5px;\r\n    }\r\n    .admin_onboard .social_icon {\r\n     \r\n        width: 50px;\r\n    }\r\n    .admin_onboard .custom_chk_bx {\r\n        padding-top: 5px;\r\n    }\r\n    .list-inline > li > a > .user-icon {\r\n        padding-right: 0;\r\n        width: 36px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n    /*     settings      */\r\n    .aside {\r\n        width: 0px;\r\n    }\r\n\r\n    .content_wrap {\r\n        padding-left: 0px;\r\n        width: 100%;\r\n    }\r\n\r\n    .aside_nav {\r\n        display: none;\r\n    }\r\n\r\n    .hidemenu .aside_nav {\r\n        display: block;\r\n    }\r\n\r\n    .hidemenu .aside {\r\n        width: 170px;\r\n        top: 65px;\r\n    }\r\n\r\n    .dash_logo {\r\n        padding: 15px 0;\r\n        height: 55px;\r\n    }\r\n\r\n        .dash_logo img {\r\n            width: 120px;\r\n        }\r\n\r\n    .hidemenu .bgwhite, .hidemenu footer {\r\n        padding-left: 185px;\r\n    }\r\n\r\n    .frame_header {\r\n        position: fixed;\r\n        left: 0;\r\n    }\r\n\r\n    .bgwhite {\r\n        margin-top: 65px;\r\n    }\r\n    /*.menu .fa {\r\n        font-size: 1.4em;\r\n        margin-bottom:5px;\r\n    }*/\r\n    .menu .icon-img {\r\n        margin-bottom: 5px;\r\n        width: 34px;\r\n    }\r\n\r\n    .menu li a {\r\n        padding: 15px;\r\n        font-size: 12px;\r\n        white-space: normal;\r\n        margin: 0 15px;\r\n    }\r\n\r\n    .menu li h3 {\r\n        font-size: 22px;\r\n        margin: 0 15px;\r\n    }\r\n\r\n    .page_header, .page_content {\r\n        padding: 0px 10px;\r\n    }\r\n\r\n\r\n\r\n    /*       on boarding          */\r\n    .chk_bx {\r\n        padding-right: 0;\r\n        display: block;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    .custom_chk_bx {\r\n        padding-top: 0;\r\n    }\r\n\r\n    .chk_bx:last-child {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label, .custom_chk_bx [type=\"checkbox\"]:checked + label {\r\n        padding-left: 28px;\r\n    }\r\n    /*      admin onboard          */\r\n    .admin_onboard .custom_chk_bx {\r\n        padding-top: 0;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n    /*     login      */\r\n    .left_sec {\r\n        display: none;\r\n    }\r\n\r\n    .right_sec {\r\n        width: 100%;\r\n    }\r\n\r\n    .login_section .logo img {\r\n        width: auto;\r\n    }\r\n\r\n    .login_section .logo {\r\n        padding-bottom: 50px;\r\n    }\r\n\r\n    .welcome_txt h2 {\r\n        font-size: 20px;\r\n        line-height: 25px;\r\n        padding-bottom: 50px;\r\n    }\r\n\r\n    .login_input {\r\n        width: 440px;\r\n    }\r\n\r\n        .login_input input {\r\n            height: 56px;\r\n            line-height: 56px;\r\n        }\r\n\r\n\r\n            .login_input input.fname, .login_input input.pwd {\r\n                font-size: 16px;\r\n            }\r\n\r\n    .sign_in {\r\n        padding: 50px 0;\r\n    }\r\n\r\n    .frgt_pwd.left > a {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .sign_in .btn {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .need_acnt > a {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .login_section .login_footer h4 {\r\n        font-size: 14px;\r\n        padding: 24px 0;\r\n    }\r\n    /*       on boarding          */\r\n\r\n\r\n    .chk_bx {\r\n        padding-right: 5px;\r\n    }\r\n\r\n    .custom_chk_bx [type=\"checkbox\"]:not(:checked) + label, .custom_chk_bx [type=\"checkbox\"]:checked + label {\r\n        padding-left: 24px;\r\n    }\r\n\r\n    .login_footer {\r\n        margin-top: 44px;\r\n    }\r\n    /*     admin onboard      */\r\n    .admin_onboard .custom_chk_bx {\r\n        padding-top: 2px;\r\n    }\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::before, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::before {\r\n        margin-left: -14px;\r\n    }\r\n    .admin_onboard .social_icon {\r\n        margin-left: -7px;\r\n        \r\n    }\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::after, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::after {\r\n        left: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    /*     login      */\r\n    .right_sec {\r\n        padding-top: 20px;\r\n        position: relative;\r\n    }\r\n\r\n    .login_section .logo {\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n        .login_section .logo img {\r\n            width: 190px;\r\n        }\r\n\r\n    .welcome_txt h2 {\r\n        font-size: 18px;\r\n        line-height: 24px;\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .login_input {\r\n        width: 290px;\r\n    }\r\n\r\n    .frgt_pwd.left {\r\n        display: block;\r\n        padding: 0 0 15px 0;\r\n        width: 100%;\r\n    }\r\n\r\n    .btn_sign_in.right {\r\n        display: block;\r\n        width: 100%;\r\n    }\r\n\r\n\r\n    .login_section .login_footer h4 {\r\n        font-size: 12px;\r\n        padding: 24px 17px;\r\n        line-height: 17px;\r\n    }\r\n\r\n    .sign_in {\r\n        padding: 20px 0;\r\n    }\r\n\r\n    .login_section .login_footer {\r\n        position: relative;\r\n        margin-top: 80px;\r\n    }\r\n    /*       on boarding          */\r\n    .logo_bar .logo {\r\n        padding: 25px 0;\r\n    }\r\n\r\n    .later_btn {\r\n        padding: 21px 0;\r\n    }\r\n\r\n    .logo.left img {\r\n        width: 125px;\r\n    }\r\n\r\n\r\n\r\n    .detail_nav_menu ul li a div.tab_no {\r\n        display: block;\r\n        margin: 0 auto;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .detail_nav_menu ul li {\r\n        padding: 20px 10px 20px 10px;\r\n    }\r\n\r\n        .detail_nav_menu ul li:last-child {\r\n            padding-right: 0px;\r\n        }\r\n\r\n    .custom_chk_bx {\r\n        padding-top: 0;\r\n    }\r\n\r\n    .chk_bx {\r\n        padding-bottom: 20px;\r\n        padding-right: 0;\r\n        display: block;\r\n    }\r\n\r\n        .chk_bx:last-child {\r\n            padding-bottom: 0;\r\n        }\r\n\r\n    .detail_btn {\r\n        padding-bottom: 30px;\r\n    }\r\n\r\n    .save_btn {\r\n        margin: 0;\r\n    }\r\n\r\n    .btn {\r\n        font-size: 16px;\r\n        padding: 14px 34px;\r\n    }\r\n\r\n    .login_footer {\r\n        margin-top: 30px;\r\n    }\r\n\r\n        .login_footer h4 {\r\n            line-height: 20px;\r\n            padding: 20px 0;\r\n        }\r\n\r\n\r\n    /*     settings      */\r\n\r\n    .menu {\r\n        padding: 5px 0px 10px 0px;\r\n    }\r\n\r\n    .frame_header {\r\n        height: 95px;\r\n        padding: 5px 5px;\r\n        position: fixed;\r\n    }\r\n\r\n    .navbar-header {\r\n        position: absolute;\r\n        left: 15px;\r\n    }\r\n\r\n    .frame_header .header-rightside {\r\n        padding-right: 5px;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .frame_header h1 {\r\n        font-size: 18px;\r\n        position: relative;\r\n        margin-top: 45px;\r\n    }\r\n\r\n    .bgwhite {\r\n        margin-top: 95px;\r\n    }\r\n\r\n    .hidemenu .aside {\r\n        top: 95px;\r\n    }\r\n\r\n    .frame_header .notify-drop {\r\n        min-width: 230px;\r\n        max-height: 230px;\r\n        margin-left: -240px;\r\n        margin-right: 2px;\r\n    }\r\n\r\n    h2.head {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .hidemenu .bgwhite {\r\n        padding-left: 15px;\r\n    }\r\n\r\n    .hidemenu footer {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .page_header, .page_content {\r\n        padding: 0px 0px;\r\n    }\r\n\r\n    .btn.add_acnt, .btn.mng_acnt {\r\n        margin-bottom: 10px;\r\n    }\r\n    /*     admin onboard      */\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::before, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::before {\r\n        margin-left: 15px;\r\n    }\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::after, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::after {\r\n        left: 29px;\r\n    }\r\n    .admin_onboard .social_icon {\r\n        margin-left: 7px;\r\n    }\r\n    .col-xs-4.text_center.mob_head {\r\n        width: 70%;\r\n        left:15%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    /* setting */\r\n    .page_content .onboarding_section .detail_nav_menu ul li {\r\n        padding: 10px 10px;\r\n        width: 100%;\r\n    }\r\n\r\n        .page_content .onboarding_section .detail_nav_menu ul li.ui-tabs-active {\r\n            background: #f2f2f2;\r\n        }\r\n    /*     admin onboard      */\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::before, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::before {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .admin_onboard .social_icon {\r\n        margin-left: 0;\r\n    }\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::after, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::after {\r\n        left: 14px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"login_bg\">\r\n    <!-- login section -->\r\n    <div class=\"login_section\">\r\n        <div class=\"left_sec left\">\r\n\r\n            <div class=\"left_txt\">\r\n                <div class=\"container-fluid\">\r\n                    <h2>\r\n                        <label translate>\r\n                            Lorem ipsum dolor sitame consectetur adipis.\r\n                        </label>\r\n                    </h2>\r\n                    <p>\r\n                        <label translate>\r\n                            Duis aute irure dolor in reprehenderit voluptate velitesse cillum dolore eu fugiat nulla pariatur.\r\n                        </label>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"right_sec right\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"logo\">\r\n                    <a href=\"#\"><img src=\"/assets/images/logo.png\" alt=\"\" /></a>\r\n                </div>\r\n                <div class=\"welcome_txt\">\r\n                    <h2>\r\n                        <label>\r\n                            <div >\r\n                                <span class=\"highlight\" translate>Welcome back!</span><span translate>Please login to your account.</span>\r\n                            </div> </label>\r\n                    </h2>\r\n                </div>\r\n                <div class=\"login_input\">\r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" name=\"form\">\r\n                            <div class=\"form-group row\" [ngClass]=\"{'has-error': (!username.valid && username.touched), 'has-success': (username.valid && username.touched)}\">\r\n                        <div class=\"field\">\r\n                        <input [formControl]=\"username\" type=\"text\" name=\"username\" id=\"username\" class=\"username\" placeholder=\"{{'Username' | translate}}\" [(ngModel)]=\"uname\">\r\n                    </div>\r\n                            </div>\r\n                            <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n                    <div class=\"field\">\r\n                        <input [formControl]=\"password\" type=\"password\" name=\"password\" id=\"password\" class=\"password\" placeholder=\"{{'Password' | translate}}\" [(ngModel)]=\"pass\">\r\n                    </div>\r\n                            </div>\r\n\r\n                    <div class=\"sign_in\">\r\n                        <span class=\"frgt_pwd left\"><a href=\"#\"><label translate>Forgot Password</label></a></span>\r\n                        <span class=\"btn_sign_in right\">\r\n                            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn sign_in_btn\" routerLink=\"/dash/dashboard\">\r\n\r\n                                <label>\r\n                                    <span translate>Sign In</span><span class=\"sign_in_img\">\r\n                                        <img src=\"/assets/images/login/sign-in-img.png\" />\r\n                                    </span>\r\n                                </label>\r\n                            </button>\r\n\r\n                        </span>\r\n\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    </form>\r\n                    <div class=\"need_acnt\">\r\n                        <a href=\"#\"><label translate>Need An Account?</label></a>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"login_footer\">\r\n                <h4><label translate> © 2017 Kleveron. A venture of <a href=\"#\" translate> SRKay </a> Consulting Group LLP. All Rights Reserved.</label></h4>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <!-- end login section -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headers__ = __webpack_require__("../../../../../src/app/login/headers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getLogins = function (logindata) {
        return this.http.post("http://localhost:3000/login-credentials", logindata, __WEBPACK_IMPORTED_MODULE_3__headers__["a" /* options */]).map(function (res) { return res.text(); }).subscribe(function (data) { return console.log(data); });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/assets/styles/controls.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom_title \r\n{\r\n   background-color:#0b8fcf;\r\n   height:65px;\r\n  \r\n}\r\n.custom_title h4{\r\n   font-size:20px;\r\n   text-align:center;\r\n   color:#fff;\r\n   padding:21px 0;\r\n}\r\n.btn {\r\n    border: medium none;\r\n    border-radius: 50px;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    padding: 17px 42px;\r\n    margin: 0 10px;\r\n}\r\n\r\n    .btn:hover, .btn.active, .btn:focus {\r\n        color: #fff;\r\n    }\r\n\r\n.btn3:hover, .btn3.active, .btn3:focus {\r\n    color: #333;\r\n}\r\n\r\n.btn1 {\r\n    background-color: #f09537;\r\n    box-shadow: 0 5px 10px -4px rgb(240, 149, 55);\r\n}\r\n\r\n.btn2 {\r\n    background-color: #0b8fcf;\r\n    box-shadow: 0 5px 10px -4px rgb(44, 158, 214);\r\n}\r\n\r\n.btn3 {\r\n    background-color: transparent;\r\n    border: 1px solid #333;\r\n    border-radius: 50px;\r\n    color: #333;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    padding: 5px 30px;\r\n}\r\n\r\n.controls {\r\n    padding-top: 50px;\r\n}\r\n\r\nlabel.lbl_hdr {\r\n    color: #78909c;\r\n    display: block;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.custom_chk_bx [type=\"checkbox\"]:not(:checked) + label::before, .custom_chk_bx [type=\"checkbox\"]:checked + label::before {\r\n    left: 14px;\r\n}\r\n\r\n.custom_chk_bx [type=\"checkbox\"]:not(:checked) + label::after, .custom_chk_bx [type=\"checkbox\"]:checked + label::after {\r\n    color: #0b8fcf;\r\n    content: \"\\F00C\";\r\n    font-family: \"FontAwesome\";\r\n    font-size: 16px;\r\n    left: 17px;\r\n    line-height: 100%;\r\n    position: absolute;\r\n    top: 4px;\r\n    transition: all 0.2s ease 0s;\r\n}\r\n\r\n.custom_chk_bx {\r\n    padding: 50px 0;\r\n}\r\n\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::after, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::after {\r\n        left: 28px;\r\n    }\r\n\r\n    .custom_chk_bx.admi_chk [type=\"checkbox\"]:not(:checked) + label::before, .custom_chk_bx.admi_chk [type=\"checkbox\"]:checked + label::before {\r\n        margin-left: 0px;\r\n    }\r\n/****** radio button *******/\r\n.custom_radio {\r\n    padding-right: 30px;\r\n}\r\n\r\n    .custom_radio [type=\"radio\"]:checked,\r\n    .custom_radio [type=\"radio\"]:not(:checked) {\r\n        position: absolute;\r\n        left: -9999px;\r\n    }\r\n\r\n        .custom_radio [type=\"radio\"]:checked + label,\r\n        .custom_radio [type=\"radio\"]:not(:checked) + label {\r\n            position: relative;\r\n            padding-left: 50px;\r\n            cursor: pointer;\r\n            line-height: 20px;\r\n            color: #333;\r\n            font-size: 16px;\r\n            font-weight: 500;\r\n            padding-top:3px;\r\n        }\r\n\r\n            .custom_radio [type=\"radio\"]:checked + label:before,\r\n            .custom_radio [type=\"radio\"]:not(:checked) + label:before {\r\n                border-radius: 100%;\r\n                border-color: rgb(220, 229, 233);\r\n                border-style: solid;\r\n                border-width: 2px;\r\n                box-shadow: none;\r\n                content: \"\";\r\n                height: 24px;\r\n                left: 0;\r\n                position: absolute;\r\n                top: 0;\r\n                width: 23px;\r\n            }\r\n\r\n            .custom_radio [type=\"radio\"]:checked + label::after, .custom_radio [type=\"radio\"]:not(:checked) + label::after {\r\n                background: #0b8fcf none repeat scroll 0 0;\r\n                border-radius: 100%;\r\n                content: \"\";\r\n                height: 9px;\r\n                left: 7px;\r\n                position: absolute;\r\n                top: 8px;\r\n                transition: all 0.2s ease 0s;\r\n                width: 9px;\r\n            }\r\n\r\n            .custom_radio [type=\"radio\"]:not(:checked) + label:after {\r\n                opacity: 0;\r\n                -webkit-transform: scale(0);\r\n                transform: scale(0);\r\n            }\r\n\r\n            .custom_radio [type=\"radio\"]:checked + label:after {\r\n                opacity: 1;\r\n                -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n            }\r\n\r\n\r\n\r\n\r\n.bootstrap-datetimepicker-widget td a.btn span {\r\n    font-size: 14px;\r\n    color: #333;\r\n}\r\n/***************************/\r\n/****** switch *******/\r\n.tgl_switch {\r\n    text-align: left;\r\n}\r\n\r\n    .tgl_switch input.tgl[type=\"checkbox\"] {\r\n        display: none;\r\n    }\r\n\r\n    .tgl_switch .checkbox .tgl + label::before {\r\n        margin-left: -20px;\r\n    }\r\n\r\n    .tgl_switch .tgl + label::before {\r\n        background-color: #e5e7eb;\r\n        border: 0;\r\n        border-radius: 50px;\r\n        content: \"\\A0\";\r\n        display: inline-block;\r\n        font-size: 12px;\r\n        height: 14px;\r\n        left: 0;\r\n        line-height: 1.5;\r\n        margin-bottom: 0;\r\n        padding: 0;\r\n        position: relative;\r\n        top: 0;\r\n        white-space: pre;\r\n        width: 36px;\r\n    }\r\n\r\n    .tgl_switch .tgl + label::after {\r\n        background: #b0b9ca none repeat scroll 0 0;\r\n        border: 0 none;\r\n        border-radius: 50%;\r\n        box-shadow: 0.5px 0.866px 4px 0 rgba(0, 0, 0, 0.2);\r\n        content: \"\\A0\";\r\n        height: 21px;\r\n        padding: 0;\r\n        position: absolute;\r\n        left: 0px;\r\n        top: -2px;\r\n        transition: left 0.2s ease 0s;\r\n        white-space: pre;\r\n        width: 21px;\r\n    }\r\n\r\n    .tgl_switch .tgl:checked + label::after {\r\n        left: 16px;\r\n        background-color: #0b8fcf;\r\n        box-shadow: 0.5px 0.866px 4px 0px rgba( 0, 0, 0, 0.2 );\r\n    }\r\n\r\n\r\n    .tgl_switch .tgl + label:active::before {\r\n        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.125) inset;\r\n    }\r\n\r\n    .tgl_switch .tgl + label {\r\n        -moz-user-select: none;\r\n        cursor: pointer;\r\n        left: 0px;\r\n        position: relative;\r\n    }\r\n\r\n    .tgl_switch mark {\r\n        background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n        color: #333;\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n    }\r\n\r\n/****** end switch *******/\r\n\r\n/* date time picker */\r\n\r\n.klvrn_dt_picker .input-group-addon:last-child {\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border: 2px solid #dce5e9;\r\n    border-left: 0;\r\n}\r\n\r\n/* end  */\r\n\r\n.search_div *::-moz-placeholder {\r\n    color: #CCC;\r\n}\r\n.srch_btn {\r\n    border-radius: 4px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background-color: #b0b9ca;\r\n    width: 100%;\r\n    box-shadow: 0 5px 10px -4px rgb(204, 204, 204);\r\n}\r\n\r\n\r\n\r\n\r\n.add-more {\r\n    background-color: #b0b9ca;\r\n    border: medium none;\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    height: 50px;\r\n    width: 100%;\r\n    box-shadow: 0 5px 10px -4px rgb(204, 204, 204);\r\n}\r\n.btn_danger {\r\n    background-color: #F09537;\r\n    border: medium none;\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    height: 50px;\r\n    width: 100%;\r\n    box-shadow: 0 5px 10px -4px rgb(240, 149, 55);\r\n}\r\n@media screen and (max-width: 767px) {\r\n    .custom_chk_bx {\r\n        padding: 30px 0;\r\n    }\r\n\r\n    .btn {\r\n        display: block;\r\n        margin-bottom: 10px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map