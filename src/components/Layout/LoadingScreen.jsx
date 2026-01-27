import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for exit animation
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const name = "MANOJ KUMAR";
    const letters = name.split("");

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'var(--bg-primary)',
                        zIndex: 10000,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {/* Letter-by-letter reveal */}
                    <div style={{ display: 'flex', overflow: 'hidden' }}>
                        {letters.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + i * 0.08,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                style={{
                                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                                    fontWeight: '900',
                                    color: letter === ' ' ? 'transparent' : 'var(--accent-lime)',
                                    display: 'inline-block',
                                    minWidth: letter === ' ' ? '0.5em' : 'auto'
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        style={{
                            color: 'var(--text-secondary)',
                            marginTop: '1rem',
                            letterSpacing: '4px',
                            fontSize: '0.9rem'
                        }}
                    >
                        FRONTEND DEVELOPER
                    </motion.p>

                    {/* Loading Bar */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '150px' }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{
                            height: '2px',
                            background: 'var(--accent-lime)',
                            marginTop: '3rem',
                            borderRadius: '2px'
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
