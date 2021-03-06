import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from 'react-native-vector-icons';
import Antdesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({ setCity }) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyDOfTADCDjRkScmzikRuSIMcbvPuihDne0" }}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          setCity(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10
          }
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={{
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 50,
            padding: 8
          }}>
            <Antdesign name="clockcircle" size={11} />
            <Text style={{ marginLeft: 5 }}>
              Search
            </Text>
          </View>
        )}
      />
    </View>
  )
}

export default SearchBar;