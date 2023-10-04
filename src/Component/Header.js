import React, { useRef } from 'react'
import logo from '../icons_assets/Logo.svg'
import Cart from '../icons_assets/Basket.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  const toggleCart = (e) => {
    const classList = e.current.classList;
    classList.toggle("hidden");
    classList.toggle("block");
  };
  const dropBtn = useRef()
  return (
    <>
      {/* <nav className='flex justify-evenly items-center h-20'>
        <Link to='/'><img src={logo} alt="" /></Link>
        <ul className='space-x-6 flex font-bold'>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>About</li>
          <li>
            <Link to='/reservations'>
              Reservation
            </Link>
          </li>
          <li>Menu</li>
          <li>Online Order</li>
          <li>Login</li>
        </ul>
      </nav> */}
      <header className=" body-font sticky top-0 z-10 bg-white">
        <div className="container mx-auto flex justify-between items-center h-20">
          <div className="border-white bg-[#495E57] text-white border-2 rounded cursor-pointer md:hidden" onClick={() => toggleCart(dropBtn)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div ref={dropBtn} className="absolute w-full left-0 top-20 bg-[#495E57] text-white hidden z-10">
              <ul className='px-4 flex font-bold flex-col items-start text-base justify-center'>
                <li>
                  <Link to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/reservations'>
                    Reservation
                  </Link>
                </li>
                <li>Menu</li>
                <li>Online Order</li>
                <li>
                <Link to='/booking' >
                  My Bookings
                </Link>
              </li>
              </ul>
            </div>
          </div>
          <Link to='/'><img src={logo} alt="" /></Link>
          <div className='md:hidden'><img src={Cart} alt="" /></div>
          <nav className="hidden md:block">
            <ul className='space-x-6 flex items-center font-bold'>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/reservations'>
                  Reservation
                </Link>
              </li>
              <li>Menu</li>
              <li>Online Order</li>
              <li>
                <Link to='/booking' >
                  My Bookings
                </Link>
              </li>
              <li><img src={Cart} alt="" /></li>
            </ul>
          </nav>
        </div>

      </header>
    </>
  )
}
export default Header