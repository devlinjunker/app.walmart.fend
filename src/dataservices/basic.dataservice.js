import rp from 'request-promise';

export default class BasicDataservice {

  async get({ uri, params, headers }) {
    const options = {
      q: params,
      headers
    };

    let response = await rp.get(uri, options);

    try {
      response = JSON.parse(response);
    } catch (e) {

    }

    return response;
  }

  async post({ uri, body, headers, form = true }) {
    const options = {
      body,
      headers,
      json: true
    };

    let response = await rp.post(uri, options);

    try {
      response = JSON.parse(response);
    } catch (e) {

    }

    return response;
  }

}
