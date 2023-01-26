const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Routine extends Model {}

Routine.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        description: {
            type: DataTypes.STRING
        },
    }
)