import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { ProfileEntity } from '@app/shared/entities/profile.entity';
import { ProfileRepositoryInterface } from '@app/shared/interfaces/profile.repository.interface';

@Injectable()
export class ProfileRepository
  extends BaseAbstractRepository<ProfileEntity>
  implements ProfileRepositoryInterface
{
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly ProfileRepository: Repository<ProfileEntity>,
  ) {
    super(ProfileRepository);
  }
}
