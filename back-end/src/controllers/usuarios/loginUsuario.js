const {compare} = require('bcrypt');

const login = async(req,res)=>{
    let usuario = require('../../models/usuario');
    const {email, senha} = req.body;
    console.log(email,senha)
    const usuarioExistente = await usuario.findOne({where: {email: email}});
    console.log(usuarioExistente)
    if(!usuarioExistente){
        return res.status(401).json({message: "email ou senha invalido"});
    }
    console.log(usuarioExistente.senha)
    const senhaMatch = await compare(senha,usuarioExistente.senha);
    console.log("Aqui",senhaMatch)
    if(!senhaMatch){
        return res.status(401).json({message: "email ou senha invalido"});
    }

    /*const updateUsuario  = await usuario.update(usuarioExistente.id,{
        logado: 1
    })   */
    
    return res.status(200).json({usuario:usuarioExistente})


}

module.exports = login;