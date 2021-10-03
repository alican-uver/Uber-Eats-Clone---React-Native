import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import items from '../../mocks/items';

const Categories = () => {
  return (
    <View style={{ backgroundColor: '#fff', marginTop: 10, padding: 15 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return (
            <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
              <Image source={item.image} style={{ width: 50, height: 40, resizeMode: 'contain' }} />
              <Text style={{ fontSize: 13, fontWeight: '700' }}>{item.text}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
};

export default Categories;
