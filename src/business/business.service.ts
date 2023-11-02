import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class BusinessService {

  constructor(private readonly prisma: PrismaService){

  }

  create(createBusinessDto: Prisma.BusinessCreateInput) {
    return this.prisma.business.create({
      data: createBusinessDto,
    });
  }

  findAll() {
    return this.prisma.business.findMany();
  }

  findOne(id: number) {
    return this.prisma.business.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateBusinessDto: Prisma.BusinessUpdateInput) {
    return this.prisma.business.update({
      data: updateBusinessDto,
      where: {
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.business.delete({
      where: {
        id: id
      }
    });
  }
}
