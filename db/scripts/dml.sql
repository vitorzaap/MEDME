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
		VALUES("Psicólogo");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Pediatra");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Geral");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Neurologista");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Ortopedista");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Otorrinolaringologista");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Cardiologista");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("Endocrinologista");
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

INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Julio Boaventura", "julioboaventura@medme.com", "medme1234", "Bom médico por profissão, amor a pediatria por opção!", 4);

INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Plínio Rafael", "pliniasrafa@medme.com", "medme1234", "Não importa o problema, eu sou a solução. Sempre que precisar estarei aqui para lhe ajudar!", 5);

INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Tereza Fray", "frayreza@medme.com", "medme1234", "O cérebro é a parte mais importante do corpo. Marque já uma consulta e mantenha ele sempre saudável!", 6);

INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Rodrigo Anjos", "roroangels@medme.com", "medme1234", "Oi,oi!!! Venha se consultar com um dos melhores ortopedistas do Brasil, certificado pela SBOT", 7);

INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Sophia Montemurro", "sophhia@medme.com", "medme1234", "O nome é grande, e a importância também. Mantenha sempre consultas regulares com o endocrinologista. Marque já sua consulta!", 8);

INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Isaque Silva", "isaque@medme.com", "medme1234", "Mantenha seu coração sempre em dia, para enche-lo de amor!", 9);
            
INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao)
			VALUES("Fred Carvalho", "Fredmm@medme.com", "medme1234", "Endocrinoligia não é um tabu e eu posso te provar isso, vem comigo!!!", 10);
-- TB_MEDICO

-- TB_PLATAFORMA
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Discord");
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Skype");
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Google Meet");
INSERT INTO tb_plataforma(ds_plataforma)
		VALUES("Zooom");
-- TB_PLATAFORMA


-- EXECUTAR NA ORDEM!!!