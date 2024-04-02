import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongodbService } from './mongodb.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [MongodbService],
  exports: [MongodbService]
})
export class MongodbModule {}
