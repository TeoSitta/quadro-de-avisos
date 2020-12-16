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

function editar(aviso, id){
    return BD('avisos').where('ID_avisos', id).update(aviso)
    .then( _ =>{

        return { tipo: 'sucesso', corpo: 'Dados alterados com sucesso'}

    })
    .catch(erro =>{

        return { tipo: 'erro', corpo: 'Erro ao alterar dados'}

    }) 
}

/** 
* @returns {object} 
*/
function selecionartudo(){
    return BD.select('*').from('avisos').orderBy('data','ASC')
    .then(avisos => {

        return avisos

    })
    .catch(erro =>{

        return { tipo: 'erro', corpo: 'Erro ao inserir dados'+erro}

    }) 
}

/**
 * 
 * @param {*} id
 * @returns {object} 
 */
function selecionarAviso(id){
    return BD.select('*').from('avisos').where('ID_avisos', id).first()
        .then(aviso => {return aviso})
        .catch(erro => {
            return { tipo: "erro", corpo: "Erro: " + erro}
        })

}

/**
 * 
 * @param {int} id
 */

function excluir(id){
    return BD.del().from('avisos').where('ID_avisos',id)
}

module.exports = {salvar,selecionartudo,excluir,selecionarAviso,editar}
