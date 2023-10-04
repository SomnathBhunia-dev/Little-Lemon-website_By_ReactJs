import React from 'react'
import brucheta from './icons_assets/bruchetta.svg'
import greenSalad from './icons_assets/greek salad.jpg'
import sandesh from './icons_assets/lemon dessert.jpg'

const Featured = () => {
    return (
        <>
            <div className='flex flex-col max-sm:mt-8'>
                <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 m-8 justify-around items-center'>
                    <h4 className='font-extrabold text-5xl'>This weeks specials!</h4>
                    <button className='px-4 py-2 bg-yellow-300 text-black rounded-lg'>Online Menu</button>
                </div>
                <div className='grid grid-cols-1 sm:max-md:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-20 my-8 mx-auto'>
                    <div className='w-60'>
                        <div className='h-52 overflow-hidden rounded-t-lg'>
                            <img src={brucheta} className='h-full object-cover' alt="" />
                        </div>
                        <div className='flex flex-col text-start bg-[#EDEFEE] p-4 h-64'>
                            <div className='flex justify-between font-bold'>
                                <p>Greek salad</p>
                                <p className='text-[#EE9972]'>$12.99</p>
                            </div>
                            <p className='my-4'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <p className='font-bold'>Order a delivery</p>
                        </div>
                    </div>
                    <div className='w-60'>
                        <div className='h-52 overflow-hidden rounded-t-lg'>
                            <img src={greenSalad} className='h-full object-cover' alt="" />
                        </div>
                        <div className='flex flex-col text-start bg-[#EDEFEE] p-4 h-64'>
                            <div className='flex justify-between font-bold'>
                                <p>Bruschetta</p>
                                <p className='text-[#EE9972]'>$5.99</p>
                            </div>
                            <p> </p>
                            <p className='my-4'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <p className='font-bold'>Order a delivery</p>
                        </div>
                    </div>
                    <div className='w-60'>
                        <div className='h-52 overflow-hidden rounded-t-lg'>
                            <img src={sandesh} className='h-full object-cover' alt="" />
                        </div>
                        <div className='flex flex-col text-start bg-[#EDEFEE] p-4 h-64'>
                            <div className='flex justify-between font-bold'>
                                <p>Lemon Dessert</p>
                                <p className='text-[#EE9972]'>$5.00</p>
                            </div>
                            <p className='my-4'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <p className='font-bold'>Order a delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured