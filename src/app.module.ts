import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, MongodbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
