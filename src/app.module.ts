import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { getConnectionOptions } from 'typeorm';
import { UserControllController } from './modules/controllers/user-controll/user-controll.controller';
import { JiajiaModule } from './jiajia/jiajia.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './global/interceptors/response/response.interceptor';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
          retryDelay: 500,
          retryAttempts: 10
        }),
    }),
    UserModule,
    JiajiaModule,
    AuthModule
],
  controllers: [AppController, UserControllController],
  providers: [
    AppService, 
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
],
})
export class AppModule {}
