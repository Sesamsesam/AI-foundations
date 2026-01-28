import React, { useEffect, useRef } from 'react';

interface AnimatedGridProps {
    darkMode: boolean;
}

// Generate sparse, organic dot positions
const generateDotPositions = (width: number, height: number, isMobile: boolean) => {
    const dots: { x: number; y: number; baseRadius: number; phase: number }[] = [];
    const gridSize = isMobile ? 70 : 55; // Larger grid (fewer dots) on mobile
    const density = isMobile ? 0.25 : 0.35; // Lower density on mobile

    const cols = Math.ceil(width / gridSize) + 1;
    const rows = Math.ceil(height / gridSize) + 1;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (Math.random() > density) continue;

            const offsetX = (Math.random() - 0.5) * gridSize * 0.5;
            const offsetY = (Math.random() - 0.5) * gridSize * 0.5;

            dots.push({
                x: i * gridSize + offsetX,
                y: j * gridSize + offsetY,
                baseRadius: 0.7 + Math.random() * 0.8, // Smaller dots
                phase: Math.random() * Math.PI * 2,
            });
        }
    }
    return dots;
};

// Generate star positions (more stars, biased toward edges)
const generateStarPositions = (width: number, height: number, isMobile: boolean) => {
    const stars: { x: number; y: number; size: number; rotationSpeed: number; phase: number }[] = [];
    // Reduce star count significantly on mobile
    const div = isMobile ? 80000 : 40000;
    const count = Math.floor((width * height) / div);

    for (let i = 0; i < count; i++) {
        // Bias X position toward edges (left 25% or right 25%)
        let x: number;
        if (Math.random() < 0.6) {
            // 60% chance to be on the sides
            if (Math.random() < 0.5) {
                x = Math.random() * width * 0.25; // Left edge
            } else {
                x = width * 0.75 + Math.random() * width * 0.25; // Right edge
            }
        } else {
            // 40% scattered in the middle
            x = width * 0.25 + Math.random() * width * 0.5;
        }

        stars.push({
            x: x,
            y: Math.random() * height,
            size: 2.5 + Math.random() * 2, // Tiny: 2.5-4.5px
            rotationSpeed: 0.005 + Math.random() * 0.008,
            phase: Math.random() * Math.PI * 2,
        });
    }
    return stars;
};

// Draw a 4-pointed curved star (Gemini-style)
// Optimized: Replaced expensive shadowBlur with manual glow drawing
const drawStar = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    rotation: number,
    alpha: number
) => {
    ctx.save();
    ctx.translate(x, y);

    // Draw Fake Glow (Performance Optimization)
    // Instead of shadowBlur, we draw a faint circle behind the star.
    // This is much cheaper for the GPU.
    ctx.beginPath();
    ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.15})`; // Low opacity glow
    ctx.fill();

    ctx.rotate(rotation);

    // 4-pointed star with curved concave edges
    ctx.beginPath();
    const points = 4;
    const outerRadius = size;
    const innerRadius = size * 0.25; // How deep the curves go inward

    for (let i = 0; i < points; i++) {
        const angle = (i * Math.PI * 2) / points - Math.PI / 2;
        const nextAngle = ((i + 1) * Math.PI * 2) / points - Math.PI / 2;

        // Outer point
        const outerX = Math.cos(angle) * outerRadius;
        const outerY = Math.sin(angle) * outerRadius;

        // Inner curve control point (between this point and next)
        const midAngle = (angle + nextAngle) / 2;
        const innerX = Math.cos(midAngle) * innerRadius;
        const innerY = Math.sin(midAngle) * innerRadius;

        // Next outer point
        const nextOuterX = Math.cos(nextAngle) * outerRadius;
        const nextOuterY = Math.sin(nextAngle) * outerRadius;

        if (i === 0) {
            ctx.moveTo(outerX, outerY);
        } else {
            ctx.lineTo(outerX, outerY);
        }

        // Curve inward to the inner point, then out to next outer point
        ctx.quadraticCurveTo(innerX, innerY, nextOuterX, nextOuterY);
    }

    ctx.closePath();

    // White fill
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    // ctx.shadowBlur = 6; -- REMOVED for performance
    // ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.8})`;
    ctx.fill();

    ctx.restore();
};

const AnimatedGrid: React.FC<AnimatedGridProps> = ({ darkMode }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const dotsRef = useRef<{ x: number; y: number; baseRadius: number; phase: number }[]>([]);
    const starsRef = useRef<{ x: number; y: number; size: number; rotationSpeed: number; phase: number }[]>([]);
    const lastSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Cap DPR at 2 for performance (Retina screens don't need 3x/4x for BG effects)
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const resizeCanvas = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const isMobile = width < 768;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);

            if (darkMode && (Math.abs(lastSizeRef.current.w - width) > 100 ||
                Math.abs(lastSizeRef.current.h - height) > 100)) {
                dotsRef.current = generateDotPositions(width, height, isMobile);
                starsRef.current = generateStarPositions(width, height, isMobile);
                lastSizeRef.current = { w: width, h: height };
            }
        };
        resizeCanvas();

        // Generate initial elements for dark mode
        if (darkMode && dotsRef.current.length === 0) {
            const width = window.innerWidth;
            const isMobile = width < 768;
            dotsRef.current = generateDotPositions(width, window.innerHeight, isMobile);
            starsRef.current = generateStarPositions(width, window.innerHeight, isMobile);
        }

        window.addEventListener('resize', resizeCanvas);

        // Mouse tracking
        const mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let time = 0;

        const animate = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const isMobile = width < 768;

            ctx.clearRect(0, 0, width, height);

            if (darkMode) {
                // ========== DARK MODE: Sparse organic dot pattern ==========
                const dots = dotsRef.current;

                const waveCenters = [
                    {
                        x: width * 0.5 + Math.sin(time * 0.0003) * width * 0.3,
                        y: height * 0.3 + Math.cos(time * 0.0004) * height * 0.2
                    },
                    {
                        x: width * 0.3 + Math.cos(time * 0.0002) * width * 0.2,
                        y: height * 0.7 + Math.sin(time * 0.0003) * height * 0.2
                    },
                ];

                // Draw dots
                dots.forEach((dot) => {
                    const { x, y, baseRadius, phase } = dot;

                    if (x < -50 || x > width + 50 || y < -50 || y > height + 50) return;

                    let waveIntensity = 0;
                    waveCenters.forEach((center, idx) => {
                        // Using Math.sqrt is fine here (only 2 centers)
                        const dist = Math.sqrt(Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2));
                        const wave = Math.sin(dist * 0.008 - time * 0.015 + phase + idx * 1.5);
                        waveIntensity += (wave + 1) / 2;
                    });
                    waveIntensity = waveIntensity / waveCenters.length;

                    const pulse = (Math.sin(time * 0.01 + phase) + 1) / 2;
                    waveIntensity = waveIntensity * 0.6 + pulse * 0.4;

                    // Performance: Skip mouse calculations on mobile or if mouse is off-screen
                    let mouseInfluence = 0;
                    if (!isMobile && mouse.x > -500) {
                        const dx = x - mouse.x;
                        const dy = y - mouse.y;
                        // Simple bounding box check before sqrt
                        if (Math.abs(dx) < 180 && Math.abs(dy) < 180) {
                            const mouseDistance = Math.sqrt(dx * dx + dy * dy);
                            mouseInfluence = Math.max(0, 1 - mouseDistance / 180);
                        }
                    }

                    const finalIntensity = Math.min(1, waveIntensity + mouseInfluence * 0.6);

                    const radius = baseRadius * (0.8 + finalIntensity * 1.5); // Less scaling
                    const alpha = 0.12 + finalIntensity * 0.65;
                    const hue = 220 + finalIntensity * 40;
                    const saturation = 70 + finalIntensity * 30;
                    const lightness = 45 + finalIntensity * 25;

                    // Optimization: Removed ctx.shadowBlur (expensive)
                    // Instead, draw a larger, faint circle behind for "glow" if intensity is high
                    if (finalIntensity > 0.5) {
                        ctx.fillStyle = `hsla(${hue}, 100%, 60%, 0.15)`;
                        ctx.beginPath();
                        ctx.arc(x, y, radius * 2.5, 0, Math.PI * 2);
                        ctx.fill();
                    }

                    ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fill();
                });

                // No shadowBlur to reset
                // ctx.shadowBlur = 0;

                // ========== Draw 4-pointed stars ==========
                const stars = starsRef.current;
                stars.forEach((star) => {
                    const { x, y, size, rotationSpeed, phase } = star;

                    // Twinkling effect
                    const twinkle = (Math.sin(time * 0.02 + phase) + 1) / 2;
                    const alpha = 0.4 + twinkle * 0.6; // 0.4 to 1.0

                    // Slow rotation
                    const rotation = time * rotationSpeed + phase;

                    drawStar(ctx, x, y, size, rotation, alpha);
                });
                // ctx.shadowBlur = 0; -- No longer needed

            } else {
                // ========== LIGHT MODE: Simple wireframe grid (no energy pulses) ==========
                // Re-calculate basic grid if needed, simplistic draw
                const gridSize = 50;
                const cols = Math.ceil(width / gridSize) + 1;
                const rows = Math.ceil(height / gridSize) + 1;

                ctx.strokeStyle = 'rgba(26, 115, 232, 0.12)';
                ctx.lineWidth = 0.6;

                for (let i = 0; i < cols; i++) {
                    const x = i * gridSize;
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, height);
                    ctx.stroke();
                }

                for (let j = 0; j < rows; j++) {
                    const y = j * gridSize;
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(width, y);
                    ctx.stroke();
                }

                ctx.fillStyle = 'rgba(26, 115, 232, 0.18)'; // More visible dots
                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        ctx.beginPath();
                        ctx.arc(i * gridSize, j * gridSize, 1.2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            time++;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, [darkMode]);

    return (
        <>
            {darkMode && (
                <div
                    className="fixed inset-0 pointer-events-none z-0"
                    style={{
                        background: 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 40%)',
                    }}
                />
            )}

            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
                style={{ opacity: darkMode ? 0.85 : 1 }}
            />

            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    opacity: darkMode ? 0.025 : 0.012,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </>
    );
};

export default AnimatedGrid;
