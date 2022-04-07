const express = require("express");
const cors = require("cors");

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";

        // Middlewares, Son funciones que se ejecutan cuando se levanta el servidor

        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
        

    }

    middlewares() {

        //CORS -- permite proteger el server de manera superficial
        this.app.use(cors())

        // Lectura y Parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use(express.static("public")) // si o si tiene que usarse el .use para declarar un middleware
    }

    routes () {

        this.app.use(this.usuariosPath, require("../routes/usuarios"));
        
          
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en puerto", this.port);
        });
    }


}

module.exports = Server;