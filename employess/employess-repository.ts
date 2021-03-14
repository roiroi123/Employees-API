import * as fs from 'fs'
import * as util from 'util'
import {Employee} from "./employee"

class EmployessRepository{
     private readFile:any
     private writeFile:any
constructor(){
    this.readFile = util.promisify(fs.readFile)
    this.writeFile = util.promisify(fs.writeFile)
}   
public async getAll():Promise<Employee[]>{
    try {
        const result = await this.readFile("./database/employess.json","utf-8")
        return JSON.parse(result)
    } catch (error) {
        throw error
    }
}
public async SaveAll(employess:Employee[]):Promise<Employee[]>{
    try {
        return await this.writeFile("./database/employess.json",JSON.stringify(employess))
    } catch (error) {
        throw error
    }
}

 }
 export default new EmployessRepository()