// src/components/Footer.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { navigation, SocialMedia } from '@/Components/Constant';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
/* import MediumIcon from "../../images/socialMedia/Medium.svg";
import DevIcon from "../../images/socialMedia/Dev.svg; */



const Footer: React.FC = () => {
    return (
        <footer className=" footer flex-col gap-6 border-t border-gray-500/[0.25]">
            {/* Navigation Links */}
            <nav className="flex space-x-4">
                {navigation.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className=" ibm-plex-mono-light hover:text-mypurple"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Social Media Links */}
            <div className="flex gap-4">
                {SocialMedia.map((media) => (
                    <a
                        key={media.id}
                        href={media.href}
                        target={media.target}
                        rel={media.rel}
                        aria-label={media.ariaLabel}
                        className="hover:text-mydarkpurple text-mypurple hover:shadow-[0px_4px_8px_rgba(126,96,191,0.5)]" // Apply hover shadow to all icons
                    >
                        {/* Render Icons Based on Social Media Name */}

                        {media.name === "LinkedIn" && <LinkedInIcon className="w-auto h-6" />}
                        {media.name === "GitHub" && <GitHubIcon className="w-auto h-6" />}
                        {media.name === "Medium" && (
                            <Image
                                src="assets/images/socialMedia/Medium.svg"
                                alt="Medium"
                                width={24}
                                height={24}
                                className="medium-icon"
                            />
                        )}
                        {media.name === "Dev.to" && (
                            <Image
                                src="assets/images/socialMedia/Dev.svg"
                                alt="Dev.to"
                                width={24}
                                height={24}
                                className="medium-icon"
                            />
                        )}

                        {media.name === "Facebook" && <FacebookIcon className="w-auto h-6" />}
                        {media.name === "Instagram" && <InstagramIcon className="w-auto h-6" />}
                    </a>
                ))}
            </div>

            {/* Copyright Text */}
            <p className=" text-sm">&copy; {new Date().getFullYear()} Ochwada. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
