const User = require('./User');
const Trip = require('./Trip');
const Comment = require('./Comment');
const Daily = require('./Daily');
const Image = require('./Image')

Trip.hasMany(Daily, {
   foreignKey: 'trip_id'
 });

Daily.belongsTo(Trip, {
   foreignKey: 'trip_id'
});

Trip.belongsTo(User,{
   foreignKey: 'user_id'
});

Comment.belongsTo(User,{
   foreignKey: 'user_id'
});

Comment.belongsTo(Trip, {
   foreignKey: 'trip_id'
 });
 
User.hasMany(Trip,{
   foreignKey: 'user_id'
});

User.hasMany(Comment, {
   foreignKey: 'user_id'
});
 
Trip.hasMany(Comment, {
   foreignKey: 'trip_id'
});

Image.belongsTo(Daily, {
   foreignKey: 'image_id'
});

Image.belongsTo(Trip, {
   foreignKey: 'image_id'
});
 
module.exports = { User, Trip, Comment, Daily, Image };
