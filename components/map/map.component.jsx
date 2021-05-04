import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

import mapStyles from "./map-styles";

{
  /*const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAC-nVYI8BUvxtrCs1fJgh8VKvKDISKR7w&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <section
        id="location"
        className="contact pd-0"
        style={{ height: `100vh`, width: "100%" }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const [coordinates, setCoordinates] = useState({
    lat: 50.435,
    lng: 30.4315,
  });

  const [locationUrl, setLocationUrl] = useState(
    "https://goo.gl/maps/kkDSkqLc4akH9eQ38"
  );

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={coordinates}
      defaultOptions={{
        disableDefaultUI: true,
        scrollwheel: false,
        gestureHandling: "cooperative",
        styles: mapStyles,
      }}
    >
      <Marker position={coordinates} onClick={() => window.open(locationUrl)} />
    </GoogleMap>
  );
});*/
}

const Map = () => {
  const googlemap = useRef(null);

  const [coordinates, setCoordinates] = useState({
    lat: 50.435,
    lng: 30.4315,
  });

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAC-nVYI8BUvxtrCs1fJgh8VKvKDISKR7w",
      version: "weekly",
    });

    let map;

    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: coordinates,
        zoom: 15,
        disableDefaultUI: true,
        scrollwheel: false,
        gestureHandling: "cooperative",
        styles: mapStyles,
      });

      const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        url: "https://goo.gl/maps/kkDSkqLc4akH9eQ38",
      });

      google.maps.event.addListener(marker, "click", function () {
        // window.location.href = this.url;
        window.open(this.url, "_blank");
      });
    });
  });

  return (
    <section
      id="location"
      className="contact pd-0"
      style={{ height: `100vh`, width: "100%" }}
    >
      <div id="map" ref={googlemap} />
    </section>
  );
};

export default Map;
