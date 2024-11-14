import { DataTypes, Model } from 'sequelize'//importanto libreria ORM
import { sequelize } from '../db/config.js';

export class Devices extends Model { }

Devices.init({
  // Model attributes are defined here
  id_devices: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: DataTypes.STRING,
    primaryKey: true
  },
  mac: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_device_user: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  joined: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  // Other model options go here
  timestamps: false,
  sequelize, // We need to pass the connection instance
  modelName: 'DeviceModel', // We need to choose the model name
  tableName: 'devices',
  underscored: true
});

// the defined model is the class itself
console.log(Devices === sequelize.models.DeviceModel); // true
console.log("DeviceData");