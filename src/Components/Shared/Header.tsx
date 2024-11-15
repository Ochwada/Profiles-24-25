"use client";


import React, { useContext, useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton';
import { navigation } from '@/Components/Constant';
import Image from 'next/image';
import assets from '@/assets';
import MobileNav from './MobileNav';
import { useTheme } from './ThemeContext';

const Header: React.FC = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const pathname = usePathname();
    const { theme } = useTheme(); // Access the theme context

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev: boolean) => !prev);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 border-b border-gray-500/[0.25] ${
                theme === 'dark' ? 'bg-dark_bg' : 'bg-light_bg'
            }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
                {/* Left - Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={assets.logo}
                            alt="Logo"
                            className="h-14 w-auto"
                        />
                    </Link>
                </div>

                {/* Center - Desktop Navigation Links */}
                <nav className="hidden md:flex space-x-6 mx-auto">
                    {navigation.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`ibm-plex-mono-semibold text-lg font-semibold tracking-wide px-3 ${
                                pathname === item.href
                                    ? 'border-b-2 border-mypurple text-mypurple'
                                    : 'hover:border-b hover:text-mypurple'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right - Theme Toggle Button and Mobile Navigation */}
                <div className="flex items-center space-x-4">
                    <ThemeToggleButton />
                    <MobileNav isOpen={isMobileNavOpen} toggleNav={toggleMobileNav} />
                </div>
            </div>
        </header>
    );
};

export default Header;

