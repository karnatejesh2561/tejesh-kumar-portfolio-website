/** React Imports */
'use client'
import React from 'react'
import Image from 'next/image'

/** Libraries */
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from "yup";

/** Local Imports */
import Formfields from '../../models/formfields.json'

/** Styles */
import styles from './contact-us.module.scss'

/** Components */
import CustomInput from '../custom-input';

/** Main Export */
const ContactUs = () => {

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(ContactUsSchema)
    })

    // onsubmit function
    const OnSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.tp_contact}>
            <div className='contain'>
                <div className={styles.tp_contact_wrap}>
                    <div className={styles.tp_contact_header}>
                        <p className={styles.tp_contact_title}>Get in touch</p>
                    </div>
                    <div className={styles.tp_contact_form}>
                        <div className={styles.tp_left}>
                            <p className={styles.tp_form_title}>Let's Work Together</p>
                            <p className={styles.tp_form_text}>I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something amazing together!</p>
                            <div className={styles.tp_contact_details}>
                                <div className={styles.tp_contact_details_card}>
                                    <div className={styles.tp_contact_details_card_image}>
                                        <div className={styles.tp_contact_details_card_image_wrap}>
                                            <Image
                                                src={'/images/7.png'}
                                                sizes='50vw'
                                                alt='email'
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.tp_contact_details_card_content}>
                                        <p className={styles.tp_name}>Email</p>
                                        <p className={styles.tp_text}>tejeshkarna7@gmail.com</p>
                                    </div>
                                </div>
                                <div className={styles.tp_contact_details_card}>
                                    <div className={styles.tp_contact_details_card_image}>
                                        <div className={styles.tp_contact_details_card_image_wrap}>
                                            <Image
                                                src={'/images/8.png'}
                                                sizes='50vw'
                                                alt='email'
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.tp_contact_details_card_content}>
                                        <p className={styles.tp_name}>Phone</p>
                                        <p className={styles.tp_text}>+91 8309992561</p>
                                    </div>
                                </div>
                                <div className={styles.tp_contact_details_card}>
                                    <div className={styles.tp_contact_details_card_image}>
                                        <div className={styles.tp_contact_details_card_image_wrap}>
                                            <Image
                                                src={'/images/9.png'}
                                                sizes='50vw'
                                                alt='email'
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.tp_contact_details_card_content}>
                                        <p className={styles.tp_name}>Location</p>
                                        <p className={styles.tp_text}>Hyderabad, Telangana, 500089</p>
                                    </div>
                                </div>
                                <div className={styles.tp_contact_details_card}>
                                    <div className={styles.tp_contact_details_card_image}>
                                        <div className={styles.tp_contact_details_card_image_wrap}>
                                            <Image
                                                src={'/images/10.png'}
                                                sizes='50vw'
                                                alt='email'
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.tp_contact_details_card_content}>
                                        <p className={styles.tp_name}>LinkedIn</p>
                                        <p className={styles.tp_text}>linkedin.com/in/k-tejeshkumar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tp_right}>
                            <p className={styles.tp_contact_form_title}>Send Message</p>
                            <form onSubmit={handleSubmit(OnSubmit)} className={styles.kg_form}>
                                <div className={styles.kg_form_wrap}>
                                    {
                                        ContactUsFormBuilder(control, styles).map(item => {
                                            return (
                                                <div className={`${styles.input_wrap} ${item?.full ? styles.full : ''}`} key={item.name}>
                                                    <CustomInput
                                                        {...item}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.tp_btn}>
                                    <button type="submit" className={styles.kg_save_btn}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs

export const ContactUsFormBuilder = (control, styles) => {
    return [
        {
            name: "name",
            parent: "contact",
            control,
            type: "text",
            styles,
            label: true,
            full: true,
        },
        {
            name: "email",
            parent: "contact",
            control,
            type: "text",
            styles,
            label: true,
            full: true,
        },
        {
            name: "message",
            parent: "contact",
            control,
            type: "textarea",
            styles,
            label: true,
            full: true,
        },
    ]
};

export const ContactUsSchema = yup.object({
    name: yup
        .string()
        .trim()
        .min(2, Formfields.contact.name.errors.min)
        .max(50, Formfields.contact.name.errors.max)
        .required(Formfields.contact.name.errors.required),

    email: yup
        .string()
        .trim()
        .max(50, Formfields.contact.email.errors.max)
        .required(Formfields.contact.email.errors.required),

    message: yup
        .string()
        .nullable()
        .notRequired()
        .max(200, Formfields.contact.message.errors.max)
})