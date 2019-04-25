import React from 'react';
import VideoListEntry from './VideoListEntry.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    videos: state.reducer.videoList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    videoClick : (data) => dispatch(handleVideoListEntryTitleClick(data))
  }
};


const handleVideoListEntryTitleClick = (videoData) => {
  return {
    type : 'VIDEO_CLICK',
    payload: videoData
  }
  //video that is clicked becomes state.reducer.currentVideo
};




var VideoList = () => {
  handleClick () {
    
  }

  return (
  <div className="video-list">
    {
      this.props.videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
)};

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
