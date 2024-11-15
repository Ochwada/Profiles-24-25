"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/Components/Constant';

interface MobileNavProps {
    isOpen: boolean;
    toggleNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleNav }) => {
    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <button
                onClick={toggleNav}
                className="md:hidden p-2 rounded focus:outline-none"
                aria-label="Toggle mobile menu"
            >
                {isOpen ? <X size={24} className="text-mypurple" /> : <Menu size={24} className="text-mypurple" />}
            </button>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full p-6 space-y-4 bg-background z-50 md:hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={toggleNav}
                        className="absolute top-4 right-4 p-2 rounded focus:outline-none"
                        aria-label="Close mobile menu"
                    >
                        <X size={24} className="text-mypurple" />
                    </button>

                    {/* Navigation Links */}
                    <nav className="mt-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="ibm-plex-mono-semibold block text-lg font-semibold hover:text-mypurple 
                                hover:border-b rounded hover:border-mypurple mb-4"
                                onClick={toggleNav} // Close menu on link click
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default MobileNav;
