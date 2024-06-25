import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Pearl thought!';
  }

  getPing(): string {
    return 'Pong!';
  }
}
