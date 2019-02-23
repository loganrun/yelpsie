import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import Map from "./components/Maps";
import { MapView } from "expo";
import { createBottomTabNavigator } from 'react-navigation'
import Explore from './screens/Explore';
import Places from './screens/Places';
import Favorites from './screens/Favorites';
import { Ionicons } from '@expo/vector-icons';


// const region = {
//   latitude: 34.058803,
//   longitude: -118.337986,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// };

class App extends React.Component {
  state = {
    region: null,
    coffeeShops: []
  };
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        < Ionicons name="md-search" color={tintColor} size={24} />
      )
    }

  },
  Places: {
    screen: Places,
    navigationOptions: {
      tabBarLabel: 'PLACES',
      tabBarIcon: ({ tintColor }) => (
        < Ionicons name="md-car" color={tintColor} size={24} />
      )
    }

  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: 'FAVORITES',
      tabBarIcon: ({ tintColor }) => (
        < Ionicons name="md-heart" color={tintColor} size={24} />
      )

    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: 'flex-end'

  },
  box1: {
    height: '80%',
    width: '100%',
    backgroundColor: 'blue'
  },
  box2: {
    flex: 1,
    backgroundColor: 'green'
  }

});

//places={this.state.coffeeShops}
{/* <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 34.058803,
            longitude: -118.337986,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 34.064029, longitude: -118.398768 }}
            title={"marker.title"}
            description={"desss"}
          />
        </MapView>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View> */}
