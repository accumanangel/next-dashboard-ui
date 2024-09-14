import Image from 'next/image'
import React from 'react'

export default function NavBar() {
    return (
        <div className='flex justify-end items-center p-4 md:justify-between'>
            {/**Input Search */}
            <div className='hidden md:flex items-center gap-2 bg-white text-xs rounded-full ring-[2px] ring-gray-300 py-1 px-2 focus-within:ring-gray-400'>
                <Image src={'/search.png'} alt='search' height={14} width={14} className='object-contain' />
                <input type="search" placeholder='Search...' className='p-1 flex-1 bg-transparent outline-none' />
            </div>
            {/**Icons */}
            <div className='flex gap-6 items-center'>
                <div className='bg-white rounded-full flex items-center justify-center cursor-pointer'>
                    <Image src={'/message.png'} height={20} width={20} alt='' />
                </div>
                <div className='bg-white rounded-full flex items-center justify-center cursor-pointer relative'>
                    <Image src={'/announcement.png'} height={20} width={20} alt='' />
                    <span className='h-5 w-5 flex items-center justify-center bg-purple-500 text-white text-xs rounded-full font-medium absolute -top-3 -right-3'>1</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs font-medium leading-3'>John Doe</span>
                    <span className='text-[10px] text-gray-500 text-right'>Admin</span>
                </div>
                <Image src={'/avatar.png'} alt='user' height={36} width={36} className='rounded-full' />
            </div>
        </div>
    )
}
