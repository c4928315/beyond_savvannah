import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './serviceLocationsMap.css'; // Create and import a CSS file for custom styles

const customPinIcon = new Icon({
  iconUrl: 'https://i.postimg.cc/66cmBFm2/placeholder-2.png',
  iconSize: [20, 20],
});

const ServiceLocationsMap = () => {
  const locations = [
    { lat: 18.1096, lng: -77.2975, name: 'Jamaica' },
    { lat: 31.0461, lng: 34.8516, name: 'Israel' },
    { lat: 26.8206, lng: 30.8025, name: 'Egypt' },
    { lat: 37.0902, lng: -95.7129, name: 'USA' },
    { lat: 55.3781, lng: -3.4360, name: 'UK' },
    { lat: 9.0820, lng: 8.6753, name: 'Nigeria' },
    { lat: -19.0154, lng: 29.1549, name: 'Zimbabwe' },
    { lat: -13.1339, lng: 27.8493, name: 'Zambia' },
    { lat: -30.5595, lng: 22.9375, name: 'South Africa' },
    { lat: -1.286389, lng: 36.817223, name: 'Kenya' },
    { lat: -6.792354, lng: 39.208328, name: 'Tanzania' },
    { lat: 0.313611, lng: 32.581111, name: 'Uganda' },
    { lat: -1.970579, lng: 30.104429, name: 'Rwanda' },
    { lat: 17.5707, lng: -3.9962, name: 'Mali' },
    { lat: 23.4241, lng: 53.8478, name: 'UAE' },
    { lat: 56.1304, lng: -106.3468, name: 'Canada' },
    { lat: -25.2744, lng: 133.7751, name: 'Australia' },
    { lat: 15.8700, lng: 100.9925, name: 'Thailand' },
    { lat: 21.4735, lng: 55.9754, name: 'Oman' },
    { lat: 60.1282, lng: 18.6435, name: 'Sweden' },
    { lat: 52.1326, lng: 5.2913, name: 'Netherlands' },
    { lat: 51.1657, lng: 10.4515, name: 'Germany' }
  ];
  

  // Jamaica, Israel, Egypt, USA, UK, Nigeria, Zimbabwe, Zambia, South Arica, Kenya, Tanzania, Uganda, Rwanda, Mali, UAE, Canada, Australia, Thailand, Oman, Sweden, Netherlands, Germany

  return (
    <div className="mapGradient">
      <h1 className='mapMainHeader'>We are Global!</h1>
      <div className="topH1 topH1ServedAndroid">
          <div className="topH1Innder">
            <p>We are Global</p>
            <h1>Serving Across Regions</h1>
          </div>
        </div>
      <MapContainer center={[0, 20]} zoom={2} minZoom={2} className="mapContainer">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations?.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]} icon={customPinIcon}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ServiceLocationsMap;
