import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

export const GLBModel = ({ url, position, scale }: { url: string; position: [number, number, number]; scale: [number, number, number] }) => {
    const { scene } = useGLTF(url);
    const meshRef = useRef<THREE.Group>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [velocity, setVelocity] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [prevMousePosition, setPrevMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseDown = (event: MouseEvent) => {
        setIsDragging(true);
        setPrevMousePosition({ x: event.clientX, y: event.clientY });
        setVelocity({ x: 0, y: 0 }); // Reset velocity on mouse down
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging && meshRef.current) {
            const deltaX = event.clientX - prevMousePosition.x;
            const deltaY = event.clientY - prevMousePosition.y;
            setVelocity({ x: deltaX * 0.01, y: deltaY * 0.01 });
            setPrevMousePosition({ x: event.clientX, y: event.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (event: TouchEvent) => {
        setIsDragging(true);
        const touch = event.touches[0];
        setPrevMousePosition({ x: touch.clientX, y: touch.clientY });
        setVelocity({ x: 0, y: 0 });
    };

    const handleTouchMove = (event: TouchEvent) => {
        if (isDragging && meshRef.current) {
            const touch = event.touches[0];
            const deltaX = touch.clientX - prevMousePosition.x;
            const deltaY = touch.clientY - prevMousePosition.y;
            setVelocity({ x: deltaX * 0.01, y: deltaY * 0.01 });
            setPrevMousePosition({ x: touch.clientX, y: touch.clientY });
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };
    useEffect(() => {
        scene.traverse((node) => {
            if (node instanceof THREE.Mesh) {
                node.castShadow = true;
                node.receiveShadow = true;
                node.geometry.computeVertexNormals();
                node.material.side = THREE.DoubleSide;
            }
        });
    }, [scene]);


    useEffect(() => {
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchstart", handleTouchStart);
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("touchend", handleTouchEnd);
        };
    }, [isDragging, prevMousePosition]);

    useFrame(() => {
        if (meshRef.current) {
            // Apply the velocity to the rotation
            meshRef.current.rotation.y += velocity.x;
            meshRef.current.rotation.x += velocity.y;

            // Apply friction to the velocity
            if (!isDragging) {
                setVelocity((prev) => ({
                    x: prev.x * 0.95,
                    y: prev.y * 0.95,
                }));
            }
        }
    });

    return (
        <Center>
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
            <primitive
                ref={meshRef}
                object={scene}
                position={position}
                scale={scale}
                castShadow
                receiveShadow
            />
        </Center>
    );
};
