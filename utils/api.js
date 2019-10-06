const BASE_API = 'http://api.olimpoapp.local/';
let jwt = 'test';
let baseGet = {
  method: 'get',
  headers: new Headers({
    Authorization: 'Bearer ' + jwt,
    accept: 'application/json',
  }),
};

class Api {
  async getTest(id) {
    const query = await fetch(`${BASE_API}test?id=${id}`);
    const data = await query.json();
    return data;
  }
}

export default new Api();
