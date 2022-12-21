import { Logger, LoggerService } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as mongoose from "mongoose";
import { BIP_DATABASE_CONNECTION_TOKEN } from "src/server.constants";

export const databaseConnectionProviders = [{
    provide: BIP_DATABASE_CONNECTION_TOKEN,
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService): Promise<typeof mongoose>=> {
        let mongpdConnectionString = `mongodb://0.0.0.0/nest`;
        const logger: LoggerService = new Logger('Db')
        try{
            logger.log(`connecting to db`);
            const conn: any = await mongoose.createConnection(mongpdConnectionString);
            logger.log(`Successfully connected to DB`)
            return conn;
        }catch(e){
            logger.log('error while connecting to DB');
            console.error('Error While Coonecting to DB')
        }


    }
}]