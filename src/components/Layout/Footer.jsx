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
                        <motion.a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover="hover"
                            initial="rest"
                            style={{
                                color: 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                width: '2.5rem',
                                height: '2.5rem'
                            }}
                        >
                            <motion.div variants={{ hover: { color: 'var(--accent-lime)', scale: 1.1 } }}>
                                {social.icon}
                            </motion.div>
                            <motion.span
                                variants={{ rest: { opacity: 0, y: 20, x: '-50%', scale: 0.8, pointerEvents: 'none' }, hover: { opacity: 1, y: 0, x: '-50%', scale: 1, pointerEvents: 'auto' } }}
                                style={{
                                    position: 'absolute', bottom: '150%', left: '50%',
                                    padding: '0.4rem 0.8rem',
                                    background: '#000', border: '1px solid var(--accent-lime)', borderRadius: '8px',
                                    fontSize: '0.75rem', whiteSpace: 'nowrap', color: '#fff',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 100
                                }}
                            >
                                {social.value}
                                <div style={{
                                    position: 'absolute', top: '100%', left: '50%',
                                    transform: 'translate(-50%, -50%) rotate(45deg)',
                                    width: '10px', height: '10px',
                                    background: '#000', borderRight: '1px solid var(--accent-lime)', borderBottom: '1px solid var(--accent-lime)'
                                }} />
                            </motion.span>
                        </motion.a>
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
