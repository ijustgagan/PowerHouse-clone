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
        camera.position.set(0, 0, 12)
        
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