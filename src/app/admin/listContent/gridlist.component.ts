import { Component, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { DrakeStoreService, DroppableDirective } from '@swimlane/ngx-dnd';
import { DatatableComponent, TableColumn } from '@swimlane/ngx-datatable';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { Employee } from '../grid-master.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: 'gridlist',
    templateUrl: './grid.html',
    styleUrls: ['./gridlist.scss'],
    providers: [DrakeStoreService, DroppableDirective],
})
export class GridListComponent implements AfterViewChecked {
    @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
    columnName;
    editing = {};
    rows = [];
    columns = [];
    selected = [];
    cols = ["ActiveProject", "Invoiced", "UnInvoiced", "Budget", "Members", "BilledHours"];
    constructor(public changeDetectorRef: ChangeDetectorRef) {
        this.fetch((data) => {
            this.rows.push(...data);
        });
        // for (var i = 0; i < this.cols.length; i++) {
        //     this.columns.push({ cellTemplate: this.editTmpl, prop: this.cols[i], name: this.cols[i] });
        // }
    }


    adding(i) {
        localStorage.setItem("colid", i);

    }
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);

        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    @ViewChild('dataTable') public dataTable: DatatableComponent;

    exportAsCSV() {
        const columns: TableColumn[] = this.dataTable.columns;
        const headers =
            columns
                .map((column: TableColumn) => column.name)
                .filter((e) => e);  // remove column without name (i.e. falsy value)

        const rows: any[] = this.dataTable.rows.map((row) => {
            let r = {};
            columns.forEach((column) => {
                if (!column.name) { return; }   // ignore column without name
                if (column.prop) {
                    let prop = column.prop;
                    r[prop] = (typeof row[prop] === 'boolean') ? (row[prop]) ? 'Yes'
                        : 'No'
                        : row[prop];
                } else {
                    // special cases handled here
                }
            })
            return r;
        });

        const options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            headers: headers,
            showTitle: false,
            title: 'Report',
            useBom: true,
        };
        return new Angular2Csv(rows, 'report', options);
    }


    onActivate(event) {
        console.log('Activate Event', event);
    }



    delColumn(i) {
        delete this.cols[i];


    }
    i;
    addColumn() {
        this.i = localStorage.getItem("colid");
        localStorage.removeItem("colid");
        this.cols.splice(this.i + 1, 0, this.columnName);
        $("#input_control_URL").hide();
    }

    @ViewChild('tableWrapper') tableWrapper;
    @ViewChild(DatatableComponent) table: DatatableComponent;
    private currentComponentWidth;

    ngAfterViewChecked() {
        // Check if the table size has changed,

    }




    tempCol;

    onReorder({ column, newValue, prevValue }: any) {

        console.log(column);
        console.log(newValue);
        console.log(prevValue);
        this.tempCol = this.cols[newValue];
        this.cols[newValue] = this.cols[prevValue];
        this.cols[prevValue] = this.tempCol;

    }

    cloneElement(i) {
        console.log("idx", i);
        console.log(this.cols);
        this.cols.splice(i, 0, this.cols[i]);
        // console.log("inside clone");
        console.log(this.cols);

        this.table.recalculate();
        this.changeDetectorRef.detectChanges();

    }
    exportArr = [];

    exportToCSV() {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            useBom: true
        };

        if (this.selected.length != 0)
            for (var i = 0; i < this.cols.length; i++) {
                this.exportArr.push(this.selected[this.cols[i]]);
            }
        else {
            this.exportArr.push(this.rows[this.cols[i]]);

        }

        new Angular2Csv(this.rows, 'My Report', options);

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