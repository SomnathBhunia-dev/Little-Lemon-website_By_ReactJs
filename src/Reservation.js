import React, { useState } from 'react'
import logo from './icons_assets/image 2.png'
import AddDetails from './addDetails'
// import bg from './icons_assets/image 1.png'

const Reservation = () => {
    const [Checkout, setCheckout] = useState(false)
    return (
        <>
            <main className='w-80 min-h-[40rem] m-auto'>
               {!Checkout ? <div className='Bg p-4 flex flex-col justify-between'>
                    <div className='h-1/2 mt-[90%]'>
                        <h3 className='text-[#495E57] text-4xl font-semibold'>Welcome To</h3>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <button className='px-4 py-2 bg-yellow-300 text-black rounded-lg w-11/12 font-bold' onClick={()=> setCheckout(true)}>Book a Table</button>
                    </div>
                </div> : <AddDetails />}
            </main>
        </>
    )
}

export default Reservation