import express, { Router } from 'express';
import { newsEverything, newsTopHeading } from './controllers/newsapi';

const router = Router();

router.route('/news/everything')
    .get(newsEverything);

router.route('/news/topHeading')
    .get(newsTopHeading);

// router.route('/news/everything')
//     .get(news)

export default router;
