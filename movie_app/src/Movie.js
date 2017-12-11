import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            //console.log(this.props);
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
// eslint-disable-next-line
            <img src={this.props.poster} />
        );
    }
}

export default Movie;

