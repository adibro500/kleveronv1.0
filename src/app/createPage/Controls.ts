<<<<<<< HEAD
export class Control2 {

    idx: number;
    id: string;
    value: string;
    pholder: string;
    values: string[];
    lid: string;
    lname: string;
    lclass: string;
    JSONarr = new Array<Control2>();
    JSONarrTA = new Array<Control2>();
    JSONarrSO = new Array<Control2>();
    JSONarrSP = new Array<Control2>();
    JSONarrSTB = new Array<Control2>();
    JSONarrSOB = new Array<Control2>();
    JSONarrSD = new Array<Control2>();
    JSONarrCB = new Array<Control2>();
    JSONarrS = new Array<Control2>();
    JSONarrSB = new Array<Control2>();
    JSONarrU = new Array<Control2>();
    JSONarrAF = new Array<Control2>();
    JSONarrP = new Array<Control2>();
    JSONarrRB = new Array<Control2>();
    JSONarrTB = new Array<Control2>();
    JSONarrDP = new Array<Control2>();
    JSONarrTP = new Array<Control2>();

    contructor(idx: number,
        id: string,
        value: string,
        pholder: string,
        values: string[],
        lid: string,
        lname: string,
        lclass: string
    ) {
        this.idx = idx;
        this.id = id;
        this.value = value;
        this.pholder = pholder;
        this.values = values;
        this.lid = lid;
        this.lname = lname;
        this.lclass = lclass;

    }
    addControlTA(control: Control2) {
        this.JSONarrTA.push(control);

    }
    insertAtTA(index: number, control: Control2) {
        this.JSONarrTA.splice(index, 0, control);
    }
    addControlSO(control: Control2) {
        this.JSONarrSO.push(control);

    }

    insertAtSO(index: number, control: Control2) {
        this.JSONarrSO.splice(index, 0, control);
    }

    addControlSP(control: Control2) {
        this.JSONarrSP.push(control);

    }

    insertAtSP(index: number, control: Control2) {
        this.JSONarrSP.splice(index, 0, control);
    }

    addControlSTB(control: Control2) {
        this.JSONarrSTB.push(control);

    }

    insertAtSOB(index: number, control: Control2) {
        this.JSONarrSOB.splice(index, 0, control);
    }

    addControlSOB(control: Control2) {
        this.JSONarrSOB.push(control);

    }

    insertAtSD(index: number, control: Control2) {
        this.JSONarrSD.splice(index, 0, control);
    }

    addControlSD(control: Control2) {
        this.JSONarrSD.push(control);

    }
    insertAtCB(index: number, control: Control2) {
        this.JSONarrCB.splice(index, 0, control);
    }

    addControlCB(control: Control2) {
        this.JSONarrCB.push(control);

    }

    addControl(control: Control2) {
        this.JSONarr.push(control);

    }

    addControlAF(control: Control2) {
        this.JSONarrAF.push(control);

    }


    addControlU(control: Control2) {
        this.JSONarrU.push(control);

    }

    insertAtSB(index: number, control: Control2) {
        this.JSONarrSB.splice(index, 0, control);
    }

    addControlSB(control: Control2) {
        this.JSONarrSB.push(control);

    }

    insertAtU(index: number, control: Control2) {
        this.JSONarrU.splice(index, 0, control);
    }


    insertAt(index: number, control: Control2) {
        this.JSONarr.splice(index, 0, control);
    }

    addControlS(control: Control2) {
        this.JSONarrS.push(control);

    }

    insertAtS(index: number, control: Control2) {
        this.JSONarrS.splice(index, 0, control);
    }


    insertAtAF(index: number, control: Control2) {
        this.JSONarrAF.splice(index, 0, control);
    }

    addControlP(control: Control2) {
        this.JSONarrP.push(control);

    }

    insertAtP(index: number, control: Control2) {
        this.JSONarrP.splice(index, 0, control);
    }

    addControlRB(control: Control2) {
        this.JSONarrRB.push(control);

    }
    insertAtRB(index: number, control: Control2) {
        this.JSONarrRB.splice(index, 0, control);
    }


    insertAtSTB(index: number, control: Control2) {
        this.JSONarrSTB.splice(index, 0, control);
    }

    addControlTB(control: Control2) {
        this.JSONarrTB.push(control);

    }

    insertAtTB(index: number, control: Control2) {
        this.JSONarrTB.splice(index, 0, control);
    }

    addControlDP(control: Control2) {
        this.JSONarrDP.push(control);
    }

    insertAtDP(index: number, control: Control2) {
        this.JSONarrDP.splice(index, 0, control);
    }

    addControlTP(control: Control2) {
        this.JSONarrTP.push(control);

    }

    insertAtTP(index: number, control: Control2) {
        this.JSONarrTP.splice(index, 0, control);
    }

}
=======
export class Control2 {

    idx: number;
    id: string;
    value: string;
    pholder: string;
    values: string[];
    lid: string;
    lname: string;
    lclass: string;
    JSONarr = new Array<Control2>();
    JSONarrCHA = new Array<Control2>();
    JSONarrCEO = new Array<Control2>();
    JSONarrCity = new Array<Control2>();
    JSONarrAOB = new Array<Control2>();
    JSONarrFB = new Array<Control2>();
    JSONarrLL = new Array<Control2>();
    JSONarrGP = new Array<Control2>();
    JSONarrTW = new Array<Control2>();
    JSONarrCt = new Array<Control2>();
    JSONarrSt = new Array<Control2>();
    JSONarrIN = new Array<Control2>();
    contructor(idx: number,
        id: string,
        value: string,
        pholder: string,
        values: string[],
        lid: string,
        lname: string,
        lclass: string
    ) {
        this.idx = idx;
        this.id = id;
        this.value = value;
        this.pholder = pholder;
        this.values = values;
        this.lid = lid;
        this.lname = lname;
        this.lclass = lclass;

    }
    addControlIN(control: Control2) {
        this.JSONarrIN.push(control);

    }
    insertAtIN(index: number, control: Control2) {
        this.JSONarrIN.splice(index, 0, control);
    }
    addControlSt(control: Control2) {
        this.JSONarrSt.push(control);

    }
    insertAtSt(index: number, control: Control2) {
        this.JSONarrSt.splice(index, 0, control);
    }
    addControlCt(control: Control2) {
        this.JSONarrCt.push(control);

    }
    insertAtCt(index: number, control: Control2) {
        this.JSONarrCt.splice(index, 0, control);
    }

    addControlTW(control: Control2) {
        this.JSONarrTW.push(control);

    }
    insertAtTW(index: number, control: Control2) {
        this.JSONarrTW.splice(index, 0, control);
    }
    addControlLL(control: Control2) {
        this.JSONarrLL.push(control);

    }
    insertAtLL(index: number, control: Control2) {
        this.JSONarrLL.splice(index, 0, control);
    }

    addControlGP(control: Control2) {
        this.JSONarrGP.push(control);

    }
    insertAtGP(index: number, control: Control2) {
        this.JSONarrGP.splice(index, 0, control);
    }

    addControl(control: Control2) {
        this.JSONarr.push(control);

    }
    addControlFB(control: Control2) {
        this.JSONarrFB.push(control);

    }
    insertAtFB(index: number, control: Control2) {
        this.JSONarrFB.splice(index, 0, control);
    }

    addControlAOB(control: Control2) {
        this.JSONarrAOB.push(control);

    }
    insertAtAOB(index: number, control: Control2) {
        this.JSONarrAOB.splice(index, 0, control);
    }


    insertAt(index: number, control: Control2) {
        this.JSONarr.splice(index, 0, control);
    }
    addControlCEO(control: Control2) {
        this.JSONarrCEO.push(control);

    }
    insertAtCEO(index: number, control: Control2) {
        this.JSONarrCEO.splice(index, 0, control);
    }


    insertAtCHA(index: number, control: Control2) {
        this.JSONarr.splice(index, 0, control);
    }

}
>>>>>>> here/master
