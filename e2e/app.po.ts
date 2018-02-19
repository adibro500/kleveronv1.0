import { browser, by, element } from 'protractor';

export class Kleveron1.0Page {

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('login_input')).getText();
  }

}
