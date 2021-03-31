import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
const URL_DB = process.env.URL_DB;

const config = {
  name: 'Mongodb',
  connector: 'mongodb',
  url: URL_DB,
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Mongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Mongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
