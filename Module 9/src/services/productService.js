import axios from 'axios';

class ProductService{
  serverURL = "http://fsdi.azurewebsites.net/api"
  async getProducts() {
    const resp = await axios.get(this.serverURL + '/products');
    console.log(resp.data);
    return resp.data;
  }
}

export default ProductService;