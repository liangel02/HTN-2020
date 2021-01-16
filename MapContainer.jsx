import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 43.472312,
  lng: -80.544851
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBHE_qN-pHXH_25VNEAjS4M-UGO0nyt5Pc">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* child components go here - margins, markers, frames */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)

// defaults
export const MapContainer = () => {

  const locations = [
    {
      name: "Brunswick Zone Frederick Lanes",
      location: {
        lat: 43.45598991807808,
        lng: -80.4727169719458
      },
    },
    {
      name: "Crossroads Board Game Café",
      location: {
        lat: 43.47722111802476,
        lng: -80.52481826664146
      },
    },
    {
      name: "Huether Hotel",
      location: {
        lat: 43.46717794563759,
        lng:  -80.52307294455302
      },
    },
  ];

  return (
  ...
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <p> Most Popular </p>
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </GoogleMap>
  )
}

// info-view window on click
export const MapContainer = () => {
  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
    setSelected(item);
  }
  ...
    return (
    ...
         {
            locations.map(item => {
              return (
              <Marker key={item.name}
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location &&
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
    )
}
