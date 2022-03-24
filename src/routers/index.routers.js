// importacion del fremework
const express = require('express')

// instanciando un router
const router = express.Router()

// importat controladores
const usuarios_controller = require('../controllers/usuarios.controllers')

// defenicion de los endpoinsts - rutas

const vs ="/api/v1"

router.get(vs + "/usuarios", usuarios_controller.consultarUsuarios)
      .get(vs + "/usuarios/:id", usuarios_controller.consultarUsuario) // usuario/1
      .post(vs + "/usuarios", usuarios_controller.crearUsuario)
      .put(vs + "/usuarios", usuarios_controller.modificarUsuario)
      .delete(vs + "/usuarios", usuarios_controller.eliminarUsuario)




module.exports = router