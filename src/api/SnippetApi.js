import axios from "axios";

const BASE_URL = "http://localhost:8080/api/snippets";

// Create snippet (POST)
export const createSnippet = (snippet) => axios.post(BASE_URL, snippet);

// Get snippet by ID (GET)
export const getSnippet = (id) => axios.get(`${BASE_URL}/${id}`);
