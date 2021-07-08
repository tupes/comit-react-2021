import axios from "axios";

const HOST = "http://localhost:3000";

export async function loadProductsData() {
  const response = await axios.get(`${HOST}/products`);
  return response.data;
}

export async function loadProductCategoriesData() {
  const response = await axios.get(`${HOST}/productCategories`);
  return response.data;
}
