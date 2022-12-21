import { Response } from "express";
import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { InfraService } from "../services/infra.service";
import { InfraModel } from "src/database/schemas/infra.schema";

@Controller('infra')
export class InfraController {
    constructor(private infraService: InfraService){}
    @Post()
    async createInfraDetails(@Body() infraModel: InfraModel ,@Res() res: Response){
        const data = this.infraService.fetchInfraList({
            url: 'test',
            environment: 'test'
        });
        res.status(HttpStatus.OK).json({
            message: 'InfraDetails',
            data
        })
    }
}