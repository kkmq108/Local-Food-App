import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.Logo_container}>
              <Text style={styles.Logo}>Local Food</Text>
          </View>

          <View style={styles.Carousel}>
              <Text>Img_Slider</Text>
          </View>

          <View style={styles.content_container}>
              <View style={styles.recipe_ranking}>
                <Text>recipe_ranking</Text>
              </View>

              <View style={styles.food_ranking}>
                <Text>food_ranking</Text>
              </View>
          </View>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  Logo_container: {
    flex: 1,
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor : '#403F3D',
  },

  Logo: {
    color: 'white',
    paddingTop: 10,
    fontSize: 45,
  },

  Carousel:{
    flex: 3,
    backgroundColor: '#C8C8C8',
    margin:10,
    alignItems : 'center',
    justifyContent: 'center',
  },

  content_container: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    margin:10,
  },

  recipe_ranking: {
    flex:1,
    alignItems : 'center',
    backgroundColor: '#C8C8C8',
    marginRight:5,
  },

  food_ranking: {
    flex:1,
    alignItems : 'center',
    backgroundColor: '#C8C8C8',
    marginLeft:5,
  },
});

export default HomeScreen;