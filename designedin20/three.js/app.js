// Variables for setup

let container;
let camera;
let renderer;
let scene;
let jet;

function init() {
    container = document.querySelector(".scene");
    // Create scene
    scene = new THREE.Scene();
    // Field of view
    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    // Near clipping and far clipping
    const near = 0.1;
    const far = 500;
    // Setup camera
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 20);
    // Ambient light
    const ambient = new THREE.AmbientLight(0x404040, 4);
    scene.add(ambient)
    // Directional light
    const light = new THREE.DirectionalLight(0xffffff, 6);
    light.position.set(10, 10, 10);
    scene.add(light);
    // Renderer
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    // Load model
    let loader = new THREE.GLTFLoader();
    loader.load('./3d/jet/scene.gltf', function(gltf) {
    scene.add(gltf.scene);
    // Setup animation
    jet = gltf.scene.children[0];
    animate()
    });
}

function animate() {
    requestAnimationFrame(animate);
    jet.rotation.z += 0.01;
    renderer.render(scene, camera);  

}

init()