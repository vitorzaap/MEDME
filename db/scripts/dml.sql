USE medmedb;
-- EXECUTAR NA ORDEM!!!

--TB_SENDER
INSERT INTO tb_sender(nm_sender) EXECUTAR NA ORDEM!!!
			VALUES("User");
INSERT INTO tb_sender(nm_sender)
			VALUES("Doctor");
INSERT INTO tb_sender(nm_sender)
			VALUES("System");
--TB_SENDER

-- TB_SITUACAO
INSERT INTO tb_situacao(ds_situacao)
			VALUES("Resposta Pendente");
INSERT INTO tb_situacao(ds_situacao)
			VALUES("Consulta Aceita");
INSERT INTO tb_situacao(ds_situacao)
			VALUES("Consulta Recusada");
INSERT INTO tb_situacao(ds_situacao)
			VALUES("Consulta Avaliada");
-- TB_SITUACAO

-- TB_ATUACAO
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Dentista");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Veterinario");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Psicólogo");
-- TB_ATUACAO

-- TB_USUARIO
INSERT INTO tb_usuario(nm_usuario, sbr_usuario, ds_email, ds_senha)
        VALUES("Pedro","Horvath Montemurro", "PedroHorvathMontemurro@gmail.com","PedroHorath123");
-- TB_USUARIO

-- TB_MEDICO
INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao, id_atuacao1)
			VALUES("Victor Santos", "victorsantos@medme.com", "medme1234", "Olá, Sou um médico especialista em várias coisas, inicie uma conversa comigo para que possamos marcar uma consulta!", 1, 3);
-- TB_PLATAFORMA
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Meet");
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Discord");
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Skype");
-- EXECUTAR NA ORDEM!!!

-- TB_CONSULTA
INSERT INTO tb_consulta(id_medico, id_usuario, id_atuacao, id_plataforma, ds_consulta, dt_consulta, vl_preco, ds_link, id_situacao)
VALUES(1, 34, 1, 4, "Consulta Será Realizada Por Conta Da Falta De Higiene Do Paciente", "2022-11-15", 1200, "https://meet.com", 1);

-- TB_AVALIACAO
INSERT INTO tb_avaliacao(id_medico, id_usuario, ds_avaliacao, nr_avaliacao) 
VALUES(1, 34, "não gostei desse medico papa", 1)