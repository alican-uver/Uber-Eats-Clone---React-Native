import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import HeaderTabs from '../src/components/HeaderTabs';
import SearchBar from '../src/components/SearchBar';
import Categories from '../src/components/Categories';
import RestaurantItem from '../src/components/RestaurantItem';
// import { localRestaurants } from '../mocks/restaurant-data';

const YELP_API_KEY = 'Mjif7LweEHtkBS11CHHJ1ckTBBhJ7Bti704tfwrgtT3gczMILe_UlvHsL7KfwqhFrLy2GoS5oHmK64kkkVdMqhjlFBhkgrlLaPqMMpR0iEkZy--Lln9w0ChLiJ5ZYXYx';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', height: '100%' }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
