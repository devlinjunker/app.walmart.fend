let sinon = require('sinon');
import BasicDataservice from "./basic.dataservice.js";
import FirstDataservice from "./first.dataservice.js";


describe('FirstDataservice', () => {
  describe('request()', () => {
    it('should call basicDataservice.get() wtih appended uri', () => {
      let requestStub = sinon.stub(FirstDataservice, 'get');

      FirstDataservice.request('abc');

      sinon.assert.calledWith(requestStub, { uri: 'http://localhost:3333/abc'});
    })
  });
});
