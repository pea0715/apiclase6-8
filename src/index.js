// importacion del fremework 
const express = require('express')

// creando la aplicacion 
const app = express()

// integrando el router con la aplicacion
const router =  require("./routers/index.routers")
app.use(router)




app.get('/', (req, res) => {
  res.send('Hello World!')
})

/// puerto donde se levanta el servidor web 
// puerto donde esta escuchando la API 
const port = 3000

//levantar la API que estara escuchando en el puerto  3000
// 1.Primer parametro: puerto 
// 2.Segundo parametro: callback
app.listen(port, () => {
  console.log(`API escuchando en: http://localhost:${port}`)
})
