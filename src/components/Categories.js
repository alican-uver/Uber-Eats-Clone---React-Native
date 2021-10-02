import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import items from '../../mocks/items';

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
      {items.map((item, index) => {
        return (
          <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
            <Image source={item.image} style={{ width: 50, height: 40, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 13, fontWeight: '700' }}>{item.text}</Text>
          </View>
        )
      })}
    </ScrollView>
  )
};

export default Categories;
