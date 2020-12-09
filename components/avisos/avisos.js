const BD = require('../../knexfile')

/**
 * 
 * @param {object} aviso
 * @returns {object} 
 */
function salvar(aviso){
return BD.insert(aviso).into('avisos')
    .then( _ =>{

        return { tipo: 'sucesso', corpo: 'Dados inseridos com sucesso'}

    })
    .catch(erro =>{

        return { tipo: 'erro', corpo: 'Erro ao inserir dados'}

    }) 
}
/** 
* @returns {object} 
*/
function selecionartudo(){
    return BD.select('*').from('avisos')
    .then(avisos => {

        return avisos

    })
    .catch(erro =>{

        return { tipo: 'erro', corpo: 'Erro ao inserir dados'+erro}

    }) 
}

module.exports = {salvar,selecionartudo}
