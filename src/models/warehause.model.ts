import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Warehause'}}})
export class Warehause extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id_warehause', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  idWarehause?: number;

  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'id_inventory', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  idInventory?: number;

  @property({
    type: 'string',
    required: false,
    length: 200,
    mssql: {columnName: 'description', dataType: 'nvarchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Warehause>) {
    super(data);
  }
}

export interface WarehauseRelations {
  // describe navigational properties here
}

export type WarehauseWithRelations = Warehause & WarehauseRelations;
