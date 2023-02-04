// This code creates a simple 3D scene with a green cube that rotates.

<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    // Create a Three.js scene
    const scene = new THREE.Scene();

    // Create a Three.js camera
    const camera = new THREE.PerspectiveCamera(
      75,
      this.$refs.container.clientWidth / this.$refs.container.clientHeight,
      0.1,
      1000
    );

    // Create a Three.js renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      this.$refs.container.clientWidth,
      this.$refs.container.clientHeight
    );
    this.$refs.container.appendChild(renderer.domElement);

    // Create a Three.js cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }
};
</script>
