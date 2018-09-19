var rp = require('request-promise');

export default class BasicDataservice {

  async get({ uri, params, headers }) {
    let options = {
      q: params,
      headers
    };

    return await rp.get(uri, options);
  }

  async post({ uri, body, headers, form = true }) {
    let options = {
      body,
      headers,
      json: true
    };

    return await rp.post(uri, options);
  }

}
