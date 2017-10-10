import { Kleveron1.0Page } from './app.po';

describe('kleveron1.0 App', () => {
  let page: Kleveron1.0Page;

  beforeEach(() => {
    page = new Kleveron1.0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
