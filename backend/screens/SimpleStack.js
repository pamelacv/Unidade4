import React from 'react';
import { Button, ScrollView, StyleSheet, Image, Text, TextInput, View } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';

const MyNavScreen = ({ navigation, banner }) => (
  <SafeAreaView>
    <Button
      onPress={() => navigation.navigate('Eventos')}
      title="Evento 1"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </SafeAreaView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  title: 'Eventos',
};

const MyEventsScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
        <View>
        <Text style={styles.optionsTitleText}>
          Eventos
        </Text>
        <TextInput
            style={styles.formInput}/>
      </View>
      </ScrollView>
);
MyEventsScreen.navigationOptions = {
  title: 'Evento',
};

MyEventsScreen.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  
};

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Eventos: {
    screen: MyEventsScreen,
  },
});

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

export default SimpleStack;