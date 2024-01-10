import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { HelpersModule } from '@helpers';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { DatabaseModule } from '@database';
import { JwtAuthModule } from '@jwt_auth';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    HelpersModule,
    JwtAuthModule,
  ],
  controllers: [AppController, AuthController, OrderController],
  providers: [AuthService, OrderService],
})
export class AppModule {}
