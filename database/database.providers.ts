import { POSTGRESQL } from '@/config/db-config';
import { Sequelize } from 'sequelize-typescript';
import { DatabaseModel } from './database.model';
import { Dialect } from 'sequelize';

const sequelizeOptions = {
  dialect: 'postgres' as Dialect,
  host: POSTGRESQL.host,
  port: parseInt(POSTGRESQL.port),
  username: POSTGRESQL.user,
  password: POSTGRESQL.password,
  database: POSTGRESQL.database,
  timezone: '+07:00',
  logging: true,
  schema: 'ms_shopfree',//
}
const sequelize = new Sequelize(sequelizeOptions);

const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      sequelize.addModels(DatabaseModel)
      await sequelize.sync({ alter: false })
      return sequelize
    }
  }
]

const define = (name, option) => {
  return sequelize.define(name, option)
}

export { sequelize, databaseProviders, define }