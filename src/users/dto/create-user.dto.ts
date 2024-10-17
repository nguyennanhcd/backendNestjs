import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// data transfer object
export class CreateUserDto {
  @IsEmail(
    {},
    {
      message: 'You must fill in this field with a valid email address.',
    },
  )
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  address: string;
}
