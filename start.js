// Initial camera position
camera.position.set(0, 50, 150);

// Function to animate the camera position smoothly
function animateZoomOut() {
    const targetPosition = new THREE.Vector3(600, 600, 600); // Target position
    const duration = 10; // Duration in seconds for the zoom effect
    const startPosition = camera.position.clone(); // Starting position
    const startTime = performance.now(); // Track start time for interpolation

    function zoomAnimation() {
        const elapsed = (performance.now() - startTime) / 1000; // Time elapsed in seconds
        const progress = Math.min(elapsed / duration, 1); // Calculate the progress of animation

        // Interpolate between the starting position and target position
        camera.position.lerpVectors(startPosition, targetPosition, progress);

        // If animation is not yet finished, request next frame
        if (progress < 1) {
            requestAnimationFrame(zoomAnimation);
        }
    }

    zoomAnimation(); // Start the animation
}

// Set timeout to trigger the zoom after 2 seconds
setTimeout(animateZoomOut, 2000);

// Create a div for the ASTARAKSHAYA title
const titleBox = document.createElement('div');
titleBox.id = 'titleBox';
titleBox.style.position = 'absolute';
titleBox.style.top = '20px'; // Adjust this for vertical positioning
titleBox.style.left = '50%'; // Center horizontally
titleBox.style.transform = 'translateX(-50%)'; // Adjust for centering
titleBox.style.color = 'white';
titleBox.style.fontFamily = 'Arial, sans-serif';
titleBox.style.fontSize = '24px';
titleBox.style.fontWeight = 'bold';
titleBox.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)'; // Add some shadow for better visibility
titleBox.style.pointerEvents = 'none'; // Ensure it doesn't interfere with the 3D canvas

// Add the company name text inside a span for better control
const titleSpan = document.createElement('span');
titleSpan.style.color = '#FF6500'; // Golden color for emphasis
titleSpan.style.textTransform = 'uppercase'; // Ensure the text is in uppercase
titleSpan.innerText = 'ASTRAKSHAYA'; // Add the company name text

// Append the span to the titleBox
titleBox.appendChild(titleSpan);

// Append the titleBox to the document body
document.body.appendChild(titleBox);

// Create a data box element to display camera data
const dataBox = document.createElement('div');
dataBox.id = 'dataBox';
dataBox.style.position = 'absolute';
dataBox.style.top = '10px';
dataBox.style.left = '10px';
dataBox.style.padding = '10px';
dataBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
dataBox.style.color = 'white';
dataBox.style.fontFamily = 'Arial, sans-serif';
dataBox.style.borderRadius = '5px';
dataBox.style.pointerEvents = 'none'; // Make sure it doesn't interfere with the 3D canvas
document.body.appendChild(dataBox);

// Function to update the camera data in the data box
function updateCameraData() {
    // Get current camera position and other relevant data
    const cameraPosition = camera.position;
    const cameraRotation = camera.rotation;

    // Update the content of the data box
    dataBox.innerHTML = `
        <div><span>Camera Position:</span> x: ${cameraPosition.x.toFixed(2)} | y: ${cameraPosition.y.toFixed(2)} | z: ${cameraPosition.z.toFixed(2)}</div>
        <div><span>Camera Rotation:</span> x: ${cameraRotation.x.toFixed(2)} | y: ${cameraRotation.y.toFixed(2)} | z: ${cameraRotation.z.toFixed(2)}</div>
        <div><span>Zoom Level:</span> ${camera.position.length().toFixed(2)}</div>
    `;
}

// Create a webcam video element and style it to display in a small transparent box
const webcamBox = document.createElement('div');
webcamBox.id = 'webcamBox';
webcamBox.style.position = 'absolute';
webcamBox.style.top = '100px'; // You can adjust this value for better positioning
webcamBox.style.left = '20px'; // Adjust this value for the position of the webcam box
webcamBox.style.width = '337px'; // Set the width to 337px
webcamBox.style.height = '252px'; // Set the height to 252px
webcamBox.style.borderRadius = '5px';
webcamBox.style.border = '1.5px solid white';
webcamBox.style.overflow = 'hidden';
webcamBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent background

// Add the webcam box to the document
document.body.appendChild(webcamBox);

// Create a video element for the webcam feed
const webcamVideo = document.createElement('video');
webcamVideo.id = 'webcamVideo';
webcamVideo.style.width = '100%';
webcamVideo.style.height = '100%';
webcamVideo.autoplay = true;
webcamVideo.muted = true; // Mute the video to avoid feedback issues
webcamVideo.style.objectFit = 'cover'; // Ensure the video fills the box

// Add the video element to the webcam box
webcamBox.appendChild(webcamVideo);

// Access the webcam and stream it to the video element
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        webcamVideo.srcObject = stream;
    })
    .catch(err => {
        console.error('Error accessing webcam: ', err);
    });

// Create a div for satellite and sensor data on the right side
const satDataBox = document.createElement('div');
satDataBox.id = 'satDataBox';
satDataBox.style.position = 'absolute';
satDataBox.style.top = '100px'; // Adjust for proper positioning
satDataBox.style.right = '20px'; // Position it to the right side of the screen
satDataBox.style.width = '300px'; // Width of the data box
satDataBox.style.padding = '10px';
satDataBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
satDataBox.style.color = 'white';
satDataBox.style.fontFamily = 'Arial, sans-serif';
satDataBox.style.borderRadius = '5px';
satDataBox.style.pointerEvents = 'none'; // Ensure it doesn't interfere with the canvas
document.body.appendChild(satDataBox);

// Function to update satellite and sensor data in the data box
function updateSatData() {
    // Example data, you can replace this with your actual satellite data
    const satellitePosition = new THREE.Vector3(Math.random() * 1000, Math.random() * 1000, Math.random() * 1000); 
    const satelliteStatus = 'Active';
    const satelliteSpeed = (Math.random() * 100).toFixed(2); // Random speed for demonstration

   // Mock sensor data (replace with actual sensor readings)
const temperature = (Math.random() * 30).toFixed(2); // Temperature in Celsius
const airQualityIndex = (Math.random() * 100).toFixed(0); // Air Quality Index
const gyroscopeData = `x: ${(Math.random() * 10).toFixed(2)}, y: ${(Math.random() * 10).toFixed(2)}, z: ${(Math.random() * 10).toFixed(2)}`;
const accelerometerData = `x: ${(Math.random() * 2).toFixed(2)}, y: ${(Math.random() * 2).toFixed(2)}, z: ${(Math.random() * 2).toFixed(2)}`;
const pressure = (Math.random() * 1000).toFixed(2); // Pressure in hPa
const magnetometerData = `x: ${(Math.random() * 50).toFixed(2)}, y: ${(Math.random() * 50).toFixed(2)}, z: ${(Math.random() * 50).toFixed(2)}`; // Magnetic field strength in μT
const altitude = (Math.random() * 500).toFixed(2); // Altitude in kilometers
const radiation = (Math.random() * 5).toFixed(2); // Radiation level in sieverts
const lightIntensity = (Math.random() * 1000).toFixed(2); // Light intensity in lumens
const humidity = (Math.random() * 100).toFixed(2); // Humidity in percentage

    // Update the content of the satellite and sensor data box
    satDataBox.innerHTML = `
    <div><span>Satellite Position:</span> x: ${satellitePosition.x.toFixed(2)} | y: ${satellitePosition.y.toFixed(2)} | z: ${satellitePosition.z.toFixed(2)}</div>
    <div><span>Status:</span> ${satelliteStatus}</div>
    <div><span>Speed:</span> ${satelliteSpeed} km/h</div>
    <hr>
    <div><span>Temperature:</span> ${temperature} °C</div>
    <div><span>Air Quality Index:</span> ${airQualityIndex}</div>
    <div><span>Gyroscope:</span> ${gyroscopeData}</div>
    <div><span>Accelerometer:</span> ${accelerometerData}</div>
    <div><span>Pressure:</span> ${pressure} hPa</div>
    <div><span>Magnetometer:</span> ${magnetometerData}</div>
    <div><span>Altitude:</span> ${altitude} km</div>
    <div><span>Radiation Level:</span> ${radiation} Sv</div>
    <div><span>Light Intensity:</span> ${lightIntensity} lumens</div>
    <div><span>Humidity:</span> ${humidity}%</div>
`;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update camera, satellite, and sensor data on each frame
    updateCameraData();
    updateSatData();

    //--------------------------------------------- Update star movement for slight motion effect-------------------------------------
    starField.children.forEach(star => {
        star.position.x += Math.random() * 0.01 - 0.0000005; // Random horizontal movement
        star.position.y += Math.random() * 0.01 - 0.0000005; // Random vertical movement
        star.position.z += Math.random() * 0.01 - 0.0000005; // Random depth movement
    });

    // Rotate planets on their axis
    planets.forEach(planet => {
        if (planet.planet.children[0]) {
            planet.planet.children[0].rotation.y += 0.01; // Rotate clouds
        }
        planet.planet.rotation.y += 0.01; // Rotate planet itself
    });

    // Move planets in their orbits
    const time = Date.now() * 0.001; // Time multiplier for movement
    planets.forEach((planet, index) => {
        const distance = planet.distance;
        const orbitSpeed = 1 / (index + 1); // Planet closer to the sun moves faster, farther planets move slower
        planet.planet.position.x = Math.cos(time * orbitSpeed) * distance;
        planet.planet.position.z = Math.sin(time * orbitSpeed) * distance;
    });

    controls.update(); // Update controls
    renderer.render(scene, camera); // Render the scene
}

// Call animate function to start the loop
animate();
