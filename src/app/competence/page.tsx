"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

import PageTransition from "@/Components/Pages/PageTransition";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import { competence } from "@/Components/Constant";

const Competence: React.FC = () => {
    const { scrollYProgress } = useScroll();
    //const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen competence-background">
                {/* Fixed Header */}
                <div className="fixed top-0 left-0 w-full z-50">
                    <Header />
                </div>

                {/* Page Content */}
                <div className="flex-grow pt-16 pb-16 place-content-center">

                    {/* Progress Bar */}
                    <motion.div
                        className="progress-bar fixed top-16 left-0 w-full h-1 bg-mydarkpurple z-40"
                        style={{ scaleX: scrollYProgress }}
                    />

                    {/* Main Content */}
                    <div className="p-4 sm:p-8 pb-32 mx-8 ">
                        <h1 className=" md:text-4xl text-2xl font-bold text-start mb-8">
                            What are  areas of  my<span className="text-mypink"> expertise </span>?
                        </h1>
                        <div>
                            <p className="text-base mb-6 md:mx-16 text-justify">
                                My expertise spans diverse fields. Each area represents a cornerstone of my professional journey,
                                reflecting my commitment to mastering tools, technologies, and
                                strategies that drive innovation and create meaningful solutions
                                tailored to complex challenges.
                            </p>
                        </div>
                        {/*  <p className="text-base mb-6 mx-16">
                            My expertise spans diverse fields. Each area represents a cornerstone of my professional journey,
                            reflecting my commitment to mastering tools, technologies, and
                            strategies that drive innovation and create meaningful solutions
                            tailored to complex challenges.
                        </p> */}

                        {/* Competence Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6  md:h-72">
                            {competence.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-300/[0.25] comp-img h-48 w-full border border-dashed border-gray-500/[0.50] rounded
                                flex flex-col justify-between p-4 "
                                >
                                    <h2 className="text-lg font-bold uppercase">{item.name}</h2>
                                    <p className="text-sm mt-2">{item.description}</p>
                                    <a
                                        href={item.href}
                                        className=" mt-4  font-bold hover:underline  underline-offset-4 text-xs uppercase "
                                    >
                                        More info...
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Fixed Footer */}
                <div className="fixed bottom-0 left-0 w-full z-50">
                    <Footer />
                </div>
            </div>
        </PageTransition>
    );
};

export default Competence;
