import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='home_sub'>
          <h1>WELCOME</h1>
          <h1>TO</h1>
          <h1>FOODIES</h1>
          <h1>Delicious Food, Delivered to You</h1>
          <p>Order your favorite meals from top restaurants.</p>
          <Link to="/restaurants">
            <button className='order_btn'>Order Now</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home