"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { ImStatsDots } from 'react-icons/im';
import { RiHome2Line } from 'react-icons/ri';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link href="/" className={`btn flex justify-center items-center ${pathname === '/' ? 'bg-[#244D3F] text-white' : ""}`}>
                            <RiHome2Line />
                            Home
                        </Link>
                        <Link href="/timeline" className={`btn flex justify-center items-center ${pathname === '/timeline' ? 'bg-[#244D3F] text-white' : ""}`}>
                            <CiClock2 />
                            TimeLine
                        </Link>
                        <Link href="/stats" className={`btn flex justify-center items-center ${pathname === '/stats' ? 'bg-[#244D3F] text-white' : ""}`}>
                            <ImStatsDots />
                            Stats
                        </Link>
                    </ul>
                </div>
                <Image
                    width={150}
                    height={150}
                    src="/logo.png"
                    alt='logo' />
            </div>
            <div className="gap-2 navbar-end invisible md:visible">
                <Link href="/" className={`btn flex justify-center items-center ${pathname === '/' ? 'bg-[#244D3F] text-white' : ""}`}>
                    <RiHome2Line />
                    Home
                </Link>
                <Link href="/timeline" className={`btn flex justify-center items-center ${pathname === '/timeline' ? 'bg-[#244D3F] text-white' : ""}`}>
                    <CiClock2 />
                    TimeLine
                </Link>
                <Link href="/stats" className={`btn flex justify-center items-center ${pathname === '/stats' ? 'bg-[#244D3F] text-white' : ""}`}>
                    <ImStatsDots />
                    Stats
                </Link>
            </div>
        </div >
    );
};

export default Navbar;