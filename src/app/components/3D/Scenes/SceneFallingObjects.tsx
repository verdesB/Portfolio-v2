'use client'; // Assurez-vous que ce composant est rendu côté client

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useSphere, usePlane } from "@react-three/cannon";
import { useRef } from "react";
//@ts-nocheck

// @ts-ignore
function GLTFModel({ url, ...props }) {
    // @ts-ignore
    const { scene } = useGLTF(url);
    const [ref, api] = useSphere(() => ({
        mass: 1,
        position: props.position,
        args: [0.5], // Assuming a bounding sphere radius of 0.5 for simplicity
        ...props
    }));

    useFrame(() => {
        api.applyForce(
            [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10],
            [0, 0, 0]
        );
    });

    return <primitive ref={ref} object={scene} />;
}

function MovingObjects() {
    const models = [
        { id: 1, url: '/react.glb', position: [Math.random() * 4 - 2, Math.random() * 4, Math.random() * 4 - 2] },
        { id: 2, url: '/sass.glb', position: [Math.random() * 4 - 2, Math.random() * 4, Math.random() * 4 - 2] },
        { id: 3, url: '/graph.glb', position: [Math.random() * 4 - 2, Math.random() * 4, Math.random() * 4 - 2] },
        { id: 4, url: '/nest.glb', position: [Math.random() * 4 - 2, Math.random() * 4, Math.random() * 4 - 2] },
        { id: 5, url: '/node.glb', position: [Math.random() * 4 - 2, Math.random() * 4, Math.random() * 4 - 2] },
        { id: 6, url: '/postgres.glb', position: [Math.random() * 4 - 2, Math.random() * 4, Math.random() * 4 - 2] },
        { id: 7, url: '/prisma.glb', position: [Math.random() * 4 - 2, Math.random() * 4, Math.random() * 4 - 2] },
        { id: 8, url: '/sql.glb', position: [Math.random() * 4 - 2, Math.random() * 4, Math.random() * 4 - 2] },
        // Ajoutez plus d'objets ici
    ];

    return (
        <>
            {models.map(model => (
                <GLTFModel key={model.id} url={model.url} position={model.position} />
            ))}
            <ambientLight intensity={0.5} />
            <directionalLight
                castShadow
                position={[5, 5, 5]}
                intensity={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
        </>
    );
}

// @ts-ignore
function Plane(props) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
    return (
        <mesh ref={ref} {...props} position={[0, -5, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="transparent" opacity={0} transparent />
        </mesh>
    );
}

// @ts-ignore
function Wall({ position, rotation }) {
    const [ref] = usePlane(() => ({ position, rotation }));


    return (
        // @ts-ignore
        <mesh ref={ref} position={position} rotation={rotation}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="transparent" opacity={0} transparent />
        </mesh>
    );
}

export const SceneMovingObjects = () => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Canvas shadows={true}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Physics gravity={[0, 0, 0]}>
                    <Plane position={[0, -5, 0]} />
                    <Wall position={[0, 0, -5]} rotation={[0, 0, 0]} />
                    <Wall position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
                    <Wall position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
                    <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />
                    <Wall position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]} />
                    <Wall position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                    <MovingObjects />
                </Physics>
                <OrbitControls  minDistance={5} maxDistance={15}/>
            </Canvas>
        </div>
    );
}

export default SceneMovingObjects;
