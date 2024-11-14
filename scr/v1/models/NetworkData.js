import { DataTypes, Model } from 'sequelize'//importanto libreria ORM
import { sequelize } from '../db/config.js';

export class Networks extends Model { }

Networks.init({
  // Model attributes are defined here
  id_network: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
  timestamps: false,
  sequelize, // We need to pass the connection instance
  modelName: 'NetworkModel', // We need to choose the model name
  tableName: 'networks',
  underscored: true
});

// the defined model is the class itself
console.log(Networks === sequelize.models.NetworkModel); // true