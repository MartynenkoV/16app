import { Jung16Page } from './app.po';

describe('jung-16 App', function() {
  let page: Jung16Page;

  beforeEach(() => {
    page = new Jung16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
