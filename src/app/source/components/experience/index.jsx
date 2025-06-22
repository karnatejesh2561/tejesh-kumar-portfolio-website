import React from 'react'

import styles from './experience.module.scss'

const Experience = () => {
    
    return (
        <section className={styles.tp_experience}>
            <div className="contain">
                <h2 className={styles.tp_experience__title}>Work Experience</h2>

                <div className={styles.tp_experience__timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.tp_experience__item}>
                            <div className={styles.tp_experience__marker}></div>

                            <div className={styles.tp_experience__content}>
                                <div className={styles.tp_experience__header}>
                                    <h3 className={styles.tp_experience__position}>{exp.title}</h3>
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
        period: "Aug 2024 - Present",
        achievements: [
            "Promoted to Senior Frontend Developer, leading frontend initiatives within an 8-member team",
            "Expanded skillset with React Native for cross-platform mobile development",
            "Mentored junior developers and contributed to architecture decisions for scalable apps"
        ]
    },
    {
        title: "Junior Frontend Developer",
        period: "July 2023 - July 2024",
        achievements: [
            "Promoted to Junior Frontend Developer after consistent performance and ownership of tasks",
            "Worked with a 5-member team, closely coordinating on complex features using Next.js",
            "Improved performance and SEO of web apps by leveraging SSR and optimization techniques"
        ]
    },
    {
        title: "Software Intern",
        period: "Mar 2023 - June 2023",
        achievements: [
            "Learned core frontend technologies: HTML, CSS, Sass, JavaScript, and React.js",
            "Contributed to live projects and built responsive web interfaces under guidance",
            "Gained hands-on experience in writing clean, maintainable code and using Git"
        ]
    }
];