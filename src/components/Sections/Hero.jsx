import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Hero = ({ isLoading, isDark }) => {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const [animationReady, setAnimationReady] = useState(false);

    // Wait for loading to complete before starting animations
    useEffect(() => {
        if (!isLoading) {
            // Small delay after loading completes for smooth transition
            const timer = setTimeout(() => setAnimationReady(true), 100);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    // Floating shapes data
    const shapes = [
        { size: 150, x: '8%', y: '20%', delay: 0, color: 'var(--accent-lime)', duration: 8 },
        { size: 100, x: '85%', y: '15%', delay: 0.3, color: 'var(--accent-amber)', duration: 10 },
        { size: 80, x: '75%', y: '70%', delay: 0.6, color: 'var(--accent-lime)', duration: 7 },
        { size: 120, x: '12%', y: '75%', delay: 0.2, color: 'var(--accent-amber)', duration: 9 },
        { size: 60, x: '50%', y: '8%', delay: 0.5, color: 'var(--accent-lime)', duration: 11 },
    ];

    // Staggered text reveal animation - only runs when animationReady
    const textReveal = {
        hidden: { y: 80, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
        })
    };

    // Snow/Balls particle effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationId;

        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        resize();
        window.addEventListener('resize', resize);

        // Create particles with varying sizes
        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 4 + 2,
            speedY: Math.random() * 0.8 + 0.3,
            speedX: Math.random() * 0.4 - 0.2,
            opacity: Math.random() * 0.5 + 0.3
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.y += p.speedY;
                p.x += Math.sin(p.y * 0.01) * 0.5 + p.speedX;

                if (p.y > canvas.height) {
                    p.y = -10;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x > canvas.width) p.x = 0;
                if (p.x < 0) p.x = canvas.width;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                const color = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim();
                ctx.fillStyle = color; // Use dynamic color
                ctx.shadowBlur = 10;
                ctx.shadowColor = color;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize); };
    }, [isDark]); // Re-run on theme change

    return (
        <section ref={sectionRef} id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            overflow: 'hidden',
            background: 'var(--bg-primary)',
            paddingTop: '80px',
            color: 'var(--text-primary)'
        }}>
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '20%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(209, 255, 0, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    background: 'var(--orb-1)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }}
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{
                    position: 'absolute',
                    top: '60%',
                    right: '15%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'var(--orb-2)',
                    filter: 'blur(50px)',
                    pointerEvents: 'none'
                }}
            />
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'var(--orb-3)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none'
                }}
            />

            {/* Floating Shapes */}
            {shapes.map((shape, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={animationReady ? {
                        opacity: "var(--shape-opacity)",
                        scale: 1,
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        rotate: [0, 10, 0]
                    } : {}}
                    transition={{
                        opacity: { duration: 1.5, delay: shape.delay },
                        scale: { duration: 1.5, delay: shape.delay },
                        y: { duration: shape.duration, repeat: Infinity, ease: "easeInOut" },
                        x: { duration: shape.duration + 2, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: shape.duration + 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        width: shape.size,
                        height: shape.size,
                        borderRadius: '50%',
                        background: shape.color,
                        filter: 'blur(60px)',
                        pointerEvents: 'none'
                    }}
                />
            ))}

            {/* Snow Canvas */}
            <motion.canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity, pointerEvents: 'none' }} />

            {/* Vignette */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'var(--vignette-bg)'
            }} />

            {/* Film Grain */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'
            }} />

            {/* Content - waits for animationReady */}
            <motion.div style={{ textAlign: 'center', zIndex: 10, y, scale, opacity }}>
                <div style={{ overflow: 'hidden' }}>
                    <motion.p
                        custom={0}
                        initial="hidden"
                        animate={animationReady ? "visible" : "hidden"}
                        variants={textReveal}
                        style={{
                            fontSize: '0.9rem',
                            letterSpacing: '6px',
                            textTransform: 'uppercase',
                            textTransform: 'uppercase',
                            color: 'var(--text-secondary)',
                            marginBottom: '1.5rem'
                        }}
                    >
                        Welcome to my world
                    </motion.p>
                </div>

                <div style={{ overflow: 'hidden' }}>
                    <motion.h1
                        custom={1}
                        initial="hidden"
                        animate={animationReady ? "visible" : "hidden"}
                        variants={textReveal}
                        style={{
                            fontSize: 'clamp(4rem, 15vw, 12rem)',
                            fontWeight: '200',
                            letterSpacing: '-4px',
                            lineHeight: 0.9,
                            lineHeight: 0.9,
                            margin: 0,
                            marginBottom: '0.5rem'
                        }}
                    >
                        Manoj
                    </motion.h1>
                </div>

                <div style={{ overflow: 'hidden' }}>
                    <motion.h1
                        custom={2}
                        initial="hidden"
                        animate={animationReady ? "visible" : "hidden"}
                        variants={textReveal}
                        style={{
                            fontSize: 'clamp(4rem, 15vw, 12rem)',
                            fontWeight: '700',
                            letterSpacing: '-4px',
                            lineHeight: 0.9,
                            lineHeight: 0.9,
                            margin: 0,
                            color: 'var(--accent-lime)'
                        }}
                    >
                        Kumar
                    </motion.h1>
                </div>

                <div style={{ overflow: 'hidden' }}>
                    <motion.p
                        custom={3}
                        initial="hidden"
                        animate={animationReady ? "visible" : "hidden"}
                        variants={textReveal}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                            color: 'var(--text-secondary)',
                            marginTop: '2rem',
                            letterSpacing: '1px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)'
                        }}
                    >
                        Full Stack Developer • Building Scalable Web Apps
                    </motion.p>
                </div>

                <div style={{ overflow: 'hidden' }}>
                    <motion.div
                        custom={4}
                        initial="hidden"
                        animate={animationReady ? "visible" : "hidden"}
                        variants={textReveal}
                        style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                    >
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(209, 255, 0, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-block',
                                padding: '1rem 3rem',
                                background: 'transparent',
                                border: '1px solid var(--text-secondary)',
                                color: 'var(--text-primary)',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase'
                            }}
                        >
                            Enter
                        </motion.a>

                        <motion.a
                            href="/ManojResume.pdf"
                            download
                            whileHover={{ scale: 1.05, background: 'var(--accent-lime)', color: '#000', border: '1px solid var(--accent-lime)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-block',
                                padding: '1rem 3rem',
                                background: 'transparent',
                                border: '1px solid var(--accent-lime)',
                                color: 'var(--accent-lime)',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                fontWeight: '600'
                            }}
                        >
                            Resume
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={animationReady ? { opacity: 0.5 } : { opacity: 0 }}
                transition={{ delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: '1px',
                        height: '50px',
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, transparent 100%)'
                    }}
                />
            </motion.div>

            {/* Mobile Responsiveness & Micro-interactions */}
            <style>{`
                @media (max-width: 768px) {
                    #hero h1 {
                        font-size: clamp(3rem, 12vw, 5rem) !important;
                    }
                    #hero p {
                        font-size: 0.9rem !important;
                        padding: 0 1rem;
                    }
                    /* Reduce visual noise on mobile */
                    #hero > div[style*="border-radius: 50%"] {
                        opacity: 0.1 !important;
                        transform: scale(0.7) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
