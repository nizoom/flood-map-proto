import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { idsFinder } from "./ids-finder";

const MapSection = () => {
  const token = process.env.REACT_APP_MP_TOKEN;
  const [geojsonData, setGeojsonData] = useState(null);
  const mapRef = useRef(null); // To store the map instance
  const mapContainerRef = useRef(null);
  const isMapInitialized = useRef(false); // To prevent map re-initialization

  useEffect(() => {
    if (!token) {
      console.error("Missing Mapbox token");
      return;
    }

    // Fetch geojson data
    fetch("/data/counties.geojson")
      .then((response) => response.json())
      .then((data) => {
        setGeojsonData(data); // Update the state with the geojson data
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, [token]); // This effect runs once when the component mounts and the token is available

  useEffect(() => {
    // Proceed only if geojson data is available and map isn't already initialized
    if (geojsonData && !isMapInitialized.current) {
      mapboxgl.accessToken = token;
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: [-97.7237, 40.9947], // Center of the U.S.
        zoom: 3.5,
      });

      mapRef.current.on("load", () => {
        // Add county boundaries as a GeoJSON source
        mapRef.current.addSource("counties", {
          type: "geojson",
          data: geojsonData,
        });

        // Call idsFinder after geojson data is available
        const selectedIds = idsFinder(geojsonData);

        // Add layer with county flood risk classification
        mapRef.current.addLayer({
          id: "county-flood-overlay",
          type: "fill",
          source: "counties",
          paint: {
            "fill-color": [
              "match",
              ["get", "GEOID"],
              ...selectedIds.flatMap((id, index) => [
                id,
                ["#e3aa91", "#db7549", "#FE7F2D"][index % 3], // Cycle colors for selected IDs
              ]),
              "#233D4D", // Default color for unselected counties
            ],
            "fill-opacity": 0.5,
            "fill-outline-color": "#000",
          },
        });
      });

      isMapInitialized.current = true; // Mark map as initialized to prevent reinitialization
    }

    return () => {
      mapRef.current?.remove(); // Cleanup map when component unmounts
    };
  }, [geojsonData, token]); // Dependency array ensures map is initialized only once

  return (
    <>
      <div id="map-container" ref={mapContainerRef} />
    </>
  );
};

export default MapSection;
