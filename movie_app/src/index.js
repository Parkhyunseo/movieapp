import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//react와 reactDOM의 차이
//react는 UI 라이브러리
//reactDOM은 react를 웹사이트에 render하는걸 도와주는 모델
//react를 모바일 앱에 올리고싶다? reactNative

//reactDOM은 한개의 컴포넌트를 출력
// id가 root인곳에 APP을 출력
ReactDOM.render(<App />, document.getElementById('root')); 
registerServiceWorker();
