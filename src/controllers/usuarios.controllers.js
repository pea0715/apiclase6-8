// controlador de usuarios
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */


const crearUsuario = (req, res) => {
    res.send("crear usuario")

}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */

const modificarUsuario = (req, res) => { 
    res.send("modificar usuario")
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */

 const eliminarUsuario = (req, res) => { 
    res.send("elimnar usuario")
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */

 const consultarUsuario = (req, res) => { 
    res.send("consultar  usuario")
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */

 const consultarUsuarios = (req, res) => { 
    res.send("consultar  usuarios")
}

module.exports={
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    consultarUsuario,
    consultarUsuarios
}


