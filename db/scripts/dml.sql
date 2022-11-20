USE medmedb;
-- EXECUTAR NA ORDEM!!!

-- TB_SENDER
INSERT INTO tb_sender(nm_sender)
			VALUES("User");
INSERT INTO tb_sender(nm_sender)
			VALUES("Doctor");
INSERT INTO tb_sender(nm_sender)
			VALUES("System");
-- TB_SENDER

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
        VALUES("João","Pereira", "joao@gmail.com","usuario1234");

INSERT INTO tb_usuario(nm_usuario, sbr_usuario, ds_email, ds_senha)
        VALUES("Julio","Boaventura", "julio@gmail.com","usuario1234");

INSERT INTO tb_usuario(nm_usuario, sbr_usuario, ds_email, ds_senha)
        VALUES("Marcos","Menezes", "marcos@gmail.com","usuario1234");
-- TB_USUARIO

-- TB_MEDICO
INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Victor Santos", "victorsantos@medme.com", "medme1234", "Olá, Sou um médico dentista, inicie uma conversa comigo para que conversar sobre esses seus dentes!", 1);

INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Kalel Rodrigues", "kalelrodrigues@medme.com", "medme1234", "Opa, beleza? Sou um médico especialista em animais, inicie uma conversa comigo para que possamos marcar uma consulta!", 2);

INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Pedro Horvath", "pedrohorvath@medme.com", "medme1234", "Oi, Sou um psicólogo, vamos marcar uma consulta para que possamos resolver seus problemas!", 3);

-- TB_PLATAFORMA
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Discord");
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Skype");
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Google Meet");
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Zooom");
-- EXECUTAR NA ORDEM!!!