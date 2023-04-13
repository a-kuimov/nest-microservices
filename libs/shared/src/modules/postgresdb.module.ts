import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'messenger',
        autoLoadEntities: true,
        synchronize: true, // shouldn't be used in production - may lose data
      }),

      inject: [ConfigService],
    }),
  ],
})
export class PostgresDBModule {}
