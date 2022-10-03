show databases;
use medmedb;
show tables;
select * from tb_avaliacao;
insert into tb_avaliacao(id_medico, id_usuario,ds_avaliacao,nr_avaliacao) values (1,1,"Descrição teste",4.5);
select * from tb_situacao_consulta;
select * from tb_consulta;
select * from tb_usuario;
select * from tb_medico;
select * from tb_atuacao;

INSERT INTO tb_usuario(nm_usuario, sbr_usuario, ds_email, ds_senha)
        VALUES("Pedro","Horvath Montemurro", "PedroHorvathMontemurro@gmail.com","PedroHorath123");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("geral");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("dentista");
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("veterinario");
INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, ds_medico, id_atuacao, id_atuacao1)
            VALUES("Julio", "medicojulio@gmail.com","Sou um medico legal", "JulioBoaventuraMedico", 1, 2);




INSERT INTO tb_usuario(nm_usuario, ds_email, ds_senha)
		VALUES("xxxxi", "admin","admin");
        
	select * from tb_usuario;
    select id_usuario from tb_conversa where id_medico = 1;
    
    insert into tb_conversa(id_medico, id_usuario)
    values (1, 4);
    
    -- selecionar paciente
    select id_medico from tb_conversa where id_usuario = 1;
    
    SELECT 		tb_atuacao.ds_atuacao	atuacao1,
				tb_atuacao.ds_atuacao	atuacao2
	from 		tb_atuacao
	inner join 	tb_medico 
    on 			tb_medico.id_atuacao1 = tb_atuacao.id_atuacao 
	where 		tb_medico.id_medico = 1;
    
    select tb_usuario.nm_usuario	
			from tb_conversa
            inner join tb_usuario on tb_conversa.id_usuario = tb_usuario.id_usuario 
            where tb_conversa.id_medico= 6;
            
            
			SELECT 		tb_atuacao.ds_atuacao	atuacao1,
						tb_atuacao.ds_atuacao	atuacao2
	from 		tb_atuacao
	inner join 	tb_medico 
    on 			tb_medico.id_atuacao1 = tb_atuacao.id_atuacao 
	where 		tb_medico.id_medico = 2;
                    
            
           select tb_usuario.nm_usuario 
					from tb_consulta 	
                    inner join tb_usuario 
                    on tb_consulta.id_usuario = tb_usuario.id_usuario ;
                  
            
	select id_usuario from tb_conversa where id_medico =2;
    
INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("veterinario");
        
        select * from tb_medico;
        select * from tb_atuacao;

INSERT INTO tb_atuacao(ds_atuacao)
		VALUES("dentista");
        
INSERT INTO tb_medico(nm_medico, ds_email, ds_senha, id_atuacao1, id_atuacao2)
			VALUES("Julio", "a@a.com", "12345678", 1, 2);
            
INSERT INTO tb_consulta(id_medico, id_usuario, ds_consulta, dt_consulta, tm_consulta, id_atuacao, ds_plataforma, vl_preco, ds_link, ds_situacao)
			VALUES(1, 1, "Oftalmo", '2022-09-21','16:18:45', 1, "Google", 50, "https://www.figma.com", "RESPOSTA PENDENTE");
            
SELECT 	id_usuario 		id
FROM tb_conversa;

select * from tb_consulta order by id_consulta;

select date(dt_consulta) from tb_consulta;

select date_format(dt_consulta, '%d/%m' ) from tb_consulta;

select time_format(dt_consulta, '%H:%i' ) from tb_consulta;


		



        
        
insert into tb_avaliacao(id_medico, id_usuario,ds_avaliacao,nr_avaliacao) values (1,1,"Descrição teste",4.5);