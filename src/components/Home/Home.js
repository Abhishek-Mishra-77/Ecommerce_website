import React from 'react';
import './Home.css';




const Home = () => {


  return (
    <div>
      <div>
        <div className=' bg-info text-center head'>
          <button type="button" className="btn btn-outline-dark button1" style={{marginTop:'1.5rem'}}>Get out Latest Album</button>
        </div>
        {/* <div className=' bg-info text-center head'>
          <button type="button" className="btn button">►</button>
        </div> */}



<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://static5.lenskart.com/media/uploads/Desktop-Banner0905home_page.gif"></img>
    </div>
   
  </div>
 
</div>








        
      </div>
      <div className='container text-center mt-4'>
        <h1>𝓢𝓣𝓞𝓡𝓔𝓢</h1>
        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>1</span>
            <span className='tour-spec-place'>Mumbai</span>
            <span className='tour-date'>Timings: 10:00 AM to 10:00 PM</span>
            <span className='buy-btn'>VISIT </span>
          </div>
        </div>
        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>2</span>
            <span className='tour-spec-place'>Goa</span>
            <span className='tour-date'>Timings: 10:00 AM to 10:00 PM</span>
            <span className='buy-btn'>VISIT </span>
          </div>
        </div>
        

      </div>
    </div>
  )
}


export default Home;