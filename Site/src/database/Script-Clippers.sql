CREATE DATABASE Clippers;

USE Clippers;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dtNasc date,
    email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE Feedback(
idFeedback int primary key auto_increment,
feedback varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario(id) 
);

CREATE TABLE Pontuacao(
idPontuacao int primary key auto_increment,
pontos varchar(45),
fkUsuario int,
foreign key (fkUsuario) references Usuario(id)
);

/*insert into usuario values
(null, 'Giovanni','2005-05-10','giovanni@sptech.com','123'),
(null, 'Joao','2000-02-10','gio@sptech.com','123');
*/

-- IDADE MÉDIA DOS USUARIOS
/*
SELECT AVG(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) AS media_idade
FROM usuario;
*/




