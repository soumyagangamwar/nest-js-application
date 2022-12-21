import { Inject, Injectable } from '@nestjs/common';
import { INFRA_MODEL_TOKEN } from 'src/server.constants';
import { InfraModel } from '../schemas/infra.schema';

@Injectable()
export class InfraDataRepository {
  constructor(@Inject(INFRA_MODEL_TOKEN)
  private infraModel: InfraModel) {}

  findAll = async () => {
    return this.infraModel.find();
  };

  create = async (update: any) => {
    try {
      const created = await this.infraModel.create(update);
      return created;
    } catch (e) {
      console.error(e);
    }
  };
}
