export class widget {
    values: string[] = [];
    ids: string[] = [];
    pos: number;
    JSONarr: widget[] = [];
    constructor(values, ids, pos) {
        this.values = values;
        this.ids = ids;
        this.pos = pos;
    }

    insertAt(index: number, wid: widget) {
        this.JSONarr.splice(index, 0, wid);
    }
    addControl(wid: widget) {
        this.JSONarr.push(wid);
    }


}