import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'gridlist',
    template: `
    <div>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50">
      </ngx-datatable>
      <ng-template #editTmpl let-row="row" let-value="value">
         <h4 class="lbl_name">
                        <label>{{row.ActiveProject}}</label>
                    </h4>
                    <div class="lbl_value">
                        <label>Active Project</label>
                    </div>

      </ng-template>
  `,
    styleUrls: ['./gridlist.scss']
})
export class GridListComponent {
    @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

    editing = {};
    rows = [];
    columns = [];
    cols = ["ActiveProject", "Invoiced", "UnInvoiced", "Budget", "Members", "BilledHours"];
    constructor() {
        this.fetch((data) => {
            this.rows = data;
        });
        for (var i = 0; i < this.cols.length; i++) {
            this.columns.push({ cellTemplate: this.editTmpl, prop: this.cols[i], name: this.cols[i] });
        }
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/employee.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }

    updateValue(event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex)
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    }

}