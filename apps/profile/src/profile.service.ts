import { Inject, Injectable } from '@nestjs/common';
import { ProfileEntity, ProfileRepositoryInterface } from "@app/shared";

@Injectable()
export class ProfileService {
  constructor(
    @Inject('ProfileRepositoryInterface')
    private readonly profileRepository: ProfileRepositoryInterface,
  ) {}
  async getProfiles(): Promise<ProfileEntity[]> {
    return await this.profileRepository.findAll();
  }
}
