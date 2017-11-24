export class com {
    comp: any;
    pos: number;
    css: string;
    val: string;
    vals: string;
    ids: string[];
    lids: string[];
    lnames: string[];
    pholder: string[];
    constructor(comp, pos, css, val, vals, ids, lids, lnames, pholder) {
        this.comp = comp;
        this.pos = pos;
        this.css = css;
        this.val = val;
        this.vals = vals;
        this.ids = vals;
        this.lids = lids;
        this.lnames = lnames;
        this.pholder = pholder;
    }

}