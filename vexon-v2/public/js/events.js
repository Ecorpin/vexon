let scene, camera, renderer, particles = [], count = 0;
        const SEPARATION = 40, AMOUNTX = 60, AMOUNTY = 30;
        let mouseX = 0, mouseY = 0;
        let canvas, container, windowHalfX, windowHalfY;
        let isMouseInside = false; // Flag to check if mouse is inside

        function init() {
            // Get canvas and container
            canvas = document.getElementById("particleCanvas");
            container = document.getElementById("gradientSection");
            
            // Set window size variables
            windowHalfX = container.clientWidth / 2;
            windowHalfY = container.clientHeight / 2;
            
            // Create Scene
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 5000);
            camera.position.z = 500;

            // Create Particles
            let material = new THREE.SpriteMaterial({
                map: new THREE.CanvasTexture(generateSprite()),
                blending: THREE.AdditiveBlending
            });

            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    let particle = new THREE.Sprite(material);
                    particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                    particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                    scene.add(particle);
                    particles.push(particle);
                }
            }

            // Renderer
            renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(container.clientWidth, container.clientHeight);

            // Event Listeners
            container.addEventListener("mousemove", onMouseMove, false);
            container.addEventListener("mouseenter", () => { isMouseInside = true; });
            container.addEventListener("mouseleave", () => {
                isMouseInside = false;
                mouseX = 0;
                mouseY = 0;
            });

            window.addEventListener("resize", onWindowResize, false);
        }

        function generateSprite() {
            let canvas = document.createElement("canvas");
            canvas.width = 16;
            canvas.height = 16;
            let context = canvas.getContext("2d");
            let gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
            gradient.addColorStop(0, "rgba(73, 197, 177,1)");
            gradient.addColorStop(1, "rgba(73, 197, 177,0)");
            context.fillStyle = gradient;
            context.fillRect(0, 0, 16, 16);
            return canvas;
        }

        function onMouseMove(event) {
            if (!isMouseInside) return; // Only update if inside the section
            let rect = container.getBoundingClientRect();
            mouseX = event.clientX - rect.left - windowHalfX;
            mouseY = event.clientY - rect.top - windowHalfY;
        }

        function onWindowResize() {
            windowHalfX = container.clientWidth / 2;
            windowHalfY = container.clientHeight / 2;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            if (isMouseInside) {
                camera.position.x += (mouseX - camera.position.x) * 0.05;
                camera.position.y += (-mouseY - camera.position.y) * 0.05;
            } else {
                camera.position.x += (0 - camera.position.x) * 0.05;
                camera.position.y += (0 - camera.position.y) * 0.05;
            }
            camera.lookAt(scene.position);

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    let particle = particles[i++];
                    particle.position.y = (Math.sin((ix + count) * 0.3) * 30) +
                        (Math.sin((iy + count) * 0.5) * 30);
                    particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 1.8 +
                        (Math.sin((iy + count) * 0.5) + 1) * 1.8;
                }
            }

            renderer.render(scene, camera);
            count += 0.1;
        }

        init();
        animate();