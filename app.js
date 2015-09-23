(function(window) {
	console.log("[App] loading...");

	var locations = {
		bahnhof: {
			lat: 47.377291,
			lng: 8.540079
		},
		bellvue: { 
			lat: 47.366832,
			lng: 8.545105
		},
		polybahn: {
			lat: 47.376437,
			lng: 8.544033
		},
		bahnhofstrasse: {
			lat: 47.375489,
			lng: 8.539167
		}
	};

	var map;
	var markers = [];
	var polyline;
	var positions;

	function initMap() {
		console.log("[App] initMap()");
		var map_position = {
            lat: 47.3720639,
            lng: 8.5380668
        };
        var zoom = 15;

        // map
        createMap(map_position, zoom);

        google.maps.event.addListener(map, 'click', function(event) {
        	markers.push(createMarker(event.latLng, "custom marker", true, 0));
        });

        // markers
        var delay = 0;
        for (var location in locations) {
    		var position = locations[location];
    		markers.push(createMarker(position, location, true, delay));
        	delay += 400;
        }

        // polyline
        positions = [];
        for (var location in locations) {
    		positions.push(locations[location]);
        }
        createPolyline(positions);
	}

	function createMap(position, zoom) {
		console.log("[App] createMap(position, zoom)");
	    map = new google.maps.Map(document.getElementById('map'), {
	        center: position,
	        zoom: zoom
	    });
	}

	function createMarker(position, title, draggable, delay) {
		console.log("[App] createMarker(position, title)");
		var config = {
		    position: position,
		    draggable: draggable,
		    animation: google.maps.Animation.DROP,
		    icon: 'ic_grade_black_18px.svg',
		    title: title
		};
		var marker = new google.maps.Marker(config);
		marker.addListener('click', function() {
			toggleBounce(marker);
		})

		setTimeout(function() {
			marker.setMap(map);
		}, delay);

		return marker;
	}

	function createPolyline(positions) {
		console.log("[App] createMarker(position, title)");
		var polyline = new google.maps.Polyline({
			path: positions,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
		});
		polyline.setMap(map);
	}

	function deleteMarkers() {
		markers.forEach(function(marker) {
			marker.setMap(null);
		});
		markers = [];
	}

	function printPositions() {
		markers.forEach(function(marker) {
			console.log(marker.title + ": " + marker.position.H + " lat, " + marker.position.L + " lng");
		});
	}

	function toggleBounce(marker) {
		if (marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(function() {
				toggleBounce(marker);
			}, 500);
		}
	}

	window.App = {
		initMap: initMap,
		deleteMarkers: deleteMarkers,
		printPositions: printPositions	
	};
})(window);