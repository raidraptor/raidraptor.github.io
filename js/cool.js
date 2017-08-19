var container;
			var camera, scene, renderer;
			var group;
var targetRotation = 0;
			var targetRotationOnMouseDown = 0;
			var mouseX = 0;
			var mouseXOnMouseDown = 0;
			var windowHalfX = window.innerWidth / 2;



            scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xf0f0f0 );
				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.set( 0, 150, 500 );
				scene.add( camera );
				var light = new THREE.PointLight( 0xffffff, 0.8 );
				camera.add( light );

                group = new THREE.Group();
				group.position.y = 50;
				scene.add( group );

var loader = new THREE.TextureLoader();
				var texture = loader.load( "image/pic.jpg" );
				// it's necessary to apply these settings in order to correctly display the texture on a shape geometry
				texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
				texture.repeat.set( 0.0092, 0.0053 );

function addShape( shape, extrudeSettings, color, x, y, z, rx, ry, rz, s ) {
    					var geometry = new THREE.ShapeBufferGeometry( shape );
					var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { side: THREE.DoubleSide, map: texture } ) );
					mesh.position.set( x-54, y, z  );
					mesh.rotation.set( rx, ry, rz );
					mesh.scale.set( s, s, s );
					group.add( mesh );


}


            var sqLength = 80;
				var squareShape = new THREE.Shape();
				squareShape.moveTo( 0, 0 );
				squareShape.lineTo( 0, 192 );
				squareShape.lineTo( 108, 192 );
				squareShape.lineTo( 108, 0 );
				squareShape.lineTo( 0, 0 );

				var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

				addShape( squareShape,      extrudeSettings, 0x0040f0,  0,  0, 0, 0, 0, 0, 1 );

renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );
				//
				window.addEventListener( 'resize', onWindowResize, false );
                function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			//
			function onDocumentMouseDown( event ) {
				event.preventDefault();
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );
				document.addEventListener( 'mouseout', onDocumentMouseOut, false );
				mouseXOnMouseDown = event.clientX - windowHalfX;
				targetRotationOnMouseDown = targetRotation;
			}
			function onDocumentMouseMove( event ) {
				mouseX = event.clientX - windowHalfX;
				targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
			}
			function onDocumentMouseUp( event ) {
				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
			}
			function onDocumentMouseOut( event ) {
				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
			}
			function onDocumentTouchStart( event ) {
				if ( event.touches.length == 1 ) {
					event.preventDefault();
					mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
					targetRotationOnMouseDown = targetRotation;
				}
			}
			function onDocumentTouchMove( event ) {
				if ( event.touches.length == 1 ) {
					event.preventDefault();
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
				}
			}


                function animate() {
				requestAnimationFrame( animate );
				render();
			}

			function render() {
                group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;
				renderer.render( scene, camera );
			}

animate()