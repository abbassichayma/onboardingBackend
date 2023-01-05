import { Module } from '@nestjs/common';
import { CampanyService } from './campany.service';
import { CampanyController } from './campany.controller';

@Module({
  controllers: [CampanyController],
  providers: [CampanyService],
})
export class CampanyModule {}