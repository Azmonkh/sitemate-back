import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssuesModule } from './issues/issues.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'root',
      database: process.env.DATABASE_NAME || 'sitemate',
      synchronize: true,
      autoLoadEntities: true,
    }),
    IssuesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
