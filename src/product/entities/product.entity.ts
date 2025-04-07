import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field(()=> Int)
  price: number;

  @Field(() => Category, { nullable: true })
  category: Category;  

  @Field(() => Category)
  categoryId: number;
}
