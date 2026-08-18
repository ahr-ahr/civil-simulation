import * as THREE from "three";

const scene = new THREE.Scene();

const grid = new THREE.GridHelper(20, 20);
scene.add(grid);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x4f8cff,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x202020);

document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
