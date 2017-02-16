import { KprojectPage } from './app.po';

describe('kproject App', function() {
  let page: KprojectPage;

  beforeEach(() => {
    page = new KprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
