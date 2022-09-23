INSERT INTO tb_usuario(nm_usuario, ds_email, ds_senha)
		VALUES("cuzinho", "admin","admin");
        
	select * from tb_usuario;
    select * from tb_conversa;
    
    insert into tb_conversa(id_medico, id_usuario)
    values (2, 3);
    
    -- selecionar paciente
    select id_usuario from tb_conversa where id_medico = 1;
    
    SELECT 		tb_atuacao.ds_atuacao	atuacao1,
				tb_atuacao.ds_atuacao	atuacao2
	from 		tb_atuacao
	inner join 	tb_medico 
    on 			tb_medico.id_atuacao1 = tb_atuacao.id_atuacao 
	where 		tb_medico.id_medico = 1;
    
    select tb_usuario.nm_usuario	
			from tb_conversa
            inner join tb_usuario on tb_conversa.id_usuario = tb_usuario.id_usuario 
            where tb_conversa.id_medico= 1;
            
	select nm_usurio from tb_conversa where id_medico =1;
    
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("psicólogo");
        
        select * from tb_medico;
        select * from tb_atuacao;

INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("dentista");
        
INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, id_atuacao1, id_atuacao2)
			VALUES("Victoruia Santasda", "medic@medic.com", "medic", 1, 2);
            
INSERT INTO tb_consulta(id_medico, id_usuario, ds_consulta, dt_consulta, id_atuacao, ds_plataforma, vl_preco, ds_link, ds_situacao)
			VALUES(1, 1, "Oftalmo", '2022-09-21 16:06:23', 1, "Google", 50, "https://www.figma.com", "RESPOSTA PENDENTE");
            
SELECT 	id_usuario 		id
FROM tb_conversa;

select * from tb_consulta order by id_consulta;





        
        