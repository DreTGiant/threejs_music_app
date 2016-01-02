	if (!Detector.webgl) Detector.addGetWebGLMessage();

	var container, stats;

	var camera, scene, renderer;

	var mesh;

	var controls;

	var material_sphere1, material_sphere2, material_sphere3, material_sphere4, material_sphere5;

	var clock = new THREE.Clock();

	init();
	animate();

	function init() {

		container = document.getElementById('container');

		//

		camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 3500);
		camera.position.set(0, -105, 2100);


		controls = new THREE.FirstPersonControls(camera);

		controls.movementSpeed = 140;
		controls.lookSpeed = 0.08;
		controls.noFly = true;
		controls.lookVertical = true;

		scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0x050505, 2000, 3500);


		//

		scene.add(new THREE.AmbientLight(0x444444));

		var light1 = new THREE.DirectionalLight(0xffffff, 0.5);
		light1.position.set(1, 1, 1);
		scene.add(light1);

		var light2 = new THREE.DirectionalLight(0xffffff, 1.5);
		light2.position.set(0, -1, 0);
		scene.add(light2);

		//
		var listener = new THREE.AudioListener();
		camera.add(listener);

	
		var sphere = new THREE.SphereGeometry(30, 20, 20);

		material_sphere1 = new THREE.MeshLambertMaterial({
			color: 0xffaa00,
			shading: THREE.FlatShading
		});
		material_sphere2 = new THREE.MeshLambertMaterial({
			color: 0xCC0000,
			shading: THREE.FlatShading
		});
		material_sphere3 = new THREE.MeshLambertMaterial({
			color: 0xCC0000,
			shading: THREE.FlatShading
		});
		material_sphere4 = new THREE.MeshLambertMaterial({
			color: 0xffaa00,
			shading: THREE.FlatShading
		});
		material_sphere5 = new THREE.MeshLambertMaterial({
			color: 0xCC0000,
			shading: THREE.FlatShading
		});

		// sound spheres
			// SPHERE-1
		var mesh1 = new THREE.Mesh(sphere, material_sphere1);
		mesh1.position.set(200, 0, 0);
		scene.add(mesh1);

		var sound1 = new THREE.Audio(listener);
		sound1.load('Music/01_-_Closer.ogg');
		sound1.setRefDistance(0.5);
		sound1.autoplay = true;
		mesh1.add(sound1);
		//
		// SPHERE-2
		var mesh2 = new THREE.Mesh(sphere, material_sphere2);
		mesh2.position.set(400, 330, 0);
		scene.add(mesh2);

		var sound2 = new THREE.Audio(listener);
		sound2.load('Music/03_-_Sex_On_Fire.ogg');
		sound2.setRefDistance(0.5);
		sound2.autoplay = true;
		mesh2.add(sound2);

		//
		// SPHERE-3
		var mesh3 = new THREE.Mesh(sphere, material_sphere2);
		mesh3.position.set(-400, 330, 200);
		scene.add(mesh3);

		var sound3 = new THREE.Audio(listener);
		sound3.load('Music/Katy_Perry_-_Firework.ogg');
		sound3.setRefDistance(0.5);
		sound3.autoplay = true;
		mesh3.add(sound3);

		// SPHERE-4
		var mesh4 = new THREE.Mesh(sphere, material_sphere2);
		mesh4.position.set(500, -330, 400);
		scene.add(mesh4);

		var sound4 = new THREE.Audio(listener);
		sound4.load('Music/The_Cranberries_-_Zombie.ogg');
		sound4.setRefDistance(0.5);
		sound4.autoplay = true;
		mesh4.add(sound4);

		// SPHERE-5
		var mesh5 = new THREE.Mesh(sphere, material_sphere2);
		mesh5.position.set(-200, -330, 400);
		scene.add(mesh5);

		var sound5 = new THREE.Audio(listener);
		sound5.load('Music/John_Mayer_-_Waiting_On_The_World_To_Change.ogg');
		sound5.setRefDistance(0.7);
		sound5.autoplay = true;
		mesh5.add(sound5);

		// SPHERE-6
		var mesh6 = new THREE.Mesh(sphere, material_sphere2);
		mesh6.position.set(-100, 630, -400);
		scene.add(mesh6);

		var sound6 = new THREE.Audio(listener);
		sound6.load('Music/01_Lisztomania.ogg');
		sound6.setRefDistance(0.5);
		sound6.autoplay = true;
		mesh6.add(sound6);

		// SPHERE-7
		var mesh7 = new THREE.Mesh(sphere, material_sphere2);
		mesh7.position.set(550, 200, 0);
		scene.add(mesh7);

		var sound7 = new THREE.Audio(listener);
		sound7.load('Music/04_Electric_Feel.ogg');
		sound7.setRefDistance(0.7);
		sound7.autoplay = true;
		mesh7.add(sound7);

		// SPHERE-8
		var mesh8 = new THREE.Mesh(sphere, material_sphere2);
		mesh8.position.set(40, -30, -300);
		scene.add(mesh8);

		var sound8 = new THREE.Audio(listener);
		sound8.load('Music/07_Mumford_And_Sons_-_Little_Lion_Man.ogg');
		sound8.setRefDistance(0.5);
		sound8.autoplay = true;
		mesh8.add(sound8);

		// SPHERE-9
		var mesh9 = new THREE.Mesh(sphere, material_sphere2);
		mesh9.position.set(600, 530, 40);
		scene.add(mesh9);

		var sound9 = new THREE.Audio(listener);
		sound9.load('Music/Snow_Hey_Oh_.ogg');
		sound9.setRefDistance(0.7);
		sound9.autoplay = true;
		mesh9.add(sound9);

		var triangles = 5000;

		var geometry = new THREE.BufferGeometry();

		var indices = new Uint32Array(triangles * 3);

		for (var i = 0; i < indices.length; i++) {

			indices[i] = i;

		}

		var positions = new Float32Array(triangles * 3 * 3);
		var normals = new Float32Array(triangles * 3 * 3);
		var colors = new Float32Array(triangles * 3 * 3);

		var color = new THREE.Color();

		var n = 1500,
			n2 = n / 2; // triangles spread in the cube
		var d = 50,
			d2 = d / 2; // individual triangle size

		var pA = new THREE.Vector3();
		var pB = new THREE.Vector3();
		var pC = new THREE.Vector3();

		var cb = new THREE.Vector3();
		var ab = new THREE.Vector3();

		for (var i = 0; i < positions.length; i += 9) {

			// positions

			var x = Math.random() * n - n2;
			var y = Math.random() * n - n2;
			var z = Math.random() * n - n2;

			var ax = x + Math.random() * d - d2;
			var ay = y + Math.random() * d - d2;
			var az = z + Math.random() * d - d2;

			var bx = x + Math.random() * d - d2;
			var by = y + Math.random() * d - d2;
			var bz = z + Math.random() * d - d2;

			var cx = x + Math.random() * d - d2;
			var cy = y + Math.random() * d - d2;
			var cz = z + Math.random() * d - d2;

			positions[i] = ax;
			positions[i + 1] = ay;
			positions[i + 2] = az;

			positions[i + 3] = bx;
			positions[i + 4] = by;
			positions[i + 5] = bz;

			positions[i + 6] = cx;
			positions[i + 7] = cy;
			positions[i + 8] = cz;

			// flat face normals

			pA.set(ax, ay, az);
			pB.set(bx, by, bz);
			pC.set(cx, cy, cz);

			cb.subVectors(pC, pB);
			ab.subVectors(pA, pB);
			cb.cross(ab);

			cb.normalize();

			var nx = cb.x;
			var ny = cb.y;
			var nz = cb.z;

			normals[i] = nx;
			normals[i + 1] = ny;
			normals[i + 2] = nz;

			normals[i + 3] = nx;
			normals[i + 4] = ny;
			normals[i + 5] = nz;

			normals[i + 6] = nx;
			normals[i + 7] = ny;
			normals[i + 8] = nz;

			// colors

			var vx = (x / n) + 0.5;
			var vy = (y / n) + 0.5;
			var vz = (z / n) + 0.5;

			color.setRGB(vx, vy, vz);

			colors[i] = color.r;
			colors[i + 1] = color.g;
			colors[i + 2] = color.b;

			colors[i + 3] = color.r;
			colors[i + 4] = color.g;
			colors[i + 5] = color.b;

			colors[i + 6] = color.r;
			colors[i + 7] = color.g;
			colors[i + 8] = color.b;

		}

		geometry.setIndex(new THREE.BufferAttribute(indices, 1));
		geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
		geometry.addAttribute('normal', new THREE.BufferAttribute(normals, 3));
		geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));

		geometry.computeBoundingSphere();

		var material = new THREE.MeshPhongMaterial({
			color: 0xaaaaaa,
			specular: 0xffffff,
			shininess: 400,
			side: THREE.DoubleSide,
			vertexColors: THREE.VertexColors
		});

		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		//

		renderer = new THREE.WebGLRenderer({
			antialias: false
		});
		renderer.setClearColor(scene.fog.color);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);

		renderer.gammaInput = true;
		renderer.gammaOutput = true;

		container.appendChild(renderer.domElement);

		//

		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		container.appendChild(stats.domElement);

		//

		window.addEventListener('resize', onWindowResize, false);

	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);

	}

	//

	function animate() {

		requestAnimationFrame(animate);

		render();
		stats.update();

	}

	function render() {
		var delta = clock.getDelta(),
			time = clock.getElapsedTime() * 5;

		controls.update(delta);

		var time = Date.now() * 0.001;
		mesh.rotation.x = time * 0.01;
		mesh.rotation.y = time * 0.01;
		// color flashing 
		// material_sphere1.color.setHSL(0.0, 0.3 + 0.7 * (1 + Math.cos(time)) / 2, 0.5);
		// material_sphere2.color.setHSL(0.1, 0.3 + 0.7 * (1 + Math.sin(time)) / 2, 0.5);
		// material_sphere3.color.setHSL(0.1, 0.3 + 0.7 * (1 + Math.sin(time)) / 2, 0.5);
		// material_sphere4.color.setHSL(0.1, 0.3 + 0.7 * (1 + Math.sin(time)) / 2, 0.5);
		// material_sphere5.color.setHSL(0.1, 0.3 + 0.7 * (1 + Math.sin(time)) / 2, 0.5);
		renderer.render(scene, camera);
		//console.log('Z' + Math.floor(sphere.z) + 'Y' + Math.floor(sphere.y) + 'X' + Math.floor(sphere.position.x));

	}