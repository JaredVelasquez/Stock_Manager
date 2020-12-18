import {DefaultCrudRepository} from '@loopback/repository';
import {Roles, RolesRelations} from '../models';
import {DboStockManagerDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RolesRepository extends DefaultCrudRepository<
  Roles,
  typeof Roles.prototype.idRole,
  RolesRelations
> {
  constructor(
    @inject('datasources.dbo_StockManager') dataSource: DboStockManagerDataSource,
  ) {
    super(Roles, dataSource);
  }
}
