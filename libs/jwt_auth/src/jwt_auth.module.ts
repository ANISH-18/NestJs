import { Module } from '@nestjs/common';
import { JwtAuthService } from './jwt_auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategies';
import { AccessTokenGuard } from './guards/access-token.guards';
import { DatabaseModule } from '@database';

@Module({
  imports: [JwtModule.register({}), DatabaseModule],
  providers: [
    JwtService,
    JwtAuthService,
    AccessTokenStrategy,

    AccessTokenGuard,
  ],
  exports: [JwtService, JwtAuthService, AccessTokenStrategy],
})
export class JwtAuthModule {}
