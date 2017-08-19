import { AngularCaseTemplatesPage } from './app.po';

describe('angular-case-templates App', () => {
  let page: AngularCaseTemplatesPage;

  beforeEach(() => {
    page = new AngularCaseTemplatesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
