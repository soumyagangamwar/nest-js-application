import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/database/database.module";
import { InfraDataRepository } from "src/database/repositories/infra.repository";
import { InfraController } from "./controllers/infra.controller";
import { InfraAggregatorService } from "./services/infra.aggregator.service";
import { InfraService } from "./services/infra.service";

@Module({
    imports:[DataBaseModule, HttpModule],
    controllers: [InfraController],
    providers:[InfraService, InfraAggregatorService, InfraDataRepository],
    exports:[InfraService]
})

export class InfraModule {

}