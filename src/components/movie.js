import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Movie extends Component{
    static propTypes={
        title:PropTypes.string,
        year:PropTypes.string,
        poster:PropTypes.string
    }
    render(){
        const{poster,title,year}=this.props

        return(
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
        )
    }
}