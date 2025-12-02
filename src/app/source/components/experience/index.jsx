import React from 'react'

import styles from './experience.module.scss'

const Experience = () => {

    return (
        <section className={styles.tp_experience} id='experience'>
            <div className="contain">
                <h2 className={styles.tp_experience__title}>Work Experience</h2>
                <div className={styles.tp_experience__timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.tp_experience__item}>
                            <div className={styles.tp_experience__marker}></div>
                            <div className={styles.tp_experience__content}>
                                <div className={styles.tp_experience__header}>
                                    <h3 className={styles.tp_experience__position}>{exp.title} <span className={styles.tp_experience__company}>• {exp.company}</span></h3>
                                    <span className={styles.tp_experience__period}>{exp.period}</span>
                                </div>

                                <ul className={styles.tp_experience__achievements}>
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex} className={styles.tp_experience__achievement}>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience

const experiences = [
    {
        title: "Senior Frontend Developer",
        company: "Zari Group Limited",
        period: "Sep 2025 - Nov 2025",
        achievements: [
            "Built a high-performance AI platform for global users, focusing on scalability, reliability, and smooth content delivery.",
            "Integrated OpenAI, Gemini, and Claude workflows to automate content generation and improve user experience.",
            "Improved modular, reusable UI components and improved performance and SEO using SSR, SSG, dynamic routing, and code-splitting."
        ]
    },
    {
        title: "Senior Frontend Developer",
        company: "Craftnotion Pvt. Ltd.",
        period: "Aug 2024 - July 2025",
        achievements: [
            "Promoted to Senior Frontend Developer, leading frontend initiatives within an 8-member team",
            "Expanded skillset with React Native for cross-platform mobile development",
            "Mentored junior developers and contributed to architecture decisions for scalable apps"
        ]
    },
    {
        title: "Junior Frontend Developer",
        company: "Craftnotion Pvt. Ltd.",
        period: "July 2023 - July 2024",
        achievements: [
            "Promoted to Junior Frontend Developer after consistent performance and ownership of tasks",
            "Worked with a 5-member team, closely coordinating on complex features using Next.js",
            "Improved performance and SEO of web apps by leveraging SSR and optimization techniques"
        ]
    },
    {
        title: "Software Intern",
        company: "Craftnotion Pvt. Ltd.",
        period: "Mar 2023 - June 2023",
        achievements: [
            "Learned core frontend technologies: HTML, CSS, Sass, JavaScript, and React.js",
            "Contributed to live projects and built responsive web interfaces under guidance",
            "Gained hands-on experience in writing clean, maintainable code and using Git"
        ]
    }
];
