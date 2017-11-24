import { Component } from '@angular/core';

import { FormGroup, FormBuilder } from "@angular/forms";
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { widget } from '../admin/widgets';

@Component({
    selector: 'color-picker',
    templateUrl: './color-picker.component.html'
})
export class ColorPickComponent {
    color: string;

    images: widget[] = [];

    wid: widget;
    wid2: widget;
    index: number;


    constructor() {
        this.init_wids();


    }


    init_wids() {
        this.index = 0;
        this.wid = new widget(['80%', 'Resources'], [], 0);
        this.images.push(this.wid);
        this.wid = new widget(['75%', '4.5 & Above Rating'], [], this.index++);
        this.images.push(this.wid);
        this.wid = new widget(['60%', 'Highly Engaged'], [], this.index++);
        this.images.push(this.wid);
        this.wid = new widget(['240$', 'Avg Hourly Rate'], [], this.index++);
        this.images.push(this.wid);
    }
}