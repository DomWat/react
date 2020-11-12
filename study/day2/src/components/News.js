import React, { Component } from 'react'

class News extends Component {

    render() {
        const articleItems = this.props.articles.map(article => {
            return <li key={article.url}>
                <b>{article.title}</b>
                <p>{article.description}</p>
                <img src = {article.urlToImage} />
            </li>
        })


    return(
            <ul> { articleItems }</ul >
        )
    }
}



export default News