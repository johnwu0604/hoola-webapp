import { HoolaWebappPage } from './app.po';

describe('hoola-webapp App', () => {
  let page: HoolaWebappPage;

  beforeEach(() => {
    page = new HoolaWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
