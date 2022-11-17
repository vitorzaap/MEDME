import { api } from "./configs.js";

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
  const r = await api.get(`/api/medic/atuacao?id=${id}`);
  return r.data;
}

export async function listarPlataforma() {
  const r = await api.get(`/api/medic/plataforma`);
  return r.data;
}

export async function adicionarConsulta(
  medico,
  paciente,
  descricao,
  data,
  hora,
  tipo,
  plataforma,
  preco,
  link
) {
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
  const r = await api.get(`/api/medic/consulta?id=${id}`);
  return r.data;
}

export async function getDoctorById(doctorId) {
  const r = await api.get(`/api/medic?id=${doctorId}`);
  return r.data;
}
export async function pendentConsult(doctorId) {
  const r = await api.get(`/api/medic/consulta/pendent/${doctorId}`);
  return r.data;
}
export async function allConsuts(doctorId) {
  const r = await api.get(`/api/medic/consultas/${doctorId}`);
  return r.data;
}
export async function LastAvaliation(doctorId) {
  const r = await api.get(`/api/medic/LastAvaliation/${doctorId}`);
  return r.data;
}
export async function medicChangeProfile(name, email, pass, descricao, id) {
  const r = await api.put("/api/medic/account", {
    name: name,
    email: email,
    pass: pass,
	descricao: descricao,
    id: id,
  });
  return r.data;
}

export async function alterImage(id, image) {
  let form = new FormData();
  form.append("capa", image);
  const r = await api.put(`/api/medic/${id}/capa`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return r.data;
}

export async function searchImage(image){
  return `${api.getUri()}/${image}`
}

