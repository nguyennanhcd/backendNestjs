import { IsNotEmpty } from 'class-validator';

//data transfer object // class = { }
export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  description: string;
}
