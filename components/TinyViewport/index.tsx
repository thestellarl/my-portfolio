"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

interface TinyViewportProps {
  height?: number;
  width?: number;
  modelSrc: string;
}

const TinyViewport = ({
  height = 320,
  width = 320,
  modelSrc,
}: TinyViewportProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    scene.background = new THREE.Color("#CFDBD5");
    scene.fog = new THREE.Fog("#CFDBD5", 10, 50);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(3, 2, 1);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 2;
    dirLight.shadow.camera.bottom = -2;
    dirLight.shadow.camera.left = -2;
    dirLight.shadow.camera.right = 2;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 40;
    scene.add(dirLight);

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1000, 1000),
      new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add(mesh);

    if (ref.current !== null) {
      ref.current.appendChild(renderer.domElement);
    }
    const controls = new OrbitControls(camera, ref.current as HTMLElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableRotate = true;
    // controls.dampingFactor = 1.0;

    // Load STL
    const material = new THREE.MeshStandardMaterial({ color: "#F5CB5C" });
    const loader = new STLLoader();
    loader.load(
      `models/${modelSrc}`,
      function (geometry) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.geometry.center();

        const boundingBox = new THREE.Box3().setFromObject(mesh);
        const modelSize = boundingBox.getSize(new THREE.Vector3());

        const scale = 10 / (modelSize.x + modelSize.z + modelSize.y) / 3; // Adjust the scale factor as needed
        mesh.scale.set(scale, scale, scale);
        mesh.geometry.translate(0, modelSize.y / 2, 0);
        mesh.castShadow = true;

        scene.add(mesh);
        camera.position.set(
          0,
          modelSize.y * scale * 1.25,
          Math.max(modelSize.x * scale, modelSize.z * scale)
        );
        camera.lookAt(new THREE.Vector3(0, (modelSize.y * scale) / 2, 0));
        controls.target.set(0, (modelSize.y * scale) / 2, 0);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );

    camera.position.set(0, 400, 30);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    }
    animate();
    return () => {
      ref.current?.removeChild(renderer.domElement);
    };
  }, [ref]);
  return <Wrapper ref={ref} $height={height} $width={width} />;
};

const Wrapper = styled.div<{ $width: number; $height: number }>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background: lightblue;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
`;

export default TinyViewport;
