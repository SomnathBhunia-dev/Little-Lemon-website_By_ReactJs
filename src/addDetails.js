import React, { useState } from 'react'
import bg from './icons_assets/Rectangle21.png'
import Final from './Final'

const AddDetails = () => {
    const [confirm, setConfirm] = useState(false);
    const [alert, setalert] = useState({
            Occasion: "",
            date: "",
            Time: "",
            GuestNumber: "",
        
    })
    const [details, setDetails] = useState({
        Occasion: "",
        date: "",
        Time: "",
        GuestNumber: "",
    });

    const handleForm = (e) => {
        const { name, value } = e.target;
        setDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (details.Occasion === '') {
            setalert({ Occasion: 'Must be choose any occasion' })
            return;
        } else if (details.date === '') {
            setalert({ date: 'Pick a date'})
            return;
        } else if (details.Time === '') {
            setalert({ Time: 'Pick a time'})
            return;
        } else if (details.GuestNumber === '') {
            setalert({ GuestNumber: 'Need Guest Number'})
            return;
        }
        else {
            setConfirm(true);
        }
    };
    console.log(details)
    return (
        <>
            {!confirm ? <div>
                <div>
                    <img src={bg} alt="" />
                </div>
                <div>
                    <h1 className='text-start font-bold text-3xl my-4'>Book a Table</h1>
                    <div>
                        <p className='text-sm text-justify'>For your special occasion, so that we can make the best arrangement for your celebration with us.</p>
                        <form className='flex flex-col text-start space-y-8 mt-8' onSubmit={handleSubmit}>
                            <div>
                                <select id="occasion" name='Occasion' className={`block py-2.5 px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer`} value={details.Occasion} onChange={handleForm}>
                                    <option >Ocassion</option>
                                    <option value='Meetings' >Meetings</option>
                                    <option value="Anniversery">Anniversery</option>
                                    <option value="Birthday Party">Birthday Party</option>
                                    <option value="Break Up Party">Break Up Party</option>
                                    <option value="Emni">Emni</option>
                                </select>
                                <p id="filled_success_help" className="mt-2 text-xs text-red-400 dark:text-green-400"><span className="font-medium">{alert.Occasion}</span></p>
                            </div>
                            <div>
                                <div className="relative max-w-sm">
                                    <input type="date" name='date' value={details.date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pick Event date" onChange={handleForm} />
                                    <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                </div>
                                <p id="filled_success_help" className="mt-2 text-xs text-red-400 dark:text-green-400"><span className="font-medium">{alert.date}</span></p>
                            </div>
                            <div>
                                <select id="eventTime" name='Time' className="block py-2.5 px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" value={details.Time} onChange={handleForm}>
                                    <option >Event Time</option>
                                    <option value="12.00 PM">12.00 PM</option>
                                    <option value="03.00 PM">03.00 PM</option>
                                    <option value="06.00 PM">06.00 PM</option>
                                    <option value="08.00 PM">08.00 PM</option>
                                </select>
                                <p id="filled_success_help" className={`mt-2 text-xs text-red-400 dark:text-green-400`}><span className="font-medium">{alert.Time}</span></p>
                            </div>
                            <div>
                                <div className="relative">
                                    <input type="number" id="guestNumber" value={details.GuestNumber} name='GuestNumber' aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2  dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={handleForm} />
                                    <label htmlFor="guestNumber" className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Number of Guest</label>
                                </div>
                                <p id="filled_success_help" className="mt-2 text-xs text-red-400 dark:text-green-400"><span className="font-medium">{alert.GuestNumber}</span></p>
                            </div>
                            <button type='submit' className='px-4 py-2 bg-yellow-300 text-black rounded-lg w-11/12 font-bold m-auto'>Checkout</button>
                        </form>
                    </div>
                </div >
            </div > : <Final data={details} />}
        </>
    )
}

export default AddDetails