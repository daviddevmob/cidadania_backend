import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessModule } from './business/business.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [BusinessModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
