import {DefaultCrudRepository} from '@loopback/repository';
import {Warehause, WarehauseRelations} from '../models';
import {DboStockManagerDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WarehauseRepository extends DefaultCrudRepository<
  Warehause,
  typeof Warehause.prototype.idWarehause,
  WarehauseRelations
> {
  constructor(
    @inject('datasources.dbo_StockManager') dataSource: DboStockManagerDataSource,
  ) {
    super(Warehause, dataSource);
  }
}
