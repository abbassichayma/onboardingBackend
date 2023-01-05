import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CampanyService } from './campany.service'


@Controller('campany')
export class CampanyController {
constructor( private readonly CampanyService:CampanyService){}
  
@Post()
  addCar(
    @Body('title') carTitle:String,
    @Body('description') carDescr:String,
    @Body('owner') carOnwner:String,
    @Body('photo') carPhoto:String,
  ): any {
    const addedCar = this.CampanyService.insertCar(carTitle,carDescr,carOnwner,carPhoto);
    return {addedCar:addedCar}
  }

  @Get()
  getAllCars(){
    return this.CampanyService.getCars()
  }

@Get(':id')
getCar(@Param('id') id:String){
    return this.CampanyService.getOneCar(id)
}

@Patch('id')
updateCar(
    @Param('id') id:String,
    @Body('title') carTitle:String,
    @Body('description') carDescr:String,
    @Body('owner') carOnwner:String,
    @Body('photo') carPhoto:String,
    ){

}

}
