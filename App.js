import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/Goinfo';
import GoNews from './src/components/molecules/GoNews';
import SearchFeature from './src/components/molecules/SearchFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import NavBar from './src/containers/organisms/NavBar';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';


export default class App extends Component {
  render() {
    return (   
      <View style={{ flex: 1 }} >
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          <SearchFeature/>
          <HomeGoPay/>
          <HomeMainFeature/>
          <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }}></View>
          <GoNews/>
          <GoInfo/>
          <GoBanner/>
          <ScrollableProducts/>
        </ScrollView>
        <NavBar/>
      </View>
    );
  }
}




