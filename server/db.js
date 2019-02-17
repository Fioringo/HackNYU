import Sequelize from 'sequelize';

const dbURI = process.env.dbURI || 'postgres://localhost/users';
const db = new Sequelize(dbURI);

export default db;
