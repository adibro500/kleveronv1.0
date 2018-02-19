import { Directive, Input, Output, OnChanges, EventEmitter, ElementRef } from "@angular/core";

@Directive({
    selector: '[contenteditableModel]',
    host: {
        '(blur)': 'onEdit()',
        '(keyup)': 'onEdit()'
    }
})

export class ContenteditableModel implements OnChanges {
    @Input('contenteditableModel') model: any;
    @Output('contenteditableModelChange') update = new EventEmitter();

    constructor(
        private elementRef: ElementRef
    ) {
        console.log('ContentEditableDirective.constructor');
    }

    ngOnChanges(changes) {
        console.log('ContentEditableDirective.ngOnChanges');
        console.log(changes);
        if (changes.model.isFirstChange())
            this.refreshView();
    }

    onEdit() {
        console.log('ContentEditableDirective.onEdit');
        var value = this.elementRef.nativeElement.innerText
        this.update.emit(value)
    }

    private refreshView() {
        console.log('ContentEditableDirective.refreshView');
        this.elementRef.nativeElement.textContent = this.model
    }
}