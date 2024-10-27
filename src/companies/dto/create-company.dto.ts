import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty({ message: 'Company name is required' })
  @IsString({ message: 'Company name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'Company address is required' })
  @IsString({ message: 'Company address must be a string' })
  address: string;

  @IsNotEmpty({ message: 'Company description is required' })
  @IsString({ message: 'Company address must be a string' })
  description: string;
}
