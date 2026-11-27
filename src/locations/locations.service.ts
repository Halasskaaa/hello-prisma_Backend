import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto.js';
import { UpdateLocationDto } from './dto/update-location.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class LocationsService {
  constructor (private readonly db: PrismaService) {}

  create(createLocationDto: CreateLocationDto) {
    return this.db.location.create({
      data: createLocationDto
    })
  }

  findAll() {
    return this.db.location.
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return 
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
