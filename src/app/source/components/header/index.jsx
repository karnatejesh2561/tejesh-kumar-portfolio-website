// components/Navbar.tsx
"use client";
import Link from 'next/link';
import styles from './header.module.scss'

/** Components */
import ThemeToggle from './toggle-theme';

/** Main Export */
const Header = () => {

    return (
        <nav className={styles.tp_nav}>
            <ul>
                <li><Link href="#home" className="active">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#skills">Skills</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Header