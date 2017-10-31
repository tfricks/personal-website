import React, { Component } from 'react';
import Link from 'gatsby-link'
import '../files/css/index.scss'

class IndexPage extends Component {
  render() {
    return (
        <div className="about-container">
          <h1 className="center">About Tyler Fricks</h1>
          <Link to="/page-2">Go to page 2</Link>
        </div>
    );
  }
}

export default IndexPage;