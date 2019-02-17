import { SearchTerm, NewsArticle } from '../models';
import { getApiEverything, getApiTophead, getApiEnvironment } from '../services/newsapi';

export function newsEverything(req, res) {
    // const wantKeyword = req.query.q;
    const wantKeyword = "environment";
    SearchTerm
        .findOrCreate({
            where: {
                term: wantKeyword,
            }
        })
        .spread((st, created) => {
            const prom = [];
            if (created) {
                getApiEverything(wantKeyword, (apires) => {
                    for (var article of apires.data.articles) {
                        article['source'] = article.source.name;
                        prom.push(st.createArticle(article));
                    }
                })
            }

            Promise.all(prom).then(() => {
                st
                    .getArticles()
                    .then((stuff) => {
                        res.json(stuff);
                    })
            })
        })
}

export function newsTopHeading(req, res) {

}

// export function newsEnvironment(req, res) {
//     SearchTerm
//         .findOrCreate({
//             where: {
//                 term: wantKeyword,
//             }
//         })
//         .spread((st, created) => {
//             const prom = [];
//             if (created) {
//                 getApiEnvironment((apires) => {
//                     for (var article of apires.data.articles) {
//                         article['source'] = article.source.name;
//                         prom.push(st.createArticle(article));
//                     }
//                 })
//             }

//             Promise.all(prom).then(() => {
//                 st
//                     .getArticles()
//                     .then((stuff) => {
//                         res.json(stuff);
//                     })
//             })
//         })
// }