INSERT INTO tb_usuario(nm_usuario, ds_email, ds_senha)
		VALUES("admin", "admin","admin");
        
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("psicólogo");

INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("dentista");
        
INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, id_atuacao1, id_atuacao2)
			VALUES("Victor Santos", "medic@medic.com", "medic", 1, 2);

INSERT INTO tb_consulta(id_medico, id_usuario, ds_consulta, dt_consulta, ds_plataforma, vl_preco, ds_link, ds_situacao)
			VALUES(1, 1, "Oftalmo", '2022-09-21 16:06:23', "Google", 50, "https://www.figma.com", "RESPOSTA PENDENTE");