import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

  postHello() {
    return "Desde @Post en el service."
  }
}
