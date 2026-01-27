import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Header = ({ isDark, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '70px',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 2rem',
                    background: isScrolled ? 'var(--header-bg)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                    borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none',
                    transition: 'all 0.3s ease'
                }}
            >
                <div style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/* Logo */}
                    <a href="#hero" style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        letterSpacing: '-0.5px'
                    }}>
                        Manoj<span style={{ color: 'var(--accent-lime)' }}>.</span>
                        <motion.span
                            style={{
                                display: 'inline-block',
                                fontSize: '0.8em',
                                marginLeft: '0.5rem',
                                color: 'var(--accent-lime)',
                                verticalAlign: 'middle'
                            }}
                            animate={{ rotate: [0, 15, 0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaCode />
                        </motion.span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem'
                    }}>
                        {links.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ color: 'var(--accent-lime)' }}
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    transition: 'color 0.2s'
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        <motion.a
                            href="/ManojResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(209, 255, 0, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '0.5rem 1.25rem',
                                background: 'var(--btn-resume-bg)',
                                border: '1px solid var(--btn-resume-border)',
                                color: 'var(--btn-resume-color)',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '0.85rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Resume
                        </motion.a>

                        {/* Dark Mode Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            style={{
                                background: 'rgba(209, 255, 0, 0.1)',
                                border: '1px solid rgba(209, 255, 0, 0.3)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-lime)',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            {isDark ? <FaSun /> : <FaMoon />}
                        </motion.button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        style={{
                            display: 'none',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-primary)',
                            fontSize: '1.5rem',
                            cursor: 'pointer'
                        }}
                    >
                        {isMobileOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            {isMobileOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                        position: 'fixed',
                        top: '70px',
                        left: 0,
                        width: '100%',
                        height: 'calc(100vh - 70px)',
                        background: 'rgba(0,0,0,0.98)',
                        zIndex: 999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2rem'
                    }}
                >
                    {links.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setIsMobileOpen(false)}
                            style={{
                                color: 'var(--text-primary)',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                fontWeight: '600'
                            }}
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    <motion.a
                        href="/ManojResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '0.5rem 1.5rem',
                            background: 'var(--accent-lime)',
                            color: '#000',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        Resume
                    </motion.a>

                    <motion.button
                        onClick={toggleTheme}
                        style={{
                            marginTop: '1rem',
                            background: 'rgba(209, 255, 0, 0.1)',
                            border: '1px solid rgba(209, 255, 0, 0.3)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent-lime)',
                            cursor: 'pointer',
                            fontSize: '1.2rem'
                        }}
                    >
                        {isDark ? <FaSun /> : <FaMoon />}
                    </motion.button>
                </motion.div>
            )}

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
            `}</style>
        </>
    );
};

export default Header;
