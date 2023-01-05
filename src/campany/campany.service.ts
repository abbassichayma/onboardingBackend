import { Injectable, NotFoundException } from "@nestjs/common";
import {CarModel} from './campany.model'

@Injectable()
export class CampanyService {
cars:CarModel[]=[];
insertCar(photo:String ,title :String ,description:String, owner:String){
    const id = Math.random().toString();
    // j'ai utilisé Math.random() pour générer id car j'arrive pas à checher comment utiliser timestamp avec nest js
    const newCar = new CarModel(id,photo,title,description,owner);
    this.cars.push(newCar);
return  newCar
}

getCars(){
    return [...this.cars];
}

getOneCar(CarId:String){

    const Car = this.cars.find((car)=>car.id===CarId)
    if(!Car){
        throw new NotFoundException('Could not found car.')
    }
    return {...Car}
}
}
