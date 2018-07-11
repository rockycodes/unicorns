const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const databaseName =
  pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`,{ logging: false });

module.exports = db;
