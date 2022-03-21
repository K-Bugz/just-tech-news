// import all models
const Post = require('./Post');
const User = require('./User');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// A post belongs to a user. 
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };
