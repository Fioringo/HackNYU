import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article';

class ArticleBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        }
    }

    componentDidMount() {
        axios
            .get('/news/everything?q=envionment')
            .then(res => {
                const d = res.data;
                this.setState({
                    articles: d,
                })
            });
    }

    render() {
        return (
            <div id="articleBox">
                {this.state.articles.map(a => <Article {...a} />)}
            </div>
        );
    }
}

export default ArticleBox;
