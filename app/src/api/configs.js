import axios from "axios";
const api = axios.create({
	baseURL: "http://192.168.3.15:3051",
});

export { api }