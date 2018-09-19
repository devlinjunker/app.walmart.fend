import BasicDataservice from "./basic.dataservice.js";

export class FirstDataservice extends BasicDataservice {
  async request(name) {
    if(name !== "") {
        return await this.get({ uri:"http://localhost:3333/"+name });
    }
  }
}

export default new FirstDataservice();
