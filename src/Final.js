import React, { useState } from 'react'
import Confirmation from './Confirmation'

const Final = ({ data = '' }) => {
  const [Confirm, setConfirm] = useState(false)
  const { date, Occasion, Time, GuestNumber } = data
  const [details, setDetails] = useState({
    ...data,
    Inst: '',
    name: '',
    mobileNumber: ''
  });

  const [alert, setalert] = useState({
    name: '',
    mobileNumber: ''
  })
  const existingBooking = JSON.parse(localStorage.getItem("siteReserve")) || [];
  const handleForm = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.name === '') {
      setalert({ name: 'Enter your name' })
      return;
    } else if (details.mobileNumber === '') {
      setalert({ mobileNumber: 'Enter your proper contact details' })
      return;
    } else if (details.mobileNumber.length < 10) {
      setalert({ mobileNumber: 'Mobile number should be at least 10 digits' })
    } else {
      setConfirm(true);
      existingBooking.push(details)
      localStorage.setItem("siteReserve", JSON.stringify(existingBooking));
    }
  };
  return (
    <>
      {!Confirm ? <div >
        <h1 className='font-bold'>Book a Table</h1>
        <div className='flex justify-evenly text-start mt-4'>
          <div className='font-bold w-1/2'>
            <p>Date: </p>
            <p>Ocassion: </p>
            <p>Time: </p>
            <p>Number of Guests: </p>
          </div>
          <div className=''>
            <p>{date} </p>
            <p>{Occasion} </p>
            <p>{Time} </p>
            <p>{GuestNumber} </p>
          </div>
        </div>
        <div className='mt-12'>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4 text-start'>
            <div>
              <div className="relative">
                <input type="text" name='Inst' value={details.Inst} onChange={handleForm} id="instruction" aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2  dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="instruction" className="absolute text-sm  dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Any Instructions (optional)</label>
              </div>
            </div>
            <div>
              <div className="relative">
                <input type="text" id="name" data-testid='name' name='name' value={details.name} onChange={handleForm} aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2  dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="name" className="absolute text-sm dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
              </div>
              <p id="filled_success_help" className="mt-2 text-xs text-red-400 dark:text-green-400"><span className="font-medium">{alert.name}</span></p>
            </div>
            <div>
              <div className="relative">
                <input type="number" id="number" data-testid='number' name='mobileNumber' value={details.mobileNumber} onChange={handleForm} aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2  dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="number" className="absolute text-sm  dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Contact Number</label>
              </div>
              <p id="filled_success_help" className="mt-2 text-xs text-red-400 dark:text-green-400"><span className="font-medium">{alert.mobileNumber}</span></p>
            </div>
            <button type='submit' data-testid='submit' className='px-4 py-2 bg-yellow-300 text-black rounded-lg w-11/12 font-bold'>Done</button>
          </form>
        </div>
      </div> : <Confirmation />}
    </>
  )
}

export default Final