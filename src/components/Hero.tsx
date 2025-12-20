import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './Hero.css';

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 2.2 : 2}
            >
                <icosahedronGeometry args={[1, 15]} />
                <MeshDistortMaterial
                    color={hovered ? "#00ff88" : "#2a2a2a"}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00ff88" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#00d4ff" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </>
    );
};

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-3d">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Scene />
                </Canvas>
            </div>

            <div className="hero-container">
                {/* Left Side - Services */}
                <div className="hero-left">
                    <div className="services-section">
                        <h3 className="section-label">SERVICES</h3>
                        <div className="services-list">
                            <div className="service-item">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Web development</span>
                            </div>
                            <div className="service-item">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <span>UI/UX Design</span>
                            </div>
                            <div className="service-item">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Product Design</span>
                            </div>
                            <div className="service-item">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 7h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Branding</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center - Title & CTA */}
                <div className="hero-center">
                    <div className="hero-title-section">
                        <div className="availability">
                            <span className="status-dot"></span>
                            <span>Available for new projects</span>
                        </div>
                        <h1 className="hero-title">
                            Digital <span className="text-gradient">Experience</span><br />
                            Designer & <span className="text-outline">Developer</span>
                        </h1>
                        <p className="hero-description">
                            I create bold, immersive digital experiences that help brands stand out in the modern web.
                        </p>
                        <div className="hero-actions">
                            <Link to="/collab" className="cta-button primary">
                                <span>Start a Project</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10h12m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <a href="#projects" className="cta-button secondary">
                                View Work
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Social */}
                <div className="hero-right">
                    <div className="social-section">
                        <h3 className="section-label">CONNECT</h3>
                        <div className="social-links">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
