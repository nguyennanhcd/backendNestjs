import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // This method is a more concise version of the below method and this way can only used in ts

  // private readonly appService: AppService;
  // constructor(appService: AppService) {
  //   this.appService = appService;
  // }

  @Get()
  @Render('home')
  getHello() {
    const message = this.appService.getHello();

    return {
      message: message,
    };
  }
}
