import { Component, Input, OnInit } from '@angular/core';
import { RlTagInputModule } from 'angular2-tag-input';
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: 'datepicker',
    template: ` <div class="col-md-6 col-sm-6 col-xs-12 dtl_row klvrn_dt_picker">
                    <label class="lbl_hdr">Select Date: </label>
                    <div id="datetimepicker1" class="input-group date">
                        <input type="text" class="cmn_input" value="05/01/2017">
                        <span class="input-group-addon">
                            <span class="fa fa-calendar"></span>
                        </span>
                    </div>

                </div>`
})


export class NgbdDatepickerPopup implements OnInit {
    ngOnInit(): void {
        $('#datetimepicker1').datetimepicker({
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-crosshairs',
                clear: 'fa fa-trash'
            },
            format: 'MM/DD/YYYY'
        });

    }
    @Input()
    valueHtml: string = '';





}