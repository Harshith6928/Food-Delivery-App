import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  let {state} = useCart();

  let highlight = ({isActive}) => {
        
    return {
        color : isActive ? '#ffae00' : 'azure'
    }
    
  }
  return (
    <>
        <nav>
            <div className='nav_sub'>
                <Link className='nav_list' to='/home'>
                  <h1>Foodies</h1>
                </Link>
                <ul>
                    <NavLink style={highlight} className='home_list' to='/home'>Home</NavLink>
                    <NavLink style={highlight} className='home_list' to='/restaurants'>Restaurants</NavLink>
                    <NavLink style={highlight} className='home_list' to='/cart'>Carts</NavLink>
                    <span>{state}</span>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar