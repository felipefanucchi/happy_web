import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { LatLngTuple } from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// Images
import mapMarker from "../images/map-marker.svg";

// Styles
import "../styles/pages/orphanages-map.css";
import { happyMapIcon } from "../utils/mapIcon";
import api from "../services/api";
import OrphanageType from "../interfaces/Orphanage";

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<OrphanageType[]>([]);
  const [currentLocation, setCurrentLocation] = useState<LatLngTuple>([0, 0]);

  useEffect(() => {
    loadOrphanages();
    getCurrentLocation();
  }, []);

  function loadOrphanages() {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      alert(
        "your browser does not support geolocation, please, use Chrome or some modern browser."
      );
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      (error) => {
        alert("Erro = " + error.code + " - " + error.message);
      }
    );
  }

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="" />

          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Guarulhos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={currentLocation}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage: OrphanageType) => (
          <Marker
            key={orphanage.id}
            position={[orphanage.latitude, orphanage.longitude]}
            icon={happyMapIcon}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orfanatos/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF"></FiArrowRight>
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orfanatos/criar" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
