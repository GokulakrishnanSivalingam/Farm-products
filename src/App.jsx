import React from "react";
import Header from './Header.jsx';
import image from './images/front.webp';

function App(){
  return(

    <div> 
      <Header/>
      <div>
        <img src="https://i.pinimg.com/736x/b9/3b/7b/b93b7bb7f7dda76f873917f70e636cf7.jpg" className="images" />
      </div>
      <div className="product">
        <div className="contain">
        <h1>Fresh Produce, Straight from the Source to Your Doorstep</h1>
        <p>We aim to bridge the gap between farmers and consumers by providing an easy-to-use platform for direct sales</p>
    <center> <button>see more</button></center> </div>  
      </div>
    </div>
  );
}

export default App;