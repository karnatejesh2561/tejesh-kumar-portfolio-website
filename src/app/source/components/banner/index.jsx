/** React Imports */
import React from 'react'

/** Styles */
import styles from './banner.module.scss'

/** Main Export */
const Banner = () => {
    return (
        <div className={styles.hero}>
            <div className='contain'>
                <section id="home" className={styles.hero_wrap}>
                    <div className={styles.floating_element}></div>
                    <div className={styles.floating_element}></div>
                    <div className={styles.floating_element}></div>

                    <div className={styles.hero_content}>
                        <div className={styles.hero_badge}>
                            Available for freelance work
                        </div>
                        <h1>Karna Tejesh Kumar </h1>
                        <p className={styles.hero_subtitle}>
                            Senior Frontend Developer crafting delightful and <br /> scalable digital experiences.
                        </p>
                        <div className={styles.hero_cta}>
                            <a href="#projects" className={`${styles.btn} ${styles.btn_primary}`}>
                                View My Work ✨
                            </a>
                            <a href="#contact" className={`${styles.btn} ${styles.btn_secondary}`}>
                                Let's Talk 💬
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Banner
