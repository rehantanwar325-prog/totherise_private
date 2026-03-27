import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Scene Setup
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x050505); // Make it transparent to see the image

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8b5cf6, 1.5, 400); // More subtle purple
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    const pinkLight = new THREE.PointLight(0xd946ef, 1.2, 400); // More subtle pink
    pinkLight.position.set(-50, -50, 50);
    scene.add(pinkLight);

    // Ribbons Logic
    const ribbonCount = 5;
    const ribbons = [];
    const ribbonMaterials = [];

    for (let i = 0; i < ribbonCount; i++) {
      const points = [];
      for (let j = 0; j < 10; j++) {
        points.push(new THREE.Vector3(
          (j - 5) * 60,
          Math.sin(j * 0.4 + i) * 25,
          Math.cos(j * 0.2 + i) * 20
        ));
      }
      
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 100, 1.2, 12, false);
      
      const material = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x888888 : 0x8b5cf6, // Use grey and purple to match image
        metalness: 1,
        roughness: 0,
        transparent: true,
        opacity: 0.25, // Subtle overlay
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.z = (Math.PI / ribbonCount) * i;
      scene.add(mesh);
      ribbons.push({ mesh, curve, points, offset: i * 2, speed: 0.1 + Math.random() * 0.2 });
      ribbonMaterials.push(material);
    }

    // Particle Stars
    const starGeo = new THREE.BufferGeometry();
    const starPos = [];
    for(let i=0; i<800; i++) {
      starPos.push((Math.random() - 0.5) * 600);
      starPos.push((Math.random() - 0.5) * 600);
      starPos.push((Math.random() - 0.5) * 600);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, transparent: true, opacity: 0.4 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - width / 2) / 100;
      mouseY = (event.clientY - height / 2) / 100;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let time = 0;
    const animate = () => {
      time += 0.005;
      
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      ribbons.forEach((r, idx) => {
        r.mesh.rotation.y = time * r.speed;
        r.mesh.position.y = Math.sin(time + r.offset) * 5;
        
        // Subtle wave effect on geometry points could be complex, 
        // using mesh rotation and position for performance
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      // Proper disposal
      renderer.dispose();
      ribbons.forEach(r => r.mesh.geometry.dispose());
      ribbonMaterials.forEach(m => m.dispose());
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        background: 'url("/bg-3d.jpg") no-repeat center center fixed',
        backgroundSize: 'cover'
      }}
    />
  );
};

export default Background3D;
