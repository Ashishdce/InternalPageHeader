import { RogersPage } from './app.po';

describe('rogers App', () => {
  let page: RogersPage;

  beforeEach(() => {
    page = new RogersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
