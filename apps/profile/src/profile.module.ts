import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileEntity, SharedModule, SharedService } from '@app/shared';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileRepository } from '@app/shared/repositories/profile.repository';
import { ProfileService } from './profile.service';
import { PostgresDBModule2 } from '@app/shared/modules/postgresdb2.module';

@Module({
  imports: [
    SharedModule,
    PostgresDBModule2,

    TypeOrmModule.forFeature([ProfileEntity]),
  ],
  controllers: [ProfileController],
  providers: [
    {
      provide: 'ProfileServiceInterface',
      useClass: ProfileService,
    },
    {
      provide: 'SharedServiceInterface',
      useClass: SharedService,
    },
    {
      provide: 'ProfileRepositoryInterface',
      useClass: ProfileRepository,
    },
  ],
})
export class ProfileModule {}
