import Sequelize, { DataTypes } from 'sequelize';
import db from '../db';

export const NewsArticle = db.define('newsarticle', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    url: {
        type: Sequelize.TEXT,
    },
    urlToImage: {
        type: Sequelize.TEXT,
    },
    source: {
        type: Sequelize.STRING,
    },
    author: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.TEXT,
    },
    description: {
        type: Sequelize.TEXT,
    },
    content: {
        type: Sequelize.TEXT,
    },
    publishedAt: {
        type: Sequelize.DATE,
    },
});

export const SearchTerm = db.define('searchterm', {
    term: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
});

NewsArticle.belongsTo(SearchTerm, { as: 'searchterm' });
SearchTerm.hasMany(NewsArticle, { as: 'articles' });

NewsArticle.sync();
SearchTerm.sync();
