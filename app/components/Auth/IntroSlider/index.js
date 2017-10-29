import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Button } from 'react-native-elements';
// import styles from './styles.css';
import Swiper from 'react-native-swiper';

export default class Sliders extends React.Component {

  render() {
    return (
      <View>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slides}>
            <Image
              source={require('./images/app1.png')}
            />          
            <Text style={styles.text}>Invest</Text>
            <Text style={styles.paragraph}>Choose amongst many cryptocurrencies to invest in</Text>
          </View>
          <View style={styles.slides}>
            <Image
              source={require('./images/app2.png')}
            />                  
            <Text style={styles.text}>Grow</Text>
            <Text style={styles.paragraph}>You can watch your investments grow</Text>
          </View>
          <View style={styles.slides}>
            <Image
              source={require('./images/app3.png')}
            />        
            <Text style={styles.text}>Milestones</Text>
            <Text style={styles.paragraph}>Complete milestones as you invest and learn more about the world of blockchains</Text>
          </View>
        </Swiper>
        <Button
          raised
          buttonStyle={styles.createAccount}
          textStyle={{textAlign: 'center', color: '#27C435'}}
          title={`Create Account`}
        />

        <Button
          raised
          buttonStyle={styles.logIn}
          textStyle={{textAlign: 'center', color: '#A6A6A7'}}
          title={`Log in`}
        />        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '50%',
  },
  slides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E0050',
    width: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraph: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  createAccount: {
    backgroundColor: '#fff', 
    borderRadius: 50, 
    borderWidth: 1, 
    margin: 10,
    borderColor: '#f2f2f2',
    alignSelf: 'center',
    width: 200,
  },
  logIn: {
    backgroundColor: '#fff',
    borderRadius: 50, 
    margin: 10,
    borderColor: '#fff',
    alignSelf: 'center',
    width: 200
  }

});
