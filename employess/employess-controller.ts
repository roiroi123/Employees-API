import * as express from 'express'
import EmployeeService from './employess-service';
import {Employee} from "./employee"
import employessService from './employess-service';
import employessRepository from './employess-repository';

export class EmployeesController{
    public router:express.Router;
    constructor(){
        this.router = express.Router();
        this.activateEmployessControllerRoutes()
    }

    private activateEmployessControllerRoutes(){
        this.router.get("/employess",this.all)
        this.router.post("/employess",this.AddEmployee)
        this.router.get("/employess/:id",this.getOneEmployee)
        this.router.put("/employess/:id",this.UpdateEmployee)
        this.router.delete("/employess/:id",this.DeleteEmployee)
    }

    private async all(req:express.Request,res:express.Response){
        try {
            const employess = await EmployeeService.all()
            res.json(employess)
        } catch (error) {
            console.log(error);
            
        }
    }
    private async getOneEmployee(req:express.Request,res:express.Response){
        try {
           const id:number = +req.params.id 
           const Employee = await employessService.GetOne(id)
           if (!Employee) {
               res.status(400).send(`id ${id} not found`)
           }
           res.json(Employee)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    private async AddEmployee(req:express.Request,res:express.Response){
        try {
            const employee:Employee = await employessService.AddOne(req.body)
            res.status(201).json(employee)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    private async UpdateEmployee(req:express.Request,res:express.Response){
        try {
            const idParam:number= +req.params.id
            const employee:Employee = req.body
            employee.id = idParam

            const result:Employee = await employessService.Update(employee)
            res.json(result)
            
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    private async DeleteEmployee(req:express.Request,res:express.Response){
        try {
            const idParam:number= +req.params.id
          

            const result:Employee[] = await employessService.Delete(idParam)
            res.json(result)
            
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}