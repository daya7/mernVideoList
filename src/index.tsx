import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
//Routes and a toascontainer to bring a message in creating function
ReactDOM.render(
  <React.StrictMode>
    
  <BrowserRouter>
  <Navbar/>
  <div className="container p-4">
    <Switch>
      <Route exact path="/" component={VideoList}>
      </Route>
      <Route path="/form" component={VideoForm}>
      </Route>
      <Route path="/update/:id" component={VideoForm}>
      </Route>
    </Switch>
    <ToastContainer/>
  </div>
  </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
