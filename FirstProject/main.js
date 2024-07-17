import './style.css'

import * as THREE from 'three';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//font stuff
// const fontLoader = new FontLoader();
//   fontLoader.load(
//     'node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',
//     (droidFont) => {
//       const textgeometry = new TextGeometry('In a world of this size...', {
//         height: 1,
//         size: 1,
//         font: droidFont
//     });

//     const textmaterial = new THREE.MeshNormalMaterial()
//     const textMesh = new THREE.Mesh(textgeometry, textmaterial);
//     textMesh.position.x = -8;
//     textMesh.position.z = 200;
//     scene.add(textMesh);
//   }
// );
//   fontLoader.load(
//     'node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',
//     (droidFont) => {
//       const textgeometry = new TextGeometry('Dream Big', {
//         height: 1,
//         size: 0.5,
//         font: droidFont
//     });
//     const textmaterial = new THREE.MeshNormalMaterial()
//     const stextMesh = new THREE.Mesh(textgeometry, textmaterial);
//     stextMesh.position.x = -2;
//     stextMesh.position.z = 5;
//     stextMesh.position.y = 5;

//     stextMesh.rotation.x = 0.5;
//     scene.add(stextMesh);
//   }
// );


//
const scene = new THREE.Scene();
// fov, aspect ratio, near, far
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({ 
  canvas: document.querySelector('#bg') 
 });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(250);
// const controls = new OrbitControls(camera, renderer.domElement);
renderer.render(scene, camera);

//
const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xff6347});
const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

const pointlight = new THREE.SpotLight(0xffffff, 50);
pointlight.position.set(0,10,5);

const ambientlight = new THREE.AmbientLight(0xffffff);

const helper = new THREE.PointLightHelper(pointlight);
const gridhelper = new THREE.GridHelper(200, 50);

scene.add(ambientlight);

//moon
const moontexture = new THREE.TextureLoader().load('moon.jpg');
const normaltexture = new THREE.TextureLoader().load('normal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(2, 24, 24),
  new THREE.MeshStandardMaterial({ 
    map: moontexture,
    color: 0xfffffff,
    emissive: new THREE.Color(0x2b2b2b),
    // emissiveIntensity: 0.001,
    emissiveIntensity: 0.2,
    normalMap: normaltexture,
    roughness: 100.5
  })
);
moon.position.setY(7);
moon.position.setX(-17);
moon.rotation.x = 10; 
scene.add(moon);

const venustexture = new THREE.TextureLoader().load('venusmap.jpg');
// const normaltexture = new THREE.TextureLoader().load('normal.jpg');
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(12, 24, 24),
  new THREE.MeshStandardMaterial({ 
    map: venustexture,
    color: 0xfffffff,
    emissive: new THREE.Color(0x2b2b2b),
    // emissiveIntensity: 0.001,
    emissiveIntensity: 0.2,
    normalMap: normaltexture,
    roughness: 100.5
  })
);

venus.position.setZ(160);
venus.position.setX(50);
venus.rotation.x = 10; 
scene.add(venus);

const jupitertexture = new THREE.TextureLoader().load('jupiter.jpg');
// const normaltexture = new THREE.TextureLoader().load('normal.jpg');
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(14, 24, 24),
  new THREE.MeshStandardMaterial({ 
    map: jupitertexture,
    color: 0xfffffff,
    emissive: new THREE.Color(0x2b2b2b),
    // emissiveIntensity: 0.001,
    emissiveIntensity: 0.2,
    roughness: 100.5
  })
);

jupiter.position.setZ(100);
jupiter.position.setX(-50);
jupiter.position.setY(20);
jupiter.rotation.x = 10; 
scene.add(jupiter);

const marstexture = new THREE.TextureLoader().load('mars.jpg');
// const normaltexture = new THREE.TextureLoader().load('normal.jpg');
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(7, 24, 24),
  new THREE.MeshStandardMaterial({ 
    map: marstexture,
    color: 0xfffffff,
    emissive: new THREE.Color(0x2b2b2b),
    // emissiveIntensity: 0.001,
    emissiveIntensity: 0.2,
    roughness: 100.5
  })
);

mars.position.setZ(60);
mars.position.setX(50);
mars.position.setY(20);
mars.rotation.x = 10; 
scene.add(mars);


const earthtexture = new THREE.TextureLoader().load('earth.jpg');
// const normaltexture = new THREE.TextureLoader().load('normal.jpg');
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(5, 24, 24),
  new THREE.MeshStandardMaterial({ 
    map: earthtexture,
    color: 0xfffffff,
    emissive: new THREE.Color(0x2b2b2b),
    // emissiveIntensity: 0.001,
    emissiveIntensity: 0.2,
    roughness: 100.5
  })
);


// earth.position.setX(50);
// earth.rotation.x = 10; 
scene.add(earth);
// // dragon
// const textureLoader = new THREE.TextureLoader();
// const dtexture = textureLoader.load('toothless.png');

// const dragongeometry = new THREE.PlaneGeometry(20,20);
// const dragonmaterial = new THREE.MeshBasicMaterial({ map: dtexture });
// const dragonmesh = new THREE.Mesh(dragongeometry, dragonmaterial);
// dragonmesh.position.setZ(50);
// scene.add(dragonmesh);




//
//functions 
function AddStars(){
  const sgeometry = new THREE.SphereGeometry(0.15, 24, 24)
  const smaterial = new THREE.MeshStandardMaterial({ 
    color: 0xffffff,
    emissive: new THREE.Color(0xfffffff),
    emissiveIntensity: 0.9
  });
  const star = new THREE.Mesh(sgeometry, smaterial);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200) );

  star.position.set(x, y, z);
  scene.add(star);
}

Array(800).fill().forEach(AddStars);

//background texture
const spacetexture = new THREE.TextureLoader().load('black.png');
// const spacetexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spacetexture;


// function moveCamera(){
//   const currentposition = document.body.getBoundingClientRect().top;

//   camera.position.z = currentposition * -0.01;
//   camera.position.y = currentposition * -0.0002;
//   camera.position.x = currentposition * -0.0002;

// }
// document.body.onscroll = moveCamera;

function onScroll(event) {
  
  const targetZPosition = 15;
  let campos = camera.position.z;
  if (campos > targetZPosition) {
    const zoomSpeed = 0.05;
    camera.position.z -= event.deltaY * zoomSpeed;
  }
}

window.addEventListener('wheel', onScroll);





//
//loop
function animate() {
  requestAnimationFrame(animate);
  

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  
  moon.rotation.y -= 0.005;
  venus.rotation.y -= 0.005;
  earth.rotation.y -= 0.005;
  mars.rotation.y -= 0.005;
  jupiter.rotation.y -= 0.005;

  // controls.update();
  renderer.render(scene, camera);
}
animate();



//javascript
function scrollToTop() {
  window.scrollTo(0, 0);
}

// Call scrollToTop function when the window is loaded
window.addEventListener('load', scrollToTop);