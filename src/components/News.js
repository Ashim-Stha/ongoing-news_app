import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-3"> <Newsitem title="mytitle" description="mydesc"/></div>
          <div className="col-md-3"> <Newsitem title="mytitle" description="mydesc"/></div>
          <div className="col-md-3"> <Newsitem title="mytitle" description="mydesc"/></div>
       
       
        </div>
      </div>
    )
  }
}

export default News
