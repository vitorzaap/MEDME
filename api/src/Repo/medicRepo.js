import { con } from "./connection.js";

export async function medicLogin(medic) {
	const c = `
        SELECT id_medico		id,
			   nm_medico	AS	name,
			   ds_email			email,
			   ds_senha			pass,
			   ds_medico		descricao,
			   img_icon			icon,
			   id_atuacao1		atuacao1,
			   id_atuacao2		atuacao2
		  FROM tb_medico
         WHERE ds_email = ? AND
               ds_senha = ?
        `;
	const [res] = await con.query(c, [medic.email, medic.pass]);
	return res[0];
}

export async function novaConsulta(consulta) {
	
	const c = `
						INSERT INTO tb_consulta(id_medico, id_usuario, ds_consulta, dt_consulta, tm_consulta, id_atuacao, ds_plataforma, vl_preco, ds_link, ds_situacao)
							VALUES(?, ?, ?, ?, ?, ?, ?, ?,?, 'RESPOSTA PENDENTE');
        `;
	const [res] = await con.query(c, [consulta.medicoid, consulta.userid, consulta.descricao, consulta.data, consulta.hora, consulta.atuacao, consulta.plataforma, consulta.preco, consulta.link, consulta.situacao]);
	consulta.id = res.insertId;
	console.log(consulta)
	return consulta;
}

export async function selecionarPaciente(id) {
	const c = `
	select tb_usuario.nm_usuario nameUser,
			tb_usuario.id_usuario	id
			from tb_conversa
            inner join tb_usuario on tb_conversa.id_usuario = tb_usuario.id_usuario 
            where tb_conversa.id_medico= ?;
	`
	const [res] = await con.query(c, [id])
	return res[0];
}

export async function selecionarAtuacao(id){
	const c = `
		SELECT 	tb_atuacao.ds_atuacao	atuacao1,
				tb_atuacao.ds_atuacao	atuacao2
	from 		tb_atuacao
	inner join 	tb_medico on tb_medico.id_atuacao1 = tb_atuacao.id_atuacao 
	where 		tb_medico.id_medico = ?;
	`
	const [res] = await con.query(c, id)
	return res;
}
