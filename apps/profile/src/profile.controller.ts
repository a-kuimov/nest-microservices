import { Controller, Get, Inject } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { SharedService } from '@app/shared';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class ProfileController {
  constructor(
    @Inject('ProfileServiceInterface')
    private readonly profileService: ProfileService,
    @Inject('SharedServiceInterface')
    private readonly sharedService: SharedService,
  ) {}

  @MessagePattern({ cmd: 'get-profiles' })
  async getUsers(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context);

    return this.profileService.getProfiles();
  }
}
