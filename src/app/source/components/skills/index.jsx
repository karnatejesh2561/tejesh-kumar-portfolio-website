/** Styles  */
import Image from 'next/image';
import styles from './skills.module.scss';

/** Main Export */
const Skills = () => {

    return (
        <section id="skills" className={styles.tp_skills}>
            <div className="contain">
                <div className={styles.tp_skills__header}>
                    <div className={styles.tp_skills__badge}>🚀 What I do</div>
                    <h2 className={styles.tp_skills__title}>Skills & Technologies</h2>
                    <p className={styles.tp_skills__subtitle}>
                        Combining technical expertise with creative vision to deliver exceptional results
                    </p>
                </div>
                <div className={styles.tp_skills__grid}>
                    {skillsData.map((category, index) => (
                        <div className={styles.tp_skills__category} key={index}>
                            <div className={styles.tp_skills__icon}>
                                <div className={styles.tp_skills__image}>
                                    <Image 
                                        src={category.icon}
                                        alt={category.title}
                                        sizes='30vw'
                                        fill
                                    />
                                </div>
                            </div>
                            <h3 className={styles.tp_skills__heading}>{category.title}</h3>
                            <ul className={styles.tp_skills__list}>
                                {category.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;


const skillsData = [
    {
        icon: '/images/1.png',
        title: 'Frontend Technologies',
        items: ['HTML5', 'CSS3', 'Sass', 'JavaScript (ES6+)', 'TypeScript'],
    },
    {
        icon: '/images/2.png',
        title: 'Frameworks & Libraries',
        items: ['React.js', 'Next.js', 'React Native', 'React Hook Form', 'React Query', 'Framer Motion', 'Recharts'],
    },
    {
       icon: '/images/4.png',
        title: 'State Management & Tools',
        items: ['Redux', 'Context API', 'Git', 'GitHub', 'Husky'],
    },
    {
        icon: '/images/5.png',
        title: 'Design & Architecture',
        items: ['Responsive Design', 'Flexbox', "CSS Grid", "Mobile-first", "UI/UX Principles"],
    }
];