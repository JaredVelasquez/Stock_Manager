import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbo_StockManager',
  connector: 'mssql',
  url: 'mssql://Leonardo9_SQLLogin_1:v7tnc7m5kd@StockManager.mssql.somee.com/StockManager',
  host: 'StockManager.mssql.somee.com',
  port: 1433,
  user: 'Leonardo9_SQLLogin_1',
  password: 'v7tnc7m5kd',
  database: 'StockManager'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DboStockManagerDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbo_StockManager';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbo_StockManager', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
