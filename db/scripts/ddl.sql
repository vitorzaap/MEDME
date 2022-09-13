-- fiz algumas correções. Não garanto 100% de acerto.
CREATE DATABASE medmedb;
USE medmedb;

CREATE TABLE tb_usuario(
	id_usuario			int primary key auto_increment,
    nm_usuario			varchar(200),
    ds_email			varchar(200),
    ds_senha			varchar(200),
    img_icon			varchar(200)
);

CREATE TABLE tb_atuacao(
	id_atuacao			int primary key auto_increment,
    ds_atuacao			varchar(200)
);

CREATE TABLE tb_medico(
	id_medico		int primary key auto_increment,
    nm_medico		varchar(200),
    ds_email		varchar(200),
    ds_senha		varchar(24),
    ds_medico		varchar(1500),
    img_icon		varchar(500),
    id_atuacao1		int,
    id_atuacao2		int,
	FOREIGN KEY (id_atuacao1) REFERENCES tb_atuacao(id_atuacao),
    FOREIGN KEY (id_atuacao2) REFERENCES tb_atuacao(id_atuacao)
);

CREATE TABLE tb_consulta(
	id_consulta				int primary key auto_increment,
    id_medico				int,
    id_usuario				int,
    ds_consulta				varchar(2000),
    dt_consulta				datetime,
    ds_plataforma			varchar(200),
    vl_preco				double,
    ds_link					varchar(500),
    FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);

CREATE TABLE tb_situacao_consulta(
	id_situacao_consulta	int primary key auto_increment,
    id_consulta				int,
    ds_situacao				varchar(50),
    FOREIGN KEY (id_consulta) REFERENCES tb_consulta(id_consulta)
);

CREATE TABLE tb_avaliacao(
	id_avaliacao 	int primary key auto_increment,
    id_medico		int,
    id_usuario		int,
    ds_avaliacao	varchar(2000),
    nr_avaliacao	int,
	FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);

CREATE TABLE tb_conversa(
	id_conversa		int primary key auto_increment,
    id_medico		int,
    id_usuario		int,
    FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);

CREATE TABLE tb_mensagem(
	id_mensagem		int primary key auto_increment,
    id_conversa		int,
    ds_mensagem		varchar(5000),
    FOREIGN KEY (id_conversa) REFERENCES tb_conversa(id_conversa)
);

