var VideoList = ({currentList , handleClick2}) => (
  <div className="video-list media">
     {currentList.map((video , index) => <VideoListEntry video={video} key={index} handleClick2={handleClick2} />)}
  </div>
);


window.VideoList = VideoList;

