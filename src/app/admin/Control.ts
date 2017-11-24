
export class Control {

    idx: number;
    pos: number;
    ids: string[];
    id: string;
    value: string;
    pholder: string;
    values: string[];
    lid: string;
    lname: string;
    lclass: string;
    valmsg: string;
    isval: boolean;
    formCon: string;
    formConCHA: string;
    formConCEO: string;
    formConCity: string;
    formConAOB: string;
    formConFB: string;
    formConLL: string;
    formConGP: string;
    formConTW: string;
    formConCt: string;
    formConSt: string;
    formConIN: string;
    formConNOE: string;
    formConCB: string;
    JSONarr = new Array<Control>();
    JSONarrCHA = new Array<Control>();
    JSONarrCEO = new Array<Control>();
    JSONarrCity = new Array<Control>();
    JSONarrAOB = new Array<Control>();
    JSONarrFB = new Array<Control>();
    JSONarrLL = new Array<Control>();
    JSONarrGP = new Array<Control>();
    JSONarrTW = new Array<Control>();
    JSONarrCt = new Array<Control>();
    JSONarrSt = new Array<Control>();
    JSONarrIN = new Array<Control>();
    JSONarrNOE = new Array<Control>();
    JSONarrCB = new Array<Control>();
    req: any;

    contructor(

        idx: number,
        id: string,
        value: string,
        pholder: string,
        values: string[],
        lid: string,
        lname: string,
        lclass: string,
        ids: string[],
        valmsg: string,
        isval: boolean,
        formCon: string,
        formConCHA: string,
        formConCEO: string,
        formConCity: string,
        formConAOB: string,
        formConFB: string,
        formConLL: string,
        formConGP: string,
        formConTW: string,
        formConCt: string,
        formConSt: string,
        formConIN: string,
        formConNOE: string,
        formConCB: string,
        pos: number,
        req: any

    ) {
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
        this.pos = pos;
        this.req = req;
    }
    addControlNOE(control: Control) {
        this.JSONarrNOE.push(control);
    }
    insertAtNOE(index: number, control: Control) {
        this.JSONarrNOE.splice(index, 0, control);
    }
    addControlCB(control: Control) {
        this.JSONarrCB.push(control);
    }
    insertAtCB(index: number, control: Control) {
        this.JSONarrCB.splice(index, 0, control);
    }
    addControlIN(control: Control) {
        this.JSONarrIN.push(control);
    }
    insertAtIN(index: number, control: Control) {
        this.JSONarrIN.splice(index, 0, control);
    }
    addControlSt(control: Control) {
        this.JSONarrSt.push(control);
    }
    insertAtSt(index: number, control: Control) {
        this.JSONarrSt.splice(index, 0, control);
    }
    addControlCt(control: Control) {
        this.JSONarrCt.push(control);
    }
    insertAtCt(index: number, control: Control) {
        this.JSONarrCt.splice(index, 0, control);
    }
    addControlTW(control: Control) {
        this.JSONarrTW.push(control);
    }
    insertAtTW(index: number, control: Control) {
        this.JSONarrTW.splice(index, 0, control);
    }
    addControlLL(control: Control) {
        this.JSONarrLL.push(control);
    }
    insertAtLL(index: number, control: Control) {
        this.JSONarrLL.splice(index, 0, control);
    }
    addControlGP(control: Control) {
        this.JSONarrGP.push(control);
    }
    insertAtGP(index: number, control: Control) {
        this.JSONarrGP.splice(index, 0, control);
    }
    addControl(control: Control) {
        this.JSONarr.push(control);
    }
    addControlFB(control: Control) {
        this.JSONarrFB.push(control);
    }
    insertAtFB(index: number, control: Control) {
        this.JSONarrFB.splice(index, 0, control);
    }
    addControlAOB(control: Control) {
        this.JSONarrAOB.push(control);
    }
    insertAtAOB(index: number, control: Control) {
        this.JSONarrAOB.splice(index, 0, control);
    }
    addControlCity(control: Control) {
        this.JSONarrCity.push(control);
    }
    insertAtCity(index: number, control: Control) {
        this.JSONarrCity.splice(index, 0, control);
    }
    addControlCHA(control: Control) {
        this.JSONarrCHA.push(control);
    }
    insertAt(index: number, control: Control) {
        this.JSONarr.splice(index, 0, control);
    }
    addControlCEO(control: Control) {
        this.JSONarrCEO.push(control);
    }
    insertAtCEO(index: number, control: Control) {
        this.JSONarrCEO.splice(index, 0, control);
    }
    insertAtCHA(index: number, control: Control) {
        this.JSONarrCHA.splice(index, 0, control);
    }
}
