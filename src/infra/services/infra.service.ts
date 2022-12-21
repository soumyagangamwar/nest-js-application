import { Injectable } from "@nestjs/common";
import { InfraAggregatorService } from "./infra.aggregator.service";

@Injectable()
export class InfraService {
    constructor(private infraAggregatorService: InfraAggregatorService){}
     saveInfra (data) {
        return this.infraAggregatorService.createInfraDetails(data);
    }

    getInfraList() {
        return this.infraAggregatorService.getInfraList()

    }

}