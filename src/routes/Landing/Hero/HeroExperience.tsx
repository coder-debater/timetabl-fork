import { useColorModeValue, Image } from "@chakra-ui/react";
import {
  Stage,
  useGLTF,
  Html,
  PresentationControls,
  Float,
  Loader,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Model = () => {
  const { nodes, materials } = useGLTF("/iphone_14_pro.glb");
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={13.67}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.Material}
            >
              <Html
                className="content"
                position={[0, 0, -1]}
                rotation-y={Math.PI}
                zIndexRange={[100, 0]}
                scale={2}
                transform
                occlude
                pointerEvents="none"
              >
                <Image
                  w="325px"
                  src={useColorModeValue(
                    "/screenshots/light.jpeg",
                    "/screenshots/dark.jpeg"
                  )}
                  h="710px"
                  rounded="50px"
                />
              </Html>
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/iphone_14_pro.glb");

// "Iphone 14 Pro" (https://skfb.ly/oyCED) by mister dude is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
export default () => {
  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage preset="rembrandt" intensity={1} environment="city">
            {/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: mister dude (https://sketchfab.com/misterdude)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/iphone-14-pro-5cb0778041a34f09b409a38c687bb1d4
title: Iphone 14 Pro
*/}
            <PresentationControls
              global
              zoom={0.8}
              rotation={[0, -Math.PI / 4, 0]}
              polar={[0, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <Float>
                <Model />
              </Float>
            </PresentationControls>
          </Stage>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};
