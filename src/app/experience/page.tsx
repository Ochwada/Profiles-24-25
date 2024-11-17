"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { ScrollText } from "lucide-react";

import PageTransition from "@/Components/Pages/PageTransition";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import { experienceData, educationData, trainingData } from "@/Components/Constant";

// Define TypeScript Interfaces for the data
interface ExperienceItem {
    position: string;
    company: string;
    date: string;
    description?: (string | React.JSX.Element)[];
    companylink?: string;
}

interface EducationItem {
    title: string;
    institution: string;
    date: string;
    description?: string;
}

interface TrainingItem {
    training: string;
    date: string;
    description?: string;
    certificateLink?: string;
}


const Timeline: React.FC = () => {
    const { scrollYProgress } = useScroll();

    const renderExperienceItem = (item: ExperienceItem, index: number): JSX.Element => (
        <div
            key={`experience-${index}`}
            className={`relative flex flex-col sm:flex-row items-center sm:items-start mb-8 sm:mb-[-40px] ${index % 2 === 0 ? "" : "sm:flex-row-reverse"
                }`}
        >
            <div className="absolute left-[50%] transform -translate-x-1/2 top-[45%] z-10 hidden sm:block text-purple-500">
                <ScrollText size={25} strokeWidth={1.5} />
            </div>

            <div
                className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-500/[0.25] hidden sm:block  
                    ${index % 2 === 0 ? "right-[50%] w-[calc(3%)]" : "left-[50%] w-[calc(3%)]"}
                `}
            ></div>

            <div
                className={`relative border border-gray-500/[0.25] border-dashed p-4 sm:p-4 rounded-sm shadow-lg w-full sm:w-[45%] hover:border-transparent hover:shadow-multicolor 
                ${index % 2 === 0 ? "sm:ml-6" : "sm:mr-6"}
            `}
            >
                <h3 className="text-lg sm:text-xl font-bold">{item.position}</h3>
                <p className="text-sm sm:text-base text-gray-400">{item.company}</p>
                <p className="text-sm sm:text-base text-gray-500 mt-2">{item.date}</p>
                <ul className="mt-4 text-sm sm:text-base list-disc list-inside">
                    {item.description?.map((desc, idx) => (
                        <li key={`desc-${idx}`}>{desc}</li>
                    ))}
                    {item.companylink && (
                        <li>
                            <a
                                href={item.companylink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:underline"
                            >
                                Visit Website
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            {/* Vertical Line Connecting Cards on Mobile */}
            {index < experienceData.length - 1 && ( // Only show if not the last card
                <div
                    className={`absolute left-[50%] transform -translate-x-1/2 top-[calc(100%)] h-[2rem] w-0.5 bg-gray-500/[0.25] block sm:hidden`}
                ></div>
            )}
        </div>
    );


    const renderEducationItem = (item: EducationItem, index: number): JSX.Element => (
        <div
            key={`education-${index}`}
            className={`relative flex flex-col sm:flex-row items-center sm:items-start mb-8 sm:mb-[-40px] ${index % 2 === 0 ? "" : "sm:flex-row-reverse"
                }`}
        >
            <div className="absolute left-[50%] transform -translate-x-1/2 top-[45%] z-10 hidden sm:block text-purple-500">
                <ScrollText size={25} strokeWidth={1.5} />
            </div>

            <div
                className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-500/[0.25] hidden sm:block  
                    ${index % 2 === 0 ? "right-[50%] w-[calc(3%)]" : "left-[50%] w-[calc(3%)]"}
                `}
            ></div>

            <div
                className={`relative border border-gray-500/[0.25] border-dashed p-4 sm:p-4 rounded-sm shadow-lg w-full sm:w-[45%] hover:border-transparent hover:shadow-multicolor 
                ${index % 2 === 0 ? "sm:ml-6" : "sm:mr-6"}
            `}
            >
                <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{item.institution}</p>
                <p className="text-sm sm:text-base text-gray-500 mt-2">{item.date}</p>
                <p className="mt-4 text-sm sm:text-base">{item.description}</p>
            </div>
            {/* Vertical Line Connecting Cards on Mobile */}
            {index < experienceData.length - 1 && ( // Only show if not the last card
                <div
                    className={`absolute left-[50%] transform -translate-x-1/2 top-[calc(100%)] h-[2rem] w-0.5 bg-gray-500/[0.25] block sm:hidden`}
                ></div>
            )}
        </div>
    );

    const renderTrainingItem = (item: TrainingItem, index: number): JSX.Element => (
        <div
            key={`training-${index}`}
            className={`relative flex flex-col sm:flex-row items-center sm:items-start mb-8 sm:mb-[-40px] ${index % 2 === 0 ? "" : "sm:flex-row-reverse"
                }`}
        >
            <div className="absolute left-[50%] transform -translate-x-1/2 top-[45%] z-10 hidden sm:block text-purple-500">
                <ScrollText size={25} strokeWidth={1.5} />
            </div>

            {/* horizontal Connecting Line between line and content box  */}
            <div
                className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-500/[0.25] hidden sm:block  
                    ${index % 2 === 0 ? "right-[50%] w-[calc(3%)]" : "left-[50%] w-[calc(3%)]"}
                `}
            ></div>
            {/*   content box */}
            <div
                className={`relative border border-gray-500/[0.25] border-dashed p-4 sm:p-4 rounded-sm shadow-lg w-full sm:w-[45%] hover:border-transparent hover:shadow-multicolor 
                ${index % 2 === 0 ? "sm:ml-6" : "sm:mr-6"}
            `}
            >
                <h3 className="text-lg sm:text-xl font-bold">{item.training}</h3>
                <p className="text-sm sm:text-base text-gray-500 mt-2">{item.date}</p>
                <p className="mt-4 text-sm sm:text-base">{item.description}</p>
                {item.certificateLink && (
                    <a
                        href={item.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:underline"
                    >
                        View Certificate
                    </a>
                )}
            </div>
            {/* Vertical Line Connecting Cards on Mobile */}
            {index < experienceData.length - 1 && ( // Only show if not the last card
                <div
                    className={`absolute left-[50%] transform -translate-x-1/2 top-[calc(100%)] h-[2rem] w-0.5 bg-gray-500/[0.25] block sm:hidden`}
                ></div>
            )}
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen experience-background">
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            <div className="flex-grow pt-16 pb-16 ">
                <PageTransition>
                    <motion.div
                        className="progress-bar fixed top-16 left-0 w-full h-1 bg-blue-500"
                        style={{ scaleX: scrollYProgress }}
                    />

                    <div className="p-4 sm:p-8">
                        <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
                            My Journey: Experience, Education & Training
                        </h1>

                        <div className="mb-16">
                            <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center"> <span className="underline underline-offset-4 text-mypink">Expe</span>rience</h2>
                            <div className="relative flex flex-col gap-4 timeline">
                                {experienceData.map((item, index) => renderExperienceItem(item, index))}
                            </div>
                        </div>

                        <div className="mb-16">
                            <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center"><span className="underline underline-offset-4 text-mypink">Edu</span>cation</h2>
                            <div className="relative flex flex-col gap-4 timeline">
                                {educationData.map((item, index) => renderEducationItem(item, index))}
                            </div>
                        </div>

                        <div className="mb-24">
                            <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center"><span className="underline underline-offset-4 text-mypink">Tra</span>ining</h2>
                            <div className="relative flex flex-col gap-4 timeline">
                                {trainingData.map((item, index) => renderTrainingItem(item, index))}
                            </div>
                        </div>
                    </div>
                </PageTransition>
            </div>

            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Timeline;
