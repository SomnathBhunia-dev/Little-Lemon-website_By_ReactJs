import React from 'react'
import ad from './icons_assets/restauranfood.jpg'
import Featured from './Featured';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <main className='min-h-[25rem] max-sm:h-[40rem]'>
                <div className='bg-[#495E57] flex flex-col sm:flex-row max-sm:items-center justify-evenly p-8 max-sm:h-fit h-[20rem]'>
                    <div className='h-1/5 sm:w-1/3 text-start'>
                        <h1 className='text-[#af9e46] text-4xl font-bold'>Little Lemon</h1>
                        <h4 className='text-white font-semibold text-2xl'>Chicago</h4>
                        <p className='text-white my-4'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className='px-4 py-2 bg-yellow-300 text-black rounded-lg'>
                            <Link to='/reservations'>Reserve a Table</Link></button>
                    </div>
                    <div className='max-sm:h-60 max-sm:mt-20'>
                        <div className='w-60 relative '>
                            <img src={ad} alt="" className='rounded-3xl' />
                        </div>
                    </div>
                </div>
            </main>
            <Featured />
        </>
    )
}
// font-family: 'Karla', sans-serif;
// font-family: 'Markazi Text', serif;

export default Main