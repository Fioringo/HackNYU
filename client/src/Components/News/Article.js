import React, { Component } from 'react';
import "../HomePage/HomePage.css"

class Article extends Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        
    }

    render() {
        return (
            <div onclick={"location.href="+this.props.url} className="article">
                <div>
                    <img className="article-image" src={this.props.urlToImage} />
                    <div className="newsContent">
                        <a className="newsTitle" rel="external" href={this.props.url}>
                            {this.props.title}
                        </a>
                        <div className="description">{this.props.description}</div>
                        -- {this.props.author}, {this.props.source}
                        <br/>
                        <div className="newsTime">({this.props.publishedAt})</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;
