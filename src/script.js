import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

// Renderer Setup

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

/* Scene Setup */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let gap = 20;

// Environment Map
// const rgbeLoader = new RGBELoader();
// rgbeLoader.load(
//   "static/textures/environmentMap/HDR_hazy_nebulae.hdr",
//   (environmentMap) => {
//     environmentMap.mapping = THREE.EquirectangularReflectionMapping;

//     scene.background = environmentMap;
//     scene.environment = environmentMap;
//   }
// );

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Textures
const textureLoader = new THREE.TextureLoader();

const starMapTexture = textureLoader.load("textures/bodies/stars.jpg");
const sunTexture = textureLoader.load("textures/bodies/sun.jpg");
const mercuryTexture = textureLoader.load("textures/bodies/mercury.jpg");
const venusTexture = textureLoader.load("textures/bodies/venus_surface.jpg");
const earthTexture = textureLoader.load("textures/bodies/earth.jpg");
const marsTexture = textureLoader.load("textures/bodies/mars.jpg");
const jupiterTexture = textureLoader.load("textures/bodies/jupiter.jpg");
const saturnTexture = textureLoader.load("textures/bodies/saturn.jpg");
const uranusTexture = textureLoader.load("textures/bodies/uranus.jpg");
const neptuneTexture = textureLoader.load("textures/bodies/neptune.jpg");

starMapTexture.colorSpace = THREE.SRGBColorSpace;
sunTexture.colorSpace = THREE.SRGBColorSpace;
mercuryTexture.colorSpace = THREE.SRGBColorSpace;
venusTexture.colorSpace = THREE.SRGBColorSpace;
earthTexture.colorSpace = THREE.SRGBColorSpace;
marsTexture.colorSpace = THREE.SRGBColorSpace;
jupiterTexture.colorSpace = THREE.SRGBColorSpace;
saturnTexture.colorSpace = THREE.SRGBColorSpace;
uranusTexture.colorSpace = THREE.SRGBColorSpace;
neptuneTexture.colorSpace = THREE.SRGBColorSpace;

// Geometry

const starMapGeometry = new THREE.SphereGeometry(640, 128, 64);
const starMapMaterial = new THREE.MeshBasicMaterial({
  map: starMapTexture,
  side: THREE.BackSide,
});
const starMap = new THREE.Mesh(starMapGeometry, starMapMaterial);
scene.add(starMap);

const sunGeometry = new THREE.SphereGeometry(55, 128, 64);
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const mercuryGeometry = new THREE.SphereGeometry(0.38, 128, 64);
const mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
scene.add(mercury);

const venusGeometry = new THREE.SphereGeometry(0.95, 128, 64);
const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venus);

const earthGeometry = new THREE.SphereGeometry(1, 128, 64);
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

const marsGeometry = new THREE.SphereGeometry(0.53, 128, 64);
const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);

const jupiterGeometry = new THREE.SphereGeometry(11, 128, 64);
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);

const saturnGeometry = new THREE.SphereGeometry(9.14, 128, 64);
const saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturn);

const uranusGeometry = new THREE.SphereGeometry(3.98, 128, 64);
const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);

const neptuneGeometry = new THREE.SphereGeometry(3.86, 128, 64);
const neptuneMaterial = new THREE.MeshBasicMaterial({ map: neptuneTexture });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);

const planets = new Map([
  [
    // sun,
    // {
    //   earth_days: 25.38,
    //   orbit_days: 0,
    //   earth_years: 0,
    //   orbit_radius: 0,
    // },
    mercury,
    {
      earth_days: 58.67,
      orbit_days: 87.97,
      earth_years: 0.240842,
      orbit_radius: 60,
    },
  ],
  [
    venus,
    {
      earth_days: 243,
      orbit_days: 224.7,
      earth_years: 0.615178,
      orbit_radius: 90,
    },
  ],
  [
    earth,
    {
      earth_days: 1.0,
      orbit_days: 365.26,
      earth_years: 1.0,
      orbit_radius: 120,
    },
  ],
  [
    mars,
    {
      earth_days: 1.025,
      orbit_days: 686.98,
      earth_years: 1.880797,
      orbit_radius: 150,
    },
  ],
  [
    jupiter,
    {
      earth_days: 0.414,
      orbit_days: 4331.87,
      earth_years: 11.859675,
      orbit_radius: 180,
    },
  ],
  [
    saturn,
    {
      earth_days: 0.446,
      orbit_days: 10760.56,
      earth_years: 29.46,
      orbit_radius: 210,
    },
  ],
  [
    uranus,
    {
      earth_days: 0.717,
      orbit_days: 30685.49,
      earth_years: 84.01,
      orbit_radius: 240,
    },
  ],
  [
    neptune,
    {
      earth_days: 0.671,
      orbit_days: 60154.67,
      earth_years: 164.69,
      orbit_radius: 270,
    },
  ],
]);

setPlanetPositions();

camera.position.z = 200;

function animate() {
  controls.update();
  spinPlanets();
  orbitPlanets();
  renderer.render(scene, camera);
}

function setPlanetPositions() {
  let currentPosition =
    sun.position.x + sun.geometry.parameters.radius + 20 + gap;

  planets.forEach((data, planet) => {
    currentPosition += planet.geometry.parameters.radius;
    planet.position.x = currentPosition;
    currentPosition += planet.geometry.parameters.radius + gap;
  });
}

function spinPlanets() {
  planets.forEach((data, planet) => {
    planet.rotation.y += (1 / data.earth_days) * 0.1;
  });
}

function orbitPlanets() {
  const time = Date.now() * 0.1;
  planets.forEach((data, planet) => {
    const orbitSpeed = (2 * Math.PI) / data.orbit_days;
    const orbitRadius = data.orbit_radius;

    planet.position.x = orbitRadius * Math.cos(time * orbitSpeed);
    planet.position.z = orbitRadius * Math.sin(time * orbitSpeed);
  });
}
