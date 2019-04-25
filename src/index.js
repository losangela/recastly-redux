import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

//TODO: Import the Provider component from 'react-redux' here!
//TODO: Use the Provider component to make your store available to
//  the rest of your app.

//create store

const store = createStore(reducer, applyMiddleware(thunk))

// create actions

const searchClick = (dispatch) => {
  let getRequest = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchbarkeyword}&maxResults=5&key=${YOUTUBE_API_KEY}`;
  //make a http request with fetch().then().then()
  fetch(getRequest) // returns Promise
    .then(data => data.json()) // creates JSON data into object
    .then(data => dispatch({type:"SEARCH", payload: data}) ) // dispatches data inside state.payload
}



//create reducer
const reducer = (state={}, action=[]) => {
  switch (action.type) {
    case 'SEARCH':
      return Object.assign({}, state, { currentVideo: action.payload[0], videoList: action.payload })
    case 'VIDEO_CLICK':
      return Object.assign({}, state, { currentVideo: action.payload })
    default:
      return state
  }
}


ReactDOM.render(
  <Provider store = {store}><App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} /></Provider>,
  document.getElementById('app')
);
