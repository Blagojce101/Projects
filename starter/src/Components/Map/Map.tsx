import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "./constants";

const locationArr = [
  {
    lat: 42.002224,
    lng: 21.422008,
  },
  {
    lat: 42.004615,
    lng: 21.413618,
  },
  {
    lat: 41.999777,
    lng: 21.413014,
  },
];

export default function Map() {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e: any) {
        setPosition(e.latlng);

        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;

        const circle = L.circle(e.latlng, 100);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    return position === null ? null : (
      //@ts-ignore
      <Marker position={position} icon={icon}>
        <Popup>
          You are here. <br />
          Map bbox: <br />
          <b>Southwest lng</b>: {bbox[0]} <br />
          <b>Southwest lat</b>: {bbox[1]} <br />
          <b>Northeast lng</b>: {bbox[2]} <br />
          <b>Northeast lat</b>: {bbox[3]}
        </Popup>
      </Marker>
    );
  }

  // function FixedLocationMarker(latlng: any) {
  //   const [position, setPosition] = useState(null);
  //   const [bbox, setBbox] = useState([]);

  //   const map = useMap();

  //   useEffect(() => {
  //     map.locate().on("locationfound", function (e: any) {
  //       setPosition(latlng);
  //       setBbox(e.bounds.toBBoxString().split(","));
  //     });
  //   }, [map]);

  //   return position === null ? null : (
  //     //@ts-ignore
  //     <Marker position={position} icon={icon}>
  //       <Popup>
  //         You are here. <br />
  //         Map bbox: <br />
  //         <b>Southwest lng</b>: {bbox[0]} <br />
  //         <b>Southwest lat</b>: {bbox[1]} <br />
  //         <b>Northeast lng</b>: {bbox[2]} <br />
  //         <b>Northeast lat</b>: {bbox[3]}
  //       </Popup>
  //     </Marker>
  //   );
  // }

  // const markers = locationArr.map((latlng) => (
  //   <FixedLocationMarker latlng={latlng} />
  // ));

  return (
    <MapContainer
      //@ts-ignore
      center={[42.0022636, 21.4370033]}
      zoom={14}
      scrollWheelZoom={false}
      className="map"
      style={{ height: "100vh" }}>
      <TileLayer
        //@ts-ignore
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      (markers)
      {locationArr.length > 1
        ? locationArr.map((marker, index) => {
            return (
              <Marker
                key={`${marker.lat}-${index}`}
                position={[marker.lat, marker.lng]}
                //@ts-ignore

                icon={icon}>
                <Popup>
                  You are here. <br />
                  Map bbox: <br />
                  <b>Southwest lng</b>: {marker.lat} <br />
                  <b>Southwest lat</b>: {marker.lng} <br />
                  <b>Northeast lng</b>: {marker.lat} <br />
                  <b>Northeast lat</b>: {marker.lng}
                </Popup>
              </Marker>
            );
          })
        : null}
    </MapContainer>
  );
}
