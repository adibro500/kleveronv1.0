import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DragulaService, dragula } from 'ng2-dragula';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
declare var $: any;

@Component({
    selector: 'tabs',
    templateUrl: './tabs.html',
    styleUrls: ['../admin/admin-widget.css']
})
export class TabsComponent implements OnInit {

    embed1: any[] = [];
    @Input()
    hideMenu = false;

    cloneElement(idx) {
        var temp = JSON.parse(JSON.stringify(this.tabs[idx]));
        this.tabs.splice(idx + 1, 0, temp);
    }

    delElement(idx) {
        delete this.tabs[idx];
    }

    tab_name;

    saveCntrl() {
        var idx = localStorage.getItem("ele2");
        localStorage.removeItem("ele2");
        this.tabs[idx].tab_name = this.tabs[idx].tab_name;
        $("#input_control_Modal").hide();
    }
    group1: any[] = [];

    constructor(private router: Router, dragulaService: DragulaService) {

        dragulaService.setOptions('bag-one', {
            revertOnSpill: true,
            copy: function (el, source) {
                return source.id === 'left';
            }

        });

        dragula([document.getElementById("left"), document.getElementById("right")], {
            copy: function (el, source) {
                return source === document.getElementById("left")
            },
            accepts: function (el, target) {
                return target !== document.getElementById("right")
            }
        });
    }

    ngOnInit(): void {

        this.tabs.push({
            "tab_name": "Assessements",
            "edit_tab": true
        });
        this.tabs.push({
            "tab_name": "Dictionary",
            "edit_tab": true
        });
        this.group1.push({
            "type": "table",
            "label": "Table"
        });

    }




    editElement(idx) {
        localStorage.setItem("ele2", idx);
    }

    tabs: any[] = [];

    SelectControlNav() {
        document.getElementById("own_contrl_list").style.width = "270px";
        document.getElementById("own_contrl_list").style.opacity = "1";
    }

    closeNav() {
        document.getElementById("own_contrl_list").style.width = "0";
        document.getElementById("own_contrl_list").style.opacity = "0";
    }

}
