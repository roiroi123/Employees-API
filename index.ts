import * as express from 'express'
import {EmployeesController} from "./employess/employess-controller"

export default class EmployeeRestServer { 
    public app :express.Application

    private EmployeesController:EmployeesController
    
    constructor(){
        this.activate()
    }
    activate(){
        this.app = express()
        this.app.use(express.json())
        this.app.use("/api/v1",new EmployeesController().router)
        this.app.listen(3000, () => console.log("listen on port 3000"));

    }
}
new EmployeeRestServer()