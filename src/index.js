import React from 'react';
import ReactDOM from 'react-dom';
// 引入css
// import './index.css';
// 引入App的组件
import App from './App';
// 加快react运行速度的js文件
import * as serviceWorker from './serviceWorker';

// 把App组件渲染在root上
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
