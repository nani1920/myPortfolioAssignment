import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cardRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setMousePos({ x: 0, y: 0 });
    };

    const items = [
        {
            id: 1,
            title: 'The Architect',
            desc: 'Designing scalable systems and robust database schemas. It’s about building the foundation that lasts.',
            image: 'https://picsum.photos/id/0/800/600', // Laptop/Code
            category: 'Engineering',
            color: '#d1ff00'
        },
        {
            id: 2,
            title: 'The Creator',
            desc: 'Translating ideas into pixel-perfect reality. Crafting smooth animations and intuitive user interfaces.',
            image: 'https://picsum.photos/id/180/800/1000', // Workspace/Design
            category: 'Frontend',
            color: '#ff9d00'
        },
        {
            id: 3,
            title: 'The Learner',
            desc: 'Constant evolution. Devouring documentation, mastering new frameworks, and staying ahead of the curve.',
            image: 'https://picsum.photos/id/20/800/900', // Notebook/Writes
            category: 'Growth',
            color: '#00d4ff'
        },
        {
            id: 4,
            title: 'The Mentor',
            desc: 'Sharing knowledge and reviewing code. Helping others grow strengthens the entire community.',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop', // Collaboration/Meeting
            category: 'Community',
            color: '#ff006e'
        },
        {
            id: 5,
            title: 'The Gamer',
            desc: 'Strategic thinking and reflexes. Gaming sharpens problem-solving skills and inspires interactive design.',
            image: 'https://picsum.photos/id/96/800/800', // Gaming/Neon
            category: 'Hobby',
            color: '#8b5cf6'
        },
        {
            id: 6,
            title: 'The Explorer',
            desc: 'Finding inspiration in the real world. Photography and travel fuel creativity and fresh perspectives.',
            image: 'https://picsum.photos/id/1015/800/600', // Travel/Adventure
            category: 'Lifestyle',
            color: '#10b981'
        },
    ];

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);
    const goNext = (e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev + 1) % items.length); };
    const goPrev = (e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev - 1 + items.length) % items.length); };

    return (
        <section id="gallery" style={{ padding: '8rem 2rem', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Gradient Orbs */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(209, 255, 0, 0.08) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255, 157, 0, 0.08) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: '0px' }}
                        whileInView={{ opacity: 1, letterSpacing: '6px' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--accent-lime)', fontSize: '0.8rem', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: '600' }}
                    >
                        Gallery
                    </motion.p>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '200', letterSpacing: '-2px', marginBottom: '1rem' }}>
                        Beyond <span style={{ fontWeight: '700', color: 'var(--accent-lime)' }}>Code</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto', fontSize: '1rem' }}>
                        The passions that fuel my creativity
                    </p>
                </motion.div>

                {/* Cinematic Masonry Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridAutoRows: '220px',
                    gap: '1.25rem'
                }}>
                    {items.map((item, i) => (
                        <motion.div
                            key={item.id}
                            ref={(el) => cardRefs.current[i] = el}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseMove={(e) => handleMouseMove(e, i)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => openLightbox(i)}
                            style={{
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                gridRow: i === 1 || i === 5 ? 'span 2' : 'span 1',
                                filter: hoveredIndex !== null && hoveredIndex !== i ? 'blur(3px) brightness(0.5)' : 'none',
                                transition: 'filter 0.4s ease, transform 0.1s ease',
                                transformStyle: 'preserve-3d',
                                transform: hoveredIndex === i
                                    ? `perspective(1000px) rotateX(${mousePos.y * -25}deg) rotateY(${mousePos.x * 25}deg) scale3d(1.05, 1.05, 1.05)`
                                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
                            }}
                        >
                            {/* Image with parallax movement */}
                            <motion.div
                                style={{
                                    width: '120%',
                                    height: '120%',
                                    position: 'absolute',
                                    top: '-10%',
                                    left: '-10%',
                                    transform: hoveredIndex === i
                                        ? `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) scale(1.1)`
                                        : 'translate(0px, 0px) scale(1)',
                                    transition: 'transform 0.2s ease-out'
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </motion.div>

                            {/* Color Grading Overlay */}
                            <motion.div
                                animate={{
                                    opacity: hoveredIndex === i ? 0.2 : 0
                                }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: item.color,
                                    mixBlendMode: 'overlay',
                                    pointerEvents: 'none'
                                }}
                            />

                            {/* Vignette */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
                                pointerEvents: 'none'
                            }} />

                            {/* Bottom Gradient */}
                            {/* Bottom Gradient */}
                            <motion.div
                                animate={{ opacity: hoveredIndex === i ? 1 : 0.7 }}
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '60%',
                                    background: 'var(--gallery-overlay)',
                                    pointerEvents: 'none'
                                }}
                            />

                            {/* Content */}
                            <motion.div
                                animate={{
                                    y: hoveredIndex === i ? 0 : 10,
                                    opacity: hoveredIndex === i ? 1 : 0.8
                                }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '1.5rem',
                                    zIndex: 2
                                }}
                            >
                                <motion.div
                                    animate={{
                                        width: hoveredIndex === i ? '30px' : '0px',
                                        opacity: hoveredIndex === i ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        height: '2px',
                                        background: item.color,
                                        marginBottom: '0.75rem',
                                        borderRadius: '2px'
                                    }}
                                />
                                <span style={{
                                    fontSize: '0.65rem',
                                    color: item.color,
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    fontWeight: '700'
                                }}>
                                    {item.category}
                                </span>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginTop: '0.25rem',
                                    letterSpacing: '-0.5px',
                                    color: 'var(--gallery-text)'
                                }}>
                                    {item.title}
                                </h3>
                            </motion.div>

                            {/* Border glow on hover */}
                            <motion.div
                                animate={{
                                    opacity: hoveredIndex === i ? 1 : 0
                                }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    border: `1px solid ${item.color}`,
                                    borderRadius: '20px',
                                    pointerEvents: 'none',
                                    boxShadow: `inset 0 0 30px ${item.color}20`
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeLightbox}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'var(--lightbox-bg)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* Ambient Light */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '60vw',
                            height: '60vh',
                            background: `radial-gradient(circle, ${items[selectedIndex].color}15 0%, transparent 70%)`,
                            pointerEvents: 'none'
                        }} />

                        {/* Close */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            onClick={closeLightbox}
                            whileHover={{ scale: 1.1 }}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1rem'
                            }}
                        >
                            <FaTimes />
                        </motion.button>

                        {/* Nav Buttons */}
                        <motion.button
                            onClick={goPrev}
                            whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.1)' }}
                            style={{
                                position: 'absolute',
                                left: '2rem',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <FaChevronLeft />
                        </motion.button>
                        <motion.button
                            onClick={goNext}
                            whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.1)' }}
                            style={{
                                position: 'absolute',
                                right: '2rem',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <FaChevronRight />
                        </motion.button>

                        {/* Content */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                display: 'flex',
                                gap: '3rem',
                                alignItems: 'center',
                                maxWidth: '1000px',
                                padding: '2rem'
                            }}
                            className="lightbox-content"
                        >
                            {/* Image with frame */}
                            <div style={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: `0 30px 60px -20px ${items[selectedIndex].color}30`
                            }}>
                                <img
                                    src={items[selectedIndex].image}
                                    alt={items[selectedIndex].title}
                                    style={{
                                        maxWidth: '500px',
                                        maxHeight: '65vh',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                                {/* Film grain */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    opacity: 0.05,
                                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                                    pointerEvents: 'none'
                                }} />
                            </div>

                            {/* Info */}
                            <div style={{ maxWidth: '350px' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '40px' }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    style={{
                                        height: '3px',
                                        background: items[selectedIndex].color,
                                        borderRadius: '2px',
                                        marginBottom: '1.5rem'
                                    }}
                                />
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: items[selectedIndex].color,
                                    letterSpacing: '3px',
                                    textTransform: 'uppercase',
                                    fontWeight: '700'
                                }}>
                                    {items[selectedIndex].category}
                                </span>
                                <h2 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '700',
                                    marginTop: '0.5rem',
                                    marginBottom: '1.5rem',
                                    letterSpacing: '-1px',
                                    lineHeight: 1.1
                                }}>
                                    {items[selectedIndex].title}
                                </h2>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.8,
                                    fontSize: '1rem'
                                }}>
                                    {items[selectedIndex].desc}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Responsive */}
            <style>{`
                @media (max-width: 900px) {
                    #gallery > div > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 768px) {
                    .lightbox-content {
                        flex-direction: column;
                        text-align: center;
                        padding: 1rem !important;
                        overflow-y: auto;
                        max-height: 100vh;
                        padding-top: 5rem !important; /* Space for close button */
                    }
                    .lightbox-content > div:first-child { /* Image container */
                        width: 100%;
                        max-width: 100%;
                    }
                    .lightbox-content img {
                        max-height: 40vh !important;
                        width: 100% !important;
                    }
                    .lightbox-content h2 {
                        font-size: 1.8rem !important;
                    }
                }
                @media (max-width: 600px) {
                    #gallery > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default Gallery;
