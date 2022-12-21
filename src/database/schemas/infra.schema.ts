import { Connection, Model, Schema, SchemaTypes } from "mongoose";

interface Infra extends Document {
    readonly url: string;
    readonly environment: string;

}

type InfraModel = Model<Infra>

const InfraSchema = new Schema({
    url: SchemaTypes.String,
    environment: SchemaTypes.String
}, {
    timestamps: true
})

const InfraModelFn: (conn: Connection)=> InfraModel = (conn: Connection) =>
 conn.model<Infra, InfraModel>('Infra', InfraSchema, 'infraData');

 export {Infra, InfraModel, InfraSchema, InfraModelFn}