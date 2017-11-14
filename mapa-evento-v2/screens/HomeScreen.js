import React from 'react';
import { WebBrowser } from 'expo';
import { MapView } from 'expo';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class HomeScreen extends React.Component {

  //Referencia criacao botao do mapa:https://facebook.github.io/react-native/releases/0.31/docs/mapview.html
  //Referencia criacao mapa: https://docs.expo.io/versions/latest/sdk/map-view.html

  static navigationOptions = {
    title: 'Home',
  };

  constructor() {
    super();

    //Define o tipo de mapa (prop MapType do MapView) como satelite de inicio
    this.state = {
      propriedadeMapType: "satellite"
    }
  }

  //Define o tipo de mapa (prop MapType do MapView) ao clicar no botao
  editMapType() {
    if (this.state.propriedadeMapType == "satellite") {
      this.setState({
        propriedadeMapType: "standard",
      });
    }
    else {
      this.setState({
        propriedadeMapType: "satellite",
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView ref={ref => { this.map = ref; }}
          style={styles.map}
          showsMyLocationButton={true}
          followUserLocation={true}
          loadingEnabled={true}
          showsUserLocation={true}
          mapType={this.state.propriedadeMapType}>
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.editMapType()}
            style={[styles.bubble, styles.button]}>
            <Text>Trocar tipo mapa</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    marginTop: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

