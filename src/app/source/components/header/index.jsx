"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className={styles.tp_nav}>
            <ul>
                <li>
                    <Link href="#home" className={activeSection === 'home' ? styles.active : ''}>Home</Link>
                </li>
                <li>
                    <Link href="#about" className={activeSection === 'about' ? styles.active : ''}>About</Link>
                </li>
                <li>
                    <Link href="#skills" className={activeSection === 'skills' ? styles.active : ''}>Skills</Link>
                </li>
                <li>
                    <Link href="#projects" className={activeSection === 'projects' ? styles.active : ''}>Projects</Link>
                </li>
                <li>
                    <Link href="#experience" className={activeSection === 'experience' ? styles.active : ''}>Experience</Link>
                </li>
                <li>
                    <Link href="#contact" className={activeSection === 'contact' ? styles.active : ''}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
