import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import HeaderTabs from '../src/components/HeaderTabs';
import SearchBar from '../src/components/SearchBar';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', height: '100%' }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  )
};

export default Home;
