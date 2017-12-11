import React, { Component } from 'react';
import './Movie.css';
// PropTypes가 Deprecated 되서  prop-types library를 npm으로 설치하여 import
import PropTypes from 'prop-types';

class Movie extends Component{
    
    static propTypes = {
        title:PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
    }
    
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
    
    static propTypes ={
        poster : PropTypes.string.isRequired,    
    }
    
    render(){
        return(
// eslint-disable-next-line
            <img src={this.props.poster} />
        );
    }
}

export default Movie;

