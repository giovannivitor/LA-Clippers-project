CREATE DATABASE Clippers;

USE Clippers;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dtNasc date,
    email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE avaliacao(
idAvaliacao int primary key auto_increment,
nota varchar(45),
fkUsuario int unique,
foreign key (fkUsuario) references usuario(id) 
);

CREATE TABLE pontuacao(
idPontuacao int primary key auto_increment,
pontos varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario(id)
);







