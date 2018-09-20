let rp = require('request-promise');
let sinon = require('sinon');
import WalmartDataservice from "./walmart.dataservice.js";


describe('WalmartDataservice', () => {
  describe('checkProducts()', () => {
    it('should call get()', async () => {
      const keywords = 'test';
      let getStub = sinon.stub(WalmartDataservice, 'get');
      await WalmartDataservice.checkProducts(keywords);

      sinon.assert.calledOnce(getStub);
      sinon.assert.calledWith(getStub, { uri: 'http://localhost:3333/walmart/products/challenge?q=' + keywords })
    })
  });
});
