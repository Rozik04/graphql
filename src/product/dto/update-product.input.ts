import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateProductInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field(() => Int)
  @IsNotEmpty()
  price: number;

  @Field()
  @IsNotEmpty()
  color: string;

  @Field(() => Int)
  @IsNotEmpty()
  categoryId: number;
}
