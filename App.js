import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper';

import IntroSlider from './app/components/Auth/IntroSlider';

export default class App extends React.Component {
  render() {
    return (

    <View style={style.container}>
      <IntroSlider />
    </View>      

    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
