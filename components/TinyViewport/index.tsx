"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

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
    const container = ref.current;
    if (container === null) return;

    // Size the renderer to the actual rendered container so the viewport can
    // shrink responsively on mobile. Fall back to the props before layout.
    let viewWidth = container.clientWidth || width;
    let viewHeight = container.clientHeight || height;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      viewWidth / viewHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(viewWidth, viewHeight);
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

    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
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

    // Keep the camera and renderer in sync with the container size so the
    // model stays centred and undistorted as the layout reflows.
    const resizeObserver = new ResizeObserver(() => {
      viewWidth = container.clientWidth;
      viewHeight = container.clientHeight;
      if (viewWidth === 0 || viewHeight === 0) return;
      camera.aspect = viewWidth / viewHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(viewWidth, viewHeight);
    });
    resizeObserver.observe(container);

    let frameId = 0;
    function animate() {
      frameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelSrc, width, height]);

  return <Wrapper ref={ref} $height={height} $width={width} />;
};

const Wrapper = styled.div<{ $width: number; $height: number }>`
  width: 100%;
  max-width: ${({ $width }) => $width}px;
  aspect-ratio: ${({ $width, $height }) => `${$width} / ${$height}`};
  background: #cfdbd5;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  & canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }
`;

export default TinyViewport;
