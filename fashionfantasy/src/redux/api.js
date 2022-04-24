import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8081" });

export const createBag = (bagData) => API.post("/bag", bagData);
export const createShoe = (shoeData) => API.post("/shoe", shoeData);

export const getBags = () => API.get("/bag");
export const getBagsBySearch = (searchQuery) =>
  API.get(`/bag/search?searchQuery=${searchQuery}`);
export const getBag = (id) => API.get(`/bag/${id}`);

export const getShoes = () => API.get("/shoe");
export const getShoe = (_id) => API.get(`/shoe/${_id}`);

export const filterBags = () => API.get("/bag");
