import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function listarPacientes(id){
    const r = await api.get(`/api/medic/paciente${id}`);
    return r.data
}

export async function adicionarConsulta(medico, paciente, descricao, data, hora, tipo, plataforma, preco, link){
    
    
    const r = await api.post("/api/medic/consulta", {
        medicoid: medico,
        userid: paciente,
        descricao: descricao,
        data: data,
        hora: hora,
        atuacao: tipo,
        plataforma: plataforma,
        preco: preco,
        link: link
    });

    

    return r.data
}