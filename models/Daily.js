const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Daily extends Model {}

Daily.init(
    {
        id: {

        },
    }
)

module.exports = Daily;