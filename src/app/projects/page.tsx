"use client";

import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

import PageTransition from "@/Components/Pages/PageTransition";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import { projectsNavigation } from "@/Components/Constant";

// Color mapping for tools
const toolColors: Record<string, { bg: string; text: string }> = {
    "#React": { bg: "bg-blue-100", text: "text-blue-800" },
    "#TailwindCSS": { bg: "bg-pink-100", text: "text-pink-800" },
    "#NextJS": { bg: "bg-green-100", text: "text-green-800" },
    "#scss": { bg: "bg-purple-100", text: "text-purple-800" },
    "#Sanity": { bg: "bg-red-100", text: "text-red-800" },
};

const ProjectCard: React.FC<{ project: typeof projectsNavigation[0]; onToolClick: (tool: string) => void }> = ({ project, onToolClick }) => (
    <div className="border rounded p-2 shadow-md">
        <img
            src={project.image}
            alt={project.name}
            className="w-full h-32 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-bold mb-2">{project.name}</h2>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">{project.category}</p>
        <p className="text-xs mb-4 text-gray-500 dark:text-gray-400">{project.subcategory}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool, index) => {
                const color = toolColors[tool] || { bg: "bg-gray-100", text: "text-gray-800" };
                return (
                    <button
                        key={index}
                        onClick={() => onToolClick(tool)}
                        className={`px-2 py-1 text-xs font-medium rounded ${color.bg} ${color.text} cursor-pointer`}
                    >
                        {tool}
                    </button>
                );
            })}
        </div>
        <div className="flex justify-between">
            <a
                href={project.git_href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                GitHub
            </a>
            <a
                href={project.web_href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                Live Site
            </a>
            <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                More Info
            </a>
        </div>
    </div>
);

const Projects: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
    const [selectedTool, setSelectedTool] = useState<string | null>(null);

    const categories = Array.from(new Set(projectsNavigation.map((project) => project.category)));
    const subcategories = selectedCategory
        ? Array.from(
              new Set(
                  projectsNavigation
                      .filter((project) => project.category === selectedCategory)
                      .map((project) => project.subcategory)
              )
          )
        : [];

    const filteredProjects = projectsNavigation.filter((project) => {
        return (
            (!selectedCategory || project.category === selectedCategory) &&
            (!selectedSubcategory || project.subcategory === selectedSubcategory) &&
            (!selectedTool || project.tools.includes(selectedTool))
        );
    });

    const handleToolClick = (tool: string) => {
        setSelectedTool(tool === selectedTool ? null : tool);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>
            <div className="flex-grow pt-16 pb-16">
                <PageTransition>
                    <motion.div
                        className="progress-bar fixed top-16 left-0 w-full h-1 bg-blue-500"
                        style={{ scaleX: scrollYProgress }}
                    />
                    <div className="p-4">
                        <h1 className="text-2xl mb-4">
                            <span className="ibm-plex-mono-bold md:text-4xl text-2xl">
                                Code Chronicles: Projects
                            </span>
                        </h1>

                        {/* Category Tabs */}
                        <div className="flex gap-4 mb-4 justify-center">
                            <button
                                onClick={() => {
                                    setSelectedCategory(null);
                                    setSelectedSubcategory(null);
                                    setSelectedTool(null);
                                }}
                                className={`px-4 py-2 text-sm font-medium rounded ${
                                    !selectedCategory ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                                }`}
                            >
                                All Categories
                            </button>
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 text-sm font-medium rounded ${
                                        selectedCategory === category
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-gray-800"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Subcategory Tabs */}
                        {selectedCategory && (
                            <div className="flex gap-4 mb-4 justify-center">
                                <button
                                    onClick={() => setSelectedSubcategory(null)}
                                    className={`px-4 py-2 text-sm font-medium rounded ${
                                        !selectedSubcategory ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                                    }`}
                                >
                                    All Subcategories
                                </button>
                                {subcategories.map((subcategory, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedSubcategory(subcategory)}
                                        className={`px-4 py-2 text-sm font-medium rounded ${
                                            selectedSubcategory === subcategory
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-200 text-gray-800"
                                        }`}
                                    >
                                        {subcategory}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Filter Info */}
                        {selectedTool && (
                            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                                Filtering by Tool: <span className="font-bold">{selectedTool}</span>{" "}
                                <button
                                    onClick={() => setSelectedTool(null)}
                                    className="text-blue-500 hover:underline ml-2"
                                >
                                    Clear Filter
                                </button>
                            </div>
                        )}

                        {/* Projects Grid */}
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} onToolClick={handleToolClick} />
                            ))}
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

export default Projects;
