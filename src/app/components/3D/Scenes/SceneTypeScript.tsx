'use client'
import {Canvas} from "@react-three/fiber";
import {Suspense, useRef} from "react";
import {OrbitControls} from "@react-three/drei";
import {GLBModel} from "@/app/components/3D/OBJS/TypescriptModel";
import './SceneTypeScript.scss'
import {blue} from "next/dist/lib/picocolors";

export const SceneTypeScript = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    return(
        <div className='canvas__container' >
            <Canvas shadows={true} ref={canvasRef} style={{height: '100%', width: '100%'}}>
                <Suspense fallback="loading">
                    <ambientLight castShadow={true}/>
                    <pointLight position={[0, 10, 0]} castShadow={true}  intensity={1}
                                shadow-mapSize-width={1024}
                                shadow-mapSize-height={1024}
                                shadow-camera-far={50}
                                shadow-camera-left={-10}
                                shadow-camera-right={10}
                                shadow-camera-top={10}
                                shadow-camera-bottom={-10}/>
                    <GLBModel url="/typescript3D.glb" scale={[6, 6, 6]} position={[0, 0, 0]} />
                    <OrbitControls position={[6, 0, 6]} enablePan={false} enableZoom={false} enableRotate={true}/>

                </Suspense>
            </Canvas>
        </div>
    )
}