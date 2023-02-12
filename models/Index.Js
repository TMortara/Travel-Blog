const User = require('./User');
const Trip = require('./Trip');
const Comment = require('./Comment');
const Daily = require('./Daily');
const Image = require('./Image')

Trip.belongsTo(User,{
   foreignKey: 'user_id'
});

Comment.belongsTo(User,{
   foreignKey: 'user_id'
});

Daily.belongsTo(Trip, {
   foreignKey: 'trip_id'
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

 Trip.hasMany(Daily, {
   foreignKey: 'trip_id'
 });

//  Image.belongsTo(Daily, {
//    foreignKey: 'daily_id'
//  });

 
module.exports = { User, Trip, Comment, Daily };
