import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function userLogin(email, pass) {
    const r = await api.post("/api/user/login", {
        email: email,
        senha: pass
    });
    
    return r.data;
}