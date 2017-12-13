import React, { Component } from 'react';
import './Movie.css';
// PropTypes가 Deprecated 되서  prop-types library를 npm으로 설치하여 import
import PropTypes from 'prop-types';

/*
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
*/

/*
class MoviePoster extends Component{
    
    static propTypes ={
        poster : PropTypes.string.isRequired,    
    }
    
    render(){
        return(
// eslint-disable-next-line
            <img src={this.props.poster} alt="Movie Poster"/>
        );
    }
}*/

/*
    이 컴포넌트는 return을 하기 위해존재 사이클이 존재하지않음
    한개의 props 만 존재하면 된다. 1개의 props 1개의 html 소스
*/

function Movie({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster"/>
        )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired
}

export default Movie;

