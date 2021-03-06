import {DefaultCrudRepository} from '@loopback/repository';
import {Category, CategoryRelations} from '../models';
import {DboStockManagerDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.idCategory,
  CategoryRelations
> {
  constructor(
    @inject('datasources.dbo_StockManager') dataSource: DboStockManagerDataSource,
  ) {
    super(Category, dataSource);
  }
}
