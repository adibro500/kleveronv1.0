import { Component, Input } from '@angular/core';
import { DatatableComponent } from './datatable.component';

@Component({
    selector: 'column',
    template: `<ng-content></ng-content>`,

})
export class ColumnComponent {
    // @Input() value;
    // @Input() header;

    constructor(table: DatatableComponent) {
        // table.addColumn(this)
    }
}