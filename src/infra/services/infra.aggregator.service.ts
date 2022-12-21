import { Injectable } from "@nestjs/common";
import { InfraDataRepository } from "src/database/repositories/infra.repository";

@Injectable()
export class InfraAggregatorService {
    constructor(private infraDataRepository: InfraDataRepository ){}

    createInfraDetails = async(data)=> {
        try {
            const infra = this.infraDataRepository.create(data);
            return infra;
        }catch(e) {
            console.error(e)
        }
    }
}