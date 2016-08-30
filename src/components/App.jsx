class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {currentVideoList: [],
                  currentVideo: start[0].items[0]
                }
  }               
    
 

  updateList(videos){
    this.setState({currentVideoList: videos});
  }

  updateVideo(video){
    this.setState({currentVideo: video});
  }


  render(){
    return(
  <div className="main">
    <Nav />
    <div className="col-md-5">
      <Activities videoI={indoorVideoData[0].items} currentVideos={this.state.currentVideoList} videoZ={zumbaVideoData[0].items} videoO={outdoorVideoData[0].items} handleClick1={this.updateList.bind(this)} handleClick2={this.updateVideo.bind(this)} />
    </div>
    <div className="col-md-7">
    <h3 className="start"> OUR PHILOSOPHY </h3>
    <p>
        We've always believed that a sports should be a place that makes people feel better,
        not just after their workout, but from the moment they start. Our mission at Light LifeStyle is to consistently deliver an experience that makes our members feel welcome, feel comfortable and feel healthy. That means no false promises or unrealistic expectations. We work hard to identify achievable health and fitness goals for every member and to create a realistic, personalized plan that will get them there. Movati Athletic is passionately committed to maximizing your well-being – for free.

         
        FEEL HEALTHY
        Our focus is on your overall health, not just on how much you can bench-press.
        Fitness goals are important, but so is eating a balanced diet and reducing stress.
     
    </p>
      <VideoPlayer video = {this.state.currentVideo} />
    </div>
  </div>
  )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
