import { Auth0Page } from './app.po';

describe('auth0 App', function() {
  let page: Auth0Page;

  beforeEach(() => {
    page = new Auth0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
