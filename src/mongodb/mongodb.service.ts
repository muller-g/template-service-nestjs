import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongodbService extends MongoClient implements OnModuleInit {
    constructor(private configService: ConfigService) {
        super(configService.get<string>('MONGO_URL'), {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
    }

    async onModuleInit() {
        await this.connect();
    }

    enableShutdownHooks(app: INestApplication) {
        this.on('beforeExit', async () => {
            await app.close();
        });
    }
}
