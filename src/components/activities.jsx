var Activities = ({currentVideos , handleClick1 ,videoI , videoZ , handleClick2 ,videoO}) =>(
	<div>
	<div>
	<br/>
	<h2 className="activity"> Chooose your favorite activity </h2>
	</div>
	<br/>
	<br/>
	<div className="color">
		<h4 className="outdoor" onClick={() =>{handleClick1(videoO)}}> Outdoor Workout </h4>
		<br/>
		<h4 className="indoor"  onClick={() =>{handleClick1(videoI)}}> Indoor Workout </h4>
		<br/>
		<h4 className="dance" onClick={() => {handleClick1(videoZ)}}> Dance </h4>
		<br/>
		<h4 className="other"> Sugesstion Activities </h4>
		<br/>
	</div>
	<br/><br/>
	<div>
	<VideoList currentList={currentVideos} handleClick2={handleClick2} />
	</div>
	</div>
	);

window.Activities = Activities;