import Menu from '@/components/Menu';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex h-screen'>
            {/*LEFT*/}
            <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4'>
                <Link href={'/'} className='flex justify-center items-center md:justify-start gap-2'>
                    <Image src="/logo.png" alt='SchoolLama' width={32} height={32} />
                    <span className='hidden md:block font-bold'>SchoolLama</span>
                </Link>

                {/**Menu */}
                <Menu />
            </div>
            {/*RIGHT*/}
            <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll'>
                <NavBar />
                {children}
            </div>
        </div>
    )
}
