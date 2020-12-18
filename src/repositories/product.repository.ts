import {DefaultCrudRepository} from '@loopback/repository';
import {Product, ProductRelations} from '../models';
import {DboStockManagerDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.idProduct,
  ProductRelations
> {
  constructor(
    @inject('datasources.dbo_StockManager') dataSource: DboStockManagerDataSource,
  ) {
    super(Product, dataSource);
  }
}
