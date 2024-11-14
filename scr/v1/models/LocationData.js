import { DataTypes, Model } from 'sequelize'//importanto libreria ORM
import { sequelize } from '../db/config.js';

export class Locations extends Model { }

Locations.init({
  // Model attributes are defined here
  id_locations: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  id_network: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
  timestamps: false,
  sequelize, // We need to pass the connection instance
  modelName: 'LocationModel', // We need to choose the model name
  tableName: 'locations',
  underscored: true
});

// the defined model is the class itself
console.log(Locations === sequelize.models.LocationModel); // true