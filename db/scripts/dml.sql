INSERT INTO tb_usuario(nm_usuario, ds_email, ds_senha)
		VALUES("admin", "admin","admin");
        
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("psicólogo");

INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("dentista");
        
INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, id_atuacao1, id_atuacao2)
			VALUES("Victor Santos", "medic@medic.com", "medic", 1, 2);