import {DefaultCrudRepository} from '@loopback/repository';
import {Acount, AcountRelations} from '../models';
import {DboStockManagerDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AcountRepository extends DefaultCrudRepository<
  Acount,
  typeof Acount.prototype.idAcount,
  AcountRelations
> {
  constructor(
    @inject('datasources.dbo_StockManager') dataSource: DboStockManagerDataSource,
  ) {
    super(Acount, dataSource);
  }
}
