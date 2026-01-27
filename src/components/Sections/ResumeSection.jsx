import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

const ResumeSection = () => {
    return (
        <section style={{ padding: '6rem 2rem', background: 'var(--bg-tertiary)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700', marginBottom: '1.5rem' }}>
                        Want to know <span style={{ color: 'var(--accent-lime)' }}>more?</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Check out my resume to see a detailed history of my experience, skills, and education.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            href="/ManojResume.pdf"
                            download
                            whileHover={{ scale: 1.05, background: 'var(--accent-lime)', color: '#000' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                padding: '1rem 2.5rem',
                                background: 'transparent',
                                border: '1px solid var(--accent-lime)',
                                color: 'var(--accent-lime)',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                fontWeight: '600',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <FaDownload /> Download CV
                        </motion.a>

                        <motion.a
                            href="/ManojResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                padding: '1rem 2.5rem',
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'var(--text-primary)',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                fontWeight: '600',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <FaEye /> Preview
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(209, 255, 0, 0.03) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />
        </section>
    );
};

export default ResumeSection;
