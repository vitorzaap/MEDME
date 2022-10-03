SHOW DATABASES;
CREATE DATABASE medmedb;
USE medmedb;
SHOW TABLES;

CREATE TABLE tb_usuario(
	id_usuario			INT PRIMARY KEY AUTO_INCREMENT,
    	nm_usuario			VARCHAR(10) NOT NULL,
		sbr_usuario         VARCHAR(200) NOT NULL,
    	ds_email			VARCHAR(200) NOT NULL,
    	ds_senha			VARCHAR(200) NOT NULL,
    	img_icon			VARCHAR(200)
);

CREATE TABLE tb_atuacao(
	id_atuacao			INT PRIMARY KEY AUTO_INCREMENT,
   	ds_atuacao			VARCHAR(200) NOT NULL
);

CREATE TABLE tb_medico(
	 id_medico		INT PRIMARY KEY AUTO_INCREMENT,
   	 nm_medico		VARCHAR(200) NOT NULL,
   	 ds_email		VARCHAR(200) NOT NULL,
   	 ds_senha		VARCHAR(24) NOT NULL,
   	 ds_medico		VARCHAR(1500),
   	 img_icon		VARCHAR(500),
   	 id_atuacao		INT NOT NULL,
   	 id_atuacao1		INT,
   	 nr_consulta		INT DEFAULT 0,
	 FOREIGN KEY (id_atuacao) REFERENCES tb_atuacao(id_atuacao),
    	 FOREIGN KEY (id_atuacao1) REFERENCES tb_atuacao(id_atuacao)
);

CREATE TABLE tb_plataforma(
	id_plataforma		INT PRIMARY KEY AUTO_INCREMENT,
   	ds_plataforma		VARCHAR(200)
 );
 
 CREATE TABLE tb_consulta(
	id_consulta				INT PRIMARY KEY AUTO_INCREMENT,
   	 id_medico				INT NOT NULL,
    	id_usuario				INT,
   	 id_atuacao				INT,
   	 id_plataforma				INT,
   	 ds_consulta				VARCHAR(2000) NOT NULL,
   	 dt_consulta				DATE NOT NULL,
   	 tm_consulta				TIME NOT NULL,
   	 vl_preco				DECIMAL(10, 2) NOT NULL,
   	 ds_link				VARCHAR(500) ,
   	 ds_situacao				VARCHAR(200) ,
   	 FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
   	 FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario),
   	 FOREIGN KEY (id_atuacao) REFERENCES tb_atuacao(id_atuacao),
   	 FOREIGN KEY (id_plataforma) REFERENCES tb_plataforma(id_plataforma)
 );

CREATE TABLE tb_situacao_consulta(
	id_situacao_consulta		INT PRIMARY KEY AUTO_INCREMENT,
    	id_consulta			INT NOT NULL,
    	ds_situacao			VARCHAR(50) NOT NULL,
    	FOREIGN KEY (id_consulta) REFERENCES tb_consulta(id_consulta)
);

CREATE TABLE tb_avaliacao(
	id_avaliacao 		INT PRIMARY KEY AUTO_INCREMENT,
   	id_medico		INT NOT NULL,
    	id_usuario		INT NOT NULL,
    	ds_avaliacao		VARCHAR(2000) NOT NULL,
   	nr_avaliacao		INT NOT NULL,
	FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    	FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);

CREATE TABLE tb_conversa(
	id_conversa		INT PRIMARY KEY AUTO_INCREMENT,
   	id_medico		INT NOT NULL,
    	id_usuario		INT NOT NULL,
    	FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    	FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);

CREATE TABLE tb_mensagem(
	id_mensagem		INT PRIMARY KEY AUTO_INCREMENT,
    	id_conversa		INT NOT NULL,
    	ds_mensagem		VARCHAR (5000) NOT NULL,
    	FOREIGN KEY (id_conversa) REFERENCES tb_conversa(id_conversa)
);

CREATE TABLE tb_notificacao(
	id_notificacao		INT PRIMARY KEY AUTO_INCREMENT,
    	id_mensagem		INT,
    	id_conversa		INT,
    	ds_notificacao		VARCHAR(500),
	FOREIGN KEY (id_mensagem) REFERENCES tb_mensagem(id_mensagem),
    	FOREIGN KEY (id_conversa) REFERENCES tb_conversa(id_conversa)
);
