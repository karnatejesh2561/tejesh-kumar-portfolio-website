/** Styles */
import Image from 'next/image';
import styles from './about.module.scss';

/** Main Export */
const About = () => {

    return (
        <section id="about" className={styles.tp_about}>
            <div className="contain">
                <div className={styles.tp_about__header}>
                    <div className={styles.tp_about__badge}>👋 Get to know me</div>
                    <h2 className={styles.tp_about__title}>About Me</h2>
                    <p className={styles.tp_about__subtitle}>
                        Passionate about creating meaningful digital experiences through innovative design and clean code.
                    </p>
                </div>

                <div className={styles.tp_about__content}>
                    <div className={styles.tp_about__image}>
                        <div className={styles.tp_about__profileContainer}>
                            <div className={styles.tp_about__profilePic}>
                                <Image
                                    src={'/images/profile.png'}
                                    alt='profile'
                                    sizes='100vw'
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.tp_about__text}>
                        <p>Hello! I'm <strong>Tejesh Kumar Karna</strong>, a passionate Frontend Developer with over 2.5 years of experience building scalable web applications using React and Next.js.</p>
                        <p>Currently working as a <strong>Senior Frontend Developer</strong>, I lead frontend initiatives, mentor junior developers, and help architect high-performance UI solutions.</p>
                        <p>My journey includes expanding into React Native for mobile apps and delivering polished user interfaces that impact thousands of users.</p>

                        <div className={styles.tp_about__stats}>
                            <div className={styles.tp_about__statItem}>
                                <div className={styles.tp_about__statNumber}>2.5</div>
                                <div className={styles.tp_about__statLabel}>Years Experience</div>
                            </div>
                            <div className={styles.tp_about__statItem}>
                                <div className={styles.tp_about__statNumber}>15+</div>
                                <div className={styles.tp_about__statLabel}>Technologies</div>
                            </div>
                            <div className={styles.tp_about__statItem}>
                                <div className={styles.tp_about__statNumber}>18K+</div>
                                <div className={styles.tp_about__statLabel}>Users Impacted</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;