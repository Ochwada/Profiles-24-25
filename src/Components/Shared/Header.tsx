"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton';
import { navigation } from '@/Components/Constant';
import Image from 'next/image';
import MobileNav from './MobileNav';
import { useTheme } from './ThemeContext';

const Header: React.FC = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const pathname = usePathname();
    const { theme } = useTheme();

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 border-b border-gray-500/[0.25] ${
                theme === 'dark' ? 'bg-dark_bg' : 'bg-light_bg'
            }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <button className="text-mypink text-2xl ibm-plex-mono-bold flex items-center">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                width={56}
                                height={56}
                                className="h-14 w-auto"
                            />
                            Ochwada
                        </button>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 mx-auto">
                    {navigation.map((item) => (
                        <Link key={item.id} href={item.href}>
                            <button
                                className={`ibm-plex-mono-semibold text-lg font-semibold tracking-wide px-3 ${
                                    pathname === item.href
                                        ? 'border-b-2 border-mypurple text-mypurple'
                                        : 'hover:border-b hover:text-mypurple'
                                }`}
                            >
                                {item.name}
                            </button>
                        </Link>
                    ))}
                </nav>

                {/* Theme Toggle and Mobile Navigation */}
                <div className="flex  items-center space-x-4">
                    <ThemeToggleButton />
                    <div className=' md:hidden '> 
                    <MobileNav isOpen={isMobileNavOpen} toggleNav={toggleMobileNav} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
