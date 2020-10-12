import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { LatLngTuple } from 'leaflet';
import { Map, TileLayer } from 'react-leaflet'

// Images
import mapMarker from '../images/map-marker.svg';

// Styles
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    const position: LatLngTuple = [-23.4690849, -46.5410953];

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt=""/>

                    <h2>Escolha um orfanato no mapa.</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Guarulhos</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={position}
                zoom={17}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                {/* <TileLayer 
                    url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                /> */}
            </Map>

            <Link to="/" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;