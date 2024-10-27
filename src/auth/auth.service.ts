import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IRegisterUser, IUser } from 'src/users/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/schemas/user.schema';
import { Model } from 'mongoose';
import { USER_MODEL_NAME } from 'src/users/users.constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectModel(USER_MODEL_NAME) private userModel: Model<User>,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const isValid = this.usersService.isValidPassword(pass, user.password);
      if (isValid === true) {
        return user;
      }
    }
    return null;
  }

  async register(registerUser: IRegisterUser) {
    const { name, email, password, age, gender, address } = registerUser;
    const userRole: string = 'USER';

    const hashPassword = this.usersService.getHashPassword(password);
    const registeredUser = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      address,
      role: userRole,
    });

    return {
      _id: registeredUser._id,
      createdAt: registeredUser.createdAt,
    };
  }

  async login(user: IUser) {
    const { _id, name, email, role } = user;
    const payload = {
      sub: 'token login',
      iss: 'from server',
      _id,
      name,
      email,
      role,
    };
    return {
      access_token: this.jwtService.sign(payload),
      _id,
      name,
      email,
      role,
    };
  }
}
