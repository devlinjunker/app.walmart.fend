let rp = require('request-promise');
let sinon = require('sinon');
import BasicDataservice from "./basic.dataservice.js";


describe('BasicDataservice', () => {
  describe('get()', () => {
    it('should call rp.get()', () => {
      let dataservice = new BasicDataservice();
      let getStub = sinon.stub(rp, 'get');
      dataservice.get({
        uri: 'test',
        headers: {},
        params: {}
      });

      sinon.assert.calledOnce(getStub);
    })
  });

  describe('post()', () => {
    it('should call rp.post()', () => {
      let dataservice = new BasicDataservice();
      let postStub = sinon.stub(rp, 'post');
      dataservice.post({
        uri: 'test',
        headers: {},
        params: {}
      });

      sinon.assert.calledOnce(postStub);
    });
  });
});
