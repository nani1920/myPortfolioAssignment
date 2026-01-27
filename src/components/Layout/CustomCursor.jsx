import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Use requestAnimationFrame for smooth updates
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            // Smooth lerp for slight trailing effect (change 0.15 to 1 for instant)
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;

            cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px) scale(${isHovering ? 2 : 1})`;
            requestAnimationFrame(animate);
        };
        animate();

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea')) {
                setIsHovering(true);
            }
        };
        const handleMouseOut = () => setIsHovering(false);

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isHovering]);

    return (
        <>
            <style>{`
                body { cursor: none; }
                @media (max-width: 768px) {
                    body { cursor: auto; }
                    .custom-cursor { display: none !important; }
                }
            `}</style>
            <div
                ref={cursorRef}
                className="custom-cursor"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: isHovering ? 'var(--accent-lime)' : 'var(--accent-lime)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                    transition: 'transform 0.05s ease-out, width 0.2s, height 0.2s'
                }}
            />
        </>
    );
};

export default CustomCursor;
