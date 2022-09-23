-- fiz algumas correções. Não garanto 100% de acerto.
CREATE DATABASE medmedb;
DROP DATABASE medmedb;
USE medmedb;

SELECT * from tb_consulta;

CREATE TABLE tb_usuario(
	id_usuario			int primary key auto_increment,
    nm_usuario			varchar(200) not null,
    ds_email			varchar(200) not null,
    ds_senha			varchar(200) not null,
    img_icon			varchar(200)
);

CREATE TABLE tb_atuacao(
	id_atuacao			int primary key auto_increment,
    ds_atuacao			varchar(200) not null
);



select * from tb_medico;

CREATE TABLE tb_medico(
	id_medico		int primary key auto_increment,
    nm_medico		varchar(200) not null,
    ds_email		varchar(200) not null,
    ds_senha		varchar(24) not null,
    ds_medico		varchar(1500),
    img_icon		varchar(500),
    id_atuacao1		int not null,
    id_atuacao2		int,
	FOREIGN KEY (id_atuacao1) REFERENCES tb_atuacao(id_atuacao),
    FOREIGN KEY (id_atuacao2) REFERENCES tb_atuacao(id_atuacao)
);


CREATE TABLE tb_consulta(
	id_consulta				int primary key auto_increment,
    id_medico				int not null,
    id_usuario				int not null,
    ds_consulta				varchar(2000) not null,
    dt_consulta				datetime not null,
    id_atuacao				int not null,
    ds_plataforma			varchar(200) not null,
    vl_preco				decimal not null,
    ds_link					varchar(500),
    ds_situacao				varchar(200),
    FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario),
    FOREIGN KEY (id_atuacao) REFERENCES tb_medico(id_atuacao1)
);

CREATE TABLE tb_situacao_consulta(
	id_situacao_consulta	int primary key auto_increment,
    id_consulta				int not null,
    ds_situacao				varchar(50) not null,
    FOREIGN KEY (id_consulta) REFERENCES tb_consulta(id_consulta)
);

CREATE TABLE tb_avaliacao(
	id_avaliacao 	int primary key auto_increment,
    id_medico		int not null,
    id_usuario		int not null,
    ds_avaliacao	varchar(2000) not null,
    nr_avaliacao	int not null,
	FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);

CREATE TABLE tb_conversa(
	id_conversa		int primary key auto_increment,
    id_medico		int not null,
    id_usuario		int not null,
    FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);

CREATE TABLE tb_mensagem(
	id_mensagem		int primary key auto_increment,
    id_conversa		int not null,
    ds_mensagem		varchar(5000) not null,
    FOREIGN KEY (id_conversa) REFERENCES tb_conversa(id_conversa)
);

