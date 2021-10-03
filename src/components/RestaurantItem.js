import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{ uri: image }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "700" }}>{name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30-45 * min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text>{rating}</Text>
    </View>
  </View>
);

const RestaurantItem = ({ restaurantData }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: 'white'
          }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default RestaurantItem;
