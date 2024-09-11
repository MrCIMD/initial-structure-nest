import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration, validationSchema } from './common/config';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema,
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
