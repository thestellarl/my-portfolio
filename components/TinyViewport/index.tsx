"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

interface TinyViewportProps {
  height?: number;
  width?: number;
  /** Size to the parent element instead of fixed pixels (parent must have a height). */
  fill?: boolean;
  /** Scene background / fog colour. */
  background?: string;
  modelSrc: string;
}

const TinyViewport = ({
  height = 320,
  width = 320,
  fill = false,
  background = "#CFDBD5",
  modelSrc,
}: TinyViewportProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const size = () =>
      fill
        ? {
            w: Math.max(1, container.clientWidth),
            h: Math.max(1, container.clientHeight),
          }
        : { w: width, h: height };
    const { w, h } = size();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true;
    scene.background = new THREE.Color(background);
    scene.fog = new THREE.Fog(background, 10, 50);

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

    // Matte floor: ShadowMaterial renders nothing but the received shadow,
    // so the ground is exactly the background colour with no specular sheen.
    const groundMaterial = new THREE.ShadowMaterial({
      color: 0x000000,
      opacity: 0.22,
    });
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(1000, 1000),
      groundMaterial,
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    container.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, container);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableRotate = true;

    // Load STL
    const material = new THREE.MeshStandardMaterial({ color: "#F5CB5C" });
    const loader = new STLLoader();
    loader.load(
      `/models/${modelSrc}`,
      function (geometry) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.geometry.center();

        const boundingBox = new THREE.Box3().setFromObject(mesh);
        const modelSize = boundingBox.getSize(new THREE.Vector3());

        const scale = 10 / (modelSize.x + modelSize.z + modelSize.y) / 3;
        mesh.scale.set(scale, scale, scale);
        mesh.geometry.translate(0, modelSize.y / 2, 0);
        mesh.castShadow = true;

        scene.add(mesh);
        camera.position.set(
          0,
          modelSize.y * scale * 1.25,
          Math.max(modelSize.x * scale, modelSize.z * scale),
        );
        camera.lookAt(new THREE.Vector3(0, (modelSize.y * scale) / 2, 0));
        controls.target.set(0, (modelSize.y * scale) / 2, 0);
      },
      undefined,
      (error) => {
        console.error(error);
      },
    );

    camera.position.set(0, 400, 30);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    let raf = 0;
    function animate() {
      raf = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Keep the canvas matched to the container when filling it.
    let observer: ResizeObserver | undefined;
    if (fill && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => {
        const { w, h } = size();
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      });
      observer.observe(container);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
      controls.dispose();
      renderer.dispose();
      material.dispose();
      groundMaterial.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [fill, width, height, background, modelSrc]);

  return (
    <div
      ref={ref}
      className={fill ? "h-full w-full [&>canvas]:block" : "[&>canvas]:block"}
      style={fill ? undefined : { width, height }}
      aria-label={`3D model: ${modelSrc}`}
      role="img"
    />
  );
};

export default TinyViewport;
