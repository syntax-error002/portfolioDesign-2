import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const JellyObject = ({
    position,
    color,
    scale,
    speed,
    distort,
    floatSpeed
}: {
    position: [number, number, number],
    color: string,
    scale: number,
    speed: number,
    distort: number,
    floatSpeed: number
}) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle hovering animation
            const time = state.clock.getElapsedTime();
            meshRef.current.position.y = position[1] + Math.sin(time * floatSpeed) * 0.5;
            meshRef.current.rotation.x = time * 0.1;
            meshRef.current.rotation.y = time * 0.15;
        }
    });

    return (
        <Sphere ref={meshRef} position={position} args={[1, 64, 64]} scale={scale}>
            <MeshDistortMaterial
                color={color}
                envMapIntensity={0.8}
                clearcoat={1}
                clearcoatRoughness={0.2}
                metalness={0.1}
                roughness={0.2}
                distort={distort}
                speed={speed}
                transparent={true}
                opacity={0.3}
            />
        </Sphere>
    );
};

const Background3D = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'linear-gradient(to bottom, #050505, #08080a)'
        }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
                {/* Lighting for the jelly sheen */}
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffaa00" />
                <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#ff3300" />

                {/* 3 Big minimal jelly objects */}
                <JellyObject
                    position={[-4, 2, -2]}
                    color="#00ffcc" // Cyan
                    scale={2.5}
                    speed={2}
                    distort={0.4}
                    floatSpeed={0.8}
                />

                <JellyObject
                    position={[5, -3, -4]}
                    color="#8a2ce2" // Violet
                    scale={3}
                    speed={1.5}
                    distort={0.5}
                    floatSpeed={0.5}
                />

                <JellyObject
                    position={[0, 0, -8]}
                    color="#00ff77" // Emerald
                    scale={4}
                    speed={1}
                    distort={0.3}
                    floatSpeed={0.3}
                />
            </Canvas>
        </div>
    );
};

export default Background3D;
