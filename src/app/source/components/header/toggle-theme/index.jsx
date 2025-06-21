// components/ThemeToggle.tsx
"use client";
import { useTheme } from '../../context';

/** Styles */
import styles from './toggle-theme.module.scss'

/** Main Export */
export default function ThemeToggle() {

    const { theme, toggleTheme } = useTheme();

    return (
        <button className={styles.theme_toggle} onClick={toggleTheme} aria-label="Toggle Theme">
            <div className={`${styles.switch} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.thumb} />
            </div>
        </button>
    );
}