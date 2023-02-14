const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}


Image.init(
  {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },

      file_src: {
        type: DataTypes.STRING
      },

//       user_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//            model: 'user',
//            key: 'id'
//         }
//      },

//      daily_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//            model: 'daily',
//            key: 'id'
//         }
//      },
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'image'
   }
);

module.exports = Image;