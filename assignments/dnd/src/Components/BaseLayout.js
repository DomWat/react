import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

class BaseLayout extends Component {
    render() {
        return(
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}