import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigKey, configuration, validationSchema } from './common/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema,
    }),
  ],
})
export class AppModule {
  constructor(private readonly config: ConfigService) {
    const url = config.get<string>(ConfigKey.DATABASE_URL);

    console.log(url);
  }
}
