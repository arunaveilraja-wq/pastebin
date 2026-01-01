import axios from "axios";

const BASE_URL = "http://localhost:8080/api/snippets";


export const createSnippet = (snippet) => axios.post(BASE_URL, snippet);


export const getSnippet = (id) => {
  return axios.get(`http://localhost:8080/api/snippets/${id}`);
};
