import { UbsPage } from './app.po';

describe('ubs App', () => {
  let page: UbsPage;

  beforeEach(() => {
    page = new UbsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
