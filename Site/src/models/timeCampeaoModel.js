var database = require("../database/config");

function SelecionarTimeCampeao() {

  instrucaoSql = `select * from aquario a where fk_empresa = ${empresaId}`;

  return database.executar(instrucaoSql);
}

function SalvarTimeCampeao(nomeTimeCampeao, fkid) {
  
  instrucaoSql = `INSERT INTO timeCampeao (nometimecampeao, fkid)  values 
  ('${nomeTimeCampeao}',${fkid});`;

  return database.executar(instrucaoSql);
}


module.exports = {
  SelecionarTimeCampeao,
  SalvarTimeCampeao
}
