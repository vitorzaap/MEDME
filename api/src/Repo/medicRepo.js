import { con } from "./connection.js";

export async function medicLogin(medic) {
	const c = `
        SELECT id_medico		id,
			   nm_medico	AS	name,
			   ds_email			email,
			   ds_senha			pass,
			   ds_medico		descricao,
			   img_icon			icon,
			   id_atuacao		atuacao,
			   id_atuacao1		atuacao1,
			   nr_consulta		numConsulta
		  FROM tb_medico
         WHERE ds_email = ? AND
               ds_senha = ?
        `;
	const [res] = await con.query(c, [medic.email, medic.pass]);
	return res[0];
}

export async function novaConsulta(consulta) {
	
	const c = `
			INSERT INTO tb_consulta(id_medico, id_usuario, ds_consulta, dt_consulta, tm_consulta, id_atuacao, id_plataforma, vl_preco, ds_link, ds_situacao)
			VALUES(?, ?, ?, ?, ?, ?, ?, ?,?, 'RESPOSTA PENDENTE');
        `;
	const [res] = await con.query(c, [
		consulta.medicoid,
		consulta.userid,
		consulta.descricao,
		consulta.data,
		consulta.hora,
		consulta.atuacao,
		consulta.plataforma,
		consulta.preco,
		consulta.link,
		consulta.situacao,
	]);
	consulta.id = res.insertId;

	const add = `
	UPDATE tb_medico SET nr_consulta = nr_consulta + 1 WHERE id_medico = ?;
	`;
	const nConsult = await con.query(add, [consulta.medicoid]);
	const verif = await con.query(`SELECT nr_consulta consultas FROM tb_medico WHERE id_medico = ?`, consulta.medicoid)
	return consulta;
}

export async function selecionarPaciente(id) {
	const c = `
	select tb_usuario.nm_usuario nameUser,
			tb_usuario.id_usuario	id
			from tb_conversa
            inner join tb_usuario on tb_conversa.id_usuario = tb_usuario.id_usuario 
            where tb_conversa.id_medico= ?;
	`;
	const [res] = await con.query(c, [id]);
	return res[0];
}

export async function selecionarAtuacao(id) {
	const c = `
		SELECT 	tb_atuacao.ds_atuacao	atuacao,
		tb_atuacao.id_atuacao			id
	from 		tb_atuacao
	inner join 	tb_medico on tb_medico.id_atuacao = tb_atuacao.id_atuacao 
	where 		tb_medico.id_medico = ?;
	`;
	const [res] = await con.query(c, id);
	return res;
}

export async function secPlataforma() {
	const c =
		`
		SELECT
		id_plataforma id, 
		ds_plataforma plataforma 
		FROM tb_plataforma
		`
	const [res] = await con.query(c);
	return [res];
}
