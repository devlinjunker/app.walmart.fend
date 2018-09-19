import BasicDataservice from './basic.dataservice.js';

const endpointPrefix = 'http://localhost:3333/';
export class WalmartDataservice extends BasicDataservice {

  async checkProducts(keywords) {
    if(keywords !== "") {
      return await this.get({
        uri: endpointPrefix + 'walmart/products/challenge?q=' + keywords
      });
    }
  }
}

export default new WalmartDataservice();
