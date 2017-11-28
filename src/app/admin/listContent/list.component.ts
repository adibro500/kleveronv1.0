import { Http, Response } from '@angular/http';
import { Injectable, Component, ElementRef, ViewChild } from '@angular/core';
import { Service } from '../grid-master.service';
import { DatatableComponent } from './datatable.component';
import { ColumnComponent } from './column.component';
import { TableSortDirective } from 'ng-table-sort/table-sort.directive';
import { DroppableDirective } from '@swimlane/ngx-dnd';
import tableDragger from 'table-dragger'
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
@Component({
    selector: 'list',
    templateUrl: `./list.component.html`,
    providers: [ColumnComponent, DatatableComponent, TableSortDirective, DroppableDirective],
    styleUrls: ['./list.css']

})
export class ListComponent {
    emps;
    imps: any[] = [];
    options: any;
    sortToggle: boolean = true;

    constructor(private service: Service, private dragulaService: DragulaService) {
        this.emps = this.service.getEmployees();
        //this.imps.push("hello");
        this.options = {
            direction: 'horizontal',
            removeOnSpill: false
        }

    }
    ActiveProjects;

    // predicateBy(i) {
    //     var prop = this.emps[0][Object.keys(this.emps[0])[i]];
    //     console.log("inside prop");
    //     return function (a, b) {
    //         if (a[prop] > b[prop]) {
    //             return 1;
    //         } else if (a[prop] < b[prop]) {
    //             return -1;
    //         }
    //         return 0;
    //     }
    // }



    sorting(fl) {
        alert(this.sortToggle);

        if (fl == 'ap') {

            return this.emps.sort(this.SortByProj);

        }
        else if (fl == 'inv') {

            return this.emps.sort(this.SortByInv);

        }
        else if (fl == 'uninv') {
            return this.emps.sort(this.SortByUnInv);

        }

    }

    sortArray(a, isAscending) {
        var currentSort = a["my_sort_order"];
        if (typeof currentSort != 'boolean') {
            // assume it be unsorted, use sort alogorithm
            a.sort(function (a, b) { return isAscending ? a - b : b - a; }); // assuming numerical array, modify as per your needs
        } else if (currentSort != isAscending) {
            // sorted but in different order, reverse the order
            a.reverse(); // or use for loop
        }
        // set the sort order
        a["my_sort_order"] = isAscending ? true : false;
    }


    SortByProj(x, y) {


        if (this.sortToggle)
            return ((x.ActiveProject == y.ActiveProject) ? 0 : ((x.ActiveProject > y.ActiveProject) ? 1 : -1));
        else
            return ((x.ActiveProject == y.ActiveProject) ? 0 : ((x.ActiveProject < y.ActiveProject) ? 1 : -1));

    }
    SortByInv(x, y) {

        if (this.sortToggle)
            return ((x.Invoiced == y.Invoiced) ? 0 : ((x.Invoiced > y.Invoiced) ? 1 : -1));
        else
            return ((x.Invoiced == y.Invoiced) ? 0 : ((x.Invoiced < y.Invoiced) ? 1 : -1));
    }

    SortByUnInv(x, y) {

        if (this.sortToggle)
            return ((x.UnInvoiced == y.UnInvoiced) ? 0 : ((x.UnInvoiced > y.UnInvoiced) ? 1 : -1));
        else
            return ((x.UnInvoiced == y.UnInvoiced) ? 0 : ((x.UnInvoiced < y.UnInvoiced) ? 1 : -1));

    }

    cloneElement(i) {

        for (var j = 0; j < this.emps.length; j++) {
            // this.emps[j]["ActiveProject"].push(this.emps[j].ActiveProject);
            //obj[Object.keys(obj)[1]]
            //  this.emps[j][Object.keys(this.emps[j])[i]].push(this.emps[j][Object.keys(this.emps[j])[i]]);
            this.emps[j][Object.keys(this.emps[j])[i]].push(this.emps[j][Object.keys(this.emps[j])[i]]);
        }

    }

    editElement(i) {

    }

    delElement(idx, fl) {
        if (fl == "ap") {
            for (var i = 0; i < this.emps.length; i++)
                delete this.emps[i].ActiveProject[idx];
        }
        if (fl == "inv") {
            for (var i = 0; i < this.emps.length; i++)
                delete this.emps[i].Invoiced[idx];
        }

    }

}