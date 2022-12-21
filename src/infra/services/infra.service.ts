import { Injectable } from "@nestjs/common";
import { InfraAggregatorService } from "./infra.aggregator.service";

@Injectable()
export class InfraService {
    constructor(private infraAggregatorService: InfraAggregatorService){}
    async fetchInfraList (data) {
        return this.infraAggregatorService.createInfraDetails(data);
    }
}