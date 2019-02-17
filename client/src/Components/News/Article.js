import React, { Component } from 'react';
import "../HomePage/HomePage.css"

class Article extends Component {
    render() {
        return (
            <div className="article">
                <div onClick={this.props.url}>
                    <img className="article-image" src={this.props.urlToImage} />
                    <div className="newsContent">
                        <a className="newsTitle" rel="external" href={this.props.url}>
                            {this.props.title}
                        </a>
                        <div className="description">{this.props.description}</div>
                        -- {this.props.author}, {this.props.source}
                        <br/>
                        ({this.props.publishedAt})
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;
