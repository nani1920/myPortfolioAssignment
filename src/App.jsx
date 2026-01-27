import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import LoadingScreen from './components/Layout/LoadingScreen';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Gallery from './components/Sections/Gallery';
import Contact from './components/Sections/Contact';

import ResumeSection from './components/Sections/ResumeSection';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <>
            {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

            <div className="app" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>

                <Header isDark={isDark} toggleTheme={toggleTheme} />
                <main>
                    <Hero isLoading={isLoading} isDark={isDark} />
                    <About />
                    <ResumeSection />
                    <Projects />
                    <Gallery />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
