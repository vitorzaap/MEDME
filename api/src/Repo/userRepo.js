import { con } from "./connection.js";

export async function userLogin(user) {
	const c = `
        SELECT 
        id_usuario  id,
        nm_usuario  name,
        sbr_usuario sobrenome,
        ds_email    email,
        ds_senha    senha
        from tb_usuario
         WHERE ds_email = ? AND
               ds_senha = ?
        `;
	const [res] = await con.query(c, [user.email, user.pass]);
	return res[0];
}

export async function verifUserEmail(email) {
	const c = `
        SELECT ds_email FROM tb_usuario WHERE ds_email = ?;
        `;
	const [res] = await con.query(c, [email]);
	return res[0];
}
export async function userSigIn(user) {
	const c = `
        INSERT INTO tb_usuario(nm_usuario, sbr_usuario, ds_email, ds_senha)
                VALUES(?, ?, ?, ?);
        `;
	const [res] = await con.query(c, [user.name, user.sobrenome, user.email, user.pass]);
	user.Id = res.insertId;
	return user;
}
export async function userAccept(id){
        const c = `UPDATE tb_consulta
        SET id_situacao = 2
        AND id_consulta = ?`
        const res = await con.query(c, [id])
        return res;
}

export async function getConsultas(userId) {
        const c = 
        `
        SELECT  id_consulta		        idConsulta,
	        tb_medico.nm_medico		medico,
	        tb_atuacao.ds_atuacao		atuacao,
                tb_plataforma.ds_plataforma     plataforma,
                ds_consulta			descricao,
                dt_consulta			dataConsulta,
                tm_consulta			horaConsulta,
                vl_preco		        preco,
                ds_link		                link
	FROM tb_consulta 
        INNER JOIN tb_plataforma ON tb_plataforma.id_plataforma = tb_consulta.id_plataforma
        INNER JOIN tb_atuacao ON tb_atuacao.id_atuacao = tb_consulta.id_atuacao
        INNER JOIN tb_medico ON tb_medico.id_medico = tb_consulta.id_medico
        WHERE id_usuario = ?;
        `
        const [res] = await con.query(c, [userId]);
        return res;
}