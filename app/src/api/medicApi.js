import { api } from './configs.js'

export async function medicLogin(email, pass) {
	const r = await api.post("/api/medic/login", {
		email: email,
		pass: pass,
	});
	return r.data;
}

export async function listarPacientes(id) {
	const r = await api.get(`/api/medic/chat?id=${id}`);
	return r.data;
}

export async function listarAtuacao(id) {
    const r = await api.get(`/api/medic/atuacao?id=${id}`)
    return r.data;
}

export async function listarPlataforma() {
	const r = await api.get(`/api/medic/plataforma`)
	return r.data;
}

export async function adicionarConsulta(medico, paciente, descricao, data, hora, tipo, plataforma, preco, link) {
	const r = await api.post("/api/medic/consulta", {
		medicoid: medico,
		userid: Number(paciente),
		descricao: descricao,
		data: data,
		hora: hora,
		atuacao: Number(tipo),
		plataforma: Number(plataforma),
		preco: preco,
		link: link,
	});
	return r.data;
}

export async function getConsultas(id) {
	const r = await api.get(`/api/medic/consulta?id=${id}`)
	return r.data
}

export async function getDoctorById(doctorId) {
	const r = await api.get(`/api/medic?id=${doctorId}`)
	return r.data;
}
