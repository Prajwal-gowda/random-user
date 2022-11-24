import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const Map = ({ route }) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    if (route.params) {
      setRegion((prevRegion) => ({
        ...prevRegion,
        latitude: parseFloat(route.params.latitude),
        longitude: parseFloat(route.params.longitude),
      }));
    }
  }, [route.params]);

  return (
    <MapView region={region} style={styles.mapView} zoomControlEnabled>
      {route.params && (
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="Picked location"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
