import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService){}

  async create(createCategoryInput: CreateCategoryInput) {
    let data = await this.prisma.category.create({data:{...createCategoryInput}})
    return data
  }

  async findAll() {
    let data = await this.prisma.category.findMany()
    return data
  }

  findOne(id: number) {
    let data = this.prisma.category.findFirst({where:{id}})
    return data;
  }

  async update(id: number, updateCategoryInput: CreateCategoryInput) {
    let data = await this.prisma.category.update({where:{id}, data:{...updateCategoryInput}})
    return data
  }

  async remove(id: number) {
    let data = await this.prisma.category.delete({where:{id}})
    return data;
  }
}
