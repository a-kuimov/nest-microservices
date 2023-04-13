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
        database: 'users',
        autoLoadEntities: true,
        synchronize: true,
      }),

      inject: [ConfigService],
    }),
  ],
})
export class PostgresDBModule2 {}
