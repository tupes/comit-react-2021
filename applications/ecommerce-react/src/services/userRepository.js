import axios from "axios";

const HOST = "http://localhost:8000";

export function createUser(formValues) {
  return axios.post(`${HOST}/users`, formValues);
}

export function loginUser({ id }) {
  return axios.get(`${HOST}/users/${id}`);
}

export function addProductToCart(values) {
  return axios.post(`${HOST}/cart`, values);
}
