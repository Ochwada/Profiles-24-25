
// src/Components/Constant/index.js
import React from 'react';

// -------------------------------------------Header Navigation --------------------
export const navigation = [
    {
        id: 1,
        name: "Home",
        href: "/",
        current: true,
    },
    {
        id: 2,
        name: "Competence",
        href: "/competence",
    },
    {
        id: 4,
        name: "Experience",
        href: "/experience",
    },
    {
        id: 3,
        name: "Projects",
        href: "/projects",
    },

];
// -------------------------------------------Projects Navigation --------------------

export const projectsNavigation = [
    {
        id: "ardhiapp",
        name: "Ardhi Project - GIS Data Visualization and Conversion tool (Application)",
        git_href: "https://github.com/Ardhi-OWM/ardhi_frontend",
        //web_href: "https://ardhi.de/",
        href: "https://ardhi.slab.com/posts/what-is-ardhi-project-z0d01cz8?shr=EZiIPCLM0lt9h1C_2osUBQA_",
        image: '/assets/ardhi_app.png',
        category: ["Web Development", "Project Management"],
        subcategory: "Frontend",
        tools: ["#React", "#TailwindCSS", "#NextJS"],
    },
    {
        id: "ardhi",
        name: "Ardhi Project - GIS Data Visualization and Conversion tool (Landing Page)",
        git_href: "https://github.com/Ardhi-OWM/landing-page",
        web_href: "https://ardhi.de/",
        href: "https://ardhi.slab.com/posts/what-is-ardhi-project-z0d01cz8?shr=EZiIPCLM0lt9h1C_2osUBQA_",
        image: '/assets/ardhi.png',
        category: ["Web Development"],
        subcategory: "Frontend",
        tools: ["#React", "#TailwindCSS", "#Vite"],
    },
    {
        id: 'ProjectsProfile2023',
        name: "Curriculum vitae - Portfolio (May 2023)",
        git_href: "https://github.com/Ochwada/My-Profile-CV-2023/tree/main/Ochwada_Profile_May2023",
        web_href: "https://ochwada-23.netlify.app/",
        //href: "https://medium.com/@ochwada/c-programing-setup-in-visual-studio-code-bd4cb60e58ff",
        image: '/assets/profile0523.png',
        category: ["Web Development"],
        subcategory: "Frontend",
        tools: ["#React", "#Vite", "#ThreeJS", "#TailwindCSS", '#Netlify',],
    },
    {
        id: 'clvprediction',
        name: "Customer Lifetime Value Prediction",
        git_href: "https://github.com/Ochwada/Software_Code_Pytho",
        //web_href: "https://linda-ochwada.netlify.app/",
        //href: "https://medium.com/@ochwada/c-programing-setup-in-visual-studio-code-bd4cb60e58ff",
        image: '/assets/clv.png',
        category: ["Machine Learning"],
        subcategory: "Predictive Analytics",
        tools: ["#Python",],
    },
    {
        id: 'PhotosIntoCartoons1',
        name: "Turn Photos into Cartoons",
        git_href: "https://github.com/Ochwada/Data-Science-2023/blob/main/Photos%20into%20Cartoons/photo_to_catoons.ipynb",
        //web_href: "https://linda-ochwada.netlify.app/",
        href: "https://medium.com/@ochwada/c-programing-setup-in-visual-studio-code-bd4cb60e58ff",
        image: '/assets/catoon.png',
        category: ["Computer Vision"],
        subcategory: "Image Processing and Transformation",
        tools: ["#Python",],
    },
];

// --------------- Experience Page ---------------------------
// ------ Education Section  
export const educationData = [
    {
        title: "Location Analysis of High Altitude Wind Energy in Germany",
        date: "Jan 2018 - June 2018",
        description: "Masters Thesis",
        institution: "Technical University of Berlin",
    },
    {
        title: "Masters in Geodesy and Geoinformation Science",
        date: "2013 - 2018",
        description: "Masters Degree",
        institution: "Technical University of Berlin"
    },
    {
        title: "Climate-KIC: Climate Change innovation & Entrepreneurship ",
        date: "2014 - 2018",
        description: "Add-On Masters Degree",
        institution: "Technical University of Berlin & EIT"
    },
    {
        title: "Thesis: The Effect of Riparian Vegetation on River Delta in the Nzoia River delta, Kenya",
        date: "2009 - 2012",
        description: "Bachelors Degree",
        institution: "Moi University, Eldoret (KE)",
    },
];
// ------ Training Section  
export const trainingData = [
    {
        training: "Databases and SQL for Data Science with Python",
        date: "July 2024",
        description: "IBM - Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/ETPRCNMG6BYU"
    },
    {
        training: "Python for Data Science, AI & Development",
        date: "June 2024",
        description: "IBM- Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/TCQEYSD2BLAV"
    },
    {
        training: "Geospatial Data Visualization using Python and Folium",
        date: "April 2024",
        description: "Deprecated Guided Projects - Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/W6GNY6XCSWUG"
    },
    {
        training: "Python for Data Science",
        date: "June 2024",
        description: "IBMx - Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/ETPRCNMG6BYU"
    },
    {
        training: "Fundamentals of of Technology Sales",
        date: "April 2024",
        description: "University of Maryland, College Park - Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/JX9ZBVJAD3VL"
    },
    {
        training: "Foundations of Project Management",
        date: "August 2023",
        description: "Google- Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/HFW84NV488JL"
    },

];
// ------ Experience Section  
export const experienceData = [
    {
        position: "Project Manager | Frontend Developer | Management ",
        date: "Sept 2024 - Present",
        company: "Ardhi Project - Ongoing: Prototype Fund (Berlin - DE)",
        description: ["Driving geospatial innovation through web optimization, team leadership, and strategic development for user-centric data visualization and conversion solutions."],
        companylink: "https://ardhi.de/"
    },
    {
        position: "Product Manager | Technical Managing Director",
        date: "Aug 2023 - Present",
        company: "Dakmotion UG (Münich - DE)",
        description: ["Led technical team in delivering innovative products,  and aligning technology strategies with business objectives to ensure timely and efficient project execution."],
        companylink: "https://dakmotion.com/"
    },
    {
        position: "International Sales Manager ",
        date: "Oct 2023 - Dec 2024",
        company: "Hansa Luftbild AG (Münster - DE)",
        description: ["Drove international sales, expanded markets, and delivered tailored geospatial solutions and business growth."],
    },
    {
        position: "Product Evangelist | Sales ",
        date: "May 2022 - Oct 2023",
        company: "Dealcode GmbH (Hamburg - DE)",
        description: ["Bridged user needs with development, drove market presence through strategic initiatives, and ensured product alignment with trends while fostering key partnerships."],
        companylink: "https://www.dealcode.ai/"
    },
    {
        position: "Project Consultant | Managing Director ",
        date: "July 2019 —Aug 2021",
        company: "AfroAI UG (Berlin - DE)",
        description: [
            "Lead and managed projects in geodata, web, and apps.",
            "Led international teams to deliver client-focused results.  ",
            <React.Fragment key="free-geospatial-data-resources">
                Author of <a href="https://buymeacoffee.com/ochwada/e/203469" target="_blank" rel="noopener noreferrer">
                    <u>Free Geospatial Data Resources (Ebook)</u>
                </a>
            </React.Fragment>
        ],
        //companylink: "https://www.dealcode.ai/"
    },
    {
        position: "GeoData Scientist Consultant  ",
        date: "January 2019 - June 2019",
        company: "Super & Super GmbH (Berlin - DE)",
        description: ["Managed geodata for machine learning, GIS development, and stakeholder engagement; analyzed 3D, satellite, and sensor data; oversaw web updates and delivered conference presentations."],
        //companylink: "https://www.dealcode.ai/"
    },
    {
        position: "Geoinformatics Working Student   ",
        date: "April 15 —September 15",
        company: "GFZ - German Research Centre For Geosciences (Potsdam - DE)",
    },
    {
        position: "GIS Intern ",
        date: "May 2012—October 2012",
        company: "Save the Elephants —STE (Nairobi -Kenya)",
    },
    {
        position: "GIS & Remote Sensing Intern  ",
        date: "May 2011—July 2011",
        company: "United Nations FAO- SWALIM (Nairobi -Kenya)",
    },
    {
        position: "GIS & Remote Sensing Intern  ",
        date: "May 2010—July 2010",
        company: "United Nations FAO- SWALIM (Nairobi -Kenya)",
    },
];

// -------------------------- Competence page  --------------------------
export const competence = [
    {
        id: 2,
        name: "GIS & Remote Sensing",
        description: "Proficient in geospatial analysis, mapping, and remote sensing techniques for impactful insights.",
        href: "/projects",
    },
    {
        id: 3,
        name: "Data Analytics",
        description: "Skilled in extracting meaningful insights from complex datasets to support decision-making.",
        href: "/projects",
    },
    {
        id: 4,
        name: "Web Development",
        description: "Creating dynamic, user-focused web applications using modern tools and frameworks.",
        href: "/projects",
    },
    {
        id: 1,
        name: "Project Management",
        description: "Expert in planning, execution, and delivering successful projects on time and within scope.",
        href: "/projects",
    },
    {
        id: 5,
        name: "Sales & Strategy",
        description: "Experienced in tailoring solutions, building relationships, and driving business growth.",
        href: "/projects",
    },

];

// ----------------- Footer Social Media

export const SocialMedia = [
    {
        id: 3,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ochwada-l-66630a36/",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "LinkedIn",
    },
    {
        id: 4,
        name: "GitHub",
        href: "https://github.com/Ochwada",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "GitHub",
    },
    {
        id: 5,
        name: "Medium",
        href: "https://medium.com/@ochwada",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Medium",
    },
    {
        id: 6,
        name: "Dev.to",
        href: "https://dev.to/ochwada",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Dev.to",
    },
    {
        id: 1,
        name: "Facebook",
        href: "https://www.facebook.com/ochwada.linda/",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Facebook",
    },
    {
        id: 2,
        name: "Instagram",
        href: "https://www.instagram.com/ochwada_linda",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Instagram",
    },
];