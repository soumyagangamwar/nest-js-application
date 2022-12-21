import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseConnectionProviders } from './database.connection.provider';
import { databaseModelProviders } from './database.model.provider';

@Module({
  imports: [ConfigModule],
  providers: [
    ...databaseConnectionProviders, 
    ...databaseModelProviders],
  exports: [...databaseConnectionProviders, ...databaseModelProviders],
})
export class DataBaseModule {}
