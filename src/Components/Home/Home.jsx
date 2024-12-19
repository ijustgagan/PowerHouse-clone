import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import Navbar from '../Navbar/Navbar'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef(null)
    const canvasRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startY, setStartY] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    
    // Loading effect
    useEffect(() => {
        // Simulate loading time
        setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5 seconds loading time
    }, []);

    useEffect(() => {
        // Store ref in variable at start of effect
        const canvas = canvasRef.current
        
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0xffffff)
        
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 3000    
        
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            powerPreference: "high-performance"
        })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        
        const projects = [
            { 
                image: '/images/pexels-ali-ahmed-83499412-29660145.jpg',
                title: 'Project One',
                description: 'Architecture & Design'
            },
            {
                image: '/images/pexels-jalil-saeidi-135940189-29712574.jpg',
                title: 'Project Two',
                description: 'Architecture & Design'
            },
            {
                image: '/images/pexels-ali-ahmed-83499412-29660145.jpg',
                title: 'Project Three',
                description: 'Architecture & Design'
            },
            {
                image: '/images/pexels-ali-ahmed-83499412-29660145.jpg',
                title: 'Project Four',
                description: 'Architecture & Design'
            },
            {
                image: '/images/pexels-ali-ahmed-83499412-29660145.jpg',
                title: 'Project Five',
                description: 'Architecture & Design'
            },
            {
                image:"/images/pexels-tomas-malik-793526-26690662.jpg",
                title:"Project Six",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Seven",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Eight",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Nine",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Ten",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Eleven",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Twelve",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Thirteen",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Fourteen",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Fifteen",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Sixteen",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Seventeen",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Eighteen",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Nineteen",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Twenty",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Twenty One",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Twenty Two",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Twenty Three",
                description:"Architecture & Design"
            },
            {
                image:"/images/pexels-ali-ahmed-83499412-29660145.jpg",
                title:"Project Twenty Four",
                description:"Architecture & Design"
            }

            


        ]
        
        const projectMeshes = []
        const gridConfig = {
            rows: 6,
            cols: 6,
            spacing: 6
        }
        
        // Add text to the scene
        const fontLoader = new FontLoader()
        fontLoader.load('/fonts/helvetiker_regular.typeface.json ', (font) => {
            const textGeometry = new TextGeometry('Powerhouse Company', {
                font: font,
                size: 0.8,
                height: 0.1,
            })
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
            const textMesh = new THREE.Mesh(textGeometry, textMaterial)
            
            // Center the text and move it up
            textGeometry.computeBoundingBox()
            const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x
            textMesh.position.set(-textWidth/2, 0, -1)
            
            scene.add(textMesh)
        })
        
        // Create project meshes in grid
        projects.forEach((project, index) => {
            const textureLoader = new THREE.TextureLoader()
            textureLoader.load(
                project.image, 
                (texture) => {
                    texture.minFilter = THREE.LinearFilter
                    texture.magFilter = THREE.LinearFilter
                    texture.generateMipmaps = true
                    texture.anisotropy = 16
                    texture.needsUpdate = true
                    
                    const geometry = new THREE.PlaneGeometry(4, 3)
                    const material = new THREE.MeshBasicMaterial({ 
                        map: texture,
                        opacity: 1,
                        depthTest: true,
                        depthWrite: true
                    })
                    const mesh = new THREE.Mesh(geometry, material)
                    
                    // Grid position calculation
                    const row = Math.floor(index / gridConfig.cols)
                    const col = index % gridConfig.cols
                    const originalX = (col - gridConfig.cols/2 + 0.5) * gridConfig.spacing
                    const originalY = -(row * gridConfig.spacing) + gridConfig.rows * 2

                    mesh.position.x = originalX
                    mesh.position.y = originalY
                    mesh.position.z = 0
                    
                    // Store original position in userData
                    mesh.userData = {
                        isHovered: false,
                        initialScale: new THREE.Vector3(1, 1, 1),
                        originalX: originalX,
                        originalY: originalY
                    }
                    
                    // Fade in effect
                    gsap.to(material, {
                        opacity: 1,
                        duration: 1,
                        delay: index * 0.1
                    })

                    scene.add(mesh)
                    projectMeshes.push(mesh)
                },
                undefined,
                (error) => {
                    console.error('Error loading texture:', error)
                }
            )
        })
        
        // Scroll handling modify karenge
        let targetY = 0
        let currentY = 0
        
        const handleScroll = (e) => {
            targetY = window.scrollY * 0.03
        }
        
        window.addEventListener('scroll', handleScroll)
        
        // Mouse interaction handlers
        const raycaster = new THREE.Raycaster()
        const mouse = new THREE.Vector2()

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

            // Add parallax effect to all project meshes
            projectMeshes.forEach(mesh => {
                // Calculate movement 
                const moveX = mouse.x * 0.3  // Adjust this multiplier for more/less movement
                const moveY = mouse.y * 0.3 // Adjust this multiplier for more/less movement

                // Smoothly update mesh position
                gsap.to(mesh.position, {
                    x: mesh.userData.originalX + moveX,  // Add movement to original position
                    y: mesh.userData.originalY + moveY,  // Add movement to original position
                    duration: 0.5,  // Adjust for smoother/faster movement
                    ease: "power2.out"
                })
            })

            // Original hover effect 
            raycaster.setFromCamera(mouse, camera)
            const intersects = raycaster.intersectObjects(projectMeshes)

            projectMeshes.forEach(mesh => {
                if (intersects.length > 0 && intersects[0].object === mesh) {
                    if (!mesh.userData.isHovered) {
                        mesh.userData.isHovered = true
                        gsap.to(mesh.scale, {
                            x: 1.1,  
                            y: 1.1,  
                            duration: 0.3
                        })
                    }
                } else {
                    if (mesh.userData.isHovered) {
                        mesh.userData.isHovered = false
                        gsap.to(mesh.scale, {
                            x: 1,
                            y: 1,
                            duration: 0.3
                        })
                    }
                }
            })
        }

        // Drag 
        const onMouseDown = (event) => {
            setIsDragging(true)
            setStartY(event.clientY - scrollY)
        }

        const onMouseUp = () => {
            setIsDragging(false)
        }

        const onDragMove = (event) => {
            if (isDragging) {
                const newScrollY = event.clientY - startY
                // Y-axis movement ko limit karne ke liye bounds add kar sakte hain
                const maxScroll = 1000 // maximum scroll limit
                const boundedScrollY = Math.max(-maxScroll, Math.min(maxScroll, newScrollY))
                setScrollY(boundedScrollY)
                targetY = -boundedScrollY * 0.003
            }
        }

        //  event listeners
        window.addEventListener('mousemove', onMouseMove)
        canvas.addEventListener('mousedown', onMouseDown)
        window.addEventListener('mouseup', onMouseUp)
        window.addEventListener('mousemove', onDragMove)

        // Animation update
        const animate = () => {
            requestAnimationFrame(animate)
            
            currentY += (targetY - currentY) * 0.05
            
            camera.position.z = 12 - currentY * 0.3
            
            projectMeshes.forEach((mesh, i) => {
                const distanceFromCenter = Math.abs(mesh.position.x) + Math.abs(mesh.position.y + currentY * 10)
                
                // Opacity calculation
                const opacityThreshold = 12
                let opacity = distanceFromCenter < opacityThreshold ? 1 : 
                             Math.max(0.2, 1 - (distanceFromCenter - opacityThreshold) * 0.08)
                mesh.material.opacity = opacity
                
                // Ab scaling ko remove kar diya hai
                // Agar hover nahi hai to normal scale (1,1,1) maintain karenge
                if (!mesh.userData.isHovered) {
                    mesh.scale.set(1, 1, 1)  // Fixed scale
                }
            })
            
            renderer.render(scene, camera)
        }
        
        animate()
        
        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        
        window.addEventListener('resize', handleResize)
        
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', onMouseMove)
            canvas.removeEventListener('mousedown', onMouseDown)
            window.removeEventListener('mouseup', onMouseUp)
            window.removeEventListener('mousemove', onDragMove)
        }
        
    }, [isDragging, startY, scrollY])

    return (
        <>
            {/* Loading screen */}
            <div 
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    transition: 'opacity 0.5s ease-in-out',
                    opacity: isLoading ? 1 : 0,
                    pointerEvents: isLoading ? 'all' : 'none',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h1 style={{fontSize: '2rem'}}>Loading...</h1>
            </div>

            {/* Main content */}
            <div 
                ref={containerRef}
                style={{ 
                    height: '200vh',
                    backgroundColor: 'white',
                    opacity: isLoading ? 0 : 1,
                    transition: 'opacity 0.5s ease-in-out',
                }}
            >
                <Navbar/>
                <canvas 
                    ref={canvasRef} 
                    style={{ 
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1
                    }} 
                />
            </div>
        </>
    )
}

export default Home




// import "./styles.css";
// import * as THREE from "three";
// import TWEEN from "tween.js";
// import TrackballControls from "three-trackballcontrols";
// import { CSS3DRenderer, CSS3DObject } from "three-css3drenderer";
// import { useEffect } from "react";
// import { table, tableOfObjects, tableOfDogObjects } from "./data.js";
// import axios from "axios";

// export default function App() {
//   useEffect(() => {
//     let camera, scene, renderer;
//     let controls;

//     const objects = [];
//     const targets = { table: [], sphere: [], helix: [], grid: [] };

//     init();
//     animate();

//     function init() {
//       camera = new THREE.PerspectiveCamera(
//         40,
//         window.innerWidth / window.innerHeight,
//         1,
//         10000
//       );
//       camera.position.z = 3000;

//       scene = new THREE.Scene();

//       // table

//       for (let i = 0; i < tableOfObjects.length; i += 1) {
//         let item = tableOfObjects[i];

//         // axios({
//         //   url: "https://api.igdb.com/v4/games",
//         //   method: 'POST',
//         //   headers: {
//         //       'Accept': 'application/json',
//         //       'Client-ID': 'Client ID',
//         //       'Authorization': 'Bearer access_token',
//         //   },
//         //   data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
//         // })
//         //   .then(response => {
//         //     item.game = response.data
//         //       console.log(response.data);
//         //   })
//         //   .catch(err => {
//         //       console.error(err);
//         //   });

//         // console.log(item)
//         const element = document.createElement("div");
//         element.className = "element";
//         element.style.backgroundColor =
//           "rgba(0,127,127," + (Math.random() * 0.5 + 0.25) + ")";

//         const number = document.createElement("div");
//         number.className = "number";
//         number.textContent = item.stat;
//         element.appendChild(number);

//         const symbol = document.createElement("div");
//         symbol.className = "symbol";
//         symbol.textContent = item.title;
//         element.appendChild(symbol);

//         const details = document.createElement("div");
//         details.className = "details";
//         details.innerHTML = item.description + "<br>" + item.stat;
//         element.appendChild(details);

//         const objectCSS = new CSS3DObject(element);
//         objectCSS.position.x = Math.random() * 4000 - 2000;
//         objectCSS.position.y = Math.random() * 4000 - 2000;
//         objectCSS.position.z = Math.random() * 4000 - 2000;
//         scene.add(objectCSS);

//         objects.push(objectCSS);

//         const object = new THREE.Object3D();
//         object.position.x = item.gridCoord[0] * 140 - 1330;
//         object.position.y = -(item.gridCoord[1] * 180) + 990;

//         targets.table.push(object);
//       }

//       // sphere

//       const vector = new THREE.Vector3();

//       for (let i = 0, l = objects.length; i < l; i++) {
//         const phi = Math.acos(-1 + (2 * i) / l);
//         const theta = Math.sqrt(l * Math.PI) * phi;

//         const object = new THREE.Object3D();

//         object.position.setFromSphericalCoords(800, phi, theta);

//         vector.copy(object.position).multiplyScalar(2);

//         object.lookAt(vector);

//         targets.sphere.push(object);
//       }

//       // helix

//       for (let i = 0, l = objects.length; i < l; i++) {
//         const theta = i * 0.175 + Math.PI;
//         const y = -(i * 8) + 450;

//         const object = new THREE.Object3D();

//         object.position.setFromCylindricalCoords(900, theta, y);

//         vector.x = object.position.x * 2;
//         vector.y = object.position.y;
//         vector.z = object.position.z * 2;

//         object.lookAt(vector);

//         targets.helix.push(object);
//       }

//       // grid

//       for (let i = 0; i < objects.length; i++) {
//         const object = new THREE.Object3D();

//         object.position.x = (i % 5) * 400 - 800;
//         object.position.y = -(Math.floor(i / 5) % 5) * 400 + 800;
//         object.position.z = Math.floor(i / 25) * 1000 - 2000;

//         targets.grid.push(object);
//       }

//       //

//       renderer = new CSS3DRenderer();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       window.document
//         .getElementById("container")
//         .appendChild(renderer.domElement);

//       //

//       controls = new TrackballControls(camera, renderer.domElement);
//       controls.minDistance = 500;
//       controls.maxDistance = 6000;
//       controls.addEventListener("change", render);

//       const buttonTable = document.getElementById("table");
//       buttonTable.addEventListener("click", function () {
//         transform(targets.table, 2000);
//       });

//       const buttonSphere = document.getElementById("sphere");
//       buttonSphere.addEventListener("click", function () {
//         transform(targets.sphere, 2000);
//       });

//       const buttonHelix = document.getElementById("helix");
//       buttonHelix.addEventListener("click", function () {
//         transform(targets.helix, 2000);
//       });

//       const buttonGrid = document.getElementById("grid");
//       buttonGrid.addEventListener("click", function () {
//         transform(targets.grid, 2000);
//       });

//       transform(targets.table, 2000);

//       //

//       window.addEventListener("resize", onWindowResize);
//     }

//     function transform(targets, duration) {
//       TWEEN.removeAll();

//       for (let i = 0; i < objects.length; i++) {
//         const object = objects[i];
//         const target = targets[i];

//         new TWEEN.Tween(object.position)
//           .to(
//             {
//               x: target.position.x,
//               y: target.position.y,
//               z: target.position.z
//             },
//             Math.random() * duration + duration
//           )
//           .easing(TWEEN.Easing.Exponential.InOut)
//           .start();

//         new TWEEN.Tween(object.rotation)
//           .to(
//             {
//               x: target.rotation.x,
//               y: target.rotation.y,
//               z: target.rotation.z
//             },
//             Math.random() * duration + duration
//           )
//           .easing(TWEEN.Easing.Exponential.InOut)
//           .start();
//       }

//       new TWEEN.Tween(this)
//         .to({}, duration * 2)
//         .onUpdate(render)
//         .start();
//     }

//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();

//       renderer.setSize(window.innerWidth, window.innerHeight);

//       render();
//     }

//     function animate() {
//       requestAnimationFrame(animate);

//       TWEEN.update();

//       controls.update();
//     }

//     function render() {
//       renderer.render(scene, camera);
//     }
//   });

//   return (
//     <div className="App">
//       <div id="info">
//         <a href="https://threejs.org" target="_blank" rel="noopener">
//           three.js
//         </a>{" "}
//         css3d - periodic table.
//       </div>
//       <div id="container"></div>
//       <div id="menu">
//         <button id="table">TABLE</button>
//         <button id="sphere">SPHERE</button>
//         <button id="helix">HELIX</button>
//         <button id="grid">GRID</button>
//       </div>
//     </div>
//   );
// }
