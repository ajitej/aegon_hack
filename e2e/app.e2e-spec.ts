import { AiPage } from './app.po';

describe('ai App', () => {
  let page: AiPage;

  beforeEach(() => {
    page = new AiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
