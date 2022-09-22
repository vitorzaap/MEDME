import { con } from "./connection.js";

export async function medicLogin(email, pass) {
	const c = `
        SELECT * from tb_medico
         WHERE ds_email = ?,
               ds_senha = ?
        `;
	const [res] = con.query(c, [email, pass]);
	return res;
}

export async function novaConsulta(consulta) {
	const c = `
        INSERT INTO tb_consulta(id_medico, id_usuario, ds_consulta, dt_consulta,id_atuacao, ds_plataforma, vl_preco, ds_link, ds_situacao)
			VALUES(?, ?, ?, ?, ?, ?, ?, ?, 'RESPOSTA PENDENTE');
        `;
	const [res] = await con.query(c, [consulta.medicoid, consulta.userid, consulta.descricao, consulta.hora, consulta.atuacao, consulta.plataforma, consulta.preco, consulta.link, consulta.situacao]);
	consulta.id = res.insertId;
	return consulta;
}

export async function selecionarPaciente(id){
	const c = `
	select tb_usuario.nm_usuario
			from tb_conversa
            inner join tb_usuario on tb_conversa.id_usuario = tb_usuario.id_usuario 
            where tb_conversa.id_medico= ?;
	`
	const [res] = await con.query(c, id)
	return [res]
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
	return [res]
}
