import React from 'react';
import './Home.css';



const Home = () => {


  return (
    <div>
      <div>
        <div className=' bg-info text-center head'>
          <button type="button" className="btn btn-outline-dark button1">Get out Latest Album</button>
        </div>
        <div className=' bg-info text-center head'>
          <button type="button" className="btn button">►</button>
        </div>
      </div>
      <div className='container text-center mt-4'>
        <h1>𝓣𝓞𝓤𝓡𝓢</h1>
        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>Jan12</span>
            <span className='tour-spec-place'>Mumbai</span>
            <span className='tour-date'>ATE ENERGY MUSIC THEATRE</span>
            <span className='buy-btn'>BUY TICKETS</span>
          </div>
        </div>
        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>Mar17</span>
            <span className='tour-spec-place'>Goa</span>
            <span className='tour-date'>DU ENERGY MUSIC THEATRE</span>
            <span className='buy-btn'>BUY TICKETS</span>
          </div>
        </div>
        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>Mar23</span>
            <span className='tour-spec-place'>Manipur</span>
            <span className='tour-date'>AJJ ENERGY MUSIC THEATRE</span>
            <span className='buy-btn'>BUY TICKETS</span>
          </div>
        </div>
        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>Jun25</span>
            <span className='tour-spec-place'>Jaiput</span>
            <span className='tour-date'>JJJJ ENERGY MUSIC THEATRE</span>
            <span className='buy-btn'>BUY TICKETS</span>
          </div>
        </div>

        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>Jul 16</span>
            <span className='tour-spec-place'>Amritsar</span>
            <span className='tour-date'>MM ENERGY MUSIC THEATRE</span>
            <span className='buy-btn'>BUY TICKETS</span>
          </div>
        </div>

        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>Aug 02</span>
            <span className='tour-spec-place'>Imphal</span>
            <span className='tour-date'>IM ENERGY MUSIC THEATRE</span>
            <span className='buy-btn'>BUY TICKETS</span>
          </div>
        </div>

        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>Sep 16</span>
            <span className='tour-spec-place'>Delhi</span>
            <span className='tour-date'>DA ENERGY MUSIC THEATRE</span>
            <span className='buy-btn'>BUY TICKETS</span>
          </div>
        </div>

        <div className='tours'>
          <div className='tour-item'>
            <span className='tour-date'>Dec 16</span>
            <span className='tour-spec-place'>Chadigarj</span>
            <span className='tour-date'>MA ENERGY MUSIC THEATRE</span>
            <span className='buy-btn'>BUY TICKETS</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;