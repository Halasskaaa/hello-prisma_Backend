import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {

  // Dependency Injection
  db: PrismaService
  constructor (db: PrismaService) {
    this.db = db
  }

  getHello(): string {
    return 'Hello World!';
  }
}
