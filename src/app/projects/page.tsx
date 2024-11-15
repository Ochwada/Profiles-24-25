import React from 'react';
import PageTransition from '@/Components/Pages/PageTransition';
import Header from '@/Components/Shared/Header';
import Footer from '@/Components/Shared/Footer';

const Projects: React.FC = () => (
    <PageTransition>
        <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Header />
            <main className="flex flex-col gap-8 row-start-2 sm:items-start mt-16">

            <h1 className="text-4xl font-bold">Projects Page</h1>
            <p>Welcome to the Projects page!</p>
            </main>
            <Footer />
        </div >
    </PageTransition>
);

export default Projects;