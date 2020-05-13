import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
import CardFront from './card-components/CardFront.js';


export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(data => <MovieCard title={data.title} IMDBRating={data.IMDBRating} genres={data.genres} poster={data.poster}/>
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}


// export default class MovieShowcase extends Component {

//   generateMovieCards = () => {
//     // map over your movieData array and return an array of the correct JSX
//     return movieData.map(data => <MovieCard 
//           poster={data.poster}
//           title={data.title}
//           IMDBRating={data.IMDBRating}
//           genres={data.genres}
//           />
//     )
//   }

//   render() {
//     return (

//       <div id="movie-showcase">
//         {this.generateMovieCards()}
//       </div>
//     )
//   }
// }
