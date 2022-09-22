import axios from "axios";

const api = axios.create({
    baseURL: "http://remotemysql.com:3306"
})

export async function userLogin(email, pass) {
    const r = await api.post("/api/user/login", {
        email: email,
        pass: pass
    });   
    return r.data;
}

export async function userSigIn(name, email, pass) {
    const r = await api.post("/api/user/account", {
        name: name,
        email: email,
        pass: pass
    });
    return r.data;
}