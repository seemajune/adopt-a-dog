import { AdoptADogPage } from './app.po';

describe('adopt-a-dog App', () => {
  let page: AdoptADogPage;

  beforeEach(() => {
    page = new AdoptADogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
