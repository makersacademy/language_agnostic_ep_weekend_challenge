const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@127.0.0.1:3306/instagram');

sequelize.authenticate().then(() => {
  console.log('Connection established');
}).catch (err => {
  console.error('Unable to connect: ', err);
});

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

const Posts = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userid: {
    type: Sequelize.INTEGER
  },
  caption: {
    type: Sequelize.STRING
  },
  imageSrc: {
    type: Sequelize.STRING
  }
});

Users.sync();
Posts.sync();
