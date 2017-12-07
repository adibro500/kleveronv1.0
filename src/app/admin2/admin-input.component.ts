import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';

@Component({
    selector: 'app-root',
    templateUrl: './admin-input.html',
})
export class AdminMaster implements OnInit {
    id: string;
    order: number;
    type: string;
    values: string[];
    placeholder: string;
    lnames: string[];
    lclasses: string[];
    lids: string[];


    pholder: string = 'New Company';
    strid0 = "cmn_input0";
    str0: string = "";
    pholder0: string = 'New Company';
    strid0_CHA = "Textarea1";
    str0_CHA: string = '';
    pholder0_CHA = "Company Head Office Address";
    strid0_CEO = "Text";
    str0_CEO: string = '';
    pholder0_CEO = "Name Of CEO/MD";
    strid0_city = "TextCity";
    str0_city: string = '';
    pholder0_city = "City";
    strid0_aob = "Areas";
    aob0: string[] = ['Area of Business', 'XYz', 'ABC'];
    pholder0_aob = "Areas of Business";
    strid0_fb = "Text";
    str0_fb: string = '';
    pholder0_fb = "Facebook Address";
    pholder0_ll = "Linkedin Address";
    strid0_ll = "Text";
    str0_ll: string = '';
    pholder0_gp = "Google Plus Address";
    strid0_gp = "Text";
    str0_gp: string = '';
    pholder0_tw = "Twitter Handle";
    strid0_tw = "Text";
    str0_tw: string = '';
    pholder0_ctry = "Country";
    strid0_ctry = "Text";
    str0_ctry: string[] = ['Country', 'China', 'Dubai', 'Russia'];
    pholder0_state = "Country";
    strid0_state = "Text";
    str0_state: string[] = ['State', 'Andhra Pradesh', 'Gujarat', 'Maharahtra'];
    pholder0_info = "input text for a single line field with a max";
    strid0_info = "Textarea1";
    str0_info: string = "";
    lid0_info = "label";
    lname0_info = "Other Information";
    lclass0_info: string = "lbl_hdr";
    strid0_noe = "Text";
    str0_noe: string[] = ['Number of employees', 'ABC', 'XYZ'];
    strid0_cbox: string[] = ["Checkbox1", "checkbox2"];
    str0_cbox: string[] = ['Compliant With PF(India)', 'Compliant With ESIC(India)'];
    isval0: boolean = false;
    valmsg0: string = "";
    Textboxes: any[] = [];
    constructor(dragulaService: DragulaService) {

        dragulaService.drop.subscribe(value => {
            const [bagName, e, el] = value;
            console.log("ll", e);
            console.log("kk", el);
            console.log('id is:', e.dataset.id);
        });
    }

    // onDrop(args) {
    //     let [e, el, source, target] = args;

    //     //        let id = source.id;
    //     console.log(source);
    //     console.log(target);
    // }

    ngOnInit() {
        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "textbox",
            "order": 0,
            "type": "textbox",
            "values": [""],
            "placeholder": "New Company",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "textbox",
            "order": 1,
            "type": "textbox",
            "values": [''],
            "placeholder": "Company Head Office Address",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "textbox",
            "order": 2,
            "type": "textbox",
            "values": [''],
            "placeholder": "Name Of CEO/MD",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "textbox",
            "order": 3,
            "type": "textbox",
            "values": [''],
            "placeholder": "City",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });

        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "select",
            "order": 4,
            "type": "select",
            "values": ['Area of Business', 'XYz', 'ABC'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });

        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "select",
            "order": 5,
            "type": "select",
            "values": ['State', 'Andhra Pradesh', 'Gujarat', 'Maharahtra'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "select",
            "order": 6,
            "type": "select",
            "values": ['Number of employees', 'ABC', 'XYZ'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "select",
            "order": 7,
            "type": "select",
            "values": ['Country', 'China', 'Dubai', 'Russia'],
            "placeholder": "",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });

        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "password",
            "order": 8,
            "type": "password",
            "values": [''],
            "placeholder": "Enter Password",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "select_text",
            "order": 9,
            "type": "select_text",
            "values": [''],
            "boolvals": [true],
            "placeholder": "Select Text",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "select_options",
            "order": 10,
            "type": "select_options",
            "values": ['Select Option', 'ABC', 'XYZ'],
            "boolvals": [true],
            "placeholder": "Select Option",
            "lnames": [],
            "lclasses": [],
            "lids": []
        });
        this.Textboxes.push({
            "validation": {
                "is_required": true,
                "is_read_only": true,
                "min_length": 1
            },
            "id": "text_label",
            "order": 11,
            "type": "text_label",
            "values": [''],
            "boolvals": [true],
            "placeholder": "Enter Something",
            "lnames": ['Enter Something:'],
            "lclasses": [],
            "lids": []
        });




    }

    log(e: any) {
        console.log(e.source);
        console.log(e.target);
    }

}
