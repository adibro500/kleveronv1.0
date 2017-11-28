import { Component, Input } from '@angular/core';
import { DatatableComponent } from './datatable.component';

@Component({
    selector: 'column',
    template: `      <td class="padd_btm bord_rt rm_div" *ngFor="let aproj of emp.ActiveProject;let j=index">
                                            <ng-container *ngIf="i==0">
                                
                            <div class="clone_icon_action" id="tour-action-ui-id">
                                    <span class="actions">
                                        <a (click)="cloneElement(i)">
                                            <i class="fa fa-clone">
                                            </i>
                                        </a>
                                    </span> <span class="actions">
                                        <a (click)="editElement(i)"><i class="fa fa-edit"></i>
                                        </a>
                                    </span>
                                    <span class="actions">
                                        <a href="javascript:void(0);">
                                            <i class="fa fa-trash-o">
                                            </i>
                                        </a>
                                    </span> <span class="actions">
                                        <a href="javascript:void(0);"><i class="fa fa-refresh"></i>
                                            </a>
                                    </span>
                                </div>
                            </ng-container>
                            
                        
                    <h4 class="lbl_name">
                        <label><input class="pnl_inp" [(ngModel)]="emp.ActiveProject[j]"/></label>
                    </h4>
                    <div class="lbl_value">
                        <label>Active Project</label>
                    </div>

                </td>
        
                                   
           `,

})
export class ColumnComponent {
    @Input() emp;
    // @Input() header;

    constructor(table: DatatableComponent) {
        // table.addColumn(this)
    }
}