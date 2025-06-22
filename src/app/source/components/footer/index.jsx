import React from 'react'
import Link from 'next/link'

import styles from './footer.module.scss'
import Image from 'next/image'
import moment from 'moment'

const Footer = () => {
    return (
        <div className={styles.tp_footer}>
            <div className='contain'>
                <div className={styles.tp_footer_wrap}>
                    <ul>
                        <li>
                            <Link href={'mailto:tejeshkarna7@gmail.com'} target='_blank'>
                                <Image 
                                    src={'/images/7.png'}
                                    alt='email'
                                    fill
                                    sizes='30vw'
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://www.linkedin.com/in/k-tejeshkumar'} target='_blank'>
                                <Image 
                                    src={'/images/10.png'}
                                    alt='email'
                                    fill
                                    sizes='30vw'
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://github.com/karnatejesh2561'} target='_blank'>
                                <Image 
                                    src={'/images/11.png'}
                                    alt='git'
                                    fill
                                    sizes='30vw'
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="tel:+918309992561">
                                <Image 
                                    src={'/images/8.png'}
                                    alt='git'
                                    fill
                                    sizes='30vw'
                                />
                            </Link>
                        </li>
                    </ul>
                    <p className={styles.tp_copy_text}>© {moment().format('YYYY')} Tejesh Kumar Karna. All rights reserved.</p>
                    <p className={styles.tp_text}>Built with ❤️ using modern web technologies</p>
                </div>
            </div>
        </div>
    )
}

export default Footer