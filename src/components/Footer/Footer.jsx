import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="space-y-4 bg-[#244D3F] py-10 md:px-60 mt-20">
            <div className='space-y-2 mt-5'>
                <Image
                    src="/logo-xl.png"
                    width={200}
                    height={200}
                    alt='Footer Logo'
                    className='mx-auto'
                />
                <p className=" text-center text-white">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
            </div>
            <div className="flex justify-center gap-2">
                <Link href="https://www.instagram.com/">
                    <Image
                        src="/instagram.png"
                        width={30}
                        height={30}
                        alt='Instagram'
                    />
                </Link>
                <Link href="https://www.facebook.com/">
                    <Image
                        src="/facebook.png"
                        width={30}
                        height={30}
                        alt='Facebook'
                    />
                </Link>
                <Link href="https://www.x.com/">
                    <Image
                        src="/twitter.png"
                        width={30}
                        height={30}
                        alt='X (Twitter)'
                    />
                </Link>
            </div>
            <div className="divider"></div>
            <div className='md:flex justify-between text-center text-[#FAFAFA50]'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                <div className='md:flex gap-3'>
                    <p>
                        Privacy Policy
                    </p>
                    <p>
                        Terms of Service
                    </p>
                    <p>
                        Cookies
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;