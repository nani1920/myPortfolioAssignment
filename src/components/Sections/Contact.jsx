import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '700px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Get In <span style={{ color: 'var(--accent-lime)' }}>Touch</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Have a project in mind? Let's work together!
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '2.5rem',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                padding: '1rem',
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            style={{
                                padding: '1rem',
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        style={{
                            padding: '1rem',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        style={{
                            padding: '1rem',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            resize: 'none',
                            outline: 'none'
                        }}
                    />
                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '1rem',
                            padding: '1rem',
                            background: 'var(--btn-primary-bg)',
                            color: 'var(--btn-primary-color)',
                            fontWeight: 'bold',
                            borderRadius: 'var(--radius-md)',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            marginTop: '0.5rem'
                        }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginTop: '3rem',
                        fontSize: '1.5rem'
                    }}
                >
                    {[
                        { icon: <FaEnvelope />, href: 'mailto:mr.luckymano2005@gmail.com', value: 'mr.luckymano2005@gmail.com' },
                        { icon: <FaPhone />, href: 'tel:+917569964480', value: '+91 7569964480' },
                        { icon: <FaGithub />, href: 'https://github.com/nani1920', value: 'github.com/nani1920' },
                        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/m-manoj', value: 'linkedin.com/in/m-manoj' }
                    ].map((social, i) => (
                        <div key={i} style={{ position: 'relative' }}>
                            <motion.a
                                href={social.href}
                                target={social.icon.type === FaPhone || social.icon.type === FaEnvelope ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                whileHover="hover"
                                initial="rest"
                                style={{
                                    color: 'var(--text-secondary)',
                                    display: 'block',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                <motion.div
                                    variants={{
                                        rest: { scale: 1, color: 'var(--text-secondary)' },
                                        hover: { scale: 1.2, color: 'var(--accent-lime)' }
                                    }}
                                >
                                    {social.icon}
                                </motion.div>

                                <motion.span
                                    variants={{
                                        rest: { opacity: 0, y: 10, pointerEvents: 'none' },
                                        hover: { opacity: 1, y: 0, pointerEvents: 'auto' }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        position: 'absolute', bottom: '120%', left: '50%', transform: 'translateX(-50%)',
                                        padding: '0.4rem 0.8rem',
                                        background: '#000', border: '1px solid var(--accent-lime)', borderRadius: '6px',
                                        fontSize: '0.75rem', whiteSpace: 'nowrap',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)', zIndex: 10
                                    }}
                                >
                                    {social.value}
                                    <div style={{
                                        position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                                        borderWidth: '6px', borderStyle: 'solid',
                                        borderColor: 'var(--accent-lime) transparent transparent transparent'
                                    }} />
                                </motion.span>
                            </motion.a>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 600px) {
                    #contact form {
                        padding: 1.5rem !important;
                    }
                    #contact h2 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>
        </section >
    );
};

export default Contact;
