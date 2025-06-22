"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import MenuIcon from '../../../../../public/icons/bars-staggered.svg';
import CloseIcon from '../../../../../public/icons/cross.svg';
import useWindowSize from '../useWindowSize';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const windowSize = useWindowSize();

    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

    // Observe active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

     useEffect(() => {
        if (windowSize.width !== undefined) {
            if (windowSize.width > 767) {
                setMenuOpen(true);
            } else if (windowSize.width < 768) {
                setMenuOpen((prevMenuOpen) => {
                    if (prevMenuOpen) {
                        return false;
                    }
                    return prevMenuOpen;
                });
            }
        }
    }, [windowSize.width]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && windowSize.width < 767) {
                setMenuOpen(false);
            }
        };
        if (windowSize.width < 767) {
            window.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [windowSize.width]);

    const isMobile = windowSize.width !== undefined && windowSize.width < 767;

    return (
        <div className={styles.tp_header}>
            <div className="contain">
                <nav className={styles.tp_nav}>
                    <div className={styles.navHeader}>
                        <div className={styles.logo}>MyLogo</div>
                        <button
                            className={styles.toggle}
                             onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {menuOpen ? <CloseIcon/> : <MenuIcon />}
                        </button>
                    </div>

                    <AnimatePresence initial={false}>
                        {(menuOpen) && (
                            <motion.ul
                                className={styles.navLinks}
                                initial={isMobile ? { translateY: 200, opacity: 0 } : {}}
                                animate={isMobile ? { translateY: 0, opacity: 1, transition: { type: 'spring', duration: 0.25 } } : {}}
                                exit={{ translateY: 200, opacity: 0, transition: { type: 'spring', duration: 0.25 } }}
                                ref={menuRef}
                            >
                                {sectionIds.map((id) => (
                                    <li key={id}>
                                        <Link
                                            href={`#${id}`}
                                            className={activeSection === id ? styles.active : ''}
                                            onClick={() => isMobile && setMenuOpen(false)}
                                        >
                                            {id.charAt(0).toUpperCase() + id.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </div>
    );
};

export default Header;
