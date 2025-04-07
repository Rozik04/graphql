import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true,
      playground: true, 
      debug:true,
      driver:ApolloDriver,
    }),
    PrismaModule, ProductModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
