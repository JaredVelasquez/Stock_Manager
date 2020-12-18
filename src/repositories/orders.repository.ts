import {DefaultCrudRepository} from '@loopback/repository';
import {Orders, OrdersRelations} from '../models';
import {DboStockManagerDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdersRepository extends DefaultCrudRepository<
  Orders,
  typeof Orders.prototype.idOrder,
  OrdersRelations
> {
  constructor(
    @inject('datasources.dbo_StockManager') dataSource: DboStockManagerDataSource,
  ) {
    super(Orders, dataSource);
  }
}
