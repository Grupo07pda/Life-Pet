const {compare} = require('bcrypt');

const login = async(req,res)=>{
    let usuario = require('../../models/usuario');
    const {email, senha} = req.body;
    console.log(email,senha)
    const usuarioExistente = await usuario.findOne({where: {email: email}});
    console.log(usuarioExistente)
    if(!usuarioExistente){
        return res.json({message: "email ou senha invalido"});
    }
    console.log(usuarioExistente.senha)
    const senhaMatch = await compare(senha,usuarioExistente.senha);
    console.log("Aqui",senhaMatch)
    if(!senhaMatch){
        return res.json({message: "email ou senha invalido"});
    }


    return res.json({usuario:usuarioExistente})
}

module.exports = login;