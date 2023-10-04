import React, { useEffect, useState } from 'react'

const Bookings = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const myBooking = JSON.parse(localStorage.getItem("siteReserve")) || [];
        setData(myBooking)
    }, [])
    return (
        <div className='container w-80 m-auto'>
            <h2 className='font-bold text-3xl'>Booking History</h2>
            <div>
                {Data.length !== 0 && Data.map((i) => (
                    <div className='flex justify-evenly text-start mt-4 border rounded-md border-green-800'>
                        <div className='font-bold w-1/2'>
                            <p>Name: </p>
                            <p>Date: </p>
                            <p>Ocassion: </p>
                            <p>Time: </p>
                            <p>Number of Guests: </p>
                            <p>COntact Number: </p>
                        </div>
                        <div className=''>
                            <p>{i.name} </p>
                            <p>{i.date} </p>
                            <p>{i.Occasion} </p>
                            <p>{i.Time} </p>
                            <p>{i.GuestNumber} </p>
                            <p>{i.mobileNumber} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookings