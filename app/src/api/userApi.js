import axios from "axios";
const api = axios.create({
	baseURL: "http://localhost:5000",
});

export async function userLogin(email, pass) {
	const r = await api.post("/api/user/login", {
		email: email,
		pass: pass,
	});
	return r.data;
}

export async function userSigIn(name, sobrenome, email, pass) {
	const r = await api.post("/api/user/account", {
		name: name,
		sobrenome: sobrenome,
		email: email,
		pass: pass,
	});
	return r.data;
}

export async function getConsultasId(id, page) {
	const virtualPage = ((page - 1) * 10) <= 0 ? 0 : (page - 1) * 10
	const r = await api.get(`/api/user/consultas?id=${id}&start=${virtualPage}&limit=10`)
	return r.data
}

export async function statusConsult(id, situation) {
	const r = await api.put(`/api/user/consultas?id=${id}&situation=${situation}`)
	return r.status
}
export async function addAvaliacao(medicId, userId, descricao, number) {
	const r = await api.post("/api/user/avalicao", {
		medicId: medicId,
		userId: userId,
		descricao: descricao,
		number: number,
	});
	return r.data;
}
export async function getConsultas() {
	const r = await api.get(`/api/user/medics`)
	return r.data
}