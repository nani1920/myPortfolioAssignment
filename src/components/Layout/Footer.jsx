import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '1px solid var(--bg-tertiary)'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                    {[
                        { icon: <FaGithub />, href: 'https://github.com/nani1920', value: 'github.com/nani1920' },
                        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/m-manoj', value: 'linkedin.com/in/m-manoj' }
                    ].map((social, i) => (
                        <div key={i} style={{ position: 'relative' }}>
                            <motion.a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover="hover"
                                initial="rest"
                                style={{ color: 'inherit', display: 'block', position: 'relative' }}
                            >
                                <motion.div variants={{ hover: { color: 'var(--accent-lime)', scale: 1.1 } }}>
                                    {social.icon}
                                </motion.div>
                                <motion.span
                                    variants={{ rest: { opacity: 0, y: 10, pointerEvents: 'none' }, hover: { opacity: 1, y: 0, pointerEvents: 'auto' } }}
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
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Frontend Portfolio. Built with React.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
