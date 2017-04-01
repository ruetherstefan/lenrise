import { LenrisePage } from './app.po';

describe('lenrise App', function() {
  let page: LenrisePage;

  beforeEach(() => {
    page = new LenrisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
