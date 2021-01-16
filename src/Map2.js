import React from "react";
import { GoogleMap, MarkerClusterer } from "@react-google-maps/api";
import Pin from "./Pin";

const Map2 = ({ children }) => {
  const listings = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
   
  ];
  let testArray = [];
  for (let i = 0; i < listings.length; i++) {
    let location = listings[i];
    testArray.push(
      <Pin position={location} id={i} key={i} clusterer={listings} />
    );
  }

  const demoMapStyles = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#e9e9e9"
        },
        {
          lightness: 17
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 17
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 29
        },
        {
          weight: 0.2
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 18
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5"
        },
        {
          lightness: 21
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede"
        },
        {
          lightness: 21
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#ffffff"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36
        },
        {
          color: "#333333"
        },
        {
          lightness: 40
        }
      ]
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2"
        },
        {
          lightness: 19
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe"
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    }
  ];

  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={{
        height: "400px",
        width: "800px"
      }}
      zoom={15}
      center={{ lat: -42.735258, lng: 147.438 }}
      options={{ styles: demoMapStyles }}
    >
      <MarkerClusterer>
        {/* {listings} */}
        {clusterer =>
          [
            { lat: 43.46717794563759, lng: -80.52307294455302 },
            { lat: 43.47722111802476, lng: -80.52481826664146 },
            { lat: -33.727111, lng: -80.4727169719458}
            
          ].map((location, i) => (
            <Pin key={i} position={location} clusterer={clusterer} />
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  );
};

Map.defaultProps = {
  mapContainerStyle: {
    height: "400px",
    width: "800px"
  },
  children: null,
  onLoad: () => {},
  onDragEndFunc: () => {},
  onDragStartFunc: () => {},
  onZoomChangeFunc: () => {}
};

export default Map2;