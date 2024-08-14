import * as THREE from "three";
import { useEffect, useRef } from "react";

export const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Buat renderer Three.js
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    // Buat scene dan kamera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Tambahkan renderer ke container
    containerRef.current.appendChild(renderer.domElement);

    // Buat objek dan tambahkan ke scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Warna garis hitam
    const lines = new THREE.LineSegments(edges, lineMaterial);
    scene.add(lines);

    // Fungsi untuk animasi
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      lines.rotation.x += 0.01;
      lines.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Fungsi untuk membersihkan saat komponen di-unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh" }}
      className="flex justify-center align-middle"
    />
  );
};
