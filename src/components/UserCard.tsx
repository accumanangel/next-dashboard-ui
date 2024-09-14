import Image from 'next/image'
import React from 'react'

type UserStats = {
    type: string;
    number: string;
}


export default function UserCard({ type, number }: UserStats) {
    return (
        <div className='rounded-2xl p-4 odd:bg-lamaPurple even:bg-lamaYellow flex-1 min-w-[130px]'>
            <div className='flex justify-between items-center '>
                <span className='bg-white text-[10px] py-1 px-2 rounded-full text-green-600'>2024/09</span>
                <Image src={'/more.png'} height={20} width={20} alt='more' />
            </div>
            <h1 className='text-2xl font-semibold my-3'>
                {number}
            </h1>
            <h3 className='text-sm capitalize font-medium text-gray-500'>{type}</h3>
        </div>
    )
}
