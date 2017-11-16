import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Eventos',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <Text style={styles.optionsTitleText}>
          Eventos cadastrados
        </Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePress}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('C:/GitHub/Unidade4/mapa-evento-v2/assets/images/robot-dev.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 20, height: 20, marginTop: 1 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Evento 1
              </Text>
            </View>
          </View>
        </Touchable>

      </View>
      </ScrollView>
    );
  }
  
  _handlePress = () => {
    WebBrowser.openBrowserAsync('http://docs.expo.io');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
