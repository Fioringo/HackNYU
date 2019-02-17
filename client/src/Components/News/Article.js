import React, { Component } from 'react';
import "../HomePage/HomePage.css"

class Article extends Component {
    render() {
        return (
            <div className="article">
                <div className="article-image">
                    <img src={this.props.urlToImage} />
                    <a rel="external" href={this.props.url}>
                        {this.props.title}
                    </a>
                    {this.props.description}
                    -- {this.props.author}, {this.props.source}
                    ({this.props.publishedAt})
                </div>
            </div>
        );
    }
}

export default Article;
