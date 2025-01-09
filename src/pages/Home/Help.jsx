import React from 'react';
import icon1 from '../../assets/icons/schedule.png'
import icon2 from '../../assets/icons/Group 34.svg'
import icon3 from '../../assets/icons/location.png'

const Help = () => {
    return (
        <div className='grid grid-cols-1 gap-6 my-32 bg-[#151515] py-20 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex justify-center items-center gap-2'>
                <div>
                    <img className='w-10' src={icon1} alt="" />
                </div>
                <div className='text-white'>
                    <p className='font-medium'>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <div>
                    <img className='w-10' src={icon2} alt="" />
                </div>
                <div className='text-white'>
                    <p className='font-medium'>Have a question?</p>
                    <h3 className='text-2xl font-bold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <div>
                    <img className='w-10' src={icon3} alt="" />
                </div>
                <div className='text-white'>
                    <p className='font-medium'>Need a repair? our address</p>
                    <h3 className='text-2xl font-bold'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Help;