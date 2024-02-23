import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/config.js';

export class ScrapingData extends Model { }

ScrapingData.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUIDV4,
    allowNull: true,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  store: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  trademark: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  timestamps: true,
  sequelize, // We need to pass the connection instance
  modelName: 'ScrapingData', // We need to choose the model name
  tableName: 'datastores',
  underscored: true
});

// the defined model is the class itself
console.log(ScrapingData === sequelize.models.ScrapingData); // true