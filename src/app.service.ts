import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {

  // Dependency Injection
  // db: PrismaService
  // constructor (db: PrismaService) {
  //   this.db = db
  // } the below is the same

  constructor (private readonly db: PrismaService) {

  }

  getHello(): string {
    return 'Hello World!';
  }

  weather() {
    return this.db.forecast.findMany();
  }
    
  singleWeather(id: number) {
    return this.db.forecast.findUniqueOrThrow({
      where: {
        id: id
      }
    })
  }

  deleteWeather(id: number) {
    return this.db.forecast.delete({
      where: {
        id: id
      }
    })
  }
}
