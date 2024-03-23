// 1 - Chamando o express
const express = require('express')

// 2 - Chamar o método constructor
class App {
    constructor(){
        this.app = express()

        //6 - Assim que a aplicação rodar, chamar o middleware
        this.middlewares()
        //7 - Chamar as rotas
        this.routes()
    }
    // 3- dentro da classe, vamos criar 2 metodos

    middlewares(){
        //5 - Preciso avisar o express que vou usar JSON
        this.app.use(express.json())
    }

    // 4 - metodo routes
    routes(){

    }
}

//8 - Exportar o app
module.exports = new App().app