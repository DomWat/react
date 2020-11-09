import React, { Component } from 'react'
import '../css/Article.css'


class Article extends Component {

    render() {

        return(
            <div className = 'articleContainer'>
                <div className = 'articleContent'>
                    <h2 className = 'articleTitle'>{this.props.title}</h2>
                    <p>{this.props.article}</p>
                </div>
                <div className = 'articleContentScales'>
                    <p>Comments: {this.props.comments}   Likes: {this.props.likes}</p>
                </div>
            </div>
        )
        
    }

}

export default Article