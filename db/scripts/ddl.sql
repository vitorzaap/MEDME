SHOW DATABASES;
CREATE DATABASE medmedb;
USE medmedb;
SET foreign_key_checks = 0; 
CREATE TABLE tb_usuario(
		id_usuario			INT PRIMARY KEY AUTO_INCREMENT,
    	nm_usuario			VARCHAR(50) NOT NULL,
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
	 id_medico			INT PRIMARY KEY AUTO_INCREMENT,
   	 nm_medico			VARCHAR(200) NOT NULL,
   	 ds_email			VARCHAR(200) NOT NULL,
   	 ds_senha			VARCHAR(200) NOT NULL,
   	 ds_medico			VARCHAR(1500),
   	 img_icon			VARCHAR(200),
   	 id_atuacao			INT NOT NULL,
   	 id_atuacao1		INT,
   	 nr_consulta		INT DEFAULT 0,
	 FOREIGN KEY (id_atuacao) REFERENCES tb_atuacao(id_atuacao),
     FOREIGN KEY (id_atuacao1) REFERENCES tb_atuacao(id_atuacao)
);
CREATE TABLE tb_plataforma(
	id_plataforma		INT PRIMARY KEY AUTO_INCREMENT,
   	ds_plataforma		VARCHAR(200)
 );
 CREATE TABLE tb_situacao(
	id_situacao 	INT PRIMARY KEY AUTO_INCREMENT,
	ds_situacao		VARCHAR(50)
);
 CREATE TABLE tb_consulta(
	 id_consulta				INT PRIMARY KEY AUTO_INCREMENT,
   	 id_medico					INT,
     id_usuario					INT,
   	 id_atuacao					INT,
   	 id_plataforma				INT,
   	 ds_consulta				VARCHAR(2000),
   	 dt_consulta				DATE,
   	 tm_consulta				TIME,
   	 vl_preco					DECIMAL(10, 2),
   	 ds_link					VARCHAR(500),
   	 id_situacao				INT,
   	 FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
   	 FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario),
   	 FOREIGN KEY (id_atuacao) REFERENCES tb_atuacao(id_atuacao),
   	 FOREIGN KEY (id_plataforma) REFERENCES tb_plataforma(id_plataforma),
	 FOREIGN KEY (id_situacao) REFERENCES tb_situacao(id_situacao)
 );
 CREATE TABLE tb_avaliacao(
	id_avaliacao 		INT PRIMARY KEY AUTO_INCREMENT,
   	id_medico			INT NOT NULL,
    id_usuario			INT NOT NULL,
    ds_avaliacao		VARCHAR(2000) NOT NULL,
   	nr_avaliacao		INT NOT NULL,
	FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);
CREATE TABLE tb_sender(
		id_sender		INT PRIMARY KEY AUTO_INCREMENT,
        nm_sender		VARCHAR(50)
);
CREATE TABLE tb_conversa(
	id_conversa		INT PRIMARY KEY AUTO_INCREMENT,
   	id_medico		INT,
    id_usuario		INT,
    FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);
CREATE TABLE tb_mensagem(
	id_mensagem			INT PRIMARY KEY AUTO_INCREMENT,
    id_typeOfSender		INT,
    id_conversa			INT,
    ds_mensagem			VARCHAR(500),
    dt_mensagem			DATETIME,
    id_sender			INT,
    FOREIGN KEY (id_conversa) REFERENCES tb_conversa(id_conversa),
    FOREIGN KEY (id_typeOfSender) REFERENCES tb_sender(id_sender)
);