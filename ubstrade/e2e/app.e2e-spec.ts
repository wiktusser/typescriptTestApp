import { UbstradePage } from './app.po';

describe('ubstrade App', () => {
  let page: UbstradePage;

  beforeEach(() => {
    page = new UbstradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
