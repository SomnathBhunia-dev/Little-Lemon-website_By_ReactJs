import React from 'react'
import { Link } from 'react-router-dom'
import bg from './icons_assets/Rectangle 1.png'

const Confirmation = () => {
    return (
        <>
            <div>
                <div>
                    <img src={bg} alt="Confirmed" />
                </div>
                <div className='font-bold text-2xl space-y-2 my-4'>
                    <h1>Thank you.</h1>
                    <h1>Your Booking is Confirmed</h1>
                </div>
                <div className='my-4 p-8 font-semibold'>
                    <p>Please feel free to get in touch with us on +1-234-56789, if you need any other customisations in your booking.</p>
                </div>
            </div>
            <Link to='/'>
            <button className='px-4 py-2 bg-yellow-300 text-black rounded-lg w-11/12 font-bold'>Home</button>
            </Link>
        </>
    )
}

export default Confirmation