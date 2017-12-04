import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Image, Text, TextInput, View } from 'react-native';
import { WebBrowser } from 'expo';
import Touchable from 'react-native-platform-touchable';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <Text style={styles.optionsTitleText}>
          Perfil 
        </Text>
        <View style={styles.structInput}>
          <Text style={styles.optionsTitleText}>
             Nome: 
          </Text>
          <TextInput
            style={styles.formInput}
            editable={false}/>
        </View>
        <Text style={styles.optionsTitleText}>
         Interesses
        </Text>
        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePress}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Interesse 1
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
  structInput: {
    marginBottom: 15,
  },
  formInput: {
    flex: 1,
    height: 26,
    fontSize: 13,
    borderWidth: 1,
    borderColor: "#555555",
},
});
