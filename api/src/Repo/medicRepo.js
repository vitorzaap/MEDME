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

export async function searchByDate(id, date) {
	const c = `SELECT * FROM tb_consulta WHERE id_medico = ? AND dt_consulta = ?`;
}

export async function novaConsulta(consulta) {
	const c = `
			INSERT INTO tb_consulta(id_medico, id_usuario, ds_consulta, dt_consulta, tm_consulta, id_atuacao, id_plataforma, vl_preco, ds_link, id_situacao)
			VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, 1);
        `;
	const [res] = await con.query(c, [consulta.medicoid, consulta.userid, consulta.descricao, consulta.data, consulta.hora, consulta.atuacao, consulta.plataforma, consulta.preco, consulta.link]);
	consulta.id = res.insertId;

	const add = `
	UPDATE tb_medico SET nr_consulta = nr_consulta + 1 WHERE id_medico = ?;
	`;
	const nConsult = await con.query(add, [consulta.medicoid]);
	return consulta;
}

export async function selecionarPaciente(id) {
	const c = `
			select tb_usuario.nm_usuario nome,
			tb_usuario.id_usuario	id
			from tb_conversa
            inner join tb_usuario on tb_conversa.id_usuario = tb_usuario.id_usuario 
            where tb_conversa.id_medico= ?;
	`;
	const [res] = await con.query(c, [id]);
	return res;
}

export async function selecionarAtuacao(id) {
	const c = `
		SELECT 		tb_atuacao.ds_atuacao	atuacao,
			   		tb_atuacao.id_atuacao	id
		  from 		tb_atuacao
	inner join 		tb_medico on tb_medico.id_atuacao = tb_atuacao.id_atuacao 
		 where 		tb_medico.id_medico = ?;
	`;
	const [res] = await con.query(c, id);
	return res;
}

export async function secPlataforma() {
	const c = `
		SELECT
		id_plataforma id, 
		ds_plataforma plataforma 
		FROM tb_plataforma
		`;
	const [res] = await con.query(c);
	return [res];
}

export async function getConsulta(id) {
	const c = `
	SELECT  id_consulta		        idConsulta,
	tb_usuario.nm_usuario			usuario,
	tb_atuacao.ds_atuacao			atuacao,
	tb_plataforma.ds_plataforma     plataforma,
	ds_consulta						descricao,
	nr_consulta						consultas,
	dt_consulta						dataConsulta,
	tm_consulta						horaConsulta,
	vl_preco		        		preco,
	ds_link		                	link,
	tb_situacao.ds_situacao			situacao,
	tb_situacao.id_situacao			idSituacao
	FROM tb_consulta 
	INNER JOIN tb_plataforma ON tb_plataforma.id_plataforma = tb_consulta.id_plataforma
	INNER JOIN tb_medico on tb_medico.id_medico = tb_consulta.id_medico
	INNER JOIN tb_atuacao ON tb_atuacao.id_atuacao = tb_consulta.id_atuacao
	INNER JOIN tb_usuario ON tb_usuario.id_usuario = tb_consulta.id_usuario
	INNER JOIN tb_situacao ON tb_situacao.id_situacao = tb_consulta.id_situacao
	WHERE tb_medico.id_medico = ?;
		`;
	const [res] = await con.query(c, [id]);
	return res;
}

export async function getComents(id) {
	const c = `
		SELECT 
		id_avaliacao,
        tb_medico.nm_medico,
        tb_usuario.nm_usuario,
        tb_usuario.img_icon,
        tb_avaliacao.ds_avaliacao,
        tb_avaliacao.nr_avaliacao
		FROM tb_avaliacao 
		INNER JOIN tb_usuario ON tb_avaliacao.id_usuario = tb_usuario.id_usuario
		INNER JOIN tb_medico ON tb_avaliacao.id_medico = tb_medico.id_medico WHERE tb_medico.id_medico = ?;
		`;
	const [r] = await con.query(c, [id]);
	return r;
}

export async function getDoctorById(id) {
	const c = `
		SELECT * FROM tb_medico WHERE id_medico = ?
		`;
	const [res] = await con.query(c, [id]);
	return res;
}
export async function allConsuts(doctorId) {
	const c = `
	SELECT * FROM tb_consulta 
	WHERE id_medico = ?
		  `;
	const [res] = await con.query(c, [doctorId]);
	return res;
}

export async function pendentConsult(doctorId) {
	const c = `
	SELECT * FROM tb_consulta 
	WHERE id_situacao = 1
	AND id_medico = ?
		  `;
	const [res] = await con.query(c, [doctorId]);
	return res;
}

export async function ultimaAvaliacao(doctorId) {
	const c = `
	SELECT 
	id_avaliacao,
	nr_avaliacao 
	FROM tb_avaliacao
	WHERE id_medico = ?
	ORDER BY id_avaliacao DESC;
		`;
	const [res] = await con.query(c, [doctorId]);
	return res;
}

export async function changeDoctor(doctor) {
	const c = `
		  UPDATE  tb_medico
		  SET     nm_medico = ?,    
				  ds_email = ?,
				  ds_senha = ?,
				  ds_medico = ?
		  WHERE   id_medico = ?
		  `;
	const [res] = await con.query(c, [doctor.name, doctor.email, doctor.pass, doctor.descricao, doctor.id]);
	return doctor;
}

export async function alterimage(image, id) {
	const c = `
	UPDATE  tb_medico
	SET     img_icon =      ?
	WHERE   id_medico =    ?`;

	const [resp] = await con.query(c, [image, id]);
	return resp.affectedRows;
}
