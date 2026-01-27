import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPhone } from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const quickFacts = [
        { label: 'Location', value: 'India' },
        { label: 'Languages', value: 'English, Hindi, Telugu' },
        { label: 'Focus', value: 'Full Stack Development' },
    ];

    const journey = [
        { year: '2022', title: 'The Starting Point', desc: 'Discovered programming (Python, Java) and built foundation.' },
        { year: '2023', title: 'Web Development', desc: 'Mastered MERN Stack (MongoDB, Express, React, Node).' },
        { year: '2024', title: 'Full Stack Focus', desc: 'Built complex projects like NxtWatch and E-Commerce platforms.' },
        { year: '2025', title: 'Backend Intern', desc: 'Intern at Appening Infotech. Engineered scalable APIs & Microservices.' },
    ];

    return (
        <section id="about" style={{ padding: '8rem 2rem', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: 'var(--accent-lime)', fontSize: '0.85rem', letterSpacing: '3px', marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: '600' }}>
                        About Me
                    </p>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', lineHeight: 1.2 }}>
                        Crafting digital experiences
                        <br />
                        <span style={{ color: 'var(--text-secondary)' }}>with passion & precision</span>
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 1fr) 2fr',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column - Photo & Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        style={{ position: 'sticky', top: '100px' }}
                    >
                        {/* Photo Container with Lottie */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '1',
                            maxWidth: '280px',
                            borderRadius: '24px',
                            background: '#1a1a2e',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            overflow: 'hidden'
                        }}>
                            <DotLottieReact
                                src="https://lottie.host/bc373d0a-96a7-4e73-84f1-5a7d2806e5b1/pJu7ucxvVo.lottie"
                                loop
                                autoplay
                                style={{ width: '90%', height: '90%' }}
                            />
                        </div>

                        {/* Quick Facts */}
                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '16px',
                            padding: '1.25rem',
                            border: '1px solid rgba(255,255,255,0.06)',
                            marginBottom: '1.5rem'
                        }}>
                            {quickFacts.map((fact, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '0.5rem 0',
                                    borderBottom: i < quickFacts.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                }}>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{fact.label}</span>
                                    <span style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '500' }}>{fact.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Social + Resume */}
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                            {[
                                { icon: <FaGithub />, href: 'https://github.com/nani1920', label: 'GitHub', value: 'nani1920' },
                                { icon: <FaLinkedin />, href: 'https://linkedin.com/in/m-manoj', label: 'LinkedIn', value: 'm-manoj' },
                                { icon: <FaEnvelope />, href: 'mailto:mr.luckymano2005@gmail.com', label: 'Email', value: 'Email Me' },
                                { icon: <FaPhone />, href: 'tel:+917569964480', label: 'Phone', value: '+91 7569964480' }
                            ].map((social, i) => (
                                <div key={i} style={{ position: 'relative' }}>
                                    <motion.a
                                        href={social.href}
                                        whileHover="hover"
                                        initial="rest"
                                        style={{
                                            width: '44px', height: '44px', borderRadius: '12px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'var(--text-secondary)', fontSize: '1.1rem', textDecoration: 'none',
                                            transition: 'background 0.2s',
                                            position: 'relative'
                                        }}
                                    >
                                        <motion.div variants={{ hover: { scale: 1.1, color: 'var(--accent-lime)' } }}>
                                            {social.icon}
                                        </motion.div>

                                        {/* Tooltip */}
                                        <motion.span
                                            variants={{ rest: { opacity: 0, y: 10, pointerEvents: 'none' }, hover: { opacity: 1, y: 0, pointerEvents: 'auto' } }}
                                            style={{
                                                position: 'absolute', bottom: '120%', left: '50%',
                                                transform: 'translateX(-50%)',
                                                padding: '0.4rem 0.8rem',
                                                background: '#000', border: '1px solid var(--accent-lime)', borderRadius: '6px',
                                                fontSize: '0.75rem', whiteSpace: 'nowrap',
                                                zIndex: 10, boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
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

                        <motion.a
                            href="/ManojResume.pdf"
                            download
                            whileHover={{ scale: 1.02, background: 'var(--accent-lime)', color: '#000' }}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                width: '100%', padding: '0.875rem 1.25rem', background: 'transparent',
                                border: '1px solid var(--accent-lime)', borderRadius: '12px',
                                color: 'var(--accent-lime)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem',
                                transition: 'all 0.2s'
                            }}
                        >
                            <FaDownload /> Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Right Column - Story & Timeline */}
                    <div>
                        {/* Bio */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            style={{ marginBottom: '3rem' }}
                        >
                            <p style={{
                                color: 'var(--text-secondary)',
                                lineHeight: 1.9,
                                fontSize: '1.1rem',
                                marginBottom: '1.5rem'
                            }}>
                                Hey there! I'm <strong style={{ color: 'var(--accent-lime)' }}>Manoj Kumar Mangali</strong>,
                                a Full Stack Developer passionate about building scalable web applications.
                                Currently a <strong>Backend Developer Intern</strong> at Appening Infotech.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                                I believe great design and clean code can create meaningful experiences.
                                Every project is an opportunity to learn something new and push my boundaries.
                            </p>
                        </motion.div>

                        {/* Journey Timeline */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '600',
                                marginBottom: '2rem',
                                color: 'var(--text-primary)'
                            }}>
                                My Journey
                            </h3>

                            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(209, 255, 0, 0.2)' }}>
                                {journey.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        style={{
                                            marginBottom: i === journey.length - 1 ? 0 : '2rem',
                                            position: 'relative',
                                            padding: '1rem 1.25rem',
                                            background: 'rgba(255,255,255,0.02)',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}
                                    >
                                        {/* Timeline Dot */}
                                        <div style={{
                                            position: 'absolute',
                                            left: '-2.5rem',
                                            top: '1.25rem',
                                            width: '14px',
                                            height: '14px',
                                            borderRadius: '50%',
                                            background: item.year === 'Now' ? 'var(--accent-lime)' : 'var(--bg-primary)',
                                            border: '3px solid var(--accent-lime)',
                                            boxShadow: item.year === 'Now' ? '0 0 15px rgba(209, 255, 0, 0.5)' : 'none'
                                        }} />

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                color: 'var(--accent-lime)',
                                                fontWeight: '700',
                                                letterSpacing: '1px',
                                                background: 'rgba(209, 255, 0, 0.1)',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px'
                                            }}>{item.year}</span>
                                            <h4 style={{ fontSize: '1rem', fontWeight: '600', margin: 0 }}>{item.title}</h4>
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    #about > div > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                    #about > div > div:last-child > div:first-child {
                        position: static !important;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
