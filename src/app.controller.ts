import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}
  // This method is a more concise version of the below method and this way can only used in ts

  // private readonly appService: AppService;
  // constructor(appService: AppService) {
  //   this.appService = appService;
  // }

  @Get()
  @Render('home')
  getHello() {
    const message = this.appService.getHello();

    // in all files except main.ts, we use this
    return {
      message: message,
    };
  }
}
