"use client"
import { count } from 'console';
import Image from 'next/image';
import React from 'react'

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';



const data = [
    {
        name: 'Total',
        count: 2285,
        fill: 'white',
    },
    {
        name: 'Boys',
        count: 1234,
        fill: '#CFCEFF',
    },
    {
        name: 'Girls',
        count: 1051,
        fill: '#FAE27C',
    },
];




export default function CountChart() {
    return (
        <div className='w-full h-full rounded-2xl bg-white p-4 flex flex-col'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1>Student</h1>
                <Image src={'/moreDark.png'} alt='' height={20} width={20} />
            </div>
            {/* CHART */}
            <div className='flex-1 relative'>
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar


                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src={'/maleFemale.png'} alt='' height={50} width={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            {/* STATS */}
            <div className='flex justify-around w-full '>
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-5 w-5 bg-lamaPurple rounded-full'></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-500'>Boys (54%)</h2>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-5 w-5 bg-lamaYellow rounded-full'></div>
                    <h1 className='font-bold'>1,051</h1>
                    <h2 className='text-xs text-gray-500'>Girls (46%)</h2>
                </div>
            </div>
        </div>
    )
}
