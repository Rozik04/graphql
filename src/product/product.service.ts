import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
 constructor(private readonly prisma: PrismaService){}

  async create(createProductInput: CreateProductInput) {
    let data = await this.prisma.product.create({data:{...createProductInput}})
    return data
  }

  async findAll() {
    let data = await this.prisma.product.findMany()
    return data
  }

  async findOne(id: number) {
    let data = await this.prisma.product.findFirst({where:{id}})
    return data
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    let data = await this.prisma.product.update({where:{id},data:{...updateProductInput}})
    return data;
  }


  async remove(id: number) {
    let data = await this.prisma.product.delete({where:{id}})
    return data;
  }
}
