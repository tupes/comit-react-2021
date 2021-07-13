import axios from "axios";

const HOST = "http://localhost:8000";

export function createUser(formValues) {
  const { uid, username, email, dob } = formValues;
  return axios.post(`${HOST}/users`, { uid, username, email, dob });
}

export function loginUser({ uid }) {
  return axios.get(`${HOST}/users?uid=${uid}`);
}

export function getCart(userId) {
  return axios.get(`${HOST}/cart?userId=${userId}`);
}

export function addProductToCart(values) {
  return axios.post(`${HOST}/cart`, values);
}
