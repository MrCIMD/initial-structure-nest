import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigKey } from '../config';

export const databaseProvider = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    return {
      uri: config.get<string>(ConfigKey.DATABASE_URL),
    };
  },
});
