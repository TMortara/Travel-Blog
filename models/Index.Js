const User = require('./User');
const Trip = require('./Trip');
const Comment = require('./Comment');

User.hasMany(Trip,{
   foreignKey: 'user_id'
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
 
 User.hasMany(Comment, {
   foreignKey: 'user_id'
 });
 
 Trip.hasMany(Comment, {
   foreignKey: 'trip_id'
 });
 

module.exports = { User, Trip, Comment };
