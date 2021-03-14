import {Employee} from "./employee"
import employessRepository from "./employess-repository";
import EmployessRepository from "./employess-repository"
class EmployeeService{
    constructor(){}
    public async all(){
        const Employess: Employee[] = await EmployessRepository.getAll();

        //להחזיר רשימת מוצרים;
        return Employess;
    }
    public async GetOne(id:number):Promise<Employee>{
        const employees:Employee[] = await EmployessRepository.getAll()

        const employee:Employee = employees.find(e=>e.id === id)!

        return employee
    }
    public async AddOne(employee:Employee):Promise<Employee>{
        const employees:Employee[] = await EmployessRepository.getAll()
        employee.id = employees[employees.length -1].id +1
        employees.push(employee)
        await employessRepository.SaveAll(employees)

        return employee
        
    }
    public async Update(employee:Employee):Promise<Employee>{
        const employees:Employee[] = await EmployessRepository.getAll()
        const index:number = employees.findIndex(e=>e.id ===employee.id) 
        employees[index] = employee
        await employessRepository.SaveAll(employees)
       

        return employee
        
    }
    public async Delete(id:number):Promise<Employee[]>{
        const employees:Employee[] = await EmployessRepository.getAll()
        const index:number = employees.findIndex(e=>e.id ===id) 
        employees.splice(index,1)
        await employessRepository.SaveAll(employees)
       

        return employees
        
    }

}
export default new EmployeeService()