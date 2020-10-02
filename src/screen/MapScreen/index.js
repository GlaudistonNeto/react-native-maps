import React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Permissions } from "expo-permissions";
import { Component } from "react";

export default class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      latitudeDelta: 0.04,
      longitudeDelta: 0.09,
    },
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" />
          </View>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.theView}>
          <Text style={styles.text}>THE MAP</Text>
          <MapView
            style={styles.mapStyle}
            region={this.state.region}
            onRegionChangeComplete={this.onRegionChangeComplete}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  theView: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  text: {
    fontSize: 24,
    color: "red",
  },
});
