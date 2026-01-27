import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaPlay, FaShoppingCart, FaSearch, FaListAlt, FaUtensils, FaLaptop, FaBuilding, FaPenNib } from 'react-icons/fa';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('coded');

    const projects = [
        {
            id: 'nxtwatch',
            type: 'coded',
            title: 'NxtWatch Platform',
            subtitle: 'Video Streaming App',
            desc: 'A YouTube-like streaming platform with category organization, specialized gaming routes, and a dynamic banner system. Features secure JWT authentication and protected routes.',
            tags: ['React', 'Cookies', 'Auth', 'Styled Components'],
            links: { demo: 'https://nxtwatch63.ccbp.tech/login', code: '#' },
            user: 'rahul',
            pass: 'rahul@2021',
            color: 'var(--accent-lime)',
            icon: <FaPlay />,
            featured: true
        },
        {
            id: 'ecommerce',
            type: 'coded',
            title: 'NxtTrendz',
            subtitle: 'E-Commerce Solution',
            desc: 'Full-featured shopping app with product catalog, cart management, and secure checkout flow.',
            tags: ['React', 'Rest API', 'Cart'],
            links: { demo: 'https://manojnxtshopy.ccbp.tech/login', code: '#' },
            user: 'rahul',
            pass: 'rahul@2021',
            color: 'var(--accent-amber)',
            icon: <FaShoppingCart />,
            featured: false
        },
        {
            id: 'wiki',
            type: 'coded',
            title: 'Wiki Search',
            subtitle: 'Information Retrieval',
            desc: 'Dynamic search engine leveraging Wikipedia APIs for instant, real-time results.',
            tags: ['JS', 'Async/Await', 'DOM'],
            links: { demo: 'https://manojwikisearc1.ccbp.tech/', code: '#' },
            color: 'var(--accent-teal)',
            icon: <FaSearch />,
            featured: false
        },
        {
            id: 'todos',
            type: 'coded',
            title: 'Task Manager',
            subtitle: 'Productivity Tool',
            desc: 'Robust task management with CRUD operations and local storage persistence.',
            tags: ['JS', 'CRUD', 'Bootstrap'],
            links: { demo: 'https://manojtodolist1.ccbp.tech/', code: '#' },
            color: '#ff006e',
            icon: <FaListAlt />,
            featured: false
        },
        {
            id: 'bookmychef',
            type: 'vibe',
            title: 'BookMyChef',
            subtitle: 'Culinary Service',
            desc: 'Professional chefs in your home. Transform your dining experience with restaurant-quality meals prepared in your kitchen.',
            tags: ['React', 'Vercel', 'Service'],
            links: { demo: 'https://myhomechef.vercel.app/', code: '#' },
            color: '#ff5e00',
            icon: <FaUtensils />,
            featured: false
        },
        {
            id: 'zenith',
            type: 'vibe',
            title: 'Zenith X',
            subtitle: 'Tech Brand',
            desc: 'Premium laptop and technology showcase. Sleek, modern interface designed to highlight cutting-edge hardware.',
            tags: ['React', 'Vite', 'UI/UX'],
            links: { demo: 'https://zenith-xlaptop.vercel.app/', code: '#' },
            color: '#00f2ff',
            icon: <FaLaptop />,
            featured: false
        },
        {
            id: 'microlifts',
            type: 'vibe',
            title: 'MicroLifts',
            subtitle: 'Elevator Solutions',
            desc: 'Trusted elevator installation and maintenance services. Professional solutions for residential and commercial properties.',
            tags: ['React', 'Business', 'Web'],
            links: { demo: 'https://micro-lifts.vercel.app/', code: '#' },
            color: '#ffd700',
            icon: <FaBuilding />,
            featured: false
        },
        {
            id: 'pensy',
            type: 'vibe',
            title: 'Pensy',
            subtitle: 'Assignment Service',
            desc: 'Get your handwritten assignments done by verified writers. Your words, our touch.',
            tags: ['React', 'PWA', 'EdTech'],
            links: { demo: 'https://pensy.vercel.app/', code: '#' },
            color: '#a855f7',
            icon: <FaPenNib />,
            featured: false
        }
    ];

    const filteredProjects = projects.filter(project => project.type === activeTab);

    return (
        <section id="projects" style={{ padding: '8rem 2rem', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <p style={{ color: 'var(--accent-lime)', fontSize: '0.8rem', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '3px' }}>
                        Portfolio
                    </p>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', marginBottom: '1rem' }}>
                        Selected <span style={{ color: 'var(--accent-lime)' }}>Works</span>
                    </h2>
                </motion.div>

                {/* Tab Switcher */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        background: 'var(--bg-secondary)',
                        padding: '0.5rem',
                        borderRadius: '50px',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        position: 'relative'
                    }}>
                        {['coded', 'vibe'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    position: 'relative',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '50px',
                                    border: 'none',
                                    background: 'transparent',
                                    color: activeTab === tab ? '#000' : 'var(--text-secondary)',
                                    fontWeight: '600',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    zIndex: 2,
                                    transition: 'color 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'var(--accent-lime)',
                                            borderRadius: '50px',
                                            zIndex: -1
                                        }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab === 'coded' ? 'Coded' : 'Vibe Coded'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bento-grid">
                    <AnimatePresence mode='wait'>
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className={`project-card ${project.featured && activeTab === 'coded' ? 'featured' : ''}`}
                                style={{
                                    '--accent': project.color
                                }}
                            >
                                <div className="card-content">
                                    <div className="card-header">
                                        <div className="icon-box">
                                            {project.icon}
                                        </div>
                                        <div className="links">
                                            <a href={project.links.demo}><FaExternalLinkAlt /></a>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <span className="subtitle">{project.subtitle}</span>
                                        <h3>{project.title}</h3>
                                        <p>{project.desc}</p>
                                        {project.user && (
                                            <div className="credentials-box">
                                                <span>
                                                    <span className="cred-label">User:</span> {project.user}
                                                </span>
                                                <div className="cred-divider" />
                                                <span>
                                                    <span className="cred-label">Pass:</span> {project.pass}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="card-footer">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="glow" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <style>{`
                    .bento-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1.5rem;
                    }

                    .project-card {
                        background: var(--bg-secondary);
                        border: 1px solid var(--border-color);
                        border-radius: 24px;
                        padding: 2rem;
                        position: relative;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        transition: all 0.3s ease;
                    }

                    .project-card.featured {
                        grid-column: span 2;
                        background: linear-gradient(145deg, var(--bg-secondary), rgba(209, 255, 0, 0.05));
                    }

                    /* Hover Effects */
                    .project-card:hover {
                        transform: translateY(-5px);
                        border-color: var(--accent);
                        box-shadow: 0 10px 30px -10px var(--accent-glow, rgba(0,0,0,0.5));
                    }

                    .project-card:hover .icon-box {
                        background: var(--accent);
                        color: #000;
                        transform: scale(1.1) rotate(5deg);
                    }

                    .glow {
                        position: absolute;
                        inset: 0;
                        background: radial-gradient(circle at top right, var(--accent), transparent 70%);
                        opacity: 0;
                        transition: opacity 0.3s;
                        pointer-events: none;
                        mix-blend-mode: soft-light;
                    }
                    .project-card:hover .glow {
                        opacity: 0.1;
                    }

                    /* Credentials Box */
                    .credentials-box {
                        background: var(--bg-tertiary);
                        border: 1px solid var(--border-color);
                        border-radius: 8px;
                        padding: 0.75rem;
                        margin-top: 1.5rem;
                        font-family: var(--font-mono);
                        font-size: 0.8rem;
                        display: flex;
                        align-items: center;
                        gap: 0.75rem;
                        color: var(--text-primary);
                    }
                    
                    .cred-label {
                        color: var(--text-secondary);
                        font-weight: 600;
                        margin-right: 0.25rem;
                        text-transform: uppercase;
                        font-size: 0.7rem;
                    }

                    .cred-divider {
                        width: 1px;
                        height: 12px;
                        background: var(--border-color);
                    }

                    /* Content Styling */
                    .card-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-bottom: 2rem;
                    }

                    .icon-box {
                        width: 50px;
                        height: 50px;
                        border-radius: 12px;
                        background: rgba(255,255,255,0.05);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.5rem;
                        color: var(--accent);
                        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    }

                    .links {
                        display: flex;
                        gap: 1rem;
                    }
                    .links a {
                        color: var(--text-secondary);
                        font-size: 1.2rem;
                        transition: color 0.2s;
                    }
                    .links a:hover {
                        color: var(--accent);
                    }

                    .card-body {
                        flex: 1;
                        margin-bottom: 2rem;
                    }

                    .subtitle {
                        color: var(--accent);
                        font-size: 0.75rem;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-weight: 700;
                        display: block;
                        margin-bottom: 0.5rem;
                    }

                    h3 {
                        font-size: 1.75rem;
                        font-weight: 700;
                        margin-bottom: 1rem;
                        line-height: 1.1;
                    }

                    p {
                        color: var(--text-secondary);
                        line-height: 1.6;
                        font-size: 0.95rem;
                    }

                    /* Tags */
                    .card-footer {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.5rem;
                    }

                    .tag {
                        font-size: 0.75rem;
                        padding: 0.4rem 0.8rem;
                        border-radius: 50px;
                        background: rgba(255,255,255,0.03);
                        border: 1px solid rgba(255,255,255,0.1);
                        color: var(--text-secondary);
                    }

                    /* Mobile Responsive */
                    @media (max-width: 900px) {
                        .bento-grid {
                            grid-template-columns: 1fr;
                        }
                        .project-card.featured {
                            grid-column: span 1;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Projects;
