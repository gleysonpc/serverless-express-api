import express from 'express'
import serverless from "serverless-http";
import routes from './routes'

class App {
    constructor() {
        this.server = express()
        this.middleWares()
        this.routes()
    }

    routes() {
        this.server.use(routes)
    }

    middleWares() {
        this.server.use(express.json())
    }

    handler() {
        return serverless(this.server)
    }
}

export default new App().handler()