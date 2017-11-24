<<<<<<< HEAD
import { getAnnotation } from "./annotations";
import { CreatePageMenuComponent } from "./createPage.component";
import { Component } from "@angular/core";

@Component({
    selector: 'appcheck',
    template: `
    <pre class="example-code">
      <code>
        {{encodedExampleHtml}}
      </code>
    </pre>
  `,
})
export class AppCheck {
    encodedExampleHtml: string;

    constructor() {
        this.encodedExampleHtml = getAnnotation(CreatePageMenuComponent).template;
    }
=======
import { getAnnotation } from "./annotations";
import { CreatePageMenuComponent } from "./createPage.component";
import { Component } from "@angular/core";

@Component({
    selector: 'appcheck',
    template: `
    <pre class="example-code">
      <code>
        {{encodedExampleHtml}}
      </code>
    </pre>
  `,
})
export class AppCheck {
    encodedExampleHtml: string;

    constructor() {
        this.encodedExampleHtml = getAnnotation(CreatePageMenuComponent).template;
    }
>>>>>>> here/master
}