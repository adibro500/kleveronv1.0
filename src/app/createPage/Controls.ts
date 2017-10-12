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
