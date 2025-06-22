'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

/** Styles */
import styles from './projects.module.scss'

const Projects = () => {
    return (
        <div className={styles.tp_projects} id='projects'>
            <div className="contain">
                <div className={styles.tp_projects__header}>
                    <div className={styles.tp_projects__badge}>💼 My work</div>
                    <h2 className={styles.tp_projects__title}>Featured Projects</h2>
                    <p className={styles.tp_projects__subtitle}>
                        A showcase of my recent work, from concept to completion
                    </p>
                </div>

                {/* Marquee Row 1 - Left to Right */}
                <div className={styles.marqueeRow}>
                    <motion.div
                        className={styles.marqueeTrack}
                        animate={{ x: ['0%', '-100%'] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: 'linear',
                        }}
                    >
                        {[...projects, ...projects].map((project, index) => (
                            <div key={`row1-${project.id}-${index}`} className={styles.projectCard}>
                                <div className={styles.projectCard__inner}>
                                    <div className={styles.tp_projects__icon}>
                                        <div className={styles.tp_projects__image}>
                                            <Image
                                                src="/images/6.png"
                                                alt={project.title}
                                                sizes="30vw"
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <h3 className={styles.projectCard__title}>{project.title}</h3>
                                    <p className={styles.projectCard__description}>
                                        {project.description}
                                    </p>
                                    <div className={styles.projectCard__frameworks}>
                                        {project.frameworks.map((fw, i) => (
                                            <span key={i}>{fw}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Marquee Row 2 - Right to Left */}
                <div className={styles.marqueeRow}>
                    <motion.div
                        className={styles.marqueeTrack}
                        animate={{ x: ['-100%', '0%'] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: 'linear',
                        }}
                    >
                        {[...projects, ...projects].map((project, index) => (
                            <div key={`row2-${project.id}-${index}`} className={styles.projectCard}>
                                <div className={styles.projectCard__inner}>
                                    <div className={styles.tp_projects__icon}>
                                        <div className={styles.tp_projects__image}>
                                            <Image
                                                src="/images/6.png"
                                                alt={project.title}
                                                sizes="30vw"
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <h3 className={styles.projectCard__title}>{project.title}</h3>
                                    <p className={styles.projectCard__description}>
                                        {project.description}
                                    </p>
                                    <div className={styles.projectCard__frameworks}>
                                        {project.frameworks.map((fw, i) => (
                                            <span key={i}>{fw}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Projects



const projects = [
    {
        id: 1,
        title: "Korgee",
        description: "Korgee teaches real Korean conversations you’ll actually use—at airports, cafés, hotels, and subways, not through random grammar drills. Each bite-sized lesson is packed with native dialogue, cultural tips, and smart progress tracking to help you speak confidently and connect naturally.",
        frameworks: ["React", "Next.js", "SASS"],
    },
    {
        id: 10,
        title: "Senior Experts",
        description: "Senior Experts is the one-stop-shop solution to satisfy the demand for a network of highly experienced professionals and a growing number of MSMEs across India. It enables senior citizens who've retired from their respective fields to continue contributing towards the growth of new businesses that are in need of valuable expertise.",
        frameworks: ["React", "Next.js", "Nest.js", "SASS"],
    },
    {
        id: 11,
        title: "Together Buying",
        description: "Developed a scalable frontend using Next.js and JavaScript, enabling real-time deal participation, group checkout, and order summaries. Helped launch the platform with more than 1,500+ customer group orders processed in pilot cam-paigns and generated 6.5 Lakhs+ in group order value..",
        frameworks: ["React", "Next.js", "Nest.js", "SASS"],
    },
    {
        id: 2,
        title: "FinClick Cards",
        description: "Finclick is a premium financial membership platform offering exclusive benefits through sleek dark-themed design, with tailored portals for users, merchants, and corporates. Built with Next.js and Adonis.js, the MVP delivers membership card access, intuitive UX, and SEO-optimized visibility for rapid user adoption.",
        frameworks: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
        id: 3,
        title: "AgentSharks",
        description: "AgentSharks is a cutting‑edge AI‑powered platform designed to revolutionize business operations by automating and enhancing core functions like customer engagement, marketing, business intelligence, and HR .",
        frameworks: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
        id: 6,
        title: "Xoracity Web",
        description: "XoraCity is a futuristic smart city brand site that promotes intelligent living, sustainable development, and urban luxury. The site uses modern animations to reflect innovation.",
        frameworks: ["React", "Next.js", "Node.js", "SASS"],
    },
    {
        id: 7,
        title: "Speed Infra",
        description: "Speed Infra is a portfolio site for a construction and infrastructure company showcasing their completed projects, vision, and credentials.",
        frameworks: ["React", "Next.js", "Node.js", "SASS"],
    },
    {
        id: 8,
        title: "Constella",
        description: "Experience the limitless life at Constella with starlit skies above you and beautiful open courtyard to celebrate every moment of life. The theme base landscaped courtyards in the clusters bring in the vividity of the changing blooms and fill each day with the aromatic waves and positivity.",
        frameworks: ["React", "Next.js", "Node.js", "SASS"],
    },
    {
        id: 9,
        title: "Siddhi Early Learning Center",
        description: "Educational platform for early childhood learning with interactive content and parent-teacher communication features. Focuses on child development and engagement.",
        frameworks: ["React", "Next.js", "Node.js", "SASS"],
    }
];