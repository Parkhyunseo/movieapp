import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


// 모든 컴포넌트는 render function을 갖고 있다.
class App extends Component {
  // Render:
  // will mount -> did render -> did mount
  
  // Update:
  // componentWillReceiveProps() -> shouldComponentUpdate() == true ->
  // componentWillUpdate(){spinner 같은 것} -> render()
  //-> componentDidUpdate() {spinner를 숨길 수 있다}
  
  // 컴포넌트가 존재하기 시작할 때 작동
  
  // state는 리액트 컴포넌트 안에 있는 오브젝트
  // state가 바뀔 때마다 다시 render
  // 모든 컴포넌트가 state가 있지는 않다.
  // dumb state, smart state
  componentWillMount(){
    //API 요청
    console.log('will mount')
  }
  
  componentDidMount(){
    console.log(fetch('https://google.com'))
    //fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
  }
  
  state = {
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    
    return movies
  }
  
  render() {
    console.log('did mount')    
    return (
      // This is called JSX
      // class -> className
      // Array.prototype.map()
      // array에 있는 각 차일드는 반드시 고유한 key prop을 가져야한다.
      // 앨리먼트가 많을경우 key를 줘야한다. key는 unique해야한다.
      
      // loading states 그 states 아이템들이 존재하냐?
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
