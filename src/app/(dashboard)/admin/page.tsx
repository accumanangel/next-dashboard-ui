import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'


export default function AdminPage() {

    return (
        <div className='p-4 flex flex-col md:flex-row gap-4'>
            {/* LEFT */}
            <div className='w-full md:w-2/3 flex flex-col gap-4'>
                <div className='flex gap-4 justify-between flex-wrap'>
                    <UserCard number={'1,234'} type='Students' />
                    <UserCard number={'56'} type='Teacher' />
                    <UserCard number={'350'} type='Parent' />
                    <UserCard number={'1,245'} type='Staff' />
                </div>
                {/* MIDDLE_CHARTS */}
                <div className='flex flex-col md:flex-row justify-between gap-4 '>
                    <div className='w-full md:w-1/3 h-[450px]'>
                        <CountChart />
                    </div>
                    <div className='w-full md:w-2/3 h-[450xp]'>r</div>
                </div>
                {/* BOTTOM_CHARTS */}
                <div></div>
            </div>
            {/* RIGHT */}
            <div className='w-full md:w-1/3'>right</div>
        </div>
    )
}
