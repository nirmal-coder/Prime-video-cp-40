import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

    return (
      <div className="bg-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="prime-video-img"
          />
          <div className="action-movie-container">
            <h1>Action Movies</h1>
            <MoviesSlider movie={actionMovies} />
            <h1>Comedy Movies</h1>
            <MoviesSlider movie={comedyMovies} />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
