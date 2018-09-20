let sinon = require('sinon');
import Page from "./Page.component.js";
import WalmartDataservice from "../dataservices/walmart.dataservice.js";


describe('PageComponent', () => {
  describe('requestProducts()', () => {
    it('should call WalmarDataservice.checkProducts()', async () => {
      let getStub = sinon.stub(WalmartDataservice, 'checkProducts');
      const page = new Page();
      page.state.keywords = 'abc';
      sinon.stub(page, 'setState');
      await page.requestProducts({ preventDefault: () => {} });

      sinon.assert.calledOnce(getStub);
      sinon.assert.calledWith(getStub, page.state.keywords)
    })
  });
});
