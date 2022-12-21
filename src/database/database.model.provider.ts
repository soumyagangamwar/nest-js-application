import { Connection } from "mongoose";
import { BIP_DATABASE_CONNECTION_TOKEN, INFRA_MODEL_TOKEN } from "src/server.constants";
import { InfraModelFn } from "./schemas/infra.schema";

export const databaseModelProviders = [
    {
        provide: INFRA_MODEL_TOKEN,
        useFactory: (connection: Connection)=>InfraModelFn(connection),
        inject: [BIP_DATABASE_CONNECTION_TOKEN]
    }
]