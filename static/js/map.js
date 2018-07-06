/**
 * 
 * This is _not_ a secure implementation, and I know it.
 * Please donate to the Garden Tour if you're going to use this data.
 * Thanks!
 * 
 */
var passMatch = "b3JnYW5pYw==";

// Everything in initMap happens after the Google API connection succeeds, and gets accesss to google.maps calls
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 47.5728038, lng: -122.6124459},
    styles: mapStyles
  });

  var checkinLocation = {
    title: 'Check In',
    content: '<h4>Check at the Discovery Fellowship.</h4> \
              <p>1305 Ironsides Ave</p> \
              <a href="/gardentour/about/">More Info</a>',
    position: {lat: 47.5728038, lng: -122.6124459},
    icon: '../img/star.png',
    zIndex: 1000,
  };

  // Add the checkin location to the map
  generateMarker(checkinLocation);

  function generateMarker (location) {
    var marker = new google.maps.Marker({
      map: map,
      ...location,
    });

    var infoWindow = new google.maps.InfoWindow({
      content: location.content,
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  }
  
  
  // Prep the password listener
  var input = document.querySelector('input[name="map-password"]');
  if (input) {
    input.oninput=passwordEventHandler;
  }

  function passwordEventHandler(event) {
    // console.log(event.target.value);

    // Check if the password has been entered
    if (btoa(event.target.value) === passMatch) {
      // Password match!
      event.target.value = "";
      event.target.disabled = true;
      // Show the garden icons
      for (var i = 0; i < gardenLocations.length; i++) {
        generateMarker(gardenLocations[i]);
      }
    }
  }

  var gardenLocations = [
    {
      content: '<h3>Discovery Fellowship</h3> \
                <p>1305 Ironsides Ave.</p> \
                <a href="/gardentour/gardens/a">More Info</a>',
      position: {lat: 47.5723906, lng: -122.6116917},
      label: {text: 'A', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Chelsea & Alex</h3> \
                <p>1323 Hayward Ave.</p> \
                <a href="/gardentour/gardens/b">More Info</a>',
      position: {lat: 47.5729104, lng: -122.61276420000002},
      label: {text: 'B', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Ellen & Ron</h3> \
                <p>1317 Hayward Ave.</p> \
                <a href="/gardentour/gardens/c">More Info</a>',
      position: {lat: 47.5726567, lng: -122.61276700000002},
      label: {text: 'C', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Tanya & Dave</h3> \
                <p>1133 Wheaton Way</p> \
                <a href="/gardentour/gardens/d">More Info</a>',
      position: {lat: 47.5710536, lng: -122.61696699999999},
      label: {text: 'D', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Jori</h3> \
                <p> 1907 E 18th Street</p> \
                <a href="/gardentour/gardens/e">More Info</a>',
      position: {lat: 47.5766484, lng: -122.61789220000003},
      label: {text: 'E', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Jeff</h3> \
                <p> 1728 Perry Ave.</p> \
                <a href="/gardentour/gardens/f">More Info</a>',
      position: {lat: 47.575786, lng: -122.61377950000002},
      label: {text: 'F', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 3,
    },
    {
      content: '<h3>Carolee</h3> \
                <p> 1708 Perry Ave.</p> \
                <a href="/gardentour/gardens/g">More Info</a>',
      position: {lat: 47.5755815, lng: -122.61378379999996},
      label: {text: 'G', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Paula & Arnie</h3> \
                <p> 2103  Perry Ave.</p> \
                <a href="/gardentour/gardens/h">More Info</a>',
      position: {lat: 47.5790037, lng:  -122.61372419999998},
      label: {text: 'H', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Wendie</h3> \
                <p> 2601 E. 22nd St.</p> \
                <a href="/gardentour/gardens/i">More Info</a>',
      position: {lat: 47.5796952, lng:  -122.60982289999998},
      label: {text: 'I', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Kevin & Maria</h3> \
                <p> 2005 Nipsic Ave.</p> \
                <a href="/gardentour/gardens/j">More Info</a>',
      position: {lat: 47.5786411, lng: -122.61106050000001},
      label: {text: 'J', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Julie & Greg </h3> \
                <p> 2619 Terrace St.</p> \
                <a href="/gardentour/gardens/k">More Info</a>',
      position: {lat: 47.5769871, lng: -122.60996820000003},
      label: {text: 'K', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Tami </h3> \
                <p> 2817 Alder St.</p> \
                <a href="/gardentour/gardens/l">More Info</a>',
      position: {lat: 47.5766862, lng: -122.60714989999997},
      label: {text: 'L', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Deborah & Eugene </h3> \
                <p> 2706 E. 16th St.</p> \
                <a href="/gardentour/gardens/m">More Info</a>',
      position: {lat: 47.5744175, lng: -122.60985260000001},
      label: {text: 'M', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
    {
      content: '<h3>Stephanie & TJ </h3> \
                <p> 2707 E 16th St.</p> \
                <a href="/gardentour/gardens/n">More Info</a>',
      position: {lat: 47.573811, lng: -122.60911529999998},
      label: {text: 'N', color: "white"},
      icon: {
        url: '../img/plant.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 9),
      },
      zIndex: 1,
    },
  ];
}

var mapStyles = [
  {
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#ebe3cd'
      }
    ]
  },
  {
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#523735'
      }
    ]
  },
  {
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#f5f1e6'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#c9b2a6'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#dcd2be'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#ae9e90'
      }
    ]
  },
  {
    'featureType': 'landscape.natural',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dfd2ae'
      }
    ]
  },
  {
    'featureType': 'poi',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dfd2ae'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'labels.text',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#93817c'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#a5b076'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#447530'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#f5f1e6'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#fdfcf8'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#f8c967'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#e9bc62'
      }
    ]
  },
  {
    'featureType': 'road.highway.controlled_access',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#e98d58'
      }
    ]
  },
  {
    'featureType': 'road.highway.controlled_access',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#db8555'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#806b63'
      }
    ]
  },
  {
    'featureType': 'transit',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dfd2ae'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#8f7d77'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#ebe3cd'
      }
    ]
  },
  {
    'featureType': 'transit.station',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dfd2ae'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#b9d3c2'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#92998d'
      }
    ]
  }
];