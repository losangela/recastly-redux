import React from 'react';
import {connect} from 'react-redux';
import YOUTUBE_API_KEY from '../config/youtube.js';


//action
const searchClick = (q) => (dispatch) => {
  let getRequest = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&maxResults=5&key=${YOUTUBE_API_KEY}`;
  //make a http request with fetch().then().then()
  fetch(getRequest) // returns Promise
    .then(data => data.json()) // creates JSON data into object
    .then(data => dispatch({type:"SEARCH", payload: data}) ) // dispatches data inside state.payload
}

//action
const mapDispatchToProps = (dispatch) => {
  return {
    search: (q) => dispatch(searchClick(q))
  }
}


//search class
class Search extends React.Component {
  handleInputChange(e) {
    this.props.search(e.target.value)
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          // value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Search);
